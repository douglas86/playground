import Submit from "../../Pages/Submit.jsx";
import useStyles from "./styles.jsx";

const Inputs = () => {
  const { handleInputChange } = Submit();
  const classes = useStyles();
  return (
    <div>
      <input
        type="text"
        className={classes.inputs}
        placeholder="Username"
        onChange={handleInputChange}
        name="SignInUName"
        required
      />
      <br />
      <input
        type="text"
        className={classes.inputs}
        placeholder="Password"
        onChange={handleInputChange}
        name="SignInPName"
        required
      />
    </div>
  );
};

export default Inputs;
