import { Component, computed, input, signal } from '@angular/core'
import { DUMMY_TASKS } from '../../dummy-tasks'
import { Tasks } from '../../models/tasks'
import { TaskComponent } from './task/task.component'

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  tasks = signal<Tasks[]>(DUMMY_TASKS)
  selectedUserName = input.required<string>()
  selectedUserId = input.required<string>()

  selectedUserTasks = computed(() => {
    return this.tasks().filter((task) => task.userId === this.selectedUserId())
  })

  onCompleteTask(id: string) {
    this.tasks.update((tasks) => tasks.filter((task) => task.id !== id))
  }
}
