import React, { lazy } from "react";
import { Route } from "react-router-dom";
import Resume from "./views/Resume";
import { InitialPage } from "./views/ProductList";
import { VersionPage } from "./views/Version";
import { ColorPage } from "./views/Color";
import { OptionsPage } from "./views/Options";

const product = lazy(() => import("./views/Product"));

// const ColorPage = lazy(() => import("./views/Color"));
// const VersionPage = lazy(() => import("./views/Version"));
// const OptionsPage = lazy(() => import("./views/Options"));

export const ApplicationRoutes = () => (
  <>
    <Route path="/" exact component={InitialPage} />
    <Route path="/prod/" exact component={Resume} />
    <Route path="/prod/:id" component={product} />
    <Route path="/version/" component={VersionPage} />
    <Route path="/color/" component={ColorPage} />
    <Route path="/options/" component={OptionsPage} />
  </>
);