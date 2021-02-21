import Severity from "../types/Severity";

class Notification {
  private title?: string;
  private message: string;
  private severity?: "error" | "success" | "info" | "warning" | undefined;

  constructor(message: string, title?: string, severity?: Severity) {
    this.message = message;
    this.title = title;
    this.severity = severity;
  }

  Title(): string | undefined {
    return this.title;
  }

  Message(): string {
    return this.message;
  }

  Severity(): Severity {
    return this.severity;
  }
}

export default Notification;
