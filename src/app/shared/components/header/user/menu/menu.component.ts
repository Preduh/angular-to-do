import { Component } from '@angular/core'
import { UserService } from '../user.service'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html'

})
export class MenuComponent {
  menuIsShowing: boolean = false

  constructor(private userService: UserService) {
    this.userService.menuIsShowingUpdated.subscribe((value) => {
      this.menuIsShowing = value
    })
  }
}
