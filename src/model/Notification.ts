import Severity from "../type/severity";

class Notification {
  private title?: string;
  private message: string;
  private severity?: "error" | "success" | "info" | "warning" | undefined;

  constructor(message: string, title?: string, severity?: Severity) {
    this.message = message;
    this.title = title;
    this.severity = severity;
  }

  getTitle(): string | undefined {
    return this.title;
  }

  getMessage(): string {
    return this.message;
  }

  getSeverity(): Severity {
    return this.severity;
  }
}

export default Notification;
