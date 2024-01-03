import { useRef } from "react";

function Answers({ answersList, selectedAnswer, answerState, onSelect }) {
  // shuffle the answers order
  const shuffledAnswers = useRef();

  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answersList];
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }

  return (
    <ul id="answers">
      {shuffledAnswers.current.map((answer) => {
        const isSelected = selectedAnswer === answer;
        let cssClass = "";
        if (answerState === "answered" && isSelected) cssClass = "selected";

        if ((answerState === "correct" || answerState === "wrong") && isSelected)
          cssClass = answerState;

        return (
          <li key={answer} className="answer">
            <button
              className={cssClass}
              onClick={() => onSelect(answer)}
              disabled={answerState !== ""}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default Answers;
