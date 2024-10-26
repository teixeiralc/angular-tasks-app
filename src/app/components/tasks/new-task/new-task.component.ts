import { Component, output, signal } from '@angular/core'
import { FormsModule } from '@angular/forms'
import NewTaskFormValues from '../../../models/newTaskFormvalues'

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  cancel = output<void>()
  add = output<NewTaskFormValues>()

  enteredTitle = signal('')
  enteredSummary = signal('')
  enteredDate = signal('')

  onCancelNewTask() {
    this.cancel.emit()
  }

  onSubmit() {
    this.add.emit({
      title: this.enteredTitle(),
      summary: this.enteredSummary(),
      duedate: this.enteredDate(),
    })
  }
}
