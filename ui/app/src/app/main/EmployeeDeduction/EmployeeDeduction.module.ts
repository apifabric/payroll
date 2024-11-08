import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {EMPLOYEEDEDUCTION_MODULE_DECLARATIONS, EmployeeDeductionRoutingModule} from  './EmployeeDeduction-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    EmployeeDeductionRoutingModule
  ],
  declarations: EMPLOYEEDEDUCTION_MODULE_DECLARATIONS,
  exports: EMPLOYEEDEDUCTION_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EmployeeDeductionModule { }