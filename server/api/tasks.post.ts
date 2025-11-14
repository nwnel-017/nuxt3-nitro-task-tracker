import {z} from 'zod'
import { addTask } from './models/tasks';

const schema = z.object({
  title: z.string(),
  done: z.boolean().optional()
})

export default defineEventHandler(async (event) => {
    try {
    const result = await readValidatedBody(event, (data) => schema.parse(data));

    console.log(result.title, result.done)

    // return {task: result};
    addTask(result);

    } catch (err) {
      return sendError(event, createError({
        statusCode: 422,
        statusMessage: 'Invalid task'
    }))
    }
})