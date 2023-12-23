import { Component } from '@angular/core'
import { MatIconModule } from '@angular/material/icon'
import { MatMenuModule } from '@angular/material/menu'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatMenuModule, MatIconModule],
  templateUrl: './header.component.html'
})
export class HeaderComponent {

}
