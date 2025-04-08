import { DatabaseSync } from 'node:sqlite'

const db = new DatabaseSync(':memory')

db.exec(`
    CREATE TABLE users (
        id INTEGRER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE,
        password TEXT
    )
    `
)

db.exec(`
    CREATE TABLE todos (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGRER,
        task TEXT,
        completed BOOLEAN DEFAULT 0,
        FOREIGN KEY(user_id) REFERENCE users(id)
    )
    `
)

export default db