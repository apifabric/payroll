import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'PerformanceReview-new',
  templateUrl: './PerformanceReview-new.component.html',
  styleUrls: ['./PerformanceReview-new.component.scss']
})
export class PerformanceReviewNewComponent {
  @ViewChild("PerformanceReviewForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}