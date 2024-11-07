export const sendNotification = (message) => {
    if (Notification.permission === "granted") {
      new Notification(message);
    } else if (Notification.permission === "default") {
      Notification.requestPermission().then(permission => {
        if (permission === "granted") {
          new Notification(message);
        }
      });
    }
  };
  