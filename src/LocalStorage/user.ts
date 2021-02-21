import ILocalStorage from "../interfaces/LocalStorage";
import User from "../models/User";

class UserLS implements ILocalStorage {
  static key: string = "user";

  set(user: User): void {
    localStorage.setItem(UserLS.key, JSON.stringify(user));
  }
  get(): User | null {
    const userData = JSON.parse(localStorage.getItem(UserLS.key)!);

    if (userData) {
      return new User(
        userData.id,
        userData.creationDate,
        userData.nickname,
        userData.email,
        userData.hashedPassword,
        userData.refreshToken,
        userData.accessToken
      );
    }

    return null;
  }
  remove(): void {
    localStorage.removeItem(UserLS.key);
  }
}

const userLS: UserLS = new UserLS();

export default userLS;
