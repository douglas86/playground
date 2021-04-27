import Submit from "../../Pages/Submit";
import useStyles from "./styles.jsx";

const Inputs = () => {
  const classes = useStyles();
  const { handleInputChange } = Submit();
  return (
    <div>
      <input
        type="text"
        className={classes.inputs}
        onChange={handleInputChange}
        placeholder="First Name"
        name="RegisterFName"
        required
      />
      <br />
      <input
        type="text"
        className={classes.inputs}
        onChange={handleInputChange}
        placeholder="Second Name"
        name="RegisterSName"
        required
      />
      <br />
      <input
        type="text"
        className={classes.inputs}
        onChange={handleInputChange}
        placeholder="email address"
        name="RegisterEmail"
        required
      />
      <br />
      <input
        type="text"
        className={classes.inputs}
        onChange={handleInputChange}
        placeholder="username"
        name="RegisterUName"
        required
      />
      <br />
      <input
        type="text"
        className={classes.inputs}
        onChange={handleInputChange}
        placeholder="password"
        name="RegisterPassword"
        required
      />
      <br />
      <input
        type="text"
        className={classes.inputs}
        onChange={handleInputChange}
        placeholder="re-type password"
        name="RegisterPassword2"
        required
      />
    </div>
  );
};

export default Inputs;
