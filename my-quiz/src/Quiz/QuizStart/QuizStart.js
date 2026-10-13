import React, { useContext } from 'react'
import "./QuizStart.css"
import "../Menu/Menu.css"
import { LangueContext } from '../../Context/LangueContext';
import { TOPIC_KEYS, TOPIC_LABELS } from '../Data/QuestionAllData';
import { CODE_TOPICS } from '../Data/CodeChallenges';
import { LEVELS, levelLabel } from '../Data/levels';
import { getMistakeCount, getTodayResult } from '../Data/storage';
import { DAILY_COUNT } from '../Data/daily';
import { Progress } from '../Progress/Progress';
import { Menu } from '../Menu/Menu';

const MODES = [
  { id: 'quiz', en: 'Quiz', fr: 'Quiz' },
  { id: 'code', en: 'Code', fr: 'Code' },
  { id: 'exam', en: 'Exam', fr: 'Examen' },
  { id: 'daily', en: 'Daily challenge', fr: 'Défi du jour' },
  { id: 'blitz', en: 'Blitz', fr: 'Blitz' },
  { id: 'interview', en: 'Interview', fr: 'Entretien' },
  { id: 'review', en: 'Mistakes', fr: 'Erreurs' },
  { id: 'notes', en: 'Notes', fr: 'Fiches' },
  { id: 'progress', en: 'Progress', fr: 'Progrès' },
];

const COUNTS = [10, 20, 30];
const TIMED_DURATIONS = [15, 30, 60];

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

const TimedToggle = () => {
  const { langueTrans, timed, setTimed, timePerQuestion, setTimePerQuestion } = useContext(LangueContext);
  const FR = langueTrans === "FR";
  return (
    <div className="timed-toggle">
      <label className="exam-check">
        <input
          type="checkbox"
          checked={timed}
          onChange={(e) => setTimed(e.target.checked)}
        />
        <span>{FR ? "Mode chronométré" : "Timed mode"}</span>
      </label>
      {timed && (
        <div className="level-buttons timed-durations">
          {TIMED_DURATIONS.map((d) => (
            <button
              key={d}
              type="button"
              className={`level-button ${timePerQuestion === d ? 'level-active' : ''}`}
              onClick={() => setTimePerQuestion(d)}
            >
              {d}s
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

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
  setGameFinished,setshowCorrectAnswer,setIsremoved,examTopics,timed,timePerQuestion,
  codeTopic,setCodeTopic,menuOpen,setMenuOpen} =useContext(LangueContext)

const FR = langueTrans === "FR";

const selectMode = (m) => {
  setMode(m);
  if ((m === 'quiz' || m === 'notes') && !TOPIC_KEYS.includes(langue)) setlangue('React');
  setMenuOpen(false);
  setGameStarted(false);
  setGameFinished(false);
  setshowCorrectAnswer(false);
  setIsremoved(false);
};

const goToMenu = () => {
  setGameStarted(false);
  setMenuOpen(true);
};

const mistakeCount = mode === 'review' ? getMistakeCount(langueTrans) : 0;
const todayResult = mode === 'daily' ? getTodayResult() : null;

const title = mode === 'exam'
  ? (FR ? "Examen personnalisé" : "Custom exam")
  : mode === 'code'
    ? (FR ? "Défi code" : "Code challenge")
    : mode === 'blitz'
      ? "Blitz"
      : mode === 'daily'
    ? (FR ? "Défi du jour" : "Daily challenge")
    : mode === 'interview'
      ? (FR ? "Entretien" : "Interview")
      : mode === 'review'
        ? (FR ? "Revoir mes erreurs" : "Review my mistakes")
        : mode === 'notes'
          ? (FR ? "Fiches de révision" : "Revision notes")
          : mode === 'progress'
            ? (FR ? "Mes progrès" : "My progress")
            : `${TOPIC_LABELS[langue] || langue} Quiz`;

const quizDesc = FR
  ? (timed
      ? `Le test contient ${questions.length} questions, ${timePerQuestion}s par question.`
      : `Le test contient ${questions.length} questions et il n'y a pas de limite de temps.`)
  : (timed
      ? `The test contains ${questions.length} questions, ${timePerQuestion}s per question.`
      : `The test contains ${questions.length} questions and there is no time limit.`);

const desc = mode === 'exam'
  ? (FR
      ? "Choisissez vos stacks, un niveau et le nombre de questions."
      : "Pick your stacks, a level and the question count.")
  : mode === 'code'
    ? (FR
        ? "Lisez le code et devinez ce qu'il affiche."
        : "Read the code and guess what it outputs.")
    : mode === 'blitz'
      ? (FR
          ? "60 secondes : un maximum de Vrai/Faux. Go !"
          : "60 seconds: as many True/False as you can. Go!")
      : mode === 'daily'
    ? (todayResult
        ? (FR
            ? `Défi terminé aujourd'hui : ${todayResult.correct}/${todayResult.total}. Revenez demain !`
            : `Challenge completed today: ${todayResult.correct}/${todayResult.total}. Come back tomorrow!`)
        : (FR
            ? `${DAILY_COUNT} questions mélangées de tous les stacks — les mêmes toute la journée.`
            : `${DAILY_COUNT} mixed questions from all stacks — the same set all day.`))
    : mode === 'interview'
      ? (FR
          ? "Répondez à voix haute, puis vérifiez la réponse modèle et auto-évaluez-vous."
          : "Answer out loud, then check the model answer and self-assess.")
      : mode === 'review'
        ? (FR
          ? `${mistakeCount} question(s) à revoir. Une question quitte la liste une fois réussie.`
          : `${mistakeCount} question(s) to review. A question leaves the list once answered correctly.`)
        : mode === 'notes'
          ? (FR
              ? "Choisissez un stack et parcourez les fiches, une notion à la fois."
              : "Pick a stack and flip through the notes, one concept at a time.")
          : mode === 'progress'
            ? ""
            : quizDesc;

const canStart = mode !== 'exam' || examTopics.length > 0;
const reviewEmpty = mode === 'review' && mistakeCount === 0;
const dailyDone = mode === 'daily' && !!todayResult;
const startDisabled = !canStart || reviewEmpty || dailyDone;

const startLabel = dailyDone
  ? (FR ? "Terminé" : "Done")
  : (FR ? "Commencer" : "Start");

  return (
   <>
    <h1 className="intro-title">{title}</h1>

      {gameStarted ? (
        <div className="mode-selector">
          {MODES.map((m) => (
            <button
              key={m.id}
              type="button"
              className={`mode-button ${mode === m.id ? 'mode-active' : ''}`}
              onClick={() => selectMode(m.id)}
            >
              {FR ? m.fr : m.en}
            </button>
          ))}
        </div>
      ) : menuOpen ? (
        <Menu onSelect={selectMode} />
      ) : (
        <>
          <div>
            <button type="button" className="menu-back" onClick={goToMenu}>
              ← {FR ? "Menu" : "Menu"}
            </button>
          </div>

          {mode === 'quiz' && (
            <>
              <select className='select_options' value={langue} onChange={(e)=>setlangue(e.target.value)}>
                {TOPIC_KEYS.map((t) => (
                  <option key={t} value={t}>{TOPIC_LABELS[t]}</option>
                ))}
              </select>
              <LevelSelector value={level} onChange={setLevel} FR={FR} />
              <TimedToggle />
            </>
          )}

          {mode === 'exam' && (
            <>
              <ExamBuilder />
              <TimedToggle />
            </>
          )}

          {mode === 'code' && (
            <>
              <select className='select_options' value={codeTopic} onChange={(e)=>setCodeTopic(e.target.value)}>
                <option value='All'>{FR ? "Tous les stacks" : "All stacks"}</option>
                {CODE_TOPICS.map((t) => (
                  <option key={t} value={t}>{TOPIC_LABELS[t]}</option>
                ))}
              </select>
              <LevelSelector value={level} onChange={setLevel} FR={FR} />
              <TimedToggle />
            </>
          )}

          {mode === 'daily' && !dailyDone && <TimedToggle />}

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
            <>
              {desc && <p className="intro-desc">{desc}</p>}
              {mode === 'quiz' ? (
                <div className="cours-exam-buttons">
                  <button
                    type="button"
                    className="intro-button cours-button"
                    onClick={() => setMode('notes')}
                  >
                    {FR ? "Cours" : "Course"}
                  </button>
                  <button
                    type="button"
                    className="intro-button"
                    onClick={() => setGameStarted(true)}
                  >
                    {FR ? "Examen" : "Exam"}
                  </button>
                </div>
              ) : mode === 'notes' ? null : (
                <button
                  className="intro-button"
                  onClick={() => setGameStarted(true)}
                  disabled={startDisabled}
                  style={startDisabled ? { opacity: 0.4, cursor: 'not-allowed' } : undefined}
                >
                  {startLabel}
                </button>
              )}
            </>
          )}
        </>
      )}
   </>
  )
}
