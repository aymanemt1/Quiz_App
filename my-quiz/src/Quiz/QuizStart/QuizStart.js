import React, { useContext } from 'react'
import "./QuizStart.css"
import { LangueContext } from '../../Context/LangueContext';
import { TOPIC_KEYS, TOPIC_LABELS } from '../Data/QuestionAllData';
import { LEVELS, levelLabel } from '../Data/levels';
import { getMistakeCount } from '../Data/storage';
import { Progress } from '../Progress/Progress';

const MODES = [
  { id: 'quiz', en: 'Quiz', fr: 'Quiz' },
  { id: 'exam', en: 'Exam', fr: 'Examen' },
  { id: 'interview', en: 'Interview', fr: 'Entretien' },
  { id: 'review', en: 'Mistakes', fr: 'Erreurs' },
  { id: 'progress', en: 'Progress', fr: 'Progrès' },
];

const COUNTS = [10, 20, 30];

const LevelSelector = ({ value, onChange, FR }) => (
  <div className="level-selector">
    <span className="level-selector-label">{FR ? "Niveau :" : "Level:"}</span>
    <div className="level-buttons">
      <button
        type="button"
        className={`level-button ${value === 'all' ? 'level-active' : ''}`}
        onClick={() => onChange('all')}
      >
        {FR ? "Tous (1→5)" : "All (1→5)"}
      </button>
      {LEVELS.map((l) => (
        <button
          key={l}
          type="button"
          className={`level-button ${value === l ? 'level-active' : ''}`}
          onClick={() => onChange(l)}
          title={levelLabel(l, FR ? "FR" : "EN")}
        >
          {l}
        </button>
      ))}
    </div>
  </div>
);

const ExamBuilder = () => {
  const { langueTrans, examTopics, setExamTopics, examCount, setExamCount, level, setLevel } = useContext(LangueContext);
  const FR = langueTrans === "FR";

  const toggleTopic = (t) => {
    setExamTopics((prev) =>
      prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]
    );
  };
  const toggleAll = () => {
    setExamTopics((prev) => (prev.length === TOPIC_KEYS.length ? [] : [...TOPIC_KEYS]));
  };
  const allChecked = examTopics.length === TOPIC_KEYS.length;

  return (
    <div className="exam-builder">
      <div className="exam-row">
        <label className="exam-check exam-check-all">
          <input type="checkbox" checked={allChecked} onChange={toggleAll} />
          <span>{FR ? "Tous les stacks" : "All stacks"}</span>
        </label>
      </div>
      <div className="exam-topics">
        {TOPIC_KEYS.map((t) => (
          <label key={t} className="exam-check">
            <input
              type="checkbox"
              checked={examTopics.includes(t)}
              onChange={() => toggleTopic(t)}
            />
            <span>{TOPIC_LABELS[t]}</span>
          </label>
        ))}
      </div>
      <LevelSelector value={level} onChange={setLevel} FR={FR} />
      <div className="level-selector">
        <span className="level-selector-label">{FR ? "Questions :" : "Questions:"}</span>
        <div className="level-buttons">
          {COUNTS.map((c) => (
            <button
              key={c}
              type="button"
              className={`level-button ${examCount === c ? 'level-active' : ''}`}
              onClick={() => setExamCount(c)}
            >
              {c}
            </button>
          ))}
        </div>
      </div>
      {examTopics.length === 0 && (
        <p className="exam-warning">
          {FR ? "Sélectionnez au moins un stack." : "Select at least one stack."}
        </p>
      )}
    </div>
  );
};

export const QuizStart = ({questions}) => {
const {langue,setlangue,langueTrans,gameStarted,setGameStarted,mode,setMode,level,setLevel,
  setGameFinished,setshowCorrectAnswer,setIsremoved,examTopics} =useContext(LangueContext)

const FR = langueTrans === "FR";

const changeMode = (m) => {
  setMode(m);
  if (m === 'quiz' && !TOPIC_KEYS.includes(langue)) setlangue('React');
  setGameStarted(false);
  setGameFinished(false);
  setshowCorrectAnswer(false);
  setIsremoved(false);
};

const mistakeCount = mode === 'review' ? getMistakeCount(langueTrans) : 0;

const title = mode === 'exam'
  ? (FR ? "Examen personnalisé" : "Custom exam")
  : mode === 'interview'
    ? (FR ? "Entretien" : "Interview")
    : mode === 'review'
      ? (FR ? "Revoir mes erreurs" : "Review my mistakes")
      : mode === 'progress'
        ? (FR ? "Mes progrès" : "My progress")
        : `${TOPIC_LABELS[langue] || langue} Quiz`;

const desc = mode === 'exam'
  ? (FR
      ? "Choisissez vos stacks, un niveau et le nombre de questions."
      : "Pick your stacks, a level and the question count.")
  : mode === 'interview'
    ? (FR
        ? "Répondez à voix haute, puis vérifiez la réponse modèle et auto-évaluez-vous."
        : "Answer out loud, then check the model answer and self-assess.")
    : mode === 'review'
      ? (FR
        ? `${mistakeCount} question(s) à revoir. Une question quitte la liste une fois réussie.`
        : `${mistakeCount} question(s) to review. A question leaves the list once answered correctly.`)
      : mode === 'progress'
        ? ""
        : (FR
            ? `Le test contient ${questions.length} questions et il n'y a pas de limite de temps.`
            : `The test contains ${questions.length} questions and there is no time limit.`);

const canStart = mode !== 'exam' || examTopics.length > 0;
const reviewEmpty = mode === 'review' && mistakeCount === 0;

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
            {FR ? m.fr : m.en}
          </button>
        ))}
      </div>

      {mode === 'quiz' && (
        <>
          <select className='select_options' value={langue} onChange={(e)=>setlangue(e.target.value)}>
            {TOPIC_KEYS.map((t) => (
              <option key={t} value={t}>{TOPIC_LABELS[t]}</option>
            ))}
          </select>
          <LevelSelector value={level} onChange={setLevel} FR={FR} />
        </>
      )}

      {mode === 'exam' && <ExamBuilder />}

      {mode === 'interview' && (
        <select className='select_options' value={langue} onChange={(e)=>setlangue(e.target.value)}>
          <option value='All'>{FR ? "Tous les sujets" : "All topics"}</option>
          {TOPIC_KEYS.map((t) => (
            <option key={t} value={t}>{TOPIC_LABELS[t]}</option>
          ))}
        </select>
      )}

      {mode === 'progress' ? (
        <Progress />
      ) : (
        !gameStarted && (
          <>
            {desc && <p className="intro-desc">{desc}</p>}
            <button
              className="intro-button"
              onClick={() => setGameStarted(true)}
              disabled={!canStart || reviewEmpty}
              style={(!canStart || reviewEmpty) ? { opacity: 0.4, cursor: 'not-allowed' } : undefined}
            >
              {FR ? "Commencer" : "Start"}
            </button>
          </>
        )
      )}
   </>
  )
}
