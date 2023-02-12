import React, { useEffect, useState } from 'react';
import Quistion from './Quistion';
import "../Style/Quiz.css"

function Quiz(props) {
  const [qustion, setQustion] = useState([])


  useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=5&category=15&difficulty=easy&type=multiple')
      .then(data => data.json())
      .then(final => {
        const transformedData = final.results.map(question => {
          return {
            ...question,
            question: question.question.replace(/&quot;/g, '"').replace(/&quot;/g, "'").replace(/&#039;/g, "'").replace(/&ouml;/g, "ö").replace(/&oacute;/g, 'ó').replace(/&amp;/g, "&").replace(/&eacute;/g, "é").replace(/&reg;/g, "®").replace(/&trade;/g, "™"),
            incorrect_answers: question.incorrect_answers.map(ans => 
              ans.replace(/&quot;/g, '"').replace(/&quot;/g, "'").replace(/&#039;/g, "'").replace(/&ouml;/g, "ö").replace(/&oacute;/g, 'ó').replace(/&amp;/g, "&").replace(/&eacute;/g, "é").replace(/&reg;/g, "®").replace(/&trade;/g, "™")),
            correct_answer: question.correct_answer.replace(/&quot;/g, '"').replace(/&quot;/g, "'").replace(/&#039;/g, "'").replace(/&ouml;/g, "ö").replace(/&oacute;/g, 'ó').replace(/&amp;/g, "&").replace(/&eacute;/g, "é").replace(/&reg;/g, "®").replace(/&trade;/g, "™")
          };
        });
        setQustion(transformedData);
      });
  }, []);

  return (
    <div className='Quiz-B'>  
        <Quistion
        questions={qustion}
        Start={props.Start}
        setStart={props.setStart}
        />
    </div>
  )
}

export default Quiz





// handel quistion
// handel ansers
// 