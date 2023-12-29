import { CommonModule } from '@angular/common'
import { HttpClient } from '@angular/common/http'
import { Component, inject } from '@angular/core'
import {
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms'
import { MatButtonModule } from '@angular/material/button'
import { MatInputModule } from '@angular/material/input'
import { Router } from '@angular/router'
import { AuthService } from '../../../../shared/authentication/auth.service'
import { HeaderComponent } from '../../../../shared/components/header/header.component'

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatButtonModule,
    MatInputModule,
    HeaderComponent,
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  http = inject(HttpClient)
  router = inject(Router)
  authService = inject(AuthService)
  formBuilderService = inject(NonNullableFormBuilder)

  protected form = this.formBuilderService.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  })

  onSubmit() {
    const formValues = this.form.value

    if (!formValues.email || !formValues.password) {
      console.log('missing fields')
    } else {
      this.authService.login({
        email: formValues.email,
        password: formValues.password
      })
    }
  }
}
