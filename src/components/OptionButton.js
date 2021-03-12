import { Button as MuiBtn, makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
  optBtn: {
    height: 50,
    flex: "1 1 150px",
    margin: 10,
  },
});
const Button = ({ checkAnswer, suffledAnsewr, index }) => {
  const classes = useStyle();
  return (
    <MuiBtn
      variant="contained"
      className={classes.optBtn}
      onClick={() => checkAnswer(suffledAnsewr[index])}
    >
      {suffledAnsewr[index]}
    </MuiBtn>
  );
};
export default Button;
