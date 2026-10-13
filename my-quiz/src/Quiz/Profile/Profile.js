import React, { useState, useContext } from 'react';
import './Profile.css';
import { LangueContext } from '../../Context/LangueContext';
import { TOPIC_LABELS } from '../Data/QuestionAllData';
import {
  AVATAR_COLORS,
  getXP,
  getRank,
  getProfileStats,
  getStreak,
} from '../Data/storage';

const initials = (name) =>
  name
    .trim()
    .split(/\s+/)
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

export const Profile = () => {
  const { langueTrans, profile, updateProfile, setMenuOpen, setMode } =
    useContext(LangueContext);
  const FR = langueTrans === 'FR';
  const DR = langueTrans === 'DR';

  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(profile.name);
  const [color, setColor] = useState(profile.color);

  // Recompute from localStorage on each render so stats are always fresh
  const xp = getXP();
  const rank = getRank(xp);
  const stats = getProfileStats();
  const streak = getStreak();

  const save = () => {
    updateProfile({ name, color });
    setEditing(false);
  };

  const goMenu = () => {
    setMode('quiz');
    setMenuOpen(true);
  };

  const STATS = [
    { value: stats.sessions, en: 'Sessions', fr: 'Sessions', dr: 'Sessions' },
    { value: stats.answered, en: 'Questions', fr: 'Questions', dr: 'As2ila' },
    { value: `${stats.avg}%`, en: 'Average', fr: 'Moyenne', dr: 'Lmo3adal' },
    { value: `${stats.best}%`, en: 'Best score', fr: 'Meilleur score', dr: 'A7san score' },
    { value: `🔥 ${streak}`, en: 'Day streak', fr: 'Série (jours)', dr: 'Streak dyal nhar' },
    { value: `${xp} XP`, en: 'Experience', fr: 'Expérience', dr: 'Experience' },
  ];

  return (
    <div className="profile">
      <button type="button" className="profile-back" onClick={goMenu}>
        ← Menu
      </button>

      <div className="profile-card">
        <div
          className="profile-avatar"
          style={{ background: profile.color }}
          aria-hidden="true"
        >
          {initials(profile.name)}
        </div>
        <div className="profile-identity">
          <h2 className="profile-name">{profile.name}</h2>
          <span className="profile-rank">
            {DR ? rank.current.dr : FR ? rank.current.fr : rank.current.en}
          </span>
        </div>
        <button
          type="button"
          className="profile-edit-btn"
          onClick={() => {
            setName(profile.name);
            setColor(profile.color);
            setEditing((e) => !e);
          }}
        >
          {editing ? (DR ? 'Lghi' : FR ? 'Annuler' : 'Cancel') : DR ? 'Beddel' : FR ? 'Modifier' : 'Edit'}
        </button>
      </div>

      {editing && (
        <div className="profile-editor">
          <label className="profile-field">
            <span>{DR ? 'Smiya' : FR ? 'Nom' : 'Name'}</span>
            <input
              type="text"
              value={name}
              maxLength={24}
              onChange={(e) => setName(e.target.value)}
              placeholder={DR ? 'Smiytek' : FR ? 'Votre nom' : 'Your name'}
            />
          </label>
          <div className="profile-colors">
            {AVATAR_COLORS.map((c) => (
              <button
                key={c}
                type="button"
                className={`profile-color ${color === c ? 'profile-color-active' : ''}`}
                style={{ background: c }}
                onClick={() => setColor(c)}
                aria-label={c}
              />
            ))}
          </div>
          <button type="button" className="profile-save-btn" onClick={save}>
            {DR ? 'Sejjel' : FR ? 'Enregistrer' : 'Save'}
          </button>
        </div>
      )}

      <div className="profile-xp">
        <div className="profile-xp-row">
          <span className="profile-xp-label">{xp} XP</span>
          {rank.next ? (
            <span className="profile-xp-next">
              {DR ? 'Li jay :' : FR ? 'Prochain :' : 'Next:'} {DR ? rank.next.dr : FR ? rank.next.fr : rank.next.en} ·{' '}
              {rank.next.min} XP
            </span>
          ) : (
            <span className="profile-xp-next">
              {DR ? 'Wselti l a3la mostawa' : FR ? 'Rang maximum atteint' : 'Max rank reached'}
            </span>
          )}
        </div>
        <div className="profile-xp-bar">
          <div
            className="profile-xp-fill"
            style={{ width: `${rank.progress}%` }}
          />
        </div>
      </div>

      <h3 className="profile-section-title">
        {DR ? 'L7sabat' : FR ? 'Statistiques' : 'Statistics'}
      </h3>
      <div className="profile-stats">
        {STATS.map((s) => (
          <div key={s.en} className="profile-stat">
            <span className="profile-stat-value">{s.value}</span>
            <span className="profile-stat-label">{DR ? s.dr : FR ? s.fr : s.en}</span>
          </div>
        ))}
      </div>

      <h3 className="profile-section-title">
        {DR ? 'Lmo3adal 7sab stack' : FR ? 'Moyenne par stack' : 'Average per stack'}
      </h3>
      {stats.stacks.length === 0 ? (
        <p className="profile-empty">
          {DR
            ? 'Kmel chi quiz bach tchouf lmo3adal dyalk 7sab stack.'
            : FR
            ? 'Terminez des quiz pour voir vos moyennes par stack.'
            : 'Finish some quizzes to see your per-stack averages.'}
        </p>
      ) : (
        <div className="profile-stacks">
          {stats.stacks.map((s) => (
            <div key={s.topic} className="profile-stack">
              <div className="profile-stack-row">
                <span className="profile-stack-name">
                  {TOPIC_LABELS[s.topic] || s.topic}
                </span>
                <span className="profile-stack-avg">{s.avg}%</span>
              </div>
              <div className="profile-stack-bar">
                <div
                  className="profile-stack-fill"
                  style={{ width: `${Math.min(100, s.avg)}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
