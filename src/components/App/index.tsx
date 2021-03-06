import React from "react";

import style from "./style.module.css";
import useGlobal from "../../theme/global";
import { Switch, Route, useHistory } from "react-router-dom";
import Login from "../Login/container";
import Rooms from "../Rooms/container";
import Notification from "../../models/Notification";
import Collapse from "@material-ui/core/Collapse";
import Alert from "@material-ui/lab/Alert";
import AlertTitle from "@material-ui/lab/AlertTitle";
import PATH from "../../PATH";
import Registration from "../Registration/container";
import Room from "../Room";

type Props = {
  isNotification: boolean;
  notification: Notification;

  cleanNotification: () => void;
};

const App: React.FC<Props> = (props: Props) => {
  const global = useGlobal();
  const history = useHistory();

  React.useEffect(() => {
    if (props.isNotification) {
      const timeout = setTimeout(() => {
        props.cleanNotification();
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [props, props.isNotification]);

  history.push(PATH.ROOMS);

  return (
    <div className={global.root + " " + style.wrapper}>
      <Switch>
        <Route path={`${PATH.ROOMS}/:roomId`} component={() => <Room />} />
        <Route path={PATH.LOGIN} component={() => <Login />} />
        <Route path={PATH.REGISTRATION} component={() => <Registration />} />
        <Route path={PATH.ROOMS} component={() => <Rooms />} />
      </Switch>

      <div className={style.alert_wrapper}>
        <Collapse in={props.isNotification}>
          <Alert severity={props.notification.Severity()}>
            {props.notification.Title() ? <AlertTitle>{props.notification.Title()}</AlertTitle> : <></>}
            {props.notification.Message()}
          </Alert>
        </Collapse>
      </div>
    </div>
  );
};

export default App;
