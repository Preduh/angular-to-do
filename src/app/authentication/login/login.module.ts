import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { BrowserModule } from '@angular/platform-browser'
import { NgIconsModule } from '@ng-icons/core'
import { heroUserSolid } from '@ng-icons/heroicons/solid'
import { LoginComponent } from './containers/login/login.component'

@NgModule({
  declarations: [],
  imports: [CommonModule, NgIconsModule.withIcons({ heroUserSolid })],
  exports: []
})
export class LoginModule {}
