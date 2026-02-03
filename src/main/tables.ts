const Database = require('better-sqlite3')
const path = require('path')

const dbPath = path.resolve(__dirname, 'Invoices.db')
export const db = new Database(dbPath)

export function createTables() {
  try {
    // Enable foreign keys
    db.pragma('foreign_keys = ON')

    // Create tables with consistent column names and FK references
    db.exec(`
      CREATE TABLE IF NOT EXISTS Label (
        label_id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL
      );

      CREATE TABLE IF NOT EXISTS Products (
        product_id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        price REAL NOT NULL,
        label_id INTEGER,
        FOREIGN KEY(label_id) REFERENCES Label(label_id)
      );

      CREATE TABLE IF NOT EXISTS Payment (
        payment_id INTEGER PRIMARY KEY AUTOINCREMENT,
        method TEXT NOT NULL
      );

      CREATE TABLE IF NOT EXISTS Invoices (
        invoice_id INTEGER PRIMARY KEY AUTOINCREMENT,
        total REAL NOT NULL,
        total_efectivo REAL,
        total_tarjeta REAL,
        date TEXT NOT NULL,
        payment_id INTEGER,
        FOREIGN KEY(payment_id) REFERENCES Payment(payment_id)
      );

      CREATE TABLE IF NOT EXISTS InvoiceDetails (
        invoiceDetail_id INTEGER PRIMARY KEY AUTOINCREMENT,
        invoice_id INTEGER NOT NULL,
        product_id INTEGER NOT NULL,
        quantity INTEGER NOT NULL,
        subtotal REAL NOT NULL,
        FOREIGN KEY(invoice_id) REFERENCES Invoices(invoice_id),
        FOREIGN KEY(product_id) REFERENCES Products(product_id)
      );
    `)

    console.log('Database tables created or already exist')
  } catch (err) {
    console.error('Error creating tables', err)
  }
}
