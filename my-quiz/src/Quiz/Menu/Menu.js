import React, { useContext } from 'react';
import './Menu.css';
import { LangueContext } from '../../Context/LangueContext';
import { getTodayResult, getStreak } from '../Data/storage';

// Grouped home menu: 4 sections, each card opens one mode's setup step.
// Exported for reuse by the navigation drawer.
export const SECTIONS = [
  {
    id: 'learn',
    icon: '📚',
    en: 'Learn',
    fr: 'Apprendre',
    dr: 'T3lem',
    cards: [
      {
        mode: 'notes', icon: '📖',
        en: 'Course', fr: 'Cours', dr: 'Cours',
        enDesc: 'Revision notes, one concept at a time',
        frDesc: 'Fiches de révision, une notion à la fois',
        drDesc: 'Doros, fikra b fikra',
      },
      {
        mode: 'resume', icon: '🗂️',
        en: 'Stack resumes', fr: 'Résumés stacks', dr: 'Molakhasat',
        enDesc: 'Each stack condensed, in Darija',
        frDesc: "L'essentiel de chaque stack, en darija",
        drDesc: 'Molakhas morakaz dyal kol stack b darija',
      },
    ],
  },
  {
    id: 'practice',
    icon: '💪',
    en: 'Practice',
    fr: "S'entraîner",
    dr: 'Tderen',
    cards: [
      {
        mode: 'quiz', icon: '🧠',
        en: 'Quiz', fr: 'Quiz', dr: 'Quiz',
        enDesc: 'Per-stack quiz, levels 1 → 5',
        frDesc: 'Quiz par stack, niveaux 1 → 5',
        drDesc: 'Quiz 7sab stack, mostawayat 1 → 5',
      },
      {
        mode: 'code', icon: '💻',
        en: 'Code challenge', fr: 'Défi code', dr: 'Tahadi code',
        enDesc: 'Guess what the code outputs',
        frDesc: 'Devinez ce que le code affiche',
        drDesc: 'Tkhmen chno ghadi ykhrrej lcode',
      },
      {
        mode: 'blitz', icon: '⚡',
        en: 'True/False blitz', fr: 'Blitz Vrai/Faux', dr: 'Blitz S7i7/Ghalt',
        enDesc: '60 seconds, as many as you can',
        frDesc: '60 secondes, un maximum de réponses',
        drDesc: '60 tanya, jawb 9ed ma t9der',
      },
    ],
  },
  {
    id: 'test',
    icon: '🎯',
    en: 'Test yourself',
    fr: 'Se tester',
    dr: 'Khtaber rassek',
    cards: [
      {
        mode: 'exam', icon: '📝',
        en: 'Custom exam', fr: 'Examen', dr: 'Mtihan',
        enDesc: 'Pick stacks, level and question count',
        frDesc: 'Choisissez stacks, niveau et questions',
        drDesc: 'Khtar stacks, lmostawa w 3adad las2ila',
      },
      {
        mode: 'daily', icon: '📅',
        en: 'Daily challenge', fr: 'Défi du jour', dr: 'Tahadi lyoum',
        enDesc: '10 mixed questions, keep your streak',
        frDesc: '10 questions mélangées, gardez la série',
        drDesc: '10 dyal las2ila mkheltin, 7afed 3la streak',
        badge: 'daily',
      },
      {
        mode: 'interview', icon: '🎤',
        en: 'Interview', fr: 'Entretien', dr: 'Interview',
        enDesc: 'Interview Q&A with self-assessment',
        frDesc: "Questions d'entretien et auto-évaluation",
        drDesc: 'As2ila dyal interview w t9yim dyalk',
      },
    ],
  },
  {
    id: 'follow',
    icon: '📊',
    en: 'My progress',
    fr: 'Suivi',
    dr: 'Taqadom dyali',
    cards: [
      {
        mode: 'review', icon: '🔁',
        en: 'Mistakes', fr: 'Erreurs', dr: 'Aghlat',
        enDesc: 'Re-quiz only your wrong answers',
        frDesc: 'Rejouez uniquement vos erreurs',
        drDesc: '3awd ghir las2ila li ghltti fihom',
        badge: 'mistakes',
      },
      {
        mode: 'progress', icon: '📈',
        en: 'Progress', fr: 'Progrès', dr: 'Taqadom',
        enDesc: 'Best and average score per stack',
        frDesc: 'Meilleur score et moyenne par stack',
        drDesc: 'A7san score w lmo3adal 7sab stack',
      },
    ],
    weakSpot: true,
  },
];

export const Menu = ({ onSelect }) => {
  const { langueTrans } = useContext(LangueContext);
  const FR = langueTrans === 'FR';
  const DR = langueTrans === 'DR';
  const streak = getStreak();
  const dailyDone = !!getTodayResult();

  // Home is intentionally minimal: hero + status + 3 quick actions.
  // Everything else lives in the hamburger drawer.
  const quickActions = [
    {
      mode: 'quiz', icon: '🧠',
      en: 'Start quiz', fr: 'Démarrer un quiz', dr: 'Bda quiz',
    },
    {
      mode: 'daily', icon: '📅',
      en: 'Daily challenge', fr: 'Défi du jour', dr: 'Tahadi lyoum',
      badge: dailyDone ? '✓' : null,
    },
    {
      mode: 'notes', icon: '📖',
      en: 'Course', fr: 'Cours', dr: 'Cours',
    },
  ];

  return (
    <div className="menu menu-home">
      <div className="menu-hero">
        <img
          src={`${process.env.PUBLIC_URL}/logo.svg`}
          alt="Quiz App logo"
          className="menu-logo"
        />
        <h1 className="menu-app-name">Quiz App</h1>
        <p className="menu-tagline">
          {DR
            ? "T9an stacks dyalk, quiz b quiz"
            : FR
            ? "Maîtrisez vos stacks, un quiz à la fois"
            : "Master your dev stacks, one quiz at a time"}
        </p>
      </div>

      <div className="menu-status-row">
        {streak > 0 && (
          <span className="menu-status-pill menu-status-streak">
            🔥 {streak} {DR ? 'nhar' : FR ? (streak > 1 ? 'jours' : 'jour') : (streak > 1 ? 'days' : 'day')}
          </span>
        )}
        <span className={`menu-status-pill ${dailyDone ? 'menu-status-done' : ''}`}>
          {dailyDone
            ? (DR ? '📅 Tahadi lyoum ✓' : FR ? '📅 Défi du jour ✓' : '📅 Daily done ✓')
            : (DR ? '📅 Tahadi lyoum mazal' : FR ? '📅 Défi du jour à faire' : '📅 Daily challenge pending')}
        </span>
      </div>

      <div className="menu-quick-actions">
        {quickActions.map((a) => (
          <button
            key={a.mode}
            type="button"
            className="menu-quick-btn"
            onClick={() => onSelect(a.mode)}
          >
            <span className="menu-quick-icon" aria-hidden="true">{a.icon}</span>
            <span>{DR ? a.dr : FR ? a.fr : a.en}</span>
            {a.badge && <span className="menu-quick-badge">{a.badge}</span>}
          </button>
        ))}
      </div>

      <p className="menu-drawer-hint">
        {DR
          ? '☰ Ga3 lkhar kayn f menu'
          : FR
          ? '☰ Tout le reste est dans le menu'
          : '☰ Everything else is in the menu'}
      </p>
    </div>
  );
};
