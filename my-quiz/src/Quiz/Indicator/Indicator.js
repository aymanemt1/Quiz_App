import React, { useContext } from 'react'
import "./Indicator.css"
import { LangueContext } from '../../Context/LangueContext';
export const Indicator = ({questions,question}) => {
 
  const {gameStarted} =useContext(LangueContext)
    const indicatorBg = (index) => {

        if (question.value > index) {
          return "#a855f7";
        } else if (question.value === index) {
          return "#f0abfc";
        } else {
          return "rgba(168,85,247,.18)";
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
