import ILocalStorage from "../interfaces/LocalStorage";

const key: string = "accessToken";

function set(accessToken: string): void {
  localStorage.setItem(key, accessToken);
}

function get(): string | undefined {
  const accessToken = localStorage.getItem(key);

  if (accessToken != null) {
    return accessToken;
  }

  return undefined;
}

function remove(): void {
  localStorage.removeItem(key);
}

const AccessTokenLS: ILocalStorage = { set, get, remove };

export default AccessTokenLS;
