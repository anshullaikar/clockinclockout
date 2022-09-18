const express = require("express");
const dotenv = require("dotenv");
const superstruct = require("superstruct");

dotenv.config();

const app = express();
const port = process.env.PORT;
//connect lowdb
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("db.json");
const db = low(adapter);

db.defaults({ posts: [], user: {} }).write();

app.get("/add", (req:any, res:any) => {
    res.send("Express + TypeScript Server");
});

//add, remove, update, delete tasks
//store deleted tasks in other db


app.listen(port, () => {
    console.log(`[server]: Server is running at https://localhost:${port}`);
});
