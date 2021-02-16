import ILocalStorage from "../interface/LocalStorage";
import User from "../model/User";

const key: string = "user";

function set(user: User): void {
  localStorage.setItem(key, JSON.stringify(user));
}

function get(): User {
  return JSON.parse(localStorage.getItem(key)!);
}

function remove(): void {
  localStorage.removeItem(key);
}

const UserLS: ILocalStorage = { set, get, remove };

export default UserLS;
