import { CartItem } from './cart-item.model'
import { MenuItem } from '../menu/menu-item/menu-item.model'

export class ShoppingCartService {
  items: CartItem[] = []
  constructor() {}

  clear() {
    this.items = []
  }

  addItem(item: MenuItem) {
    let foundItem = this.items.find(
      cartItem => cartItem.menuItem.id === item.id
    )
    if (foundItem) {
      this.increaseQty(foundItem)
    } else {
      this.items.push(new CartItem(item))
    }
  }

  removeItem(item: CartItem) {
    this.items.splice(this.items.indexOf(item), 1)
  }

  total(): number {
    return this.items
      .map(cartItem => cartItem.value())
      .reduce((prev, value) => prev + value, 0)
  }

  increaseQty(item: CartItem) {
    item.quantity += 1
  }

  decreaseQty(item: CartItem) {
    item.quantity -= 1
    if (item.quantity === 0) {
      this.removeItem(item)
    }
  }
}
