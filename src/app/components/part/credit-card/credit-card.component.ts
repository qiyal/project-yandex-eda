import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Card} from '../../../models/card';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.scss']
})
export class CreditCardComponent implements OnInit {
  @Input() creditCard: Card;
  @Output() deleteId = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  deleteCard() {
    this.deleteId.emit(this.creditCard.id);
  }
}
