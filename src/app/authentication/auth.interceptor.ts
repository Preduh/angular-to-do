import { HttpInterceptorFn } from '@angular/common/http'

export const authInterceptor: HttpInterceptorFn = (request, next) => {
  const token = localStorage.getItem('angular-to-do.token') ?? ''

  request = request.clone({
    setHeaders: {
      Authorization: token ? `Token ${token}` : ''
    }
  })

  return next(request)
}
