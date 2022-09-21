import express from "express";
import { v4 as uuidv4 } from "uuid";
import { readFileSync, writeFileSync } from "fs";
import { join } from "path";
import { z } from "zod";
import path from "path";
const __dirname = path.resolve();
const app = express();

app.use(express.json());

const filePath = join(__dirname, "tasks.json");

const getTasks = () => {
    const data = readFileSync(filePath, "utf8");
    return JSON.parse(data);
};

const saveTasks = (tasks: any) => {
    const data = JSON.stringify(tasks, null, 2);
    writeFileSync(filePath, data, "utf8");
};

const taskSchema = z.object({
    taskName: z.string().max(50),
    description: z.string().max(1000),
    deadline: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/),
    status: z.enum(["complete", "pending"]),
    estimatedHours: z.number().refine((value) => value % 0.25 === 0),
    actualHours: z.number().refine((value) => value % 0.25 === 0),
    startDate: z
        .string()
        .regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/)
        .optional(),
    endDate: z
        .string()
        .regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/)
        .optional(),
    id: z.string().refine((value) => {
        const tasks = getTasks();
        return !tasks.find((task: any) => task.id === value);
    }),
});

const exampleTask = {
    taskName: "Example Task",
    description: "This is an example task",
    deadline: "2021-08-01T00:00:00.000Z",
    status: "pending",
    estimatedHours: 1.25,
    actualHours: 0,
    startDate: "2021-07-01T00:00:00.000Z",
    endDate: "2021-07-01T00:00:00.000Z",
    id: "1234",
};

const handleWrongTypes = (req: any, res: any, next: any) => {
    try {
        taskSchema.parse(req.body);
        next();
    } catch (err) {
        res.status(400).send(err);
    }
};

app.post("/tasks", handleWrongTypes, (req, res) => {
    const tasks = getTasks();
    const task = req.body;
    task.id = uuidv4();
    tasks.push(task);
    saveTasks(tasks);
    res.send(task);
});

app.get("/tasks", (req, res) => {
    const tasks = getTasks();
    res.send(tasks);
});

app.get("/tasks/:id", (req, res) => {
    const tasks = getTasks();
    const task = tasks.find((task: any) => task.id === req.params.id);
    if (!task) {
        res.status(404).send("Task not found");
    } else {
        res.send(task);
    }
});

app.put("/tasks/:id", handleWrongTypes, (req, res) => {
    const tasks = getTasks();
    const task = tasks.find((task: any) => task.id === req.params.id);
    if (!task) {
        res.status(404).send("Task not found");
    } else {
        const updatedTask = req.body;
        updatedTask.id = task.id;
        const index = tasks.indexOf(task);
        tasks[index] = updatedTask;
        saveTasks(tasks);
        res.send(updatedTask);
    }
});

app.delete("/tasks/:id", (req, res) => {
    const tasks = getTasks();
    const task = tasks.find((task: any) => task.id === req.params.id);
    if (!task) {
        res.status(404).send("Task not found");
    } else {
        const index = tasks.indexOf(task);
        tasks.splice(index, 1);
        saveTasks(tasks);
        res.send(task);
    }
});

app.get("/tasks/status/:status", (req, res) => {
    const tasks = getTasks();
    const status = req.params.status;
    const tasksWithStatus = tasks.filter((task: any) => task.status === status);
    res.send(tasksWithStatus);
});

app.get("/tasks/deadline/:deadline", (req, res) => {
    const tasks = getTasks();
    const deadline = req.params.deadline;
    const tasksWithDeadline = tasks.filter(
        (task: any) => task.deadline === deadline
    );
    res.send(tasksWithDeadline);
});

app.get("/tasks/estimatedHours/:estimatedHours", (req, res) => {
    const tasks = getTasks();
    const estimatedHours = req.params.estimatedHours;
    const tasksWithEstimatedHours = tasks.filter(
        (task: any) => task.estimatedHours === estimatedHours
    );
    res.send(tasksWithEstimatedHours);
});

app.get("/tasks/actualHours/:actualHours", (req, res) => {
    const tasks = getTasks();
    const actualHours = req.params.actualHours;
    const tasksWithActualHours = tasks.filter(
        (task: any) => task.actualHours === actualHours
    );
    res.send(tasksWithActualHours);
});

app.get("/tasks/date/:date", (req, res) => {
    const tasks = getTasks();
    const date = req.params.date;
    const tasksWithDate = tasks.filter(
        (task: any) =>
            task.deadline === date ||
            task.startDate === date ||
            task.endDate === date
    );
    const tasksWithDeadline = tasksWithDate.filter(
        (task: any) => task.deadline === date
    );
    const tasksWithStartDate = tasksWithDate.filter(
        (task: any) => task.startDate === date
    );
    const tasksWithEndDate = tasksWithDate.filter(
        (task: any) => task.endDate === date
    );
    res.send({ tasksWithDeadline, tasksWithStartDate, tasksWithEndDate });
});

app.get("/tasks/search/:taskName", (req, res) => {
    const tasks = getTasks();
    const taskName = req.params.taskName;
    const tasksWithTaskName = tasks.filter((task: any) =>
        task.taskName.toLowerCase().includes(taskName.toLowerCase())
    );
    res.send(tasksWithTaskName);
});

app.listen(process.env.PORT || 3000, () => {
    console.log("Server is running");
});
