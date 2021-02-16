import React from "react";

import style from "./style.module.css";
import useGlobal from "../../theme/global";

function App() {
  const global = useGlobal();

  return (
    <div className={global.root + " " + style.wrapper}>
      <div className={style.test}>Video Chat!</div>
    </div>
  );
}

export default App;
