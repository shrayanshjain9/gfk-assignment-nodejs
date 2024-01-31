"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.closeDB = exports.db = void 0;
// database.ts
const sqlite3 = require('sqlite3').verbose();
const DB_SOURCE = 'db.sqlite';
exports.db = new sqlite3.Database(DB_SOURCE, (err) => {
    if (err) {
        console.error(err.message);
        throw err;
    }
    else {
        console.log('Connected to the SQLite database.');
        exports.db.run(`CREATE TABLE IF NOT EXISTS post (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title text UNIQUE, 
            content text, 
            CONSTRAINT title_unique UNIQUE (title)
            )`, (err) => {
            if (err) {
                // Table already created
            }
            else {
                // Table just created, creating some rows
                var insert = 'INSERT INTO post (title, content) VALUES (?,?)';
                exports.db.run(insert, ['Post', 'content']);
                exports.db.run(insert, ['Another Post', 'content']);
            }
        });
    }
});
const closeDB = () => {
    exports.db.close((err) => {
        if (err) {
            console.error(err.message);
        }
        else {
            console.log('Closed the database connection.');
        }
    });
};
exports.closeDB = closeDB;
// module.exports = { db, closeDB };
