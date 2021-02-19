import ILocalStorage from "../interfaces/LocalStorage";

const key: string = "nickname";

function set(id: string): void {
  localStorage.setItem(key, id);
}

function get(): string | undefined {
  const nickname = localStorage.getItem(key);

  if (nickname != null) {
    return nickname;
  }

  return undefined;
}

function remove(): void {
  localStorage.removeItem(key);
}

const NicknameLS: ILocalStorage = { set, get, remove };

export default NicknameLS;
