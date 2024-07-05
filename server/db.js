import pg from 'pg';

const db= new pg.Client({
    user:"postgres",
    // user: "postgres",
    host: "localhost",
    database: "World",
    password: "Chit@200703",
    port: 5432,
})

db.connect();
export default db;
