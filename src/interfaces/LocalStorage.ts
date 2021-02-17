interface ILocalStorage {
  set(object: any): void;
  get(): any;
  remove(): void;
}

export default ILocalStorage;
