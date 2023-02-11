const { app, BrowserWindow } = require("electron");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    titleBarStyle: 'hidden',
    titleBarOverlay: 'hidden',
    autoHideMenuBar: true,
    webPreferences: {
      devTools: false,
      javascript: true,
      nodeIntegration: true
    }
  });

  win.loadFile('../index.html');
};

app.whenReady().then(() => {
  createWindow();
});
