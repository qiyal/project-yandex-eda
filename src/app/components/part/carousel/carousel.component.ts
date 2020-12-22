import {Component, Input, OnInit} from '@angular/core';
import {Restaurant} from '../../../models/restaurant';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @Input() restaurants: Restaurant[];
  showIndex = 3;

  constructor() { }

  ngOnInit(): void {
    console.log(this.showIndex);
    console.log(this.restaurants[0]);
  }

  nextSales() {
    if (this.restaurants.length > this.showIndex) {
      this.showIndex += 3;
    }
  }

  prevSales() {
    if (3 < this.showIndex) {
      this.showIndex -= 3;
    }
  }

  isShow(i: number) {
    return ((this.showIndex - 3 <= i) && i < this.showIndex);
  }
}
