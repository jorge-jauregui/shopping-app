import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ItemListComponent } from './item-list/item-list.component';

import { NavbarComponent } from './navbar/navbar.component';
import { ItemAlertsComponent } from './item-list/item-details/item-alerts/item-alerts.component';
import { ItemDetailsComponent } from './item-list/item-details/item-details.component';
import { ShoppingBagComponent } from './shopping-bag/shopping-bag.component';
import { ShippingComponent } from './shipping/shipping.component';
import { DialogAlertComponent } from './item-list/item-details/item-alerts/dialog-alert/dialog-alert.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';

import { CurrentPromotionComponent } from './current-promotion/current-promotion.component';
import { PromotionCountdownPipe } from './current-promotion/current-promotion.component';
import { CartAlertComponent } from './item-list/item-details/item-alerts/cart-alert/cart-alert.component';
import { ShippingReturnInfoComponent } from './shopping-bag/shipping-return-info/shipping-return-info.component';


@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    NavbarComponent,
    ItemAlertsComponent,
    ItemDetailsComponent,
    ShoppingBagComponent,
    ShippingComponent,
    DialogAlertComponent,
    CurrentPromotionComponent,
    PromotionCountdownPipe,
    CartAlertComponent,
    ShippingReturnInfoComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: ItemListComponent },
      { path: 'items/:itemId', component: ItemDetailsComponent },
      { path: 'shopping-bag', component: ShoppingBagComponent },
      { path: 'shipping', component: ShippingComponent },
    ]),
    BrowserAnimationsModule,
    MatDialogModule,    
    MatTooltipModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
