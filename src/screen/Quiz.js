import { Typography } from "@material-ui/core";
import { useContext } from "react";
import { useStyle } from ".";
import { QuestionCard } from "../components";
import { getQuiz, QuizContext } from "../helpers";

export default function Quiz() {
  const [quiz] = getQuiz();
  const classes = useStyle();
  const { currentQuestion } = useContext(QuizContext);

  return (
    <>
      {quiz.length > 0 ? (
        <QuestionCard
          correct_answer={quiz[currentQuestion].correct_answer}
          incorrect_answers={quiz[currentQuestion].incorrect_answers}
          quiz={quiz}
          classes={classes}
        />
      ) : (
        <Typography variant="h3"> Loading ###</Typography>
      )}
    </>
  );
}
