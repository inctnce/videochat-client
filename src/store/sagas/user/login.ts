import api from "..";
import { call, put, takeLatest } from "redux-saga/effects";
import { AnyAction } from "redux";
import ACTION from "../../actions/user/ACTION";
import app from "../../actions/app";
import login from "../../actions/user";
import Notification from "../../../models/Notification";
import RefreshTokenLS from "../../../LocalStorage/refreshToken";
import AccessTokenLS from "../../../LocalStorage/accessToken";
import IdLS from "../../../LocalStorage/id";
import NicknameLS from "../../../LocalStorage/nickname";

async function log_in(email: string, password: string): Promise<any> {
  const data = {
    email: email,
    password: password,
  };

  return await api
    .post("/user/login", data)
    .then((response) => {
      if (response.status === 200) {
        return response.data;
      }
    })
    .catch((err) => {
      console.log(err);
      return { error: "неверная почта или пароль" };
    });
}

function* workerLogin(action: AnyAction) {
  const data = yield call(log_in, action.payload.email, action.payload.password);

  if (data.error) {
    const notification: Notification = new Notification(data.error, "Ошибка", "error");
    yield put(app.setNotification(notification));
  } else {
    RefreshTokenLS.set(data.refreshToken);
    AccessTokenLS.set(data.accessToken);
    IdLS.set(data.user.id);
    NicknameLS.set(data.user.nickname);

    yield put(login.successfulLogin());
  }
}

function* watchLogin() {
  yield takeLatest(ACTION.LOGIN, workerLogin);
}

export default watchLogin;
