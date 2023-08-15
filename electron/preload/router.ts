/** @format */

import { ipcRenderer } from 'electron';

export default function handleRouter() {
  return {
    handleRouter: (callback: (data: any) => void) =>
      ipcRenderer.on('router', callback),
  };
}
