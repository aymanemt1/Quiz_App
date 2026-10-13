import React, {
  useState,
  useEffect,
  useMemo,
  useRef,
  useContext
} from "react";

import "./App.css"
import Results from "../Resultat/Results";
import Question from '../Questions/Question'
import QuestionCorrection from "../QuestionCorrection/QuestionCorrection"
import { Indicator } from "../Indicator/Indicator";
import { QuizStart } from "../QuizStart/QuizStart";
import { Interview } from "../Interview/Interview";
import { Progress } from "../Progress/Progress";
import { Revision } from "../Revision/Revision";
import { Blitz } from "../Blitz/Blitz";
import { ShareButton } from "../Share/ShareCard";
import { QuestionTimer } from "../QuestionTimer/QuestionTimer";
import { Profile } from "../Profile/Profile";
import { getTopicQuestions, getExamQuestions, TOPIC_KEYS } from "../Data/QuestionAllData";
import { getCodeChallenges } from "../Data/CodeChallenges";
import { getDailyQuestions } from "../Data/daily";
import { loadMistakes, addMistakes, removeMistakes, saveHistoryEntry, todayStr, recordDailyCompletion } from "../Data/storage";
import Timer from "../Timer/Timer";
import { Topbar } from "../Topbar/Topbar";
import { LangueContext } from "../../Context/LangueContext";


function useCounter(initialState) {

  const [value, setValue] = useState(initialState);
  const reset = () => setValue(0);
  const add = () => setValue((value) => (value += 1));

  return { value, add, reset };
}

export default function App() {

  const {setGameFinished,gameFinished,setshowCorrectAnswer,setIsremoved,langue,
    langueTrans,setGameStarted,gameStarted,mode,level,examTopics,examCount,
    timed,timePerQuestion,codeTopic,setMenuOpen,notesOpen,reviewTopic} =useContext(LangueContext)

  // Build the active question set for the current mode (ids normalized to array index)
  const questionsOntranslate = useMemo(() => {
    let set = [];
    if (mode === 'exam') {
      set = getExamQuestions(langueTrans, examTopics, level, examCount);
    } else if (mode === 'code') {
      set = getCodeChallenges(langueTrans, codeTopic, level);
    } else if (mode === 'quiz') {
      const topic = TOPIC_KEYS.includes(langue) ? langue : 'React';
      set = getTopicQuestions(topic, langueTrans, level).map((q, i) => ({ ...q, id: i, selection: null, topic }));
    } else if (mode === 'daily') {
      set = getDailyQuestions(langueTrans, todayStr());
    } else if (mode === 'review') {
      const mistakes = loadMistakes().filter(
        (m) => m.lang === langueTrans && (reviewTopic === 'All' || m.topic === reviewTopic)
      );
      set = mistakes.map((m, i) => ({
        id: i,
        mistakeId: m.id,
        topic: m.topic,
        level: m.level,
        text: m.text,
        code: m.code || undefined,
        answers: m.answers,
        correct: m.correct,
        selection: null,
      }));
    }
    return set;
  }, [mode, langue, langueTrans, level, examTopics, examCount, codeTopic, reviewTopic]);

  const totalQuestion = questionsOntranslate.length - 1;

  const question = useCounter(0);
  const correct = useCounter(0);
  const wrong = useCounter(0);
  const empty = useCounter(0);

  // Bumped on every new run so timers / question state reset cleanly
  const [runKey, setRunKey] = useState(0);

  // Guard so a question timeout fires only once per question
  const timedOutRef = useRef(new Set());

  // Reset progress whenever the question set changes (mode / topic / language)
  useEffect(() => {
    question.reset();
    correct.reset();
    wrong.reset();
    empty.reset();
    timedOutRef.current.clear();
    setGameFinished(false);
    setshowCorrectAnswer(false);
    setIsremoved(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [questionsOntranslate]);

  const handleNewQuestionClick = (selectedValue, currQuestion) => {

      if (selectedValue === currQuestion.correct) {
        correct.add();

      } else if (
        selectedValue !== null &&
        selectedValue !== currQuestion.correct
      ) {
        wrong.add();
      } else {
        empty.add();

      }
      questionsOntranslate[currQuestion.id].selection = selectedValue;
      question.add();

  };

  const resetSelection = () => {
    questionsOntranslate.map((q) => (q.selection = null));
  };

  const handleBackToMenu = () => {
    setGameFinished(false);
    setGameStarted(false);
    resetSelection();
    question.reset();
    correct.reset();
    wrong.reset();
    empty.reset();
    timedOutRef.current.clear();
    setRunKey((k) => k + 1);
    setMenuOpen(true);
  };

  const handleTryagain = () => {
    setGameFinished(false);
    setGameStarted(true);
    resetSelection();
    question.reset();
    correct.reset();
    wrong.reset();
    empty.reset();
    timedOutRef.current.clear();
    setRunKey((k) => k + 1);
  };

  // Timed mode: when the countdown hits zero, mark the question
  // unanswered and auto-advance
  const handleTimeout = () => {
    const q = questionsOntranslate[question.value];
    if (!q || timedOutRef.current.has(q.id)) return;
    timedOutRef.current.add(q.id);
    setIsremoved(false);
    setshowCorrectAnswer(false);
    handleNewQuestionClick(null, q);
  };

  useEffect(() => {
    if (gameStarted) {
      document.body.classList.add("game-started");
      setRunKey((k) => k + 1);
    } else {
      document.body.classList.remove("game-started");
    }
  }, [gameStarted]);

  // Persist score history + mistakes once per finished run
  const savedRef = useRef(false);
  useEffect(() => {
    if (!gameStarted) savedRef.current = false;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameStarted]);

  useEffect(() => {
    if (!gameStarted || savedRef.current || questionsOntranslate.length === 0) return;
    if (question.value <= totalQuestion) return;
    savedRef.current = true;
    const total = questionsOntranslate.length;
    const topics = mode === 'quiz'
      ? [langue]
      : mode === 'code'
        ? [...new Set(questionsOntranslate.map((q) => q.topic).filter(Boolean))]
        : mode === 'exam'
          ? [...examTopics]
          : mode === 'review'
            ? ['Review']
            : mode === 'daily'
              ? ['Daily']
              : [mode];
    saveHistoryEntry({
      date: new Date().toISOString(),
      mode,
      topics,
      level,
      correct: correct.value,
      total,
    });
    if (mode === 'daily') recordDailyCompletion(correct.value, total);
    if (mode === 'quiz' || mode === 'exam' || mode === 'daily' || mode === 'code') {
      const missed = questionsOntranslate
        .filter((q) => q.selection !== null && q.selection !== q.correct)
        .map((q) => ({
          id: `${q.topic || langue}|${langueTrans}|${q.text}`,
          topic: q.topic || langue,
          lang: langueTrans,
          level: q.level || 1,
          text: q.text,
          code: q.code || undefined,
          answers: q.answers,
          correct: q.correct,
        }));
      if (missed.length) addMistakes(missed);
    }
    if (mode === 'review') {
      const fixed = questionsOntranslate
        .filter((q) => q.selection === q.correct)
        .map((q) => q.mistakeId)
        .filter(Boolean);
      if (fixed.length) removeMistakes(fixed);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameStarted, question.value, totalQuestion]);


  const ShowCorrectAnswer = ()=>{
  setshowCorrectAnswer(true)

  }

  const RemoveTwoAnswers = () => {
    setIsremoved(true)

  }

  const showInterview = mode === 'interview' && gameStarted;
  const showBlitz = mode === 'blitz' && gameStarted;
  const showProgress = mode === 'progress';
  const showNotes = mode === 'notes' && notesOpen;
  const showProfile = mode === 'profile';
  const timedActive = timed && gameStarted &&
    (mode === 'quiz' || mode === 'exam' || mode === 'daily' || mode === 'code');
  const currentQuestion = questionsOntranslate[question.value];
  const FR = langueTrans === "FR";
  // A run is only "finished" once every question was consumed…
  const runFinished = questionsOntranslate.length > 0 && question.value > totalQuestion;
  // …and results are only meaningful if at least one question was answered
  const hasAnswers = correct.value + wrong.value > 0;

  return (
<>
<Topbar />
{showProfile ? (
    <div className="game-profile">
      <Profile />
    </div>
) : showNotes ? (
    <div className="game-notes">
      <Revision />
    </div>
) : showProgress ? (
    <div className="game-progress">
      <Progress />
    </div>
) : showInterview ? (
    <div className="game-interview">
      <Interview />
    </div>
) : showBlitz ? (
    <div className="game-blitz">
      <Blitz />
    </div>
) : (
    <div
      className="game"
      data-game-started={gameStarted ? true : null}
      data-game-finished={questionsOntranslate.length > 0 && question.value > totalQuestion ? true : null}
    >

      <div className="intro">
        <div className="intro-inner">
         {gameStarted && mode !== 'interview' && <Timer gameFinished={gameFinished} />}
           <QuizStart questions={questionsOntranslate}/>
           {mode !== 'interview' && <Indicator questions={questionsOntranslate} question={question} />}

         {/* HELPERS */}

       {!gameFinished && mode !== 'interview' ? (
          <div className='buttons_qsts'>
          <button
             className="showAnswer-button"
             onClick={()=>ShowCorrectAnswer()}
           >
            ShowAnswer
           </button>

           <button
             className="removeAnswers-button"
             onClick={()=>RemoveTwoAnswers()}
           >
           50:50
           </button>
     </div>
       ) : ''}

          {runFinished && (
            hasAnswers ? (
              <>
                <Results
                  wrong={wrong.value}
                  correct={correct.value}
                  empty={empty.value}
                />
                <div className="btnsResult">
                  <button
                    className="retry-button intro-button"
                    onClick={() => handleTryagain()}
                  >
                    {FR ? 'Rejouer' : 'Retry'}
                  </button>
                  <button
                    className="menu-back"
                    onClick={() => handleBackToMenu()}
                  >
                    ← {FR ? 'Menu' : 'Menu'}
                  </button>
                  <ShareButton
                    correct={correct.value}
                    total={questionsOntranslate.length}
                  />
                </div>
              </>
            ) : (
              <div className="results-empty">
                <p>
                  {FR
                    ? "Aucun résultat — termine d'abord un quiz."
                    : "No results yet — finish a quiz first."}
                </p>
                <button
                  className="menu-back"
                  onClick={() => handleBackToMenu()}
                >
                  ← {FR ? 'Menu' : 'Menu'}
                </button>
              </div>
            )
          )}
        </div>
      </div>

      <div className="game-area">
        {timedActive && currentQuestion && (
          <QuestionTimer
            key={`t${runKey}-q${currentQuestion.id}`}
            seconds={timePerQuestion}
            questionId={currentQuestion.id}
            onTimeout={handleTimeout}
            FR={langueTrans === "FR"}
          />
        )}
        {questionsOntranslate[question.value] && (
          <Question
            key={`r${runKey}-q${questionsOntranslate[question.value].id}`}
            data={questionsOntranslate[question.value]}
            buttonText = {
              (question.value !== totalQuestion && langueTrans === "EN") ? "Next Question" :
              (question.value !== totalQuestion && langueTrans === "FR") ? "Question Suivante" :
              (langueTrans === "FR") ? "Terminer Quiz" :
              "Finish Quiz"
            }

            onQuestionButtonClick={handleNewQuestionClick}
          />
        )}

        {!questionsOntranslate[question.value] && (
          <>
            <QuestionCorrection data={questionsOntranslate}  />
          </>
        )}
      </div>
    </div>
)}
</>
  );
}
