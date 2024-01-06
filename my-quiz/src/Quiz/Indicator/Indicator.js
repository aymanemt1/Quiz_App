import React, { useContext, useEffect, useRef } from 'react'
import "./Indicator.css"
import { LangueContext } from '../../Context/LangueContext';
export const Indicator = ({questions,question}) => {
 
  const {gameStarted} =useContext(LangueContext)
    const indicatorBg = (index) => {

        if (question.value > index) {
          
          return "#fff";
        } else if (question.value === index) {
          return "#29b5d5";
        } else {
          return "rgba(255,255,255,.2)";
        }

      };
   

      // const lastindicator = (id)=>{
      //   if(id === 10){
      //     return 'hhhhh';
      //   }
      // }

  return (
    <>

    {gameStarted && (
        <div className="indicator">
          {questions.map((q, index) => {
            return (
              <span
              key={index}
                className="indicator-item"
                style={{
                  backgroundColor: indicatorBg(index),
                  // content:lastindicator(q.id)
                }}
              />
            );
          })}
        </div>
   
      )}
    </>

  )
}
