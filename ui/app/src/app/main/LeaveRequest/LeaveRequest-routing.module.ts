import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeaveRequestHomeComponent } from './home/LeaveRequest-home.component';
import { LeaveRequestNewComponent } from './new/LeaveRequest-new.component';
import { LeaveRequestDetailComponent } from './detail/LeaveRequest-detail.component';

const routes: Routes = [
  {path: '', component: LeaveRequestHomeComponent},
  { path: 'new', component: LeaveRequestNewComponent },
  { path: ':id', component: LeaveRequestDetailComponent,
    data: {
      oPermission: {
        permissionId: 'LeaveRequest-detail-permissions'
      }
    }
  }
];

export const LEAVEREQUEST_MODULE_DECLARATIONS = [
    LeaveRequestHomeComponent,
    LeaveRequestNewComponent,
    LeaveRequestDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeaveRequestRoutingModule { }