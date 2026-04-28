import Database from 'better-sqlite3'
import { app } from 'electron/main';
import { join } from 'path'

export const dbPath = join(app.getPath('userData'), 'gestpalette.db');
export const db = new Database(dbPath)
