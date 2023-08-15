/** @format */

import { contextBridge } from 'electron';
import appLoading from './preload/appLoading';
import handleRouter from './preload/router';
import handleWindowSize from './preload/windowSize';

appLoading();

contextBridge.exposeInMainWorld('electronAPI', {
  ...handleRouter(),
  ...handleWindowSize(),
});
