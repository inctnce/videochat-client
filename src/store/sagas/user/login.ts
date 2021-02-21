import api from "..";
import { call, put, takeLatest } from "redux-saga/effects";
import { AnyAction } from "redux";
import ACTION from "../../actions/user/ACTION";
import app from "../../actions/app";
import login from "../../actions/user";
import Notification from "../../../models/Notification";
import User from "../../../models/User";
import userLS from "../../../LocalStorage/user";

async function log_in(email: string, password: string): Promise<any> {
  const data = {
    email: email,
    password: password,
  };

  return await api.post("/user/login", data).then((response) => response.data);
}

function* workerLogin(action: AnyAction) {
  const data = yield call(log_in, action.payload.email, action.payload.password);

  console.log(data);

  if (data.error) {
    const notification: Notification = new Notification(data.error, "Ошибка", "error");
    yield put(app.setNotification(notification));
  } else {
    const user: User = new User(
      data.id,
      data.creationDate,
      data.nickname,
      data.email,
      data.hashedPassword,
      data.refreshToken,
      data.accessToken
    );

    userLS.set(user);
    yield put(login.successfulLogin());
  }
}

function* watchLogin() {
  yield takeLatest(ACTION.LOGIN, workerLogin);
}

export default watchLogin;
