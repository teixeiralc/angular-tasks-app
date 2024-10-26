import { Component, computed, input, signal } from '@angular/core'
import { DUMMY_TASKS } from '../../dummy-tasks'
import NewTaskFormValues from '../../models/newTaskFormvalues'
import { Tasks } from '../../models/tasks'
import { NewTaskComponent } from './new-task/new-task.component'
import { TaskComponent } from './task/task.component'

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  tasks = signal<Tasks[]>(DUMMY_TASKS)
  isAddingTask = signal(false)

  selectedUserName = input.required<string>()
  selectedUserId = input.required<string>()

  selectedUserTasks = computed(() => {
    return this.tasks().filter((task) => task.userId === this.selectedUserId())
  })

  onCompleteTask(id: string) {
    this.tasks.update((tasks) => tasks.filter((task) => task.id !== id))
  }

  onStartNewTask() {
    this.isAddingTask.set(true)
  }

  onCancelNewTask() {
    this.isAddingTask.set(false)
  }

  onAddNewTask(taskData: NewTaskFormValues) {
    this.tasks.update((tasks) => [
      {
        id: new Date().getTime().toString(),
        userId: this.selectedUserId(),
        title: taskData.title,
        summary: taskData.summary,
        dueDate: taskData.duedate,
      },
      ...tasks,
    ])
    this.isAddingTask.set(false)
  }
}
