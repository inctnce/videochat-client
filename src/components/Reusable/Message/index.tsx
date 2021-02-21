import React from "react";
import style from "./style.module.css";

import Message from "../../../models/Message";
import Typography from "@material-ui/core/Typography";

import userLS from "../../../LocalStorage/user";

const ChatMessage: React.FC<Message> = (message: Message) => {
  const messageStyle: string =
    userLS.get()!.Id() == message.CreatorId() ? style.message + " " + style.me : style.message + " " + style.another;

  return (
    <div className={style.wrapper}>
      <div className={messageStyle}>
        <Typography variant="body1">{message.Text()}</Typography>
        <Typography variant="body2">{message.CreatorNickname()}</Typography>
        <Typography variant="caption">{message.CreationDate()}</Typography>
      </div>
    </div>
  );
};

export default ChatMessage;
