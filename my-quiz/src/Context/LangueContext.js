import React, { createContext, useState } from 'react'
import { TOPIC_KEYS } from '../Quiz/Data/QuestionAllData'
import { loadProfile, saveProfile } from '../Quiz/Data/storage'

export const LangueContext = createContext()

 export const LangueProvider = ({children}) => {

   const [langueTrans,setlangueTrans]=useState("EN")
   const [langue,setlangue] =useState('React')
   const [gameFinished, setGameFinished] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [showCorrectAnswer, setshowCorrectAnswer] =useState(null);
  const [isremoved,setIsremoved]=useState(false)
  // 'quiz' | 'exam' | 'daily' | 'interview' | 'review' | 'notes' | 'progress' | 'code' | 'blitz'
  const [mode, setMode] = useState('quiz')
  // 'all' | 1..5 — difficulty filter for quiz & exam
  const [level, setLevel] = useState('all')
  // code-challenge topic: 'All' or one of CODE_TOPICS
  const [codeTopic, setCodeTopic] = useState('All')
  // exam builder state
  const [examTopics, setExamTopics] = useState([...TOPIC_KEYS])
  const [examCount, setExamCount] = useState(20)
  // timed mode: per-question countdown
  const [timed, setTimed] = useState(false)
  const [timePerQuestion, setTimePerQuestion] = useState(30)
  // home menu: true = show grouped menu, false = show selected mode's setup
  const [menuOpen, setMenuOpen] = useState(true)
  // slide-in navigation drawer
  const [drawerOpen, setDrawerOpen] = useState(false)
  // user profile: { name, color }
  const [profile, setProfileState] = useState(() => loadProfile())
  const updateProfile = (p) => setProfileState(saveProfile(p))
  // cours (revision notes) wizard gate: true once the user opens a course
  const [notesOpen, setNotesOpen] = useState(false)
  // mistakes review topic filter: 'All' or a topic key
  const [reviewTopic, setReviewTopic] = useState('All')

  return (

    <LangueContext.Provider value={{
      langueTrans,setlangueTrans,
      gameFinished,setGameFinished,
      langue,setlangue,
      gameStarted,setGameStarted,
      showCorrectAnswer,setshowCorrectAnswer,
      isremoved,setIsremoved,
      mode,setMode,
      level,setLevel,
      codeTopic,setCodeTopic,
      examTopics,setExamTopics,
      examCount,setExamCount,
      timed,setTimed,
      timePerQuestion,setTimePerQuestion,
      menuOpen,setMenuOpen,
      drawerOpen,setDrawerOpen,
      profile,updateProfile,
      notesOpen,setNotesOpen,
      reviewTopic,setReviewTopic
      }}>

     {children}

    </LangueContext.Provider>

  )
}
