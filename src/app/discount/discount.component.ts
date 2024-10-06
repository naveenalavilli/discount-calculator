import { Component } from '@angular/core';

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrl: './discount.component.css'
})
export class DiscountComponent {
  basePrice: number = 1;
  discount: number = 0;
  finalPrice: number | null = null;


  calculateFinalPrice() {
    if (this.basePrice && this.discount >= 0) {
      const discountAmount = (this.basePrice * this.discount) / 100;
      this.finalPrice = this.basePrice - discountAmount;
    } else {
      this.finalPrice = null;
    }
  }

}
