import { Button } from "react-bootstrap";
import Submit from "../../Pages/Submit.jsx";
import useStyles from "./styles.jsx";

const Btn = () => {
  const { handleSubmit } = Submit();
  const classes = useStyles();

  return (
    <div>
      <Button type="submit" className={classes.button} onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  );
};

export default Btn;
