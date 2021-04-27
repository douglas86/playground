import { Button } from "react-bootstrap";
import GoogleLogo from "./google-logo.jpg";
import useStyles from "./styles.jsx";
import Submit from "../../Pages/Submit.jsx";

const GoogleButton = () => {
  const classes = useStyles();
  const { handleSubmit } = Submit();
  return (
    <div className={classes.form}>
      <Button variant="outline-dark" onClick={handleSubmit}>
        <img className={classes.button} src={GoogleLogo} alt="Google" /> SignIn
        with Google
      </Button>
    </div>
  );
};

export default GoogleButton;
