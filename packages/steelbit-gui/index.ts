import { BrowserWindow, app } from 'electron';
import Steelbit from 'steelbit';
console.log("STEELBIT", Steelbit)

app.on('ready', () => {
  const win = new BrowserWindow({ width: 800, height: 1500 });
  win.loadURL('https://github.com');
  
  console.log(win.webContents);

})