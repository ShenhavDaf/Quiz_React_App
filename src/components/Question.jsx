import { useState } from "react";
import QUESTIONS from "../questions.js";
import Timer from "./Timer.jsx";
import Answers from "./Answers.jsx";

function Question({ questionIndex, onSelectAnswer, onSkip }) {
  const [answer, setAnswer] = useState({
    selectedAnswer: "",
    isCorrect: null,
  });

  let timer = 10000;
  if (answer.selectedAnswer) {
    timer = 1000;
  }

  if (answer.isCorrect !== null) {
    timer = 2000;
  }

  function handleSelectAnswer(answer) {
    setAnswer({
      selectedAnswer: answer,
      isCorrect: null,
    });

    setTimeout(() => {
      setAnswer({
        selectedAnswer: answer,
        isCorrect: answer === QUESTIONS[questionIndex].answers[0],
      });

      setTimeout(() => {
        onSelectAnswer(answer);
      }, 2000);
    }, 1000);
  }

  let answerState = "";
  if (answer.selectedAnswer && answer.isCorrect !== null)
    answerState = answer.isCorrect ? "correct" : "wrong";
  else if (answer.selectedAnswer) answerState = "answered";

  return (
    <div id="question">
      <Timer
        key={timer}
        timeout={timer}
        onTimeout={answer.selectedAnswer === "" ? onSkip : null}
        mode={answerState}
      />
      <h2>{QUESTIONS[questionIndex].text}</h2>
      <Answers
        answersList={QUESTIONS[questionIndex].answers}
        selectedAnswer={answer.selectedAnswer}
        answerState={answerState}
        onSelect={handleSelectAnswer}
      />
    </div>
  );
}

export default Question;
