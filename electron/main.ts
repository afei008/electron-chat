/** @format */

import path from 'node:path';
import { app, BrowserWindow } from 'electron';

import windowMenu from './main/windowMenu';
import windowSize from './main/windowSize';
import windowTray from './main/windowTray';

// The built directory structure
//
// ├─┬─┬ dist
// │ │ └── index.html
// │ │
// │ ├─┬ dist-electron
// │ │ ├── main.js
// │ │ └── preload.js
// │

// 关闭控制台警告
process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = 'true';
process.env.DIST = path.join(__dirname, '../dist');
process.env.PUBLIC = app.isPackaged
  ? process.env.DIST
  : path.join(process.env.DIST, '../public');

let win: BrowserWindow | null;
// 🚧 Use ['ENV_NAME'] avoid vite:define plugin - Vite@2.x
const { VITE_DEV_SERVER_URL } = process.env;

function createWindow() {
  win = new BrowserWindow({
    width: 910,
    height: 640,
    minHeight: 500,
    minWidth: 700,
    icon: path.join(process.env.PUBLIC, 'electron-vite.svg'),
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
    frame: false,
  });

  // Test active push message to Renderer-process.
  win.webContents.on('did-finish-load', () => {
    win?.webContents.send('main-process-message', new Date().toLocaleString());
  });

  if (VITE_DEV_SERVER_URL) {
    win.loadURL(VITE_DEV_SERVER_URL);
    win.webContents.openDevTools();
  } else {
    // win.loadFile('dist/index.html')
    win.loadFile(path.join(process.env.DIST, 'index.html'));
  }

  windowMenu(win);
  windowSize(win);
  windowTray(app, win);
}

app.on('window-all-closed', () => {
  win = null;
});

app.whenReady().then(createWindow);
