import { Component, OnInit, OnDestroy } from '@angular/core';
import { items } from '../items';


@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent {
  items = items; //from items object array in items.ts (see import at top)

}
