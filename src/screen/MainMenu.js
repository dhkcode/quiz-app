import { Button } from "@material-ui/core";
import { useContext } from "react";
import { EndScreen, Quiz, useStyle } from ".";
import { QuizContext } from "../helpers";

export default function MainMenu() {
  const { gameState, setGameState } = useContext(QuizContext);
  const classes = useStyle();

  return (
    <div className={classes.mainMenu}>
      <div className={classes.content}>
        {gameState === "menu" ? (
          <Button
            className={classes.btn}
            variant="contained"
            color="primary"
            onClick={() => setGameState("quiz")}
          >
            Start Quiz
          </Button>
        ) : gameState === "quiz" ? (
          <Quiz />
        ) : (
          <EndScreen />
        )}
      </div>
    </div>
  );
}
