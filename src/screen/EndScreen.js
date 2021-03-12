import { Button, Typography } from "@material-ui/core";
import { useContext } from "react";
import { QuizContext } from "../helpers";
import { useStyle } from ".";

export default function EndScreen() {
  const { setGameState, setCurrentQuestion, setScore, score } = useContext(
    QuizContext
  );
  const classes = useStyle();
  const restartGame = () => {
    setGameState("menu");
    setCurrentQuestion(0);
    setScore(0);
  };
  return (
    <div>
      <Typography variant="h4" className={classes.question}>
        Your Score : {score} / 10
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={restartGame}
        className={classes.btn}
      >
        Restart
      </Button>
    </div>
  );
}
