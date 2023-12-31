import { CommonModule } from '@angular/common'
import { HttpClient } from '@angular/common/http'
import { Component, inject } from '@angular/core'
import {
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms'
import { Router } from '@angular/router'
import { AuthService } from '../../../../shared/authentication/auth.service'
import { HeaderComponent } from '../../../../shared/components/header/header.component'
import { LoginModule } from '../../login.module'
import { NgIconsModule } from '@ng-icons/core'

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    HeaderComponent,
    ReactiveFormsModule,
    CommonModule,
    LoginModule,
    NgIconsModule
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
    password: ['', [Validators.required]]
  })

  onSubmit(event: Event) {
    event.preventDefault()

    const formValues = this.form.value

    if (!this.form.valid) {
      Object.keys(this.form.controls).forEach((key) => {
        const control = this.form.get(key)

        if (control?.invalid) {
          control.markAsTouched()
        }
      })

      return
    }

    try {
      const algo = this.authService.login({
        email: formValues.email,
        password: formValues.password
      })
    } catch (error) {}
  }
}
