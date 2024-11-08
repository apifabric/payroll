import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './LeaveRequest-card.component.html',
  styleUrls: ['./LeaveRequest-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.LeaveRequest-card]': 'true'
  }
})

export class LeaveRequestCardComponent {


}