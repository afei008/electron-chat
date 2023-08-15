/** @format */

import { ipcRenderer } from 'electron';

export default function handleWindowSize() {
  return {
    handleMax: (callback: (data: any) => void) =>
      ipcRenderer.on('isMax', callback),
    maxWindow: (callback: (data: any) => void) =>
      ipcRenderer.send('maxWindow', callback),
    minWindow: (callback: (data: any) => void) =>
      ipcRenderer.send('minWindow', callback),
    hideWindow: (callback: (data: any) => void) =>
      ipcRenderer.send('hideWindow', callback),
    showWindow: (callback: (data: any) => void) =>
      ipcRenderer.send('showWindow', callback),
  };
}
