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
import { QuestionTimer } from "../QuestionTimer/QuestionTimer";
import { getTopicQuestions, getExamQuestions, TOPIC_KEYS } from "../Data/QuestionAllData";
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
    timed,timePerQuestion} =useContext(LangueContext)

  // Build the active question set for the current mode (ids normalized to array index)
  const questionsOntranslate = useMemo(() => {
    let set = [];
    if (mode === 'exam') {
      set = getExamQuestions(langueTrans, examTopics, level, examCount);
    } else if (mode === 'quiz') {
      const topic = TOPIC_KEYS.includes(langue) ? langue : 'React';
      set = getTopicQuestions(topic, langueTrans, level).map((q, i) => ({ ...q, id: i, selection: null, topic }));
    } else if (mode === 'daily') {
      set = getDailyQuestions(langueTrans, todayStr());
    } else if (mode === 'review') {
      const mistakes = loadMistakes().filter((m) => m.lang === langueTrans);
      set = mistakes.map((m, i) => ({
        id: i,
        mistakeId: m.id,
        topic: m.topic,
        level: m.level,
        text: m.text,
        answers: m.answers,
        correct: m.correct,
        selection: null,
      }));
    }
    return set;
  }, [mode, langue, langueTrans, level, examTopics, examCount]);

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

  const handleRestartClick = () => {
    setGameFinished(false);
    setGameStarted(false);
    resetSelection();
    question.reset();
    correct.reset();
    wrong.reset();
    empty.reset();
    timedOutRef.current.clear();
    setRunKey((k) => k + 1);
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
    if (mode === 'quiz' || mode === 'exam' || mode === 'daily') {
      const missed = questionsOntranslate
        .filter((q) => q.selection !== null && q.selection !== q.correct)
        .map((q) => ({
          id: `${q.topic || langue}|${langueTrans}|${q.text}`,
          topic: q.topic || langue,
          lang: langueTrans,
          level: q.level || 1,
          text: q.text,
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
  const showProgress = mode === 'progress';
  const showNotes = mode === 'notes';
  const timedActive = timed && gameStarted &&
    (mode === 'quiz' || mode === 'exam' || mode === 'daily');
  const currentQuestion = questionsOntranslate[question.value];

  return (
<>
<Topbar />
{showNotes ? (
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

          <Results
            wrong={wrong.value}
            correct={correct.value}
            empty={empty.value}
          />
         <div className="btnsResult">
         <button
            className="restart-button"
            onClick={() => handleRestartClick()}
          >
            {langueTrans === "EN" ? 'Restart Quiz' : 'Recommencer'}
          </button>
          <button
            className="tryagain-button"
            onClick={() => handleTryagain()}
            >
            {langueTrans === "EN" ? ' Try Again' : 'Réessayer'}

          </button>
         </div>
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
