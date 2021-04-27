import Form from "../Login/SignIn/Form.jsx";
import useStyles from "./styles.jsx";

const Home = () => {
  const classes = useStyles();
  return (
    <div>
      <h3 className={classes.home}>Please sign in below</h3>
      <Form />
    </div>
  );
};

export default Home;
