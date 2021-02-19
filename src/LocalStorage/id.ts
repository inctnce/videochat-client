import ILocalStorage from "../interfaces/LocalStorage";

const key: string = "id";

function set(id: string): void {
  localStorage.setItem(key, id);
}

function get(): string | undefined {
  const id = localStorage.getItem(key);

  if (id != null) {
    return id;
  }

  return undefined;
}

function remove(): void {
  localStorage.removeItem(key);
}

const IdLS: ILocalStorage = { set, get, remove };

export default IdLS;
