import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { items } from '../../items';
import { ShoppingBagService } from '../../shopping-bag.service';
import { CartAlertComponent } from './item-alerts/cart-alert/cart-alert.component'

import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {
  item;

  addToBag(item) {
    this.shoppingBagService.addToBag(item);
    // window.alert(this.item.name + ' (' + this.item.color + ')' + ' has been added to your bag.')
  }
  addToBagModal(){
    const dialogRef = this.dialog.open(CartAlertComponent, {
      data: this.item,
      height: '75px',
      position: {
        top: '100px',
        right: '20px'
      },
    });

    dialogRef.afterOpened().subscribe(_ => {
      setTimeout(() => {
        dialogRef.close();
      }, 2000)
    })
  }
  calculateCost() {
    this.shoppingBagService.calculateCost();
  }
  
  //injecting ActivatedRoute in constructor to obtain & use route information
  //'route' as type ActivatedRoute 
  // https://angular.io/api/router/ActivatedRoute
  constructor(private route: ActivatedRoute,
              private shoppingBagService: ShoppingBagService,
              public dialog: MatDialog,) { }
  //paramMap is useful to change URL parameters within the current route
  ngOnInit() {
    this.route.paramMap
      .subscribe(
        params => {
          this.item = items[+params.get('itemId')];
        }
      );
  }

}
