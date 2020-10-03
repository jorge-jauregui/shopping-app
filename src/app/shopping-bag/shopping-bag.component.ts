import { Component, OnInit, Output } from '@angular/core';

import { ShoppingBagService } from '../shopping-bag.service';

@Component({
  selector: 'app-shopping-bag',
  templateUrl: './shopping-bag.component.html',
  styleUrls: ['./shopping-bag.component.css']
})
export class ShoppingBagComponent implements OnInit {
  shoppingBagItems = this.shoppingBagService.shoppingBagItems;
  shoppingBagItem = this.shoppingBagService.shoppingBagItem;

  discountCode: string = '5UC87W'
  discountCodeUserInput: string;
  discountApplied: boolean = false;

  subtotal: number = this.shoppingBagService.subtotal;
  tax: number = this.shoppingBagService.tax;
  totalCost: number = this.shoppingBagService.totalCost;
  discountCredit: number = this.subtotal * .40;

  //Injecting ShoppingBagService 
  constructor(private shoppingBagService: ShoppingBagService) {}
              
  ngOnInit() {
    this.updateCost();
  }
  
  updateCost = () => {
    this.subtotal = this.shoppingBagItems.map(a => a.price).reduce(function(a,b) {
      return a + b;
    });
    this.tax = this.subtotal * 0.075;
    this.totalCost = this.subtotal + this.tax;
  }

  // // discount code validation and cost update
  // onEnterDiscountCode = () => {
  //   if (this.discountCodeUserInput === this.discountCode) {
  //     this.totalCost = this.subtotal + this.tax - this.discountCredit; 
  //     this.discountApplied = true;
  //   } else {
  //     this.discountApplied = false;
  //   }
  // }
  calculateCost = () => {
    this.shoppingBagService.calculateCost();
  }

}
