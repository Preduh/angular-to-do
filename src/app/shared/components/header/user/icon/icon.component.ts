import { Component } from '@angular/core'
import { UserService } from '../user.service';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [],
  templateUrl: './icon.component.html'
})
export class IconComponent {
  menuIsShowing: boolean = false

  constructor(private userService: UserService) {
    this.userService.menuIsShowingUpdated.subscribe((value) => {
      this.menuIsShowing = value
    })
  }

  toggleMenu (): void {
    if (this.userService.getMenuIsShowing()) {
      this.userService.setMenuIsShowing(false)
    } else this.userService.setMenuIsShowing(true)
  }
}
