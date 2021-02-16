import React from "react";

import style from "./style.module.css";
import useGlobal from "../../theme/global";
import { Switch, Route } from "react-router-dom";
import Login from "../Login";
import Home from "../Home";

function App() {
  const global = useGlobal();

  return (
    <div className={global.root + " " + style.wrapper}>
      <Switch>
        <Route path="/login" component={() => <Login />} />
        <Route path="/home" component={() => <Home />} />
      </Switch>
    </div>
  );
}

export default App;
