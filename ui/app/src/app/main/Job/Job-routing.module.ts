import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobHomeComponent } from './home/Job-home.component';
import { JobNewComponent } from './new/Job-new.component';
import { JobDetailComponent } from './detail/Job-detail.component';

const routes: Routes = [
  {path: '', component: JobHomeComponent},
  { path: 'new', component: JobNewComponent },
  { path: ':id', component: JobDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Job-detail-permissions'
      }
    }
  },{
    path: ':job_id/Employee', loadChildren: () => import('../Employee/Employee.module').then(m => m.EmployeeModule),
    data: {
        oPermission: {
            permissionId: 'Employee-detail-permissions'
        }
    }
},{
    path: ':new_job_id/Promotion', loadChildren: () => import('../Promotion/Promotion.module').then(m => m.PromotionModule),
    data: {
        oPermission: {
            permissionId: 'Promotion-detail-permissions'
        }
    }
}
];

export const JOB_MODULE_DECLARATIONS = [
    JobHomeComponent,
    JobNewComponent,
    JobDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobRoutingModule { }