import { HttpClient } from '@angular/common/http'
import { Component, inject } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { Router } from '@angular/router'
import { AuthService } from '../../../../shared/authentication/auth.service'
import { HeaderComponent } from '../../../../shared/components/header/header.component'

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatButtonModule, HeaderComponent],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  http = inject(HttpClient)
  router = inject(Router)
  authService = inject(AuthService)

  onSubmit() {
    this.authService.login()
  }
}
