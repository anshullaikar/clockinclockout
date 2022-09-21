import { getTasks } from "../cliHelpers.js";

getTasks().then((tasks) => {
    console.log(tasks);
});
