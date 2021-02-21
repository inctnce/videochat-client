import Paper from "@material-ui/core/Paper";

import React from "react";
import style from "./style.module.css";

import Protected from "../../hocs/Protected";
import Message from "../../models/Message";
import InputBase from "@material-ui/core/InputBase";
import Button from "@material-ui/core/Button";

import { useParams } from "react-router-dom";

import { io, Socket } from "socket.io-client";
import PATH from "../../PATH";
import { Field, Form } from "react-final-form";
import User from "../../models/User";
import userLS from "../../LocalStorage/user";

type Props = {
  roomName: string;
  messages: Message[];
  didGetMessages: boolean;
};

let socket: Socket;

const Room: React.FC<Props> = (props: Props) => {
  const [message, setMessage] = React.useState<string>("");

  const { roomId } = useParams<{ roomId: string }>();
  console.log(roomId);

  React.useEffect(() => {
    socket = io(PATH.API_BASE_URL);

    socket.on("connection", () => {
      console.log("Successfully connected to the server");
    });

    socket.emit("join", roomId, (res: any) => {
      console.log(res);
    });

    return () => {
      socket.disconnect();
      socket.off();
    };
  }, []);

  function onSubmit(values: any) {
    const user: User = userLS.get()!;
    socket.emit("sendMessage", { text: values.message, roomId: roomId, creatorId: user.Id() });
  }

  return (
    <div>
      <Paper variant="outlined" className={style.chat}>
        {/* {props.roomName} */}
        Room Name
      </Paper>
      <Paper variant="outlined" className={style.chat}>
        {/* {props.roomName} */}
        Video
      </Paper>
      <Paper variant="outlined" className={style.chat}>
        {/* {props.roomName} */}
        Chat
      </Paper>
      <Form
        render={({ handleSubmit }) => (
          <Paper className={style.inputWrapper} component="form" variant="outlined" onSubmit={handleSubmit}>
            <Field
              className={style.item}
              name="message"
              type="text"
              placeholder="напишите сообщение"
              component={renderInput}
            />
            <div>
              <Button className={style.sendBtn} color="primary" variant="contained" disableElevation type="submit">
                Отправить
              </Button>
            </div>
          </Paper>
        )}
        onSubmit={onSubmit}
      />
    </div>
  );
};

const renderInput: React.FC<any> = ({ ...props }) => {
  return (
    <InputBase
      className={style.input}
      multiline
      placeholder={props.placeholder}
      value={props.input.value}
      onChange={props.input.onChange}
    />
  );
};

export default Protected(Room);
