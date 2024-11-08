import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeHomeComponent } from './home/Employee-home.component';
import { EmployeeNewComponent } from './new/Employee-new.component';
import { EmployeeDetailComponent } from './detail/Employee-detail.component';

const routes: Routes = [
  {path: '', component: EmployeeHomeComponent},
  { path: 'new', component: EmployeeNewComponent },
  { path: ':id', component: EmployeeDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Employee-detail-permissions'
      }
    }
  },{
    path: ':employee_id/Attendance', loadChildren: () => import('../Attendance/Attendance.module').then(m => m.AttendanceModule),
    data: {
        oPermission: {
            permissionId: 'Attendance-detail-permissions'
        }
    }
},{
    path: ':manager_id/Department', loadChildren: () => import('../Department/Department.module').then(m => m.DepartmentModule),
    data: {
        oPermission: {
            permissionId: 'Department-detail-permissions'
        }
    }
},{
    path: ':manager_id/Employee', loadChildren: () => import('../Employee/Employee.module').then(m => m.EmployeeModule),
    data: {
        oPermission: {
            permissionId: 'Employee-detail-permissions'
        }
    }
},{
    path: ':employee_id/EmployeeBenefit', loadChildren: () => import('../EmployeeBenefit/EmployeeBenefit.module').then(m => m.EmployeeBenefitModule),
    data: {
        oPermission: {
            permissionId: 'EmployeeBenefit-detail-permissions'
        }
    }
},{
    path: ':employee_id/EmployeeDeduction', loadChildren: () => import('../EmployeeDeduction/EmployeeDeduction.module').then(m => m.EmployeeDeductionModule),
    data: {
        oPermission: {
            permissionId: 'EmployeeDeduction-detail-permissions'
        }
    }
},{
    path: ':employee_id/LeaveRequest', loadChildren: () => import('../LeaveRequest/LeaveRequest.module').then(m => m.LeaveRequestModule),
    data: {
        oPermission: {
            permissionId: 'LeaveRequest-detail-permissions'
        }
    }
},{
    path: ':employee_id/Payroll', loadChildren: () => import('../Payroll/Payroll.module').then(m => m.PayrollModule),
    data: {
        oPermission: {
            permissionId: 'Payroll-detail-permissions'
        }
    }
},{
    path: ':employee_id/PerformanceReview', loadChildren: () => import('../PerformanceReview/PerformanceReview.module').then(m => m.PerformanceReviewModule),
    data: {
        oPermission: {
            permissionId: 'PerformanceReview-detail-permissions'
        }
    }
},{
    path: ':employee_id/Promotion', loadChildren: () => import('../Promotion/Promotion.module').then(m => m.PromotionModule),
    data: {
        oPermission: {
            permissionId: 'Promotion-detail-permissions'
        }
    }
}
];

export const EMPLOYEE_MODULE_DECLARATIONS = [
    EmployeeHomeComponent,
    EmployeeNewComponent,
    EmployeeDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }