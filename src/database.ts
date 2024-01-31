const sqlite3 = require('sqlite3').verbose();

const DB_SOURCE = 'db.sqlite';

export let db = new sqlite3.Database(DB_SOURCE, (err: Error | null) => {
  if (err) {
    console.error(err.message);
    throw err;
  } else {
    console.log('Connected to the SQLite database.');
    db.run(
      `CREATE TABLE IF NOT EXISTS post (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title text, 
            content text, 
            )`,
      (err: Error | null) => {
        if (err) {
          // Table already created
        } else {
          // Table just created, creating some rows
          var insert = 'INSERT INTO post (title, content) VALUES (?,?)';
          db.run(insert, ['Post', 'content']);
          db.run(insert, ['Another Post', 'content']);
        }
      }
    );
  }
});

export const closeDB = () => {
  db.close((err: Error | null) => {
    if (err) {
      console.error(err.message);
    } else {
      console.log('Closed the database connection.');
    }
  });
};

