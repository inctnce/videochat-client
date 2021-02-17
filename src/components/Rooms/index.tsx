import { Divider, ListItemText } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Paper from "@material-ui/core/Paper";
import React from "react";
import Protected from "../../hocs/Protected";
import Room from "../../models/Room";
import User from "../../models/User";
import Search from "../Reusable/Search";

import style from "./style.module.css";

type Props = {
  filterValue: string;
  updFilter: (filter: string) => void;
};

const Rooms: React.FC<Props> = (props: Props) => {
  const mockRooms: Room[] = [];
  const mockUser: User = new User("", "", "", "", false);
  mockRooms.push(new Room("1", "Комната 1", [mockUser, mockUser, mockUser], []));
  mockRooms.push(new Room("2", "Комната 2", [mockUser, mockUser, mockUser, mockUser], []));
  mockRooms.push(new Room("3", "Комната 3", [mockUser, mockUser], []));
  mockRooms.push(new Room("4", "Комната 4", [mockUser, mockUser, mockUser, mockUser, mockUser], []));

  console.log(mockRooms);

  const ListItems = mockRooms.map((room: Room) => (
    <ListItem
      key={room.getId()}
      button
      onClick={() => {
        alert(room.getId());
      }}
    >
      <ListItemText primary={room.getName()} secondary={room.getUsers().length} />
    </ListItem>
  ));

  return (
    <div>
      <Search className={style.search} value={props.filterValue} updFilter={props.updFilter} />
      <Paper className={style.form}>
        <List>{ListItems}</List>
      </Paper>
    </div>
  );
};

export default Rooms;
