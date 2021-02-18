import ILocalStorage from "../interfaces/LocalStorage";

const key: string = "refreshToken";

function set(refreshToken: string): void {
  localStorage.setItem(key, refreshToken);
}

function get(): string | undefined {
  const refreshToken = localStorage.getItem(key);

  if (refreshToken != null) {
    return refreshToken;
  }

  return undefined;
}

function remove(): void {
  localStorage.removeItem(key);
}

const RefreshTokenLS: ILocalStorage = { set, get, remove };

export default RefreshTokenLS;
