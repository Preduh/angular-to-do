import { HttpClient } from '@angular/common/http'
import { Injectable, inject } from '@angular/core'
import { Router } from '@angular/router'
import { Subject, Subscription } from 'rxjs'
import { environment } from '../../../environments/environment'
import {
  UserInterface,
  UserLoginRequestInterface,
  UserResponseInterface
} from './user.model'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  http = inject(HttpClient)
  router = inject(Router)

  currentUser = new Subject<UserInterface | undefined | null>()

  getCurrentUser() {
    return this.currentUser.asObservable()
  }

  login({ email, password }: UserLoginRequestInterface): any {
    this.http
      .post<UserResponseInterface>(`${environment.baseApiUrl}/users/login`, {
        user: {
          email,
          password
        }
      })
      .subscribe({
        next: (response) => {
          localStorage.setItem('angular-to-do.token', response.user.token)
          this.currentUser.next(response.user)
          this.router.navigateByUrl('/')
        },
        error: (err) => {
          console.log(err)
        }
      })
  }

  register(): void {
    this.http
      .post<UserResponseInterface>(`${environment.baseApiUrl}/users`, {
        user: {
          username: 'any_name',
          email: 'any@mail.com',
          password: '123456'
        }
      })
      .subscribe((response) => {
        localStorage.setItem('angular-to-do.token', response.user.token)
        this.currentUser.next(response.user)
        this.router.navigateByUrl('/')
      })
  }

  logout(): void {
    localStorage.removeItem('angular-to-do.token')
    this.currentUser.next(null)
    this.router.navigateByUrl('/login')
  }

  validateToken(): void {
    this.http
      .get<UserResponseInterface>('https://api.realworld.io/api/user')
      .subscribe({
        next: (response) => {
          this.currentUser.next(response.user)
        },
        error: () => {
          this.logout()
        }
      })
  }
}
