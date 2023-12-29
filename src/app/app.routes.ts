import { type Routes } from '@angular/router'
import { ToDoComponent } from './to-do/containers/to-do/to-do.component'
import { LoginComponent } from './authentication/login/containers/login/login.component'
import { RegisterComponent } from './authentication/register/containers/register/register.component'

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    title: 'Home',
    component: ToDoComponent
  },
  {
    path: 'login',
    title: 'Login',
    component: LoginComponent
  },
  {
    path: 'register',
    title: 'Register',
    component: RegisterComponent
  }
]
