class LocalStorage {
  private key: string;

  constructor(key: string, object: any) {
    this.key = key;
    this.set(object);
  }

  get(): any {
    return localStorage.getItem(this.key);
  }

  set(object: any): void {
    localStorage.setItem(this.key, JSON.stringify(object));
  }
}

export default LocalStorage;
