import { DatePipe } from '@angular/common'
import { Component, inject, input } from '@angular/core'
import { Tasks } from '../../../models/tasks'
import { CardComponent } from '../../shared/card/card.component'
import { TasksService } from '../tasks.service'

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  private taskService = inject(TasksService)

  taskData = input.required<Tasks>()

  onCompleteTask() {
    this.taskService.removeTask(this.taskData().id)
  }
}
