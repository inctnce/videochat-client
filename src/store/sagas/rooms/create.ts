import api from "..";
import { call, put, takeLatest } from "redux-saga/effects";
import { AnyAction } from "redux";
import ACTION from "../../actions/rooms/ACTION";
import app from "../../actions/app";
import Notification from "../../../models/Notification";
import rooms from "../../actions/rooms";
import Room from "../../../models/Room";
import userLS from "../../../LocalStorage/user";

async function create(name: string, creatorId: string): Promise<any> {
  const data = {
    name: name,
    creatorId: creatorId,
  };

  return await api
    .post("/room/create", data)
    .then((response) => {
      if (response.status === 201) {
        return response.data;
      }
    })
    .catch((err) => {
      return { error: "комната с таким именем уже существует" };
    });
}

function* worker(action: AnyAction) {
  console.log(userLS.get()!.Id());

  const data = yield call(create, action.payload, userLS.get()!.Id());

  if (data.error) {
    const notification: Notification = new Notification(data.error, "Ошибка", "error");
    yield put(app.setNotification(notification));
  } else {
    console.log(data);
    const room: Room = new Room(data.id, data.creationDate, data.name, data.messages, data.numOfUsers, data.creatorId);
    yield put(rooms.pushRoom(room));
  }
}

function* watchCreateRoom() {
  yield takeLatest(ACTION.ADD_ROOM, worker);
}

export default watchCreateRoom;
