import Btn from "./Btn.jsx";
import Inputs from "./Inputs.jsx";
import { Provider } from "../../Pages/Context.jsx";
import useStyles from "./styles.jsx";

const Form = () => {
  const classes = useStyles();
  return (
    <div className={classes.form}>
      <Provider>
        <Inputs />
        <Btn />
      </Provider>
    </div>
  );
};

export default Form;
