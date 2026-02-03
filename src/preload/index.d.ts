import { ElectronAPI } from '@electron-toolkit/preload'

interface CustomAPI {
  saludar: () => string
  sumar: (a: number, b: number) => number
}

declare global {
  interface Window {
    electron: ElectronAPI
    api: CustomAPI
  }
}
