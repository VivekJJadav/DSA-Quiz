import { useCallback, useState } from "react";
import QUESTION from "../Questions";
import Question from "./Question";
import Summary from "./Summary";

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuitionIndex = userAnswers.length;
  const quizIsComplete = activeQuitionIndex === QUESTION.length;

  const selectedAnswerHandler = useCallback((selectedAnswer) => {
    setUserAnswers((prevAnswer) => {
      return [...prevAnswer, selectedAnswer];
    });
  }, []);

  const skipAnswerHandler = useCallback(
    () => selectedAnswerHandler(null),
    [selectedAnswerHandler]
  );

  if (quizIsComplete) {
    return <Summary userAnswers={userAnswers} />;
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuitionIndex}
        index={activeQuitionIndex}
        onSelectAnswer={selectedAnswerHandler}
        onSkipAnswer={skipAnswerHandler}
      />
    </div>
  );
};

export default Quiz;
