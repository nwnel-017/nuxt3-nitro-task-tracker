type Task = {
  id: string
  title: string
  done?: boolean
}

// This simulates our “database”
const tasks: Task[] = []

export function getAllTasks() {
  return tasks
}

export function getTask(id: string) {
  return tasks.find((task) => task.id === id);
}

export function addTask(task: Omit<Task, 'id'>) {
  const newTask = { id: crypto.randomUUID(), ...task }
  tasks.push(newTask)
  return newTask
}

export function removeTask(id: string) {
  const index = tasks.findIndex((t) => t.id === id)
  if (index !== -1) tasks.splice(index, 1)
}

export function toggleDone(id: string) {
  const task = tasks.find((t) => t.id === id)
  if (task) task.done = !task.done
  return task
}
