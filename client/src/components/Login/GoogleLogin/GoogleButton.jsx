import { Button } from "react-bootstrap";
import GoogleLogo from "./google-logo.jpg";
import useStyles from "./styles.jsx";

const GoogleButton = () => {
  const classes = useStyles();
  return (
    <div className={classes.form}>
      <Button variant="outline-dark">
        <img className={classes.button} src={GoogleLogo} alt="Google image" />{" "}
		  SignIn with Google
      </Button>
    </div>
  );
};

export default GoogleButton;
