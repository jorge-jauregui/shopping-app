import { Component, OnInit, Input } from '@angular/core';
import { ShoppingBagService } from '../shopping-bag.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() shoppingBagItems = this.shoppingBagService.shoppingBagItems; // array from ShoppingBagService

  constructor(private shoppingBagService: ShoppingBagService ) { }
  ngOnInit(): void {
  }

}
