import React, { useContext, useState } from 'react'
import './Topbar.css'
import { LangueContext } from '../../Context/LangueContext'

export const Topbar = () => {
  const { langueTrans, setlangueTrans } = useContext(LangueContext)

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
    <div className='translate'>
      {LangsTranslate}
    </div>
  )
}
