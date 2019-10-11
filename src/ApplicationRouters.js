import React from "react";
import { Route } from "react-router-dom";
import ResumePage from "./views/Resume";
import { InitialPage } from "./views/ProductList";
import { VersionPage } from "./views/Version";
import { ColorPage } from "./views/Color";
import { OptionsPage } from "./views/Options";

// const ColorPage = lazy(() => import("./views/Color"));
// const VersionPage = lazy(() => import("./views/Version"));
// const OptionsPage = lazy(() => import("./views/Options"));

export const ApplicationRoutes = () => (
  <>
    <Route path="/" exact component={InitialPage} />
    <Route path="/prod/" exact component={ResumePage} />
    <Route path="/version/" component={VersionPage} />
    <Route path="/color/" component={ColorPage} />
    <Route path="/options/" component={OptionsPage} />
  </>
);