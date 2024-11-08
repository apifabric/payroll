import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'LeaveRequest-new',
  templateUrl: './LeaveRequest-new.component.html',
  styleUrls: ['./LeaveRequest-new.component.scss']
})
export class LeaveRequestNewComponent {
  @ViewChild("LeaveRequestForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}