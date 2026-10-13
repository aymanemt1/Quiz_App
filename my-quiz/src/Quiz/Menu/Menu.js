import React, { useContext } from 'react';
import './Menu.css';
import { LangueContext } from '../../Context/LangueContext';
import { WeakSpot } from '../WeakSpot/WeakSpot';
import { getMistakeCount, getTodayResult } from '../Data/storage';

// Grouped home menu: 4 sections, each card opens one mode's setup step.
const SECTIONS = [
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
  const mistakeCount = getMistakeCount(langueTrans);
  const dailyDone = !!getTodayResult();

  const badgeFor = (badge) => {
    if (badge === 'mistakes' && mistakeCount > 0) {
      return <span className="menu-card-badge">{mistakeCount}</span>;
    }
    if (badge === 'daily' && dailyDone) {
      return <span className="menu-card-badge menu-card-badge-done">✓</span>;
    }
    return null;
  };

  return (
    <div className="menu">
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
      {SECTIONS.map((s) => (
        <section key={s.id} className="menu-section">
          <h2 className="menu-section-title">
            <span className="menu-section-icon" aria-hidden="true">{s.icon}</span>
            {FR ? s.fr : s.en}
          </h2>
          <div className="menu-cards">
            {s.cards.map((c) => (
              <button
                key={c.mode}
                type="button"
                className="menu-card"
                onClick={() => onSelect(c.mode)}
              >
                <span className="menu-card-icon" aria-hidden="true">{c.icon}</span>
                <span className="menu-card-text">
                  <span className="menu-card-title">{FR ? c.fr : c.en}</span>
                  <span className="menu-card-desc">{FR ? c.frDesc : c.enDesc}</span>
                </span>
                {badgeFor(c.badge)}
                <span className="menu-card-arrow" aria-hidden="true">›</span>
              </button>
            ))}
          </div>
          {s.weakSpot && (
            <div className="menu-weakspot">
              <WeakSpot />
            </div>
          )}
        </section>
      ))}
    </div>
  );
};
