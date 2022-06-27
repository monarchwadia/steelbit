const { BrowserWindow, app } = require('electron')

app.on('ready', () => {
  const win = new BrowserWindow({ width: 800, height: 1500 });
  win.loadURL('https://github.com');
  
  console.log(win.webContents);

})