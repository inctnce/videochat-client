import Paper from "@material-ui/core/Paper";

import React from "react";
import style from "./style.module.css";

import Protected from "../../hocs/Protected";
import Message from "../../models/Message";
import User from "../../models/User";

type Props = {};

const Room: React.FC = () => {
  const mockMessages: Message[] = [];
  const mockUser1: User = new User("1", "inctnce", "email", true);
  const mockUser2: User = new User("1", "inctnce", "email", true);

  for (let i = 0; i < 30; i++) {
    const user = i % 2 == 0 ? mockUser1 : mockUser2;
    mockMessages.push(new Message(i.toString(), "Some text " + Math.random().toString(), user));
  }

  return <Paper className={style.chat}>Room</Paper>;
};

export default Protected(Room);
