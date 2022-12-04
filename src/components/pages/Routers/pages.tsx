import { RoutesString } from "../../modules/routesString";
import PageNotFound from "../404";
import Home from "../Home";

const pages = [
  {
    path: RoutesString.PageNotFound,
    component: <PageNotFound />,
  },

  /* Home */
  {
    path: RoutesString.Home,
    component: <Home />,
  },
];

export default pages;
