import React, { useContext } from 'react';
import './Drawer.css';
import { LangueContext } from '../../Context/LangueContext';
import { SECTIONS } from '../Menu/Menu';
import { WeakSpot } from '../WeakSpot/WeakSpot';
import { TOPIC_KEYS } from '../Data/QuestionAllData';
import { getMistakeCount, getTodayResult } from '../Data/storage';

// Slide-in navigation drawer: the full grouped mode list.
// Rendered inside Topbar so it is reachable from anywhere.
export const Drawer = () => {
  const {
    langueTrans, langue, setlangue, setMode,
    setMenuOpen, setGameStarted, setGameFinished,
    setshowCorrectAnswer, setIsremoved,
    drawerOpen, setDrawerOpen,
  } = useContext(LangueContext);
  const FR = langueTrans === 'FR';
  const mistakeCount = getMistakeCount(langueTrans);
  const dailyDone = !!getTodayResult();

  const close = () => setDrawerOpen(false);

  const resetGame = () => {
    setGameStarted(false);
    setGameFinished(false);
    setshowCorrectAnswer(false);
    setIsremoved(false);
  };

  const goHome = () => {
    resetGame();
    setMenuOpen(true);
    close();
  };

  const selectMode = (m) => {
    setMode(m);
    if ((m === 'quiz' || m === 'notes') && !TOPIC_KEYS.includes(langue)) setlangue('React');
    setMenuOpen(false);
    resetGame();
    close();
  };

  const badgeFor = (badge) => {
    if (badge === 'mistakes' && mistakeCount > 0) {
      return <span className="drawer-badge">{mistakeCount}</span>;
    }
    if (badge === 'daily' && dailyDone) {
      return <span className="drawer-badge drawer-badge-done">✓</span>;
    }
    return null;
  };

  return (
    <div className={`drawer-root ${drawerOpen ? 'drawer-open' : ''}`} aria-hidden={!drawerOpen}>
      <div className="drawer-backdrop" onClick={close} />
      <nav className="drawer-panel" aria-label={FR ? 'Navigation' : 'Navigation'}>
        <div className="drawer-header">
          <img
            src={`${process.env.PUBLIC_URL}/logo.svg`}
            alt=""
            className="drawer-logo"
          />
          <span className="drawer-title">{FR ? 'Menu' : 'Menu'}</span>
          <button
            type="button"
            className="drawer-close"
            onClick={close}
            aria-label={FR ? 'Fermer' : 'Close'}
          >
            ✕
          </button>
        </div>

        <div className="drawer-scroll">
          <button type="button" className="drawer-row drawer-row-home" onClick={goHome}>
            <span className="drawer-row-icon" aria-hidden="true">🏠</span>
            <span className="drawer-row-label">{FR ? 'Accueil' : 'Home'}</span>
          </button>

          {SECTIONS.map((s) => (
            <div key={s.id} className="drawer-section">
              <div className="drawer-section-title">
                <span aria-hidden="true">{s.icon}</span>
                {FR ? s.fr : s.en}
              </div>
              {s.cards.map((c) => (
                <button
                  key={c.mode}
                  type="button"
                  className="drawer-row"
                  onClick={() => selectMode(c.mode)}
                >
                  <span className="drawer-row-icon" aria-hidden="true">{c.icon}</span>
                  <span className="drawer-row-label">{FR ? c.fr : c.en}</span>
                  {badgeFor(c.badge)}
                  <span className="drawer-row-arrow" aria-hidden="true">›</span>
                </button>
              ))}
              {s.weakSpot && (
                <div className="drawer-weakspot" onClick={close}>
                  <WeakSpot />
                </div>
              )}
            </div>
          ))}

          <button
            type="button"
            className="drawer-row drawer-row-profile"
            onClick={() => selectMode('profile')}
          >
            <span className="drawer-row-icon" aria-hidden="true">👤</span>
            <span className="drawer-row-label">{FR ? 'Profil' : 'Profile'}</span>
            <span className="drawer-row-arrow" aria-hidden="true">›</span>
          </button>
        </div>
      </nav>
    </div>
  );
};
