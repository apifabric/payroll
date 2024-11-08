import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './EmployeeDeduction-card.component.html',
  styleUrls: ['./EmployeeDeduction-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.EmployeeDeduction-card]': 'true'
  }
})

export class EmployeeDeductionCardComponent {


}