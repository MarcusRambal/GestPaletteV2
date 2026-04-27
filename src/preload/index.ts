  import { contextBridge, ipcRenderer } from 'electron'

  const api = {
    getProducts: () => ipcRenderer.invoke('db:get-products'),
    createProduct: (product: any) => ipcRenderer.invoke('db:create-product', product)
  }

  if (process.contextIsolated) {
    try {
      contextBridge.exposeInMainWorld('api', api)
    } catch (error) {
      console.error(error)
    }
  } else {
    window.api = api
  }