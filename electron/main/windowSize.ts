/** @format */

import { BrowserWindow, ipcMain } from 'electron';

export default function windowSize(win: BrowserWindow) {
  ipcMain.on('maxWindow', () => {
    if (win.isMaximized()) {
      win.restore();
    } else {
      win.maximize();
    }
  });
  ipcMain.on('minWindow', () => {
    win.minimize();
  });
  ipcMain.on('hideWindow', () => {
    win.hide();
  });
  ipcMain.on('showWindow', () => {
    win.show();
  });
  win.on('maximize', () => {
    win.webContents.send('isMax', true);
  });
  win.on('unmaximize', () => {
    win.webContents.send('isMax', false);
  });
}
