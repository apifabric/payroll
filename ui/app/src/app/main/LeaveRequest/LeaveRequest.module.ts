import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {LEAVEREQUEST_MODULE_DECLARATIONS, LeaveRequestRoutingModule} from  './LeaveRequest-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    LeaveRequestRoutingModule
  ],
  declarations: LEAVEREQUEST_MODULE_DECLARATIONS,
  exports: LEAVEREQUEST_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LeaveRequestModule { }