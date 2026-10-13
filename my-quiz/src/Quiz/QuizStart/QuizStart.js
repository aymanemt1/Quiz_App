import React, { useContext, useState } from 'react'
import "./QuizStart.css"
import "../Menu/Menu.css"
import { LangueContext } from '../../Context/LangueContext';
import { TOPIC_KEYS, TOPIC_LABELS } from '../Data/QuestionAllData';
import { CODE_TOPICS } from '../Data/CodeChallenges';
import { LEVELS, levelLabel } from '../Data/levels';
import { stackOptions, allStacksOption, StackGrid } from '../StackGrid/StackGrid';
import { getMistakes, getStreak, getTodayResult } from '../Data/storage';
import { DAILY_COUNT } from '../Data/daily';
import { Progress } from '../Progress/Progress';
import { Menu } from '../Menu/Menu';
import { Wizard, TimeSelector } from '../Wizard/Wizard';

const MODES = [
  { id: 'quiz', en: 'Quiz', fr: 'Quiz', dr: 'Quiz' },
  { id: 'code', en: 'Code', fr: 'Code', dr: 'Code' },
  { id: 'exam', en: 'Exam', fr: 'Examen', dr: 'Mtihan' },
  { id: 'daily', en: 'Daily challenge', fr: 'Défi du jour', dr: 'Tahadi lyoum' },
  { id: 'blitz', en: 'Blitz', fr: 'Blitz', dr: 'Blitz' },
  { id: 'interview', en: 'Interview', fr: 'Entretien', dr: 'Interview' },
  { id: 'review', en: 'Mistakes', fr: 'Erreurs', dr: 'Aghlat' },
  { id: 'notes', en: 'Notes', fr: 'Fiches', dr: 'Doros' },
  { id: 'progress', en: 'Progress', fr: 'Progrès', dr: 'Taqadom' },
];

const COUNTS = [10, 20, 30];

const LevelSelector = ({ value, onChange }) => {
  const { langueTrans } = useContext(LangueContext);
  const FR = langueTrans === "FR";
  const DR = langueTrans === "DR";
  return (
  <div className="level-selector">
    <span className="level-selector-label">{DR ? "Mostawa :" : FR ? "Niveau :" : "Level:"}</span>
    <div className="level-buttons">
      <button
        type="button"
        className={`level-button ${value === 'all' ? 'level-active' : ''}`}
        onClick={() => onChange('all')}
      >
        {DR ? "Ga3 (1→5)" : FR ? "Tous (1→5)" : "All (1→5)"}
      </button>
      {LEVELS.map((l) => (
        <button
          key={l}
          type="button"
          className={`level-button ${value === l ? 'level-active' : ''}`}
          onClick={() => onChange(l)}
          title={levelLabel(l, langueTrans)}
        >
          {l}
        </button>
      ))}
    </div>
  </div>
  );
};

const CountSelector = ({ value, onChange }) => {
  const { langueTrans } = useContext(LangueContext);
  const FR = langueTrans === "FR";
  const DR = langueTrans === "DR";
  return (
  <div className="level-selector">
    <span className="level-selector-label">{DR ? "As2ila :" : FR ? "Questions :" : "Questions:"}</span>
    <div className="level-buttons">
      {COUNTS.map((c) => (
        <button
          key={c}
          type="button"
          className={`level-button ${value === c ? 'level-active' : ''}`}
          onClick={() => onChange(c)}
        >
          {c}
        </button>
      ))}
    </div>
  </div>
  );
};

// ---------------- QUIZ WIZARD ----------------
// Step 1: Stack → Step 2: Time → Step 3: Level → Start (or Course)
const QuizWizard = ({ questions }) => {
  const { langue, setlangue, level, setLevel, setGameStarted, setMode,
    langueTrans, timed, timePerQuestion } = useContext(LangueContext);
  const [step, setStep] = useState(1);
  const FR = langueTrans === "FR";
  const DR = langueTrans === "DR";

  const titles = [
    "Quiz — Stack",
    DR ? "Quiz — Lwa9t" : FR ? "Quiz — Temps" : "Quiz — Time",
    `${TOPIC_LABELS[langue] || langue} Quiz`,
  ];

  const quizDesc = DR
    ? (timed
        ? `L test fih ${questions.length} so2al, ${timePerQuestion}s lkol so2al.`
        : `L test fih ${questions.length} so2al w makaynch limite dyal lwa9t.`)
    : FR
    ? (timed
        ? `Le test contient ${questions.length} questions, ${timePerQuestion}s par question.`
        : `Le test contient ${questions.length} questions et il n'y a pas de limite de temps.`)
    : (timed
        ? `The test contains ${questions.length} questions, ${timePerQuestion}s per question.`
        : `The test contains ${questions.length} questions and there is no time limit.`);

  return (
    <Wizard
      step={step}
      totalSteps={3}
      title={titles[step - 1]}
      onBack={() => setStep(step - 1)}
      onNext={() => setStep(step + 1)}
      nextLabel={DR ? "Doz" : FR ? "Suivant" : "Next"}
      customActions={step === 3 ? (
        <div className="cours-exam-buttons">
          <button
            type="button"
            className="intro-button cours-button"
            onClick={() => setMode('notes')}
          >
            {DR ? "Cours" : FR ? "Cours" : "Course"}
          </button>
          <button
            type="button"
            className="intro-button"
            onClick={() => setGameStarted(true)}
          >
            {DR ? "Bda" : FR ? "Démarrer" : "Start"}
          </button>
        </div>
      ) : null}
    >
      {step === 1 && (
        <StackGrid
          options={stackOptions(TOPIC_KEYS)}
          value={langue}
          onSelect={setlangue}
          label={FR ? "Stack :" : "Stack:"}
          FR={FR}
        />
      )}
      {step === 2 && <TimeSelector FR={FR} />}
      {step === 3 && (
        <>
          <LevelSelector value={level} onChange={setLevel} FR={FR} />
          <p className="intro-desc">{quizDesc}</p>
        </>
      )}
    </Wizard>
  );
};

// ---------------- CODE WIZARD ----------------
// Step 1: Stack (code stacks) → Step 2: Time → Step 3: Level → Start
const CodeWizard = ({ questions }) => {
  const { codeTopic, setCodeTopic, level, setLevel, setGameStarted,
    langueTrans, timed, timePerQuestion } = useContext(LangueContext);
  const [step, setStep] = useState(1);
  const FR = langueTrans === "FR";
  const DR = langueTrans === "DR";

  const titles = [
    DR ? "Tahadi code — Stack" : FR ? "Défi code — Stack" : "Code challenge — Stack",
    DR ? "Tahadi code — Lwa9t" : FR ? "Défi code — Temps" : "Code challenge — Time",
    DR ? "Tahadi code — Mostawa" : FR ? "Défi code — Niveau" : "Code challenge — Level",
  ];

  const desc = DR
    ? `9ra lcode w tkhmen chno ghadi ykhrrej. ${questions.length} tahadi${timed ? `, ${timePerQuestion}s lkol wa7ed.` : "."}`
    : FR
    ? `Lisez le code et devinez ce qu'il affiche. ${questions.length} défis${timed ? `, ${timePerQuestion}s par défi.` : "."}`
    : `Read the code and guess what it outputs. ${questions.length} challenges${timed ? `, ${timePerQuestion}s per challenge.` : "."}`;

  return (
    <Wizard
      step={step}
      totalSteps={3}
      title={titles[step - 1]}
      onBack={() => setStep(step - 1)}
      onNext={() => step < 3 ? setStep(step + 1) : setGameStarted(true)}
      nextLabel={step < 3 ? (DR ? "Doz" : FR ? "Suivant" : "Next") : (DR ? "Bda" : FR ? "Démarrer" : "Start")}
    >
      {step === 1 && (
        <StackGrid
          options={[allStacksOption(DR ? "Ga3 stacks" : FR ? "Tous les stacks" : "All stacks"), ...stackOptions(CODE_TOPICS)]}
          value={codeTopic}
          onSelect={setCodeTopic}
          label={FR ? "Stack :" : "Stack:"}
          FR={FR}
        />
      )}
      {step === 2 && <TimeSelector FR={FR} />}
      {step === 3 && (
        <>
          <LevelSelector value={level} onChange={setLevel} FR={FR} />
          <p className="intro-desc">{desc}</p>
        </>
      )}
    </Wizard>
  );
};

// ---------------- EXAM WIZARD ----------------
// Step 1: Stacks (multi) → Step 2: Level → Step 3: Count + Time → Start exam
const ExamWizard = () => {
  const { langueTrans, examTopics, setExamTopics, examCount, setExamCount,
    level, setLevel, timed, timePerQuestion, setGameStarted } = useContext(LangueContext);
  const [step, setStep] = useState(1);
  const FR = langueTrans === "FR";
  const DR = langueTrans === "DR";

  const toggleTopic = (t) => {
    setExamTopics((prev) =>
      prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]
    );
  };
  const toggleAll = () => {
    setExamTopics((prev) => (prev.length === TOPIC_KEYS.length ? [] : [...TOPIC_KEYS]));
  };
  const allChecked = examTopics.length === TOPIC_KEYS.length;
  const allOption = { key: '__all__', label: DR ? "Ga3 stacks" : FR ? "Tous les stacks" : "All stacks", icon: "🧩" };
  const handleExamSelect = (key) => {
    if (key === '__all__') { toggleAll(); return; }
    toggleTopic(key);
  };
  const examOptions = [allOption, ...stackOptions(TOPIC_KEYS)];
  const examValue = allChecked ? ['__all__', ...examTopics] : examTopics;

  const titles = [
    DR ? "Mtihan — Stacks" : FR ? "Examen — Stacks" : "Exam — Stacks",
    DR ? "Mtihan — Mostawa" : FR ? "Examen — Niveau" : "Exam — Level",
    DR ? "Mtihan — Options" : FR ? "Examen — Options" : "Exam — Options",
  ];

  const summaryRows = [
    { k: DR ? "Stacks" : FR ? "Stacks" : "Stacks", v: allChecked ? (DR ? "Ga3" : FR ? "Tous" : "All") : `${examTopics.length}` },
    { k: DR ? "Mostawa" : FR ? "Niveau" : "Level", v: level === 'all' ? (DR ? "Ga3 (1→5)" : FR ? "Tous (1→5)" : "All (1→5)") : `${DR ? "Mostawa" : FR ? "Niveau" : "Level"} ${level}` },
    { k: DR ? "As2ila" : FR ? "Questions" : "Questions", v: `${examCount}` },
    { k: DR ? "Lwa9t" : FR ? "Temps" : "Time", v: timed ? `${timePerQuestion}s / question` : (DR ? "Bla wa9t" : FR ? "Sans chrono" : "No timer") },
  ];

  return (
    <Wizard
      step={step}
      totalSteps={3}
      title={titles[step - 1]}
      onBack={() => setStep(step - 1)}
      onNext={() => step < 3 ? setStep(step + 1) : setGameStarted(true)}
      nextLabel={step < 3 ? (DR ? "Doz" : FR ? "Suivant" : "Next") : (DR ? "Bda lmtihan" : FR ? "Démarrer l'examen" : "Start exam")}
      canNext={step !== 1 || examTopics.length > 0}
    >
      {step === 1 && (
        <>
          <StackGrid
            options={examOptions}
            value={examValue}
            onSelect={handleExamSelect}
            multi
            label={FR ? "Stacks :" : "Stacks:"}
            FR={FR}
          />
          {examTopics.length === 0 && (
            <p className="exam-warning">
              {DR ? "Khtar 3la a9al stack wa7ed." : FR ? "Sélectionnez au moins un stack." : "Select at least one stack."}
            </p>
          )}
        </>
      )}
      {step === 2 && <LevelSelector value={level} onChange={setLevel} FR={FR} />}
      {step === 3 && (
        <>
          <CountSelector value={examCount} onChange={setExamCount} FR={FR} />
          <TimeSelector FR={FR} />
          <div className="wizard-summary">
            {summaryRows.map((r) => (
              <div className="wizard-summary-row" key={r.k}>
                <span>{r.k}</span>
                <strong>{r.v}</strong>
              </div>
            ))}
          </div>
        </>
      )}
    </Wizard>
  );
};

// ---------------- INTERVIEW WIZARD ----------------
// Step 1: Topic → Step 2: Summary → Start interview
const InterviewWizard = () => {
  const { langue, setlangue, langueTrans, setGameStarted } = useContext(LangueContext);
  const [step, setStep] = useState(1);
  const FR = langueTrans === "FR";
  const DR = langueTrans === "DR";

  const topicLabel = langue === 'All'
    ? (DR ? "Ga3 lmawadie3" : FR ? "Tous les sujets" : "All topics")
    : (TOPIC_LABELS[langue] || langue);

  return (
    <Wizard
      step={step}
      totalSteps={2}
      title={step === 1 ? (DR ? "Interview — Lmawdo3" : FR ? "Entretien — Sujet" : "Interview — Topic") : (DR ? "Interview — Lmolakhas" : FR ? "Entretien — Résumé" : "Interview — Summary")}
      onBack={() => setStep(step - 1)}
      onNext={() => step < 2 ? setStep(step + 1) : setGameStarted(true)}
      nextLabel={step < 2 ? (DR ? "Doz" : FR ? "Suivant" : "Next") : (DR ? "Bda linterview" : FR ? "Démarrer l'entretien" : "Start interview")}
    >
      {step === 1 && (
        <StackGrid
          options={[allStacksOption(DR ? "Ga3 lmawadie3" : FR ? "Tous les sujets" : "All topics"), ...stackOptions(TOPIC_KEYS)]}
          value={langue}
          onSelect={setlangue}
          label={DR ? "Lmawdo3 :" : FR ? "Sujet :" : "Topic:"}
          FR={FR}
        />
      )}
      {step === 2 && (
        <div className="wizard-summary">
          <div className="wizard-summary-row">
            <span>{DR ? "Lmawdo3" : FR ? "Sujet" : "Topic"}</span>
            <strong>{topicLabel}</strong>
          </div>
          <div className="wizard-summary-row">
            <span>Mode</span>
            <strong>{DR ? "So2al → ljawab → t9yim dyalk" : FR ? "Question → réponse → auto-évaluation" : "Question → answer → self-assessment"}</strong>
          </div>
          <p className="intro-desc" style={{ marginTop: 12 }}>
            {DR
              ? "Jawb b sot 3ali, men b3d chouf ljawab lnamodaji w 9yim rassek."
              : FR
              ? "Répondez à voix haute, puis vérifiez la réponse modèle et auto-évaluez-vous."
              : "Answer out loud, then check the model answer and self-assess."}
          </p>
        </div>
      )}
    </Wizard>
  );
};

// ---------------- BLITZ WIZARD ----------------
// Step 1: Info → Start blitz
const BlitzWizard = () => {
  const { langueTrans, setGameStarted } = useContext(LangueContext);
  const FR = langueTrans === "FR";
  const DR = langueTrans === "DR";

  return (
    <Wizard
      step={1}
      totalSteps={1}
      title="Blitz"
      onBack={() => {}}
      onNext={() => setGameStarted(true)}
      nextLabel={DR ? "Bda lblitz" : FR ? "Démarrer le blitz" : "Start blitz"}
    >
      <div className="wizard-info">
        {DR ? (
          <>⚡ <strong>60 tanya</strong> : jawb 9ed ma t9der <strong>S7i7/Ghalt</strong>, ga3 stacks. Yallah !</>
        ) : FR ? (
          <>⚡ <strong>60 secondes</strong> : un maximum de <strong>Vrai/Faux</strong> sur tous les stacks. Go !</>
        ) : (
          <>⚡ <strong>60 seconds</strong>: as many <strong>True/False</strong> as you can, all stacks. Go!</>
        )}
      </div>
    </Wizard>
  );
};

// ---------------- DAILY WIZARD ----------------
// Step 1: Info (streak) → Start
const DailyWizard = () => {
  const { langueTrans, setGameStarted } = useContext(LangueContext);
  const FR = langueTrans === "FR";
  const DR = langueTrans === "DR";
  const todayResult = getTodayResult();
  const streak = getStreak();
  const dailyDone = !!todayResult;

  return (
    <Wizard
      step={1}
      totalSteps={1}
      title={DR ? "Tahadi lyoum" : FR ? "Défi du jour" : "Daily challenge"}
      onBack={() => {}}
      onNext={() => setGameStarted(true)}
      nextLabel={dailyDone ? (DR ? "Sali" : FR ? "Terminé" : "Done") : (DR ? "Bda" : FR ? "Démarrer" : "Start")}
      canNext={!dailyDone}
    >
      <div className="wizard-info">
        {dailyDone ? (
          DR
            ? <>L tahadi dyal lyum saliti : <strong>{todayResult.correct}/{todayResult.total}</strong>. Rje3 ghda !</>
            : FR
            ? <>Défi terminé aujourd'hui : <strong>{todayResult.correct}/{todayResult.total}</strong>. Revenez demain !</>
            : <>Challenge completed today: <strong>{todayResult.correct}/{todayResult.total}</strong>. Come back tomorrow!</>
        ) : (
          DR
            ? <><strong>{DAILY_COUNT} dyal las2ila</strong> mkheltin men ga3 stacks — nefs las2ila nhar kamel. <strong>🔥 Streak: {streak} nhar</strong></>
            : FR
            ? <><strong>{DAILY_COUNT} questions</strong> mélangées de tous les stacks — les mêmes toute la journée. <strong>🔥 Série : {streak} jour(s)</strong></>
            : <><strong>{DAILY_COUNT} mixed questions</strong> from all stacks — the same set all day. <strong>🔥 Streak: {streak} day(s)</strong></>
        )}
      </div>
      {!dailyDone && <TimeSelector FR={FR} />}
    </Wizard>
  );
};

// ---------------- MISTAKES WIZARD ----------------
// Step 1: Info (pending count) + topic filter → Start review
const ReviewWizard = () => {
  const { langueTrans, setGameStarted, reviewTopic, setReviewTopic } = useContext(LangueContext);
  const FR = langueTrans === "FR";
  const DR = langueTrans === "DR";
  const all = getMistakes(langueTrans, 'All');
  const topicsPresent = TOPIC_KEYS.filter((k) => all.some((m) => m.topic === k));
  const count = getMistakes(langueTrans, reviewTopic).length;

  return (
    <Wizard
      step={1}
      totalSteps={1}
      title={DR ? "Raje3 aghlat dyalk" : FR ? "Revoir mes erreurs" : "Review my mistakes"}
      onBack={() => {}}
      onNext={() => setGameStarted(true)}
      nextLabel={DR ? "Bda lmoraja3a" : FR ? "Démarrer la révision" : "Start review"}
      canNext={count > 0}
    >
      <div className="wizard-info">
        {DR
          ? <><strong>{count}</strong> so2al khasni nraje3hom. So2al kaykhrej men llista mli tjawb 3lih s7i7.</>
          : FR
          ? <><strong>{count}</strong> question(s) à revoir. Une question quitte la liste une fois réussie.</>
          : <><strong>{count}</strong> question(s) to review. A question leaves the list once answered correctly.</>}
      </div>
      {topicsPresent.length > 0 && (
        <StackGrid
          options={[allStacksOption(DR ? "Ga3 lmawadie3" : FR ? "Tous les sujets" : "All topics"), ...stackOptions(topicsPresent)]}
          value={reviewTopic}
          onSelect={setReviewTopic}
          label={DR ? "Filter 7sab stack :" : FR ? "Filtrer par stack :" : "Filter by stack:"}
          FR={FR}
        />
      )}
    </Wizard>
  );
};

// ---------------- COURS (NOTES) WIZARD ----------------
// Step 1: Stack → Open course
const NotesWizard = () => {
  const { langue, setlangue, langueTrans, setNotesOpen } = useContext(LangueContext);
  const FR = langueTrans === "FR";
  const DR = langueTrans === "DR";

  return (
    <Wizard
      step={1}
      totalSteps={1}
      title={DR ? "Doros" : FR ? "Fiches de révision" : "Revision notes"}
      onBack={() => {}}
      onNext={() => setNotesOpen(true)}
      nextLabel={DR ? "7el lcours" : FR ? "Ouvrir le cours" : "Open course"}
    >
      <p className="intro-desc">
        {DR
          ? "Khtar stack w 9leb doros, fikra b fikra."
          : FR
          ? "Choisissez un stack et parcourez les fiches, une notion à la fois."
          : "Pick a stack and flip through the notes, one concept at a time."}
      </p>
      <StackGrid
        options={stackOptions(TOPIC_KEYS)}
        value={langue}
        onSelect={setlangue}
        label={FR ? "Stack :" : "Stack:"}
        FR={FR}
      />
    </Wizard>
  );
};

export const QuizStart = ({questions}) => {
const {langue,setlangue,langueTrans,gameStarted,setGameStarted,mode,setMode,
  setGameFinished,setshowCorrectAnswer,setIsremoved,setMenuOpen,menuOpen,
  setNotesOpen} =useContext(LangueContext)

const selectMode = (m) => {
  setMode(m);
  if ((m === 'quiz' || m === 'notes') && !TOPIC_KEYS.includes(langue)) setlangue('React');
  setMenuOpen(false);
  setGameStarted(false);
  setGameFinished(false);
  setshowCorrectAnswer(false);
  setIsremoved(false);
  setNotesOpen(false);
};

const goToMenu = () => {
  setGameStarted(false);
  setMenuOpen(true);
  setNotesOpen(false);
};

  return (
   <>
      {gameStarted ? (
        <div className="mode-selector">
          {MODES.map((m) => (
            <button
              key={m.id}
              type="button"
              className={`mode-button ${mode === m.id ? 'mode-active' : ''}`}
              onClick={() => selectMode(m.id)}
            >
              {langueTrans === "DR" ? m.dr : langueTrans === "FR" ? m.fr : m.en}
            </button>
          ))}
        </div>
      ) : menuOpen ? (
        <Menu onSelect={selectMode} />
      ) : (
        <>
          {mode === 'quiz' && <QuizWizard questions={questions} />}
          {mode === 'code' && <CodeWizard questions={questions} />}
          {mode === 'exam' && <ExamWizard />}
          {mode === 'interview' && <InterviewWizard />}
          {mode === 'blitz' && <BlitzWizard />}
          {mode === 'daily' && <DailyWizard />}
          {mode === 'review' && <ReviewWizard />}
          {mode === 'notes' && <NotesWizard />}
          {mode === 'progress' && (
            <>
              <div>
                <button type="button" className="menu-back" onClick={goToMenu}>
                  ← Menu
                </button>
              </div>
              <Progress />
            </>
          )}
        </>
      )}
   </>
  )
}
