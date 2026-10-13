import React, { useContext } from 'react'
import './Topbar.css'
import { LangueContext } from '../../Context/LangueContext'
import { getStreak, getTodayResult } from '../Data/storage'

export const Topbar = () => {
  const { langueTrans, setlangueTrans } = useContext(LangueContext)
  const FR = langueTrans === 'FR'
  const streak = getStreak()
  const dailyDone = !!getTodayResult()

  const Langs = [
    { id: 'EN', text: 'EN' },
    { id: 'FR', text: 'FR' },
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
    <div className='topbar'>
      <div className='topbar-left'>
        {streak > 0 && (
          <span className='topbar-streak' title={FR ? `${streak} jours de suite` : `${streak} days in a row`}>
            🔥 {streak}
          </span>
        )}
        <span
          className={`topbar-daily ${dailyDone ? 'daily-done' : 'daily-todo'}`}
          title={dailyDone ? (FR ? 'Défi du jour terminé' : 'Daily challenge done') : (FR ? 'Défi du jour à faire' : 'Daily challenge pending')}
        >
          📅{dailyDone ? ' ✓' : ''}
        </span>
      </div>
      <div className='translate'>
        {LangsTranslate}
      </div>
    </div>
  )
}
