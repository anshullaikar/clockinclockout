import express from "express";
import dotenv from "dotenv";
import * as superstruct from "superstruct";
import fs from "fs";
import { join, dirname } from 'path'
import { Low, JSONFile } from 'lowdb'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url));

// Use JSON file for storage
const file = join(__dirname, 'db.json')
const adapter = new JSONFile(file)
const db:any = new Low(adapter)

// Read data from JSON file, this will set db.data content
await db.read()

dotenv.config();

const app = express();

app.use(express.json());

const port = process.env.PORT;


// {
//     "id":1,
//     "type":"subtask/main task",
//     "name":"Add task to timesheet",
//     "priority":"high",
//     "estimatedHours":3,
//     "taskLinkedTo":1
// }

db.data ||= { tasks: [] }   

app.get("/create", (req: any, res: any) => {
    const { id, type, name, priority, estimatedHours, taskLinkedTo } = req.body;
    console.log({ id, type, name, priority, estimatedHours, taskLinkedTo });
    db.data.tasks
        .push({ id, type, name, priority, estimatedHours, taskLinkedTo })
        .write();
    res.send("Success");
});
app.get("/delete", (req: any, res: any) => {
    res.send("Express + TypeScript Server");
});
app.get("/edit", (req: any, res: any) => {
    res.send("Express + TypeScript Server");
});
app.get("/read", (req: any, res: any) => {
    res.send("Express + TypeScript Server");
});

//add, remove, update, delete tasks
//store deleted tasks in other db

app.listen(port, () => {
    console.log(`[server]: Server is running at https://localhost:${port}`);
});
