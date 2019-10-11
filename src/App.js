import React, { Suspense, useState } from "react";
import { Provider } from "react-redux";
import "./App.css";
import { Store } from "./store";
import { ApplicationRoutes } from "./ApplicationRouters";
import { BrowserRouter } from "react-router-dom";
import { TimeLine } from "./components/TimeLine";

function App() {

  const [isSelect, setIsSelect] = useState(false);

  function handleClick() {
    let active = !isSelect;
    setIsSelect(active);
  }

  return (
    <Provider store={Store}>
      <div className="App">
        <Suspense fallback={<h1>Loading...</h1>}>
          <header className={`App-header ${isSelect ? 'darkMode' : 'whiteMode'}`}>
            <BrowserRouter>
              <h4>Automotive Dealership</h4>
              <label className="switch">
                <input type="checkbox" onClick={() => { handleClick() }} />
                <span className="slider round"></span>
              </label>
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
