let { app, BrowserWindow } = require("electron");

let [ windowWidth, windowHeight ] = [ 800, 600 ]

function createWindow() {
    let win = new BrowserWindow({
        width: windowWidth,
        height: windowHeight,
    });

    win.loadFile("frontend/index.html");
    
    return win;
}

app.whenReady().then(() => {
    let win = createWindow()

    //Debug info
    console.log("Created Window.");
    console.log("Dimensions:");
    console.log("   W: %d", windowWidth);
    console.log("   H: %d", windowHeight);
    console.log("Title: ", win.title);
})