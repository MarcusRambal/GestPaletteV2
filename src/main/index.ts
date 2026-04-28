import { app, shell, BrowserWindow, ipcMain } from 'electron'
import { join } from 'path'
import { electronApp, optimizer, is } from '@electron-toolkit/utils'
import icon from '../../resources/icon.png?asset'
import { createTables } from './tables'
import { getProducts, createProduct, createTag, getTags } from './db/productRepository';
import { Tag } from '../types/tagType'
import { db } from './db/database'


console.log("RUTA DE LA BASE DE DATOS:", db.pragma('database_list'));

function createWindow(): void {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 900,
    height: 670,
    show: false,
    autoHideMenuBar: true,
    ...(process.platform === 'linux' ? { icon } : {}),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false,
      nodeIntegration: false,
      contextIsolation: true
    }
  })

  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
  })

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  // HMR for renderer base on electron-vite cli.
  // Load the remote URL for development or the local html file for production.
  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
  } else {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
  }
}

function initIpcHandlers() {
    ipcMain.handle('db:get-products', getProducts);
    ipcMain.handle('db:create-product', createProduct);
    ipcMain.handle('db:create-tag', (_, tag: Tag) => {
        return createTag(tag);
    });
    ipcMain.handle('db:get-tags', () => {
       return getTags();
    });
}

app.whenReady().then(() => {
  // Set app user model id for windows
  //electronApp.setAppUserModelId('com.electron')


  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })


  // Create or initialize database tables
  createTables()
  initIpcHandlers();
  createWindow()

})


app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})


