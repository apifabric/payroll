import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeductionHomeComponent } from './home/Deduction-home.component';
import { DeductionNewComponent } from './new/Deduction-new.component';
import { DeductionDetailComponent } from './detail/Deduction-detail.component';

const routes: Routes = [
  {path: '', component: DeductionHomeComponent},
  { path: 'new', component: DeductionNewComponent },
  { path: ':id', component: DeductionDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Deduction-detail-permissions'
      }
    }
  },{
    path: ':deduction_id/EmployeeDeduction', loadChildren: () => import('../EmployeeDeduction/EmployeeDeduction.module').then(m => m.EmployeeDeductionModule),
    data: {
        oPermission: {
            permissionId: 'EmployeeDeduction-detail-permissions'
        }
    }
}
];

export const DEDUCTION_MODULE_DECLARATIONS = [
    DeductionHomeComponent,
    DeductionNewComponent,
    DeductionDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeductionRoutingModule { }