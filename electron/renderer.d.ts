/** @format */

export interface IElectronAPI {
  loadPreferences: () => Promise<void>;
  handleRouter: (callback: (_event: any, value: any) => void) => void;
}

declare global {
  interface Window {
    electronAPI: IElectronAPI;
  }
}
