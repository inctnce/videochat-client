import Room from "../models/Room";

type Rooms = {
  filterValue: string;
  rooms: Room[];
  filteredRooms: Room[];
};

export default Rooms;
