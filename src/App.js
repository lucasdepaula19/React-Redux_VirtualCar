import React, { Suspense } from "react";
import { Provider } from "react-redux";
import "./App.css";
import { Store } from "./store";
import { ApplicationRoutes } from "./ApplicationRouters";
import { BrowserRouter } from "react-router-dom";
import { TimeLine } from "./components/TimeLine";

function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <Suspense fallback={<h1>Loading...</h1>}>
          <header className="App-header darkMode">
            <BrowserRouter>
              <a href="#">Dark Mode</a>
              <h4>Automotive Dealership</h4>
              <TimeLine />
              <ApplicationRoutes />
            </BrowserRouter>
          </header>
        </Suspense>
      </div>
    </Provider>
  );
}

export default App;
