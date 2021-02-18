class User {
  private id: string;
  private nickname: string;
  private email: string;
  private token: string;
  private isAuthenticated: boolean;

  constructor(id: string, nickname: string, email: string, token: string, isAuthenticated: boolean) {
    this.id = id;
    this.nickname = nickname;
    this.email = email;
    this.token = token;
    this.isAuthenticated = isAuthenticated;
  }

  getId(): string {
    return this.id;
  }

  getNickname(): string {
    return this.nickname;
  }

  getEmail(): string {
    return this.email;
  }

  getToken(): string {
    return this.token;
  }

  getIsAuthenticated(): boolean {
    return this.isAuthenticated;
  }
}

export default User;