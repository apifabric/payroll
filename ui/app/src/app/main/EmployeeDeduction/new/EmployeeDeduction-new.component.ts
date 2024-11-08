import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'EmployeeDeduction-new',
  templateUrl: './EmployeeDeduction-new.component.html',
  styleUrls: ['./EmployeeDeduction-new.component.scss']
})
export class EmployeeDeductionNewComponent {
  @ViewChild("EmployeeDeductionForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}