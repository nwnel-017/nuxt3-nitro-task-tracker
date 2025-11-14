import { getAllTasks } from "./models/tasks";

export default defineEventHandler(() => {
    return getAllTasks();
})