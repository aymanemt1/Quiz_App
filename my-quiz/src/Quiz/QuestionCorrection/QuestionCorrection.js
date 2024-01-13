import React, { useContext } from 'react';
import Question from '../Questions/Question';
import "./QuestionCorrect.css"

function QuestionCorrection({ data}) {

  return (
    <div className="correction">
      {data.map((question) => {
        return (
          <Question
            hasButton={false} 
            markSelection={question.selection} 
            showAnswer={true}
            data={question}
          />
        );
      })}
    </div>
  );
}

export default QuestionCorrection;
