import 'bootstrap/dist/css/bootstrap.min.css';
import { useRoutes } from "hookrouter";
import router from "./router";
import NotFound from "../Pages/NotFound";

const App = () => {
  const routerRoutes = useRoutes(router);
  return routerRoutes || <NotFound />;
};

export default App;
