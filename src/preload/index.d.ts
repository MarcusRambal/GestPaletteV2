import { ElectronAPI } from '@electron-toolkit/preload'

interface HomeFunctions {
  getProducts: () => Promise<any[]>
  createProduct: (product: any) => Promise<any>
  createTag: (tag: any) => Promise<any>
  getTags: () => Promise<any[]>
}

declare global {
  interface Window {
    electron: ElectronAPI
    homeApi: HomeFunctions
  }
}