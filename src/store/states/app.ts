import Notification from "../../models/Notification";
import App from "../../types/App";

const app: App = {
  isNotification: false,
  notification: new Notification(""),
};

export default app;
