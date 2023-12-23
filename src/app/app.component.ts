import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { FeaturesModule } from './features/features.module'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FeaturesModule],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'angular-to-do'
}
