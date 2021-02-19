import React from "react";
import style from "./style.module.css";

import Message from "../../../models/Message";
import Typography from "@material-ui/core/Typography";
import IdLS from "../../../LocalStorage/id";

const ChatMessage: React.FC<Message> = (message: Message) => {
  const messageStyle: string =
    IdLS.get() == message.getSender().getId() ? style.message + " " + style.me : style.message + " " + style.another;

  return (
    <div className={style.wrapper}>
      <div className={messageStyle}>
        <Typography variant="body1">{message.getText()}</Typography>
        <Typography variant="body2">{message.getSender().getNickname()}</Typography>
        <Typography variant="caption">{message.getCreationDate()}</Typography>
      </div>
    </div>
  );
};

export default ChatMessage;
