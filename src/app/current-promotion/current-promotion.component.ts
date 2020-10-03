import { Component, OnInit } from '@angular/core';

import { timer, Subscription } from 'rxjs';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-current-promotion',
  templateUrl: './current-promotion.component.html',
  styleUrls: ['./current-promotion.component.css']
})

// countdown timer: https://stackblitz.com/edit/angular-qsbdpt?file=src%2Fapp%2Fapp.module.ts
export class CurrentPromotionComponent {
  
  // countdown: Subscription;
  counter = 80000;
  tick = 1000;
  countdown = timer(0, this.tick)
    .subscribe(() => --this.counter);

  // ngOnInit() {
  //   this.countdown = timer(0, this.tick)
  //     .subscribe(() => --this.counter);
  // }

}

@Pipe({
  name: "timeFormat",
})

export class PromotionCountdownPipe implements PipeTransform {
  transform(value: number): string {
    const hours: number = Math.floor(value / 3600);
    const minutes: number = Math.floor((value % 3600) / 60);
    return (
      ("00" + hours).slice(-2) +
      ":" +
      ("00" + minutes).slice(-2) +
      ":" +
      ("00" + Math.floor(value - minutes * 60)).slice(-2)
    );
  }
}
