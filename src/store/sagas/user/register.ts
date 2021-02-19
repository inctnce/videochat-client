import api from ".";
import { call, put, takeEvery as takeLatest } from "redux-saga/effects";
import { AnyAction } from "redux";
import ACTION from "../../actions/registration/ACTION";
import app from "../../actions/app";
import login from "../../actions/login";
import Notification from "../../../models/Notification";
import RefreshTokenLS from "../../../LocalStorage/refreshToken";
import AccessTokenLS from "../../../LocalStorage/accessToken";

async function register(nickname: string, email: string, password: string): Promise<any> {
  const data = {
    nickname: nickname,
    email: email,
    password: password,
  };

  return await api
    .post("/user/create", data)
    .then((response) => {
      if (response.status === 201) {
        return response.data;
      }
    })
    .catch((err) => {
      console.log(err);
      return { error: "пользователь уже существует" };
    });
}

function* worker(action: AnyAction) {
  const data = yield call(register, action.payload.nickname, action.payload.email, action.payload.password);

  if (data.error) {
    const notification: Notification = new Notification(data.error, "Ошибка", "error");
    yield put(app.setNotification(notification));
  } else {
    RefreshTokenLS.set(data.refreshToken);
    AccessTokenLS.set(data.accessToken);

    yield put(login.successfulLogin());
  }
}

function* watcher() {
  yield takeLatest(ACTION.REGISTER, worker);
}

export default watcher;
