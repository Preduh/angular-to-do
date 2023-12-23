import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatMenuModule } from '@angular/material/menu'
import { HeaderService } from './header.service'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatMenuModule, MatIconModule, CommonModule, MatButtonModule],
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  userIsLogged: boolean = false

  constructor(private headerService: HeaderService) {
    this.headerService.userIsLoggedUpdated.subscribe(value => {
      this.userIsLogged = value
    })
  }

  login(): void {
    this.headerService.setUserIsLogged(true)
  }

  logout(): void {
    this.headerService.setUserIsLogged(false)
  }
}
