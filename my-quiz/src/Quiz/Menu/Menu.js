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
    cards: [
      {
        mode: 'notes', icon: '📖',
        en: 'Course', fr: 'Cours',
        enDesc: 'Revision notes, one concept at a time',
        frDesc: 'Fiches de révision, une notion à la fois',
      },
    ],
  },
  {
    id: 'practice',
    icon: '💪',
    en: 'Practice',
    fr: "S'entraîner",
    cards: [
      {
        mode: 'quiz', icon: '🧠',
        en: 'Quiz', fr: 'Quiz',
        enDesc: 'Per-stack quiz, levels 1 → 5',
        frDesc: 'Quiz par stack, niveaux 1 → 5',
      },
      {
        mode: 'code', icon: '💻',
        en: 'Code challenge', fr: 'Défi code',
        enDesc: 'Guess what the code outputs',
        frDesc: 'Devinez ce que le code affiche',
      },
      {
        mode: 'blitz', icon: '⚡',
        en: 'True/False blitz', fr: 'Blitz Vrai/Faux',
        enDesc: '60 seconds, as many as you can',
        frDesc: '60 secondes, un maximum de réponses',
      },
    ],
  },
  {
    id: 'test',
    icon: '🎯',
    en: 'Test yourself',
    fr: 'Se tester',
    cards: [
      {
        mode: 'exam', icon: '📝',
        en: 'Custom exam', fr: 'Examen',
        enDesc: 'Pick stacks, level and question count',
        frDesc: 'Choisissez stacks, niveau et questions',
      },
      {
        mode: 'daily', icon: '📅',
        en: 'Daily challenge', fr: 'Défi du jour',
        enDesc: '10 mixed questions, keep your streak',
        frDesc: '10 questions mélangées, gardez la série',
        badge: 'daily',
      },
      {
        mode: 'interview', icon: '🎤',
        en: 'Interview', fr: 'Entretien',
        enDesc: 'Interview Q&A with self-assessment',
        frDesc: "Questions d'entretien et auto-évaluation",
      },
    ],
  },
  {
    id: 'follow',
    icon: '📊',
    en: 'My progress',
    fr: 'Suivi',
    cards: [
      {
        mode: 'review', icon: '🔁',
        en: 'Mistakes', fr: 'Erreurs',
        enDesc: 'Re-quiz only your wrong answers',
        frDesc: 'Rejouez uniquement vos erreurs',
        badge: 'mistakes',
      },
      {
        mode: 'progress', icon: '📈',
        en: 'Progress', fr: 'Progrès',
        enDesc: 'Best and average score per stack',
        frDesc: 'Meilleur score et moyenne par stack',
      },
    ],
    weakSpot: true,
  },
];

export const Menu = ({ onSelect }) => {
  const { langueTrans } = useContext(LangueContext);
  const FR = langueTrans === 'FR';
  const streak = getStreak();
  const dailyDone = !!getTodayResult();

  // Home is intentionally minimal: hero + status + 3 quick actions.
  // Everything else lives in the hamburger drawer.
  const quickActions = [
    {
      mode: 'quiz', icon: '🧠',
      en: 'Start quiz', fr: 'Démarrer un quiz',
    },
    {
      mode: 'daily', icon: '📅',
      en: 'Daily challenge', fr: 'Défi du jour',
      badge: dailyDone ? '✓' : null,
    },
    {
      mode: 'notes', icon: '📖',
      en: 'Course', fr: 'Cours',
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
          {FR
            ? "Maîtrisez vos stacks, un quiz à la fois"
            : "Master your dev stacks, one quiz at a time"}
        </p>
      </div>

      <div className="menu-status-row">
        {streak > 0 && (
          <span className="menu-status-pill menu-status-streak">
            🔥 {streak} {FR ? (streak > 1 ? 'jours' : 'jour') : (streak > 1 ? 'days' : 'day')}
          </span>
        )}
        <span className={`menu-status-pill ${dailyDone ? 'menu-status-done' : ''}`}>
          {dailyDone
            ? (FR ? '📅 Défi du jour ✓' : '📅 Daily done ✓')
            : (FR ? '📅 Défi du jour à faire' : '📅 Daily challenge pending')}
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
            <span>{FR ? a.fr : a.en}</span>
            {a.badge && <span className="menu-quick-badge">{a.badge}</span>}
          </button>
        ))}
      </div>

      <p className="menu-drawer-hint">
        {FR
          ? '☰ Tout le reste est dans le menu'
          : '☰ Everything else is in the menu'}
      </p>
    </div>
  );
};
