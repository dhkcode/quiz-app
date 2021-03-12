import { createContext, useState } from "react";

export const QuizContext = createContext();
export const QuizContextProvider = ({ children }) => {
  const [gameState, setGameState] = useState("menu");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  return (
    <QuizContext.Provider
      value={{
        gameState,
        setGameState,
        currentQuestion,
        setCurrentQuestion,
        score,
        setScore,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};
