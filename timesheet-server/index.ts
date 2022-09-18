const express = require("express")
const dotenv  = require("dotenv")
const superstruct = require("superstruct")

dotenv.config();

const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
    res.send("Express + TypeScript Server");
});

app.listen(port, () => {
    console.log(`[server]: Server is running at https://localhost:${port}`);
});
