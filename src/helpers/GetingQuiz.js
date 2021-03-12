import { useEffect, useState } from "react";

const useQuiz = () => {
  const [quiz, setQuiz] = useState([]);
  useEffect(() => {
    fetch(
      "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple"
    )
      .then((res) => res.json())
      .then((data) => setQuiz(data.results))
      .catch((e) => console.log(e))
      .finally(() => console.log("Finished"));
  }, []);
  return [quiz];
};
export default useQuiz;
