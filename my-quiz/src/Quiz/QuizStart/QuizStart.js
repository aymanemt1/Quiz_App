import React, { useContext, useEffect, useState } from 'react'
import "./QuizStart.css"
import { LangueContext } from '../../Context/LangueContext';

import { driver } from "driver.js";
import "driver.js/dist/driver.css";
export const QuizStart = ({questions}) => {
const {langue,setlangue,langueTrans,gameStarted,setGameStarted} =useContext(LangueContext)



  return (
   <>
    <h1 className="intro-title">{langue} Quiz</h1>

      <select className='select_options' onChange={(e)=>setlangue(e.target.value)}>
        <option value='React'>React</option>
        <option value='Python'>Python</option>
        <option value='Javascript'>Javascript</option>
        <option value='NodeJs'>NodeJs</option>
        <option value='Laravel'>Laravel</option>
        <option value='Php'>Php</option>
        <option value='Html'>Html</option>
        <option value="Css">Css</option>
        <option value="MongoDb">MongoDb</option>
        <option value="Sql">Sql</option>
      </select>
          {!gameStarted && (
            <>
              <p className="intro-desc">
               {langueTrans === "EN" ? 
               `The test contains ${questions.length} questions and there is no time limit.`
               :
               `Le test contient ${questions.length} questions et il n'y a pas de limite de temps.`
              } 
              </p>

              <button
                className="intro-button"
                onClick={() => setGameStarted(true)}
              >
                {langueTrans === "EN" ? "Start Quiz" : 'Commencer Quiz'} 
              </button>
            </>
          )}
   </>
  )
}
