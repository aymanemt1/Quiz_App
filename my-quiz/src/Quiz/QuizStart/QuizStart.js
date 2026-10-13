import React, { useContext } from 'react'
import "./QuizStart.css"
import { LangueContext } from '../../Context/LangueContext';
import { TOPIC_KEYS } from '../Data/QuestionAllData';

const TOPIC_LABELS = {
  React: "React",
  Javascript: "Javascript",
  Typescript: "Typescript",
  VueJs: "VueJs",
  Html: "Html",
  Css: "Css",
  Tailwind: "Tailwind",
  NodeJs: "NodeJs",
  RestApi: "REST API",
  Laravel: "Laravel",
  Php: "Php",
  Python: "Python",
  Sql: "Sql",
  MongoDb: "MongoDb",
  Git: "Git",
  Docker: "Docker",
};

const MODES = [
  { id: 'quiz', en: 'Quiz', fr: 'Quiz' },
  { id: 'exam', en: 'Final Exam', fr: 'Examen Final' },
  { id: 'interview', en: 'Interview', fr: 'Entretien' },
];

export const QuizStart = ({questions}) => {
const {langue,setlangue,langueTrans,gameStarted,setGameStarted,mode,setMode,
  setGameFinished,setshowCorrectAnswer,setIsremoved} =useContext(LangueContext)

const changeMode = (m) => {
  setMode(m);
  if (m === 'quiz' && !TOPIC_KEYS.includes(langue)) setlangue('React');
  setGameStarted(false);
  setGameFinished(false);
  setshowCorrectAnswer(false);
  setIsremoved(false);
};

const title = mode === 'exam'
  ? (langueTrans === "EN" ? "Final Exam" : "Examen Final")
  : mode === 'interview'
    ? (langueTrans === "EN" ? "Interview" : "Entretien")
    : `${TOPIC_LABELS[langue] || langue} Quiz`;

const desc = mode === 'exam'
  ? (langueTrans === "EN"
      ? "24 questions across all 16 topics, from easy to hard."
      : "24 questions sur les 16 sujets, du facile au difficile.")
  : mode === 'interview'
    ? (langueTrans === "EN"
        ? "Answer out loud, then check the model answer and self-assess."
        : "Répondez à voix haute, puis vérifiez la réponse modèle et auto-évaluez-vous.")
    : (langueTrans === "EN"
        ? `The test contains ${questions.length} questions and there is no time limit.`
        : `Le test contient ${questions.length} questions et il n'y a pas de limite de temps.`);

  return (
   <>
    <h1 className="intro-title">{title}</h1>

      <div className="mode-selector">
        {MODES.map((m) => (
          <button
            key={m.id}
            type="button"
            className={`mode-button ${mode === m.id ? 'mode-active' : ''}`}
            onClick={() => changeMode(m.id)}
          >
            {langueTrans === "EN" ? m.en : m.fr}
          </button>
        ))}
      </div>

      {mode !== 'exam' && (
        <select className='select_options' value={langue} onChange={(e)=>setlangue(e.target.value)}>
          {mode === 'interview' && (
            <option value='All'>{langueTrans === "EN" ? "All topics" : "Tous les sujets"}</option>
          )}
          {TOPIC_KEYS.map((t) => (
            <option key={t} value={t}>{TOPIC_LABELS[t]}</option>
          ))}
        </select>
      )}
          {!gameStarted && (
            <>
              <p className="intro-desc">
               {desc}
              </p>

              <button
                className="intro-button"
                onClick={() => setGameStarted(true)}
              >
                {langueTrans === "EN" ? "Start" : 'Commencer'}
              </button>
            </>
          )}
   </>
  )
}
