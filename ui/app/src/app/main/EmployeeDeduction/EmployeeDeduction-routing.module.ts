import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDeductionHomeComponent } from './home/EmployeeDeduction-home.component';
import { EmployeeDeductionNewComponent } from './new/EmployeeDeduction-new.component';
import { EmployeeDeductionDetailComponent } from './detail/EmployeeDeduction-detail.component';

const routes: Routes = [
  {path: '', component: EmployeeDeductionHomeComponent},
  { path: 'new', component: EmployeeDeductionNewComponent },
  { path: ':id', component: EmployeeDeductionDetailComponent,
    data: {
      oPermission: {
        permissionId: 'EmployeeDeduction-detail-permissions'
      }
    }
  }
];

export const EMPLOYEEDEDUCTION_MODULE_DECLARATIONS = [
    EmployeeDeductionHomeComponent,
    EmployeeDeductionNewComponent,
    EmployeeDeductionDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeDeductionRoutingModule { }