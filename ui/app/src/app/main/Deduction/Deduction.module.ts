import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {DEDUCTION_MODULE_DECLARATIONS, DeductionRoutingModule} from  './Deduction-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    DeductionRoutingModule
  ],
  declarations: DEDUCTION_MODULE_DECLARATIONS,
  exports: DEDUCTION_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DeductionModule { }