import Home from "../Pages/Home.jsx";
import Register from "../Login/Register/Form.jsx";

const router = {
  "/": () => <Home />,
  "/register": () => <Register />,
};

export default router;
