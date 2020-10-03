import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { DialogAlertComponent } from './dialog-alert/dialog-alert.component';
import { CartAlertComponent } from './cart-alert/cart-alert.component';

import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-item-alerts',
  templateUrl: './item-alerts.component.html',
  styleUrls: ['./item-alerts.component.css']
})
export class ItemAlertsComponent implements OnInit {
  //@Input decorator passes 'item' values from the parent component (item-list) to this child component
  @Input() item;

  constructor(public dialog: MatDialog, ) { }

  ngOnInit() {
  }

  notifyAlertModal() {
    this.dialog.open(DialogAlertComponent, {
      data: this.item,
      height: '230px',
    });
  }

}
