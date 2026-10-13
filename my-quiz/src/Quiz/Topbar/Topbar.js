import React, { useContext } from 'react'
import './Topbar.css'
import { LangueContext } from '../../Context/LangueContext'
import { Drawer } from '../Drawer/Drawer'
import { getStreak } from '../Data/storage'

export const Topbar = () => {
  const { langueTrans, setlangueTrans, setMode, setMenuOpen, setGameStarted, setDrawerOpen, profile } = useContext(LangueContext)
  const FR = langueTrans === 'FR'
  const DR = langueTrans === 'DR'
  const streak = getStreak()

  const openProfile = () => {
    setGameStarted(false)
    setMode('profile')
    setMenuOpen(false)
  }

  const initial = (profile.name || 'A').trim().charAt(0).toUpperCase()

  const Langs = [
    { id: 'EN', text: 'EN', label: 'English' },
    { id: 'FR', text: 'FR', label: 'Français' },
    { id: 'DR', text: 'DR', label: 'Darija' },
  ]

  const hanldTranslate = (id) => {
    setlangueTrans(id)
  }

  const langGroupLabel = DR ? 'Logha' : FR ? 'Langue' : 'Language'

  const LangsTranslate = Langs.map((lang) => (
    <button
      key={lang.id}
      type="button"
      className={langueTrans === lang.id ? 'active' : 'not-active'}
      onClick={() => hanldTranslate(lang.id)}
      aria-pressed={langueTrans === lang.id}
      aria-label={lang.label}
    >
      {lang.text}
    </button>
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
        {streak > 0 && (
          <span className='topbar-streak' title={DR ? `${streak} nhar mor b3d` : FR ? `${streak} jours de suite` : `${streak} days in a row`}>
            🔥 {streak}
          </span>
        )}
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
        <div className='translate' role="group" aria-label={langGroupLabel}>
          {LangsTranslate}
        </div>
      </div>
    </div>
    <Drawer />
    </>
  )
}
