import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./utils/reportWebVitals";

import { BrowserRouter as Router } from "react-router-dom";

import { ThemeProvider } from "@material-ui/core";
import theme from "./theme";

import { Provider } from "react-redux";
import store from "./store";

import App from "./components/App/container";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider theme={theme.getCurrentTheme()}>
        <Provider store={store}>
          <App />
        </Provider>
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
