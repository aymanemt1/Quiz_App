import React, { createContext, useState } from 'react'
import { TOPIC_KEYS } from '../Quiz/Data/QuestionAllData'

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
      timePerQuestion,setTimePerQuestion
      }}>

     {children}

    </LangueContext.Provider>

  )
}
