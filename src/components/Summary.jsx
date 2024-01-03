import quizCompleteImg from "../assets/quiz-complete.png";
import QUESTIONS from "../questions.js";

export default function Summary({ userAnswers }) {
  const skippedAnswers = userAnswers.filter((answer) => answer === null);
  const correctAnswers = userAnswers.filter(
    (answer, index) => answer === QUESTIONS[index].answers[0]
  );

  const skippPercentage = Math.round((skippedAnswers.length * 100) / userAnswers.length);
  const correctPercentage = Math.round(
    (correctAnswers.length * 100) / userAnswers.length
  );
  const wrongPercentage = 100 - skippPercentage - correctPercentage;

  return (
    <div id="summary">
      <img src={quizCompleteImg} alt="Quiz is complete" />
      <h2>Quiz completed</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippPercentage}%</span>
          <span className="text">skipped</span>
        </p>
        <p>
          <span className="number">{correctPercentage}%</span>
          <span className="text">answered correctly</span>
        </p>
        <p>
          <span className="number">{wrongPercentage}%</span>
          <span className="text">answered incorrectly</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((answer, index) => {
          let answerStyle = "user-answer";

          if (answer === null) answerStyle += " skipped";
          else if (answer === QUESTIONS[index].answers[0]) answerStyle += " correct";
          else answerStyle += " wrong";

          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{QUESTIONS[index].text}</p>
              <p className={answerStyle}>{answer ?? "Skipped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
