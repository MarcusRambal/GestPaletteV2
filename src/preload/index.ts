import { contextBridge, ipcRenderer } from 'electron'
import { Tag } from '../types/tagType'

  const homeApi = {
    getProducts: () => ipcRenderer.invoke('db:get-products'),
    createProduct: (product: any) => ipcRenderer.invoke('db:create-product', product),
    createTag: (tag: Tag) => ipcRenderer.invoke('db:create-tag', tag),
    getTags: () => ipcRenderer.invoke('db:get-tags')
  }

  if (process.contextIsolated) {
    try {
      contextBridge.exposeInMainWorld('homeApi', homeApi)
    } catch (error) {
      console.error(error)
    }
  } else {
    window.homeApi = homeApi
  }