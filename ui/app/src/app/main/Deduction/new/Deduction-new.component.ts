import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'Deduction-new',
  templateUrl: './Deduction-new.component.html',
  styleUrls: ['./Deduction-new.component.scss']
})
export class DeductionNewComponent {
  @ViewChild("DeductionForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}