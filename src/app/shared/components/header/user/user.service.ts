import { EventEmitter, Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  menuIsShowingUpdated = new EventEmitter<boolean>()
  private menuIsShowing: boolean = false

  getMenuIsShowing (): boolean {
    return this.menuIsShowing
  }

  setMenuIsShowing (show: boolean): void {
    this.menuIsShowing = show
    this.menuIsShowingUpdated.emit(this.menuIsShowing)
  }
}
