import Message from "./Message";
import User from "./User";

class Room {
  private id: string;
  private name: string;
  private users: User[];
  private messages: Message[];

  private sortUsers(users: User[]): User[] {
    return users.sort((a: User, b: User) => {
      return a.getNickname().toLowerCase() < b.getNickname().toLowerCase() ? -1 : 1;
    });
  }

  private sortMessages(messages: Message[]): Message[] {
    return messages.sort((a: Message, b: Message) => {
      return a.getCreationDate() < b.getCreationDate() ? -1 : 1;
    });
  }

  constructor(id: string, name: string, users: User[], messages: Message[]) {
    this.id = id;
    this.name = name;
    this.users = this.sortUsers(users);
    this.messages = this.sortMessages(messages);
  }

  getId(): string {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getUsers(): User[] {
    return this.users;
  }

  getMessages(): Message[] {
    return this.messages;
  }

  changeName(name: string): void {
    this.name = name;
  }

  pushUser(user: User): void {
    this.users.push(user);
    this.sortUsers(this.users);
  }

  removeUser(user: User): void {
    const index = this.users.indexOf(user);
    if (index > -1) {
      this.users.splice(index, 1);
    }
  }

  pushMessage(message: Message): void {
    this.messages.push(message);
  }

  removeMessage(message: Message): void {
    const index = this.messages.indexOf(message);
    if (index > -1) {
      this.users.splice(index, 1);
    }
  }
}

export default Room;
