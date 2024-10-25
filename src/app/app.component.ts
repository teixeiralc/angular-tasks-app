import { Component } from '@angular/core'
import { HeaderComponent } from './components/header/header.component'
import { TasksComponent } from './components/tasks/tasks.component'
import { UserComponent } from './components/user/user.component'
import { DUMMY_USERS } from './dummy-users'
import { User } from './models/user'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'tasks-app'
  users: User[] = DUMMY_USERS

  selectedUser?: User

  onSelectUser(id: string) {
    this.selectedUser = DUMMY_USERS.find((user) => user.id === id)
  }
}
