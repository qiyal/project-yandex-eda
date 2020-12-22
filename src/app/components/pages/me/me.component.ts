import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.scss']
})
export class MeComponent implements OnInit {
  links = [
    { path: './personal-info', title: 'Personal information'},
    { path: './payments', title: 'Cards'},
    { path: './addresses', title: 'Addresses'},
    { path: './order-history', title: 'Order history'},
    { path: './my-promo-codes', title: 'Promo codes'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
