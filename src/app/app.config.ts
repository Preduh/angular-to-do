import { type ApplicationConfig } from '@angular/core'
import { provideRouter } from '@angular/router'

import {
  provideHttpClient,
  withFetch,
  withInterceptors
} from '@angular/common/http'
import { provideAnimations } from '@angular/platform-browser/animations'
import { routes } from './app.routes'
import { authInterceptor } from './authentication/auth.interceptor'

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    provideHttpClient(withFetch(), withInterceptors([authInterceptor]))
  ]
}
