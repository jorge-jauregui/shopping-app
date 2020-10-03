import { Component, OnInit, Inject} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-cart-alert',
  templateUrl: './cart-alert.component.html',
  styleUrls: ['./cart-alert.component.css']
})
export class CartAlertComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, ) { }

  ngOnInit(): void {
  }

}
