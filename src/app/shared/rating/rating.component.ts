import { Component, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'mt-rating',
  templateUrl: './rating.component.html'
})
export class RatingComponent {
  @Output() rated = new EventEmitter<number>()
  rates: number[] = [1, 2, 3, 4, 5]
  rate: number = 0
  previousRate: number

  constructor() {}

  setRate(r: number) {
    this.rate = r
    this.previousRate = undefined
    this.rated.emit(this.rate)
  }

  setTempRate(r: number) {
    if (this.previousRate === undefined) {
      this.previousRate = this.rate
    }
    this.rate = r
  }

  clearTempRate() {
    if (this.previousRate !== undefined) {
      this.rate = this.previousRate
      this.previousRate = undefined
    }
  }
}
