/** @format */

import { BrowserWindow, Menu } from 'electron';

export default function setMenu(win: BrowserWindow | null) {
  const dockMenu = Menu.buildFromTemplate([
    {
      label: '首页',
      click: () => {
        win?.webContents.send('router', '/chat/page');
      },
    },
    {
      label: '登录',
      click: () => {
        win?.webContents.send('router', '/login-page');
      },
    },
  ]);

  Menu.setApplicationMenu(dockMenu);
}
