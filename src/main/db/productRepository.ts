import Database from 'better-sqlite3';
const db = new Database('database.db');

export const getProducts = () => {
    return db.prepare('SELECT * FROM productos').all();
};