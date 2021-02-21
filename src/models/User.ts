import Model from "./Model";

class User extends Model {
  private nickname: string;
  private email: string;
  private hashedPassword: string;
  private refreshToken: string;
  private accessToken: string;

  constructor(
    id: string,
    creationDate: Date,
    nickname: string,
    email: string,
    hashedPassword: string,
    refreshToken: string,
    accessToken: string
  ) {
    super(id, creationDate);
    this.nickname = nickname;
    this.email = email;
    this.hashedPassword = hashedPassword;
    this.refreshToken = refreshToken;
    this.accessToken = accessToken;
  }

  Nickname(): string {
    return this.nickname;
  }

  Email(): string {
    return this.email;
  }

  HashedPassword(): string {
    return this.hashedPassword;
  }

  RefreshToken(): string {
    return this.refreshToken;
  }

  AccessToken(): string {
    return this.accessToken;
  }

  SetAccessToken(token: string) {
    this.accessToken = token;
  }
}

export default User;
