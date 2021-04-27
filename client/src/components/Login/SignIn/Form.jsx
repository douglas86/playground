import { Provider } from "../../Pages/Context";

import Inputs from "./Inputs.jsx";
import Btn from "./Btn.jsx";
import useStyles from "./styles.jsx";

const Form = () => {
  const classes = useStyles();
  return (
    <div className={classes.form}>
      <Provider>
        <Inputs />
        <Btn />
        <p>
          <a href="/register">Register </a>
          Here!!
        </p>
      </Provider>
    </div>
  );
};

export default Form;
