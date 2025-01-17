import { Component, computed, inject, input, signal } from '@angular/core'
import { NewTaskComponent } from './new-task/new-task.component'
import { TaskComponent } from './task/task.component'
import { TasksService } from './tasks.service'

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  private taskService = inject(TasksService)

  isAddingTask = signal(false)
  selectedUserName = input.required<string>()
  selectedUserId = input.required<string>()

  selectedUserTasks = computed(() => {
    return this.taskService.getUserTasks(this.selectedUserId())
  })

  onCompleteTask(taskId: string) {
    this.taskService.removeTask(taskId)
  }

  onStartNewTask() {
    this.isAddingTask.set(true)
  }

  onCloseNewTask() {
    this.isAddingTask.set(false)
  }
}
