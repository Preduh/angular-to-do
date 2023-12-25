import { HttpClient } from '@angular/common/http'
import { Component, inject } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { Router } from '@angular/router'
import { AuthService } from '../../../../shared/authentication/auth.service'
import { HeaderComponent } from '../../../../shared/components/header/header.component'

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [MatButtonModule, HeaderComponent],
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  router = inject(Router)
  http = inject(HttpClient)
  authService = inject(AuthService)

  onSubmit() {
    this.authService.register()
  }
}
