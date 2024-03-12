let { app, BrowserWindow } = require("electron");

function createWindow() {
    let win = new BrowserWindow({
        width: 800,
        height: 600
    });

    win.loadFile("frontend/index.html");
}

app.whenReady().then(() => {
    createWindow()
})