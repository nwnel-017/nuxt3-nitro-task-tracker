import { getTask } from "../models/tasks"
import {z} from 'zod';

const IdParamsSchema = z.object({
    id: z.coerce.string(),
})

export default defineEventHandler(async (event) => {
    const result = await getValidatedRouterParams(event, (params) => IdParamsSchema.safeParse(params));

    if(!result.success) {
        return sendError(event, createError({
            statusCode: 422,
            statusMessage: "Invalid Id"
        }));
    }

    const task = getTask(result.data.id);

    if(!task) {
        return sendError(event, createError({
            statusCode: 404,
            statusMessage: "Task not found!"
        }));
    }

    return task;
});