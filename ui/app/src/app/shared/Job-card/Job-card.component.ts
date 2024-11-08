import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Job-card.component.html',
  styleUrls: ['./Job-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Job-card]': 'true'
  }
})

export class JobCardComponent {


}