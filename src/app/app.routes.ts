import { type Routes } from '@angular/router'

export const routes: Routes = [{
  path: "", pathMatch: "full", redirectTo: "home"
},{
  path: 'home', loadChildren: () => import('./to-do/to-do.routes').then(m => m.toDoRoutes)
}]
