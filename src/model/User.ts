class User {
  private id: string;
  private nickname: string;
  private email: string;
  private password: string;
  private isAuthenticated: boolean;

  constructor(id: string, nickname: string, email: string, password: string, isAuthenticated: boolean) {
    this.id = id;
    this.nickname = nickname;
    this.email = email;
    this.password = password;
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

  getPassword(): string {
    return this.password;
  }

  getIsAuthenticated(): boolean {
    return this.isAuthenticated;
  }
}

export default User;
