import { Component, OnInit } from '@angular/core';
import { ShoppingBagService } from '../shopping-bag.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
  shippingCosts;

  constructor(private shoppingBagService: ShoppingBagService,) { }

  ngOnInit() {
    this.shippingCosts = this.shoppingBagService.getShippingCosts(); //'getShippingCosts() 'method from ShoppingBagService
  }

}
