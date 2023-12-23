import { Component } from '@angular/core'
import { IconComponent } from './icon/icon.component'
import { MenuComponent } from './menu/menu.component'

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [IconComponent, MenuComponent],
  templateUrl: './user.component.html'
})
export class UserComponent {

}
