import api from "..";
import { call, put, takeLatest } from "redux-saga/effects";
import { AnyAction } from "redux";
import ACTION from "../../actions/user/ACTION";
import app from "../../actions/app";
import login from "../../actions/user";
import Notification from "../../../models/Notification";
import RefreshTokenLS from "../../../LocalStorage/refreshToken";
import AccessTokenLS from "../../../LocalStorage/accessToken";

async function updateAccessToken(id: string) {
  return await api
    .get(`/user/${id}/token`)
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

function* worker(action: AnyAction) {
  const data = yield call(updateAccessToken, action.payload.id);
  if (data.error) {
    const notification: Notification = new Notification(data.error, "Ошибка", "error");
    yield put(app.setNotification(notification));
  } else {
    RefreshTokenLS.set(data.refreshToken);
    AccessTokenLS.set(data.accessToken);
  }
}

function* watchUpdateToken() {
  yield takeLatest(ACTION.UPDATE_TOKEN, worker);
}

export default watchUpdateToken;
