import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Deduction-card.component.html',
  styleUrls: ['./Deduction-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Deduction-card]': 'true'
  }
})

export class DeductionCardComponent {


}