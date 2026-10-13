import React, {
  useState,
  useEffect,
  useMemo,
  useContext
} from "react";

import "./App.css"
import Results from "../Resultat/Results";
import Question from '../Questions/Question'
import QuestionCorrection from "../QuestionCorrection/QuestionCorrection"
import { Indicator } from "../Indicator/Indicator";
import { QuizStart } from "../QuizStart/QuizStart";
import { Interview } from "../Interview/Interview";
import { getTopicQuestions, getExamQuestions, TOPIC_KEYS } from "../Data/QuestionAllData";
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
    langueTrans,setGameStarted,gameStarted,mode} =useContext(LangueContext)

  // Build the active question set for the current mode (ids normalized to array index)
  const questionsOntranslate = useMemo(() => {
    let set = [];
    if (mode === 'exam') {
      set = getExamQuestions(langueTrans);
    } else if (mode === 'quiz') {
      const topic = TOPIC_KEYS.includes(langue) ? langue : 'React';
      set = getTopicQuestions(topic, langueTrans).map((q, i) => ({ ...q, id: i, selection: null }));
    }
    return set;
  }, [mode, langue, langueTrans]);

  const totalQuestion = questionsOntranslate.length - 1;

  const question = useCounter(0);
  const correct = useCounter(0);
  const wrong = useCounter(0);
  const empty = useCounter(0);

  // Reset progress whenever the question set changes (mode / topic / language)
  useEffect(() => {
    question.reset();
    correct.reset();
    wrong.reset();
    empty.reset();
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
  };

  const handleTryagain = () => {
    setGameFinished(false);
    setGameStarted(true);
    resetSelection();
    question.reset();
    correct.reset();
    wrong.reset();
    empty.reset();
  };

  useEffect(() => {
    if (gameStarted) {
      document.body.classList.add("game-started");
    } else {
      document.body.classList.remove("game-started");
    }
  }, [gameStarted]);


  const ShowCorrectAnswer = ()=>{
  setshowCorrectAnswer(true)

  }

  const RemoveTwoAnswers = () => {
    setIsremoved(true)

  }

  const showInterview = mode === 'interview' && gameStarted;

  return (
<>
<Topbar />
{showInterview ? (
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
        {questionsOntranslate[question.value] && (
          <Question
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
