import React, { useContext } from 'react'
import './Topbar.css'
import { LangueContext } from '../../Context/LangueContext'
import { Drawer } from '../Drawer/Drawer'
import { getStreak, getTodayResult } from '../Data/storage'

export const Topbar = () => {
  const { langueTrans, setlangueTrans, setMode, setMenuOpen, setGameStarted, setDrawerOpen, profile } = useContext(LangueContext)
  const FR = langueTrans === 'FR'
  const DR = langueTrans === 'DR'
  const streak = getStreak()
  const dailyDone = !!getTodayResult()

  const openProfile = () => {
    setGameStarted(false)
    setMode('profile')
    setMenuOpen(false)
  }

  const goHome = () => {
    setDrawerOpen(false)
    setMenuOpen(true)
    setGameStarted(false)
  }

  const initial = (profile.name || 'A').trim().charAt(0).toUpperCase()

  const Langs = [
    { id: 'EN', text: 'EN' },
    { id: 'FR', text: 'FR' },
    { id: 'DR', text: 'DR' },
  ]

  const hanldTranslate = (id) => {
    setlangueTrans(id)
  }

  const LangsTranslate = Langs.map((lang) => (
    <span
      key={lang.id}
      className={langueTrans === lang.id ? 'active' : 'not-active'}
      onClick={() => hanldTranslate(lang.id)}
    >
      {lang.text}
    </span>
  ))

  return (
    <>
    <div className='topbar'>
      <div className='topbar-left'>
        <button
          type='button'
          className='topbar-burger'
          onClick={() => setDrawerOpen(true)}
          aria-label={DR ? '7el menu' : FR ? 'Ouvrir le menu' : 'Open menu'}
          title={FR ? 'Menu' : 'Menu'}
        >
          <span aria-hidden='true' />
          <span aria-hidden='true' />
          <span aria-hidden='true' />
        </button>
        <img
          src={`${process.env.PUBLIC_URL}/logo.svg`}
          alt="Quiz App"
          className='topbar-logo'
          onClick={goHome}
        />
        {streak > 0 && (
          <span className='topbar-streak' title={DR ? `${streak} nhar mor b3d` : FR ? `${streak} jours de suite` : `${streak} days in a row`}>
            🔥 {streak}
          </span>
        )}
        <span
          className={`topbar-daily ${dailyDone ? 'daily-done' : 'daily-todo'}`}
          title={dailyDone ? (DR ? 'Tahadi lyoum saliti' : FR ? 'Défi du jour terminé' : 'Daily challenge done') : (DR ? 'Tahadi lyoum mazal' : FR ? 'Défi du jour à faire' : 'Daily challenge pending')}
        >
          📅{dailyDone ? ' ✓' : ''}
        </span>
      </div>
      <div className='topbar-right'>
        <button
          type='button'
          className='topbar-avatar'
          style={{ background: profile.color }}
          onClick={openProfile}
          title={DR ? 'Profile' : FR ? 'Profil' : 'Profile'}
          aria-label={DR ? 'Profile' : FR ? 'Profil' : 'Profile'}
        >
          {initial}
        </button>
        <div className='translate'>
          {LangsTranslate}
        </div>
      </div>
    </div>
    <Drawer />
    </>
  )
}
