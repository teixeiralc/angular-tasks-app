import { Component, inject, input, output, signal } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { TasksService } from '../tasks.service'

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  close = output<void>()
  selectedUserId = input.required<string>()

  private tasksService = inject(TasksService)

  enteredTitle = signal('')
  enteredSummary = signal('')
  enteredDate = signal('')

  onCloseNewTask() {
    this.close.emit()
  }

  onSubmit() {
    this.tasksService.addTask(
      {
        title: this.enteredTitle(),
        summary: this.enteredSummary(),
        duedate: this.enteredDate(),
      },
      this.selectedUserId(),
    )
    this.close.emit()
  }
}
