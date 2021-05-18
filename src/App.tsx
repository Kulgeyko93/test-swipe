import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Time from "./components/Time/Time";
import Main from "./pages/Main/Main";

const App = (): JSX.Element => {
  return (
    <div className='App'>
      <Route exact path='/' component={Main} />
      <Route exact path='/time' component={Time} />
    </div>
  );
};

export default App;
