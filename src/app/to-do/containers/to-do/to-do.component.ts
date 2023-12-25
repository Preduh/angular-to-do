import { HttpClient } from '@angular/common/http'
import { Component, inject } from '@angular/core'
import { AuthService } from '../../../shared/authentication/auth.service'
import { HeaderComponent } from '../../../shared/components/header/header.component'

@Component({
  selector: 'app-to-do',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './to-do.component.html'
})
export class ToDoComponent {
  http = inject(HttpClient)
  authService = inject(AuthService)

  ngOnInit() {
    this.authService.validateToken()
  }
}
