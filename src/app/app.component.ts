import { Component } from '@angular/core'
import { HeaderComponent } from './components/header/header.component'
import { TasksComponent } from './components/tasks/tasks.component'
import { UserComponent } from './components/user/user.component'
import { DUMMY_USERS } from './dummy-users'
import { IUser } from './models/user'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'tasks-app'
  users: IUser[] = DUMMY_USERS

  selectedUserName?: string | undefined

  onSelectUser(id: string) {
    this.selectedUserName = DUMMY_USERS.find((user) => user.id === id)?.name
  }
}
