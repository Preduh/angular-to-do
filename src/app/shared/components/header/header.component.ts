import { CommonModule } from '@angular/common'
import { Component, inject } from '@angular/core'
import { Router } from '@angular/router'
import { AuthService } from '../../authentication/auth.service'
import { UserInterface } from '../../authentication/user.model'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
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
