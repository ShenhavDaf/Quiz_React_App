import { useCallback, useState } from "react";
import Question from "./Question.jsx";
import Summary from "./Summary.jsx";
import QUESTIONS from "../questions.js";

function Quiz() {
  const [userAnswers, setuserAnswers] = useState([]); // answers selected by the user from all the questions in the Quiz, not for every question separately
  const activeQuestionIndex = userAnswers.length;
  const quizIsComplete = userAnswers.length === QUESTIONS.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(answerText) {
    setuserAnswers((prevAnswers) => {
      return [...prevAnswers, answerText];
    });
  }, []);

  const handleTimeExpired = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if (quizIsComplete) return <Summary userAnswers={userAnswers} />;

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        questionIndex={activeQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
        onSkip={handleTimeExpired}
      />
    </div>
  );
}

export default Quiz;
