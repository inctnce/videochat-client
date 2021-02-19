import ILocalStorage from "../interfaces/LocalStorage";
import User from "../models/User";

const key: string = "user";

function set(user: User): void {
  localStorage.setItem(key, JSON.stringify(user));
}

function get(): User {
  const user = localStorage.getItem(key);

  if (user != null) {
    return JSON.parse(user);
  }

  return new User("", "", "", false);
}

function remove(): void {
  localStorage.removeItem(key);
}

const UserLS: ILocalStorage = { set, get, remove };

export default UserLS;
