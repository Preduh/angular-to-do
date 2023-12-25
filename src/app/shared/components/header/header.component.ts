import { CommonModule } from '@angular/common'
import { Component, Input, inject } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatMenuModule } from '@angular/material/menu'
import { AuthService } from '../../authentication/auth.service'
import { Router } from '@angular/router'
import { UserInterface } from '../../authentication/user.model'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatMenuModule, MatIconModule, CommonModule, MatButtonModule],
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  router = inject(Router)
  authService = inject(AuthService)
  user: UserInterface | null | undefined = undefined

  ngOnInit() {
    this.authService.getCurrentUser().subscribe((user) => {
      this.user = user
    })
  }

  logout() {
    this.authService.logout()
  }
}
