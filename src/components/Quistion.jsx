import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";

function Question(props) {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [shuffledAnswers, setShuffledAnswers] = useState([]);
  const [result, setResult] = useState(null);

  useEffect(() => {
    let allAnswers = [];
    props.questions.forEach((question) => {
      const { incorrect_answers, correct_answer } = question;
      allAnswers.push([...incorrect_answers, correct_answer]);
    });
    setShuffledAnswers(allAnswers.map(answers => shuffleAnswers(answers)));
  }, [props.Start]);

  function handleAnswerSelection(answer, index) {
    setSelectedAnswers({ ...selectedAnswers, [index]: answer });
  }

  function handleResult() {
    let totalCorrect = 0;
    props.questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correct_answer) {
        totalCorrect++;
      }
    });
    setResult(`You got ${totalCorrect}/${props.questions.length} correct`);
  }

  function handleQuestion(questions) {
    return shuffledAnswers.length !== 0
      ? questions.map((question, index) => {
          const { question: q, correct_answer } = question;

          return (
            <div key={nanoid()} className="quistion">
              <p>{index + 1}. {q}</p>
              <ul>
                {shuffledAnswers[index].map(answer => (
                    <li
                      key={nanoid()}
                      className={
                        result === null
                          ? (answer === selectedAnswers[index]
                              ? "selected-answer"
                              : "")
                          : (answer === correct_answer
                              ? "the_right"
                              : (answer === selectedAnswers[index] ? "T_right" : "W_wrong"))
                      }
                      onClick={() => handleAnswerSelection(answer, index)}
                    >
                      {answer}
                    </li>
                ))}
              </ul>
            </div>
          );
        })
      : null;
  }

  function playAgain() {
    setSelectedAnswers({});
    setResult(null);
    props.setStart(!start);
  }

  return (
    <div className="quiz-container">
      {handleQuestion(props.questions)}

      {result !== null ? (
        <>
          <button onClick={playAgain}>Play Again</button>
          <p className="result">{result}</p>
        </>
      ) : (
        <button onClick={handleResult}>Get Result</button>
      )}
    </div>
  );
}


function shuffleAnswers(answers) {
  return answers.sort(() => Math.random() - 0.5);
}

export default Question;
