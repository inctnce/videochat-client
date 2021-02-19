import api from "..";
import { call, put, takeLatest } from "redux-saga/effects";
import { AnyAction } from "redux";
import ACTION from "../../actions/rooms/ACTION";
import app from "../../actions/app";
import Notification from "../../../models/Notification";
import rooms from "../../actions/rooms";
import Room from "../../../models/Room";

async function get(): Promise<any> {
  return await api
    .get("/room/get")
    .then((response) => {
      if (response.status === 200) {
        return response.data;
      }
    })
    .catch((err) => {
      console.log(err);
      return { error: "не удалось получить комнаты" };
    });
}

function* worker(_action: AnyAction) {
  const data = yield call(get);

  if (data.error) {
    const notification: Notification = new Notification(data.error, "Ошибка", "error");
    yield put(app.setNotification(notification));
  } else {
    console.log(data);

    const roomsData: Room[] = [];

    data.forEach((room: any) => {
      roomsData.push(new Room(room.id, room.name, room.creator_id, [], []));
    });

    yield put(rooms.setRooms(roomsData));
  }
}

function* watchGetRooms() {
  yield takeLatest(ACTION.GET_ROOMS, worker);
}

export default watchGetRooms;
