import { Button } from "react-bootstrap";
import useStyles from "./styles.jsx";
import Submit from "../../Pages/Submit.jsx";

const Btn = () => {
  const classes = useStyles();
  const { handleSubmit } = Submit();
  return (
    <div>
      <Button
        className={classes.buttonRight}
        variant="primary"
        onClick={handleSubmit}
      >
        Submit
      </Button>
      <Button className={classes.buttonLeft} variant="outline-secondary">
        <a href="/">Cancel</a>
      </Button>
    </div>
  );
};

export default Btn;
