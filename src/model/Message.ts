import User from "./User";

class Message {
  private id: string;
  private text: string;
  private creator: User;
  private creationDate: Date;
  private isChanged: boolean;

  constructor(id: string, text: string, sender: User) {
    this.id = id;
    this.text = text;
    this.creator = sender;
    this.creationDate = new Date();
    this.isChanged = false;
  }

  getId(): string {
    return this.id;
  }

  getText(): string {
    return this.text;
  }

  getSender(): User {
    return this.creator;
  }

  getCreationDate(): Date {
    return this.creationDate;
  }

  getIsChanged(): boolean {
    return this.isChanged;
  }

  changeText(text: string): void {
    this.text = text;
    this.isChanged = true;
  }
}

export default Message;
