//A service to share data between parts of the application
import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ShoppingBagService {
  shoppingBagItem;
  shoppingBagItems = [];
  
  subtotal: number;
  tax: number;
  totalCost: number;
  discountCost: number;
  
  discountCode: string = '5UC87W'
  discountCodeUserInput: string;
  constructor(private http: HttpClient, ) {}

  addToBag(item) {
    this.shoppingBagItems.push(item);
  };

  getShoppingBagItems() {
    return this.shoppingBagItems;
  };

  clearBag() {
    this.shoppingBagItems = [];
    return this.shoppingBagItems;
  };

  getShippingCosts() {
    return this.http.get('../assets/shipping.json')
  }

  calculateCost() {
    this.getShoppingBagItems();
    // https://expertcodeblog.wordpress.com/2018/10/31/typescript-sum-of-object-properties/
    // if (this.shoppingBagItems.length >= 1) {
      this.subtotal = this.shoppingBagItems.map(a => a.price).reduce(function(a,b) {
        return a + b;
      });
      this.tax = this.subtotal * 0.075;
      this.totalCost = this.subtotal + this.tax;
    // }
  }

}
