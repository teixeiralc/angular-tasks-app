import { Component, computed, input, output } from '@angular/core'
import { User } from '../../models/user'

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  user = input.required<User>()
  selected = input.required<boolean>()

  select = output<string>()

  imgPath = computed(() => {
    return 'assets/users/' + this.user().avatar
  })

  onSelectUser() {
    this.select.emit(this.user().id)
  }
}
