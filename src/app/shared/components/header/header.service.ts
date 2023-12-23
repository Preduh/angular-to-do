import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private userIsLogged
  userIsLoggedUpdated = new EventEmitter<boolean>()

  constructor() {
    this.userIsLogged = false
  }

  getUserIsLogged(): boolean {
    return this.userIsLogged
  }

  setUserIsLogged(isLogged: boolean): void {
    this.userIsLogged = isLogged
    this.userIsLoggedUpdated.emit(isLogged)
  }
}
