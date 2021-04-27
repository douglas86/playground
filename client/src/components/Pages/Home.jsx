import Form from "../Login/SignIn/Form.jsx";
import GoogleButton from "../Login/GoogleLogin/GoogleButton";
import useStyles from "./styles.jsx";

const Home = () => {
  const classes = useStyles();
  return (
    <div>
      <h3 className={classes.home}>Please sign in below</h3>
      <Form />
      <GoogleButton />
    </div>
  );
};

export default Home;
