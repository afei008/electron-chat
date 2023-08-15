/** @format */

import path from 'path';
import { BrowserWindow, Tray, Menu } from 'electron';

export default function windowTray(app: Electron.App, win: BrowserWindow) {
  const tray = new Tray(path.join(process.env.PUBLIC, 'logo.png'));
  const contextMenu = Menu.buildFromTemplate([
    { label: '退出', click: () => app.quit() },
  ]);

  tray.setContextMenu(contextMenu);

  tray.on('click', () => {
    win.show();
  });
}
