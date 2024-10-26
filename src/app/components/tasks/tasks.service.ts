import { Injectable, signal } from '@angular/core'
import { DUMMY_TASKS } from '../../dummy-tasks'
import NewTaskFormValues from '../../models/newTaskFormvalues'
import { Tasks } from '../../models/tasks'

@Injectable({ providedIn: 'root' })
export class TasksService {
  private tasks = signal<Tasks[]>(DUMMY_TASKS)

  constructor() {
    const storedTasks = localStorage.getItem('tasks')

    if (storedTasks) this.tasks.set(JSON.parse(storedTasks))
  }

  getUserTasks(userId: string) {
    return this.tasks().filter((task) => task.userId === userId)
  }

  addTask(taskData: NewTaskFormValues, userId: string) {
    this.tasks.update((tasks) => [
      {
        id: new Date().getTime().toString(),
        userId,
        title: taskData.title,
        summary: taskData.summary,
        dueDate: taskData.duedate,
      },
      ...tasks,
    ])
    this.storeTasks()
  }

  removeTask(taskId: string) {
    this.tasks.update((tasks) => tasks.filter((task) => task.id !== taskId))
    this.storeTasks()
  }

  private storeTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks()))
  }
}
