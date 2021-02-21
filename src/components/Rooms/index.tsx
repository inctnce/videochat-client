import { ListItemText } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Paper from "@material-ui/core/Paper";
import Add from "@material-ui/icons/Add";
import React from "react";
import { Field, Form } from "react-final-form";
import { useHistory } from "react-router-dom";
import Protected from "../../hocs/Protected";
import Room from "../../models/Room";
import PATH from "../../PATH";
import Search from "../Reusable/Search";

import style from "./style.module.css";

type Props = {
  filterValue: string;
  updFilter: (filter: string) => void;

  filteredRooms: Room[];

  addRoom: (name: string) => void;
  setRoom: (name: string) => void;
  getRooms: () => void;
};

const Rooms: React.FC<Props> = (props: Props) => {
  const history = useHistory();

  React.useEffect(() => {
    if (props.filteredRooms.length === 0) {
      props.getRooms();
    }
  }, []);

  const onSubmit = (values: any) => {
    props.addRoom(values.roomName);
  };

  const AddRoomListItem: JSX.Element = (
    <ListItem>
      <Form
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Field
              className={style.item}
              name="roomName"
              type="text"
              placeholder="название комнаты"
              component={renderInput}
            />
            <ListItemSecondaryAction>
              <IconButton edge="end" type="submit">
                <Add className={style.icon} />
              </IconButton>
            </ListItemSecondaryAction>
          </form>
        )}
        onSubmit={onSubmit}
      />
    </ListItem>
  );

  const ListItems = props.filteredRooms.map((room: Room) => (
    <ListItem
      key={room.Id()}
      button
      onClick={() => {
        history.push(PATH.ROOMS + `/${room.Id()}`);
      }}
    >
      <ListItemText primary={room.Name()} secondary={room.NumOfUsers() + " пользователей"} />
    </ListItem>
  ));

  return (
    <div className={style.wrapper}>
      <Search className={style.search} value={props.filterValue} updFilter={props.updFilter} />
      <Paper variant="outlined" className={style.list}>
        <List>
          {AddRoomListItem}
          <Divider />
          {ListItems}
        </List>
      </Paper>
    </div>
  );
};

const renderInput: React.FC<any> = ({ ...props }) => {
  return (
    <InputBase
      name={props.input.name}
      value={props.input.value}
      type={props.input.type}
      onChange={props.input.onChange}
      {...props}
    />
  );
};

export default Protected(Rooms);
