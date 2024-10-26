import { DatePipe } from '@angular/common'
import { Component, input, output } from '@angular/core'
import { Tasks } from '../../../models/tasks'
import { CardComponent } from '../../shared/card/card.component'

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, CardComponent, DatePipe],
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
