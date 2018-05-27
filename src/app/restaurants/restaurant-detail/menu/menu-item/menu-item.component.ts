import { Component, Input, EventEmitter, Output } from '@angular/core'
import { MenuItem } from './menu-item.model'

@Component({
  selector: 'mt-menu-item',
  templateUrl: './menu-item.component.html'
})
export class MenuItemComponent {
  @Input() menuItem: MenuItem
  @Output() add = new EventEmitter()

  constructor() {}

  emitAddEvent() {
    this.add.emit(this.menuItem)
  }
}
