class Model {
  protected id: string;
  protected creationDate: Date;

  constructor(id: string, creationDate: Date) {
    this.id = id;
    this.creationDate = creationDate;
  }

  public convertDateToMySQLFormat(): string {
    return this.creationDate.toISOString().slice(0, 19).replace("T", " ");
  }

  public Id(): string {
    return this.id;
  }

  public CreationDate(): Date {
    return this.creationDate;
  }
}

export default Model;
