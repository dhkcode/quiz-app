import React, { useContext, useEffect } from "react";
import { Typography } from "@material-ui/core";
import { QuizContext } from "../helpers";
import { Button } from ".";

export default function QuestionCard({
  correct_answer,
  incorrect_answers,
  classes,
  quiz,
}) {
  const {
    setGameState,
    currentQuestion,
    setCurrentQuestion,
    score,
    setScore,
  } = useContext(QuizContext);

  const suffledAnsewr = [correct_answer, ...incorrect_answers].sort(
    () => Math.random() - 0.5
  );

  const checkAnswer = (e) => {
    if (currentQuestion > quiz.length - 2) {
      setGameState("end screen");
    }
    if (e === quiz[currentQuestion].correct_answer) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  useEffect(() => {}, [currentQuestion]);

  return (
    <>
      <Typography
        variant="h4"
        dangerouslySetInnerHTML={{
          __html: quiz[currentQuestion].question,
        }}
        className={classes.question}
      />
      <div className={classes.flexBox}>
        <Button
          index={0}
          checkAnswer={checkAnswer}
          suffledAnsewr={suffledAnsewr}
        />
        <Button
          index={1}
          checkAnswer={checkAnswer}
          suffledAnsewr={suffledAnsewr}
        />
        <Button
          index={2}
          checkAnswer={checkAnswer}
          suffledAnsewr={suffledAnsewr}
        />
        <Button
          index={3}
          checkAnswer={checkAnswer}
          suffledAnsewr={suffledAnsewr}
        />
      </div>
    </>
  );
}
