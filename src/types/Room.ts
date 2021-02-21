import Message from "../models/Message";

type Room = {
  id: string;
  name: string;
  messages: Message[];
  didGetMessages: boolean;
};

export default Room;
