import { ElectronAPI } from '@electron-toolkit/preload'

interface HomeFunctions {
  getProducts: () => Promise<any[]>
  createProduct: (product: any) => Promise<any>
}

declare global {
  interface Window {
    electron: ElectronAPI
    api: homeFunctions
  }
}