import { Component, computed, input, output } from '@angular/core'

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  userName = input.required<string>()
  userAvatar = input.required<string>()
  id = input.required<string>()

  select = output<string>()

  imgPath = computed(() => {
    return 'assets/users/' + this.userAvatar()
  })

  onSelectUser() {
    this.select.emit(this.id())
  }
}
