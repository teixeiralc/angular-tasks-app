import { Component, input, output } from '@angular/core'
import { Tasks } from '../../../models/tasks'

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  taskData = input.required<Tasks>()
  completeTask = output<string>()

  onCompleteTask() {
    this.completeTask.emit(this.taskData().id)
  }
}
