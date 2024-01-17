import React, { useState, useEffect, useRef, useContext } from 'react';
import "./Question.css"

import gsap from 'gsap';
import { LangueContext } from '../../Context/LangueContext';


function Question({
    data,
    buttonText,
    hasButton = true,
    onQuestionButtonClick,
    showAnswer =false,
    markSelection = null
  }) {
    
    const {setGameFinished,setshowCorrectAnswer,showCorrectAnswer,isremoved,setIsremoved} =useContext(LangueContext)
  
    const [answer, setAnswer] = useState(null);
    const parseValue = (value) => (value ? parseInt(value.split("-")[1]) : null);
    const questionRef = useRef(null);
 
    useEffect(() => {
      gsap.fromTo(
        questionRef.current.querySelector(".question-text"),
        {
          x: 40,
          opacity: 0
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.4
        }
      );
      gsap.fromTo(
        questionRef.current.querySelectorAll("li"),
        {
          opacity: 0,
          x: 40
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.4,
          stagger: 0.1
        }
      );
      setshowCorrectAnswer(showAnswer)
    }, [data]);


    if(showAnswer === true){
      setGameFinished(true)
    }

    if(answer){
      setshowCorrectAnswer(false)
    }
  
    console.log(showCorrectAnswer)
   
   const styleshowCorrectAnswer = showCorrectAnswer ? 'showCorrectAnswer' : '';
    return (
      <div className="question" ref={questionRef}>
        <div className="question-inner">
          <h2 className="question-text">{data.text}</h2>
          <ul className="question-answers">
            {data.answers.map((text, index) => {
              const value = `q${data.id}-${index}`;
              return (
                <li
                id='list'
                key={index}
                  className={
                    index === data.correct && showCorrectAnswer ? "is-true" : ""
                  }
                  data-selected={markSelection === index ? true : null}
                >
                  <input
                    type="radio"
                    name={`q_${data.id}`}
                    value={value}
                    id={value}
                    onChange={(e) => setAnswer(e.target.value)}
                   
                    checked={
                      showCorrectAnswer === false ? answer === value : markSelection === index
                    }
                  />
                  <label



   id={
  isremoved && index !== data.correct && index !== ((data.correct + 2) ) % data.answers.length && index !== (data.correct + 2) % data.answers.length
    ? 'DisabledAnswer'
    : ''
} 

                    className={`question-answer ${styleshowCorrectAnswer}`} htmlFor={value}>
                    {text}
                  </label>
                </li>
              );
            })}
          </ul>
        </div>
        {hasButton && (
          <button
            className="question-button"
           onClick={() => {
      setAnswer('');
      setIsremoved(false)
      setshowCorrectAnswer(false)
      onQuestionButtonClick(parseValue(answer), data);
    }}
          >
            {buttonText}
          </button>
         
        )}
      </div>
    );
  }

export default Question;
