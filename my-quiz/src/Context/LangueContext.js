import React, { createContext, useState } from 'react'

export const LangueContext = createContext()

 export const LangueProvider = ({children}) => {

   const [langueTrans,setlangueTrans]=useState("EN")
   const [langue,setlangue] =useState('React')
   const [gameFinished, setGameFinished] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [showCorrectAnswer, setshowCorrectAnswer] = useState(null);
  const [isremoved,setIsremoved]=useState(false)

  return (

    <LangueContext.Provider value={{
      langueTrans,setlangueTrans,
      gameFinished,setGameFinished,
      langue,setlangue,
      gameStarted,setGameStarted,
      showCorrectAnswer,setshowCorrectAnswer,
      isremoved,setIsremoved
      }}>
     {children}
    </LangueContext.Provider>
    
  )
}
