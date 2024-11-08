import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';

export const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
        { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
        { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
      
    
        { path: 'Attendance', loadChildren: () => import('./Attendance/Attendance.module').then(m => m.AttendanceModule) },
    
        { path: 'Benefit', loadChildren: () => import('./Benefit/Benefit.module').then(m => m.BenefitModule) },
    
        { path: 'Deduction', loadChildren: () => import('./Deduction/Deduction.module').then(m => m.DeductionModule) },
    
        { path: 'Department', loadChildren: () => import('./Department/Department.module').then(m => m.DepartmentModule) },
    
        { path: 'Employee', loadChildren: () => import('./Employee/Employee.module').then(m => m.EmployeeModule) },
    
        { path: 'EmployeeBenefit', loadChildren: () => import('./EmployeeBenefit/EmployeeBenefit.module').then(m => m.EmployeeBenefitModule) },
    
        { path: 'EmployeeDeduction', loadChildren: () => import('./EmployeeDeduction/EmployeeDeduction.module').then(m => m.EmployeeDeductionModule) },
    
        { path: 'Job', loadChildren: () => import('./Job/Job.module').then(m => m.JobModule) },
    
        { path: 'LeaveRequest', loadChildren: () => import('./LeaveRequest/LeaveRequest.module').then(m => m.LeaveRequestModule) },
    
        { path: 'Payroll', loadChildren: () => import('./Payroll/Payroll.module').then(m => m.PayrollModule) },
    
        { path: 'PerformanceReview', loadChildren: () => import('./PerformanceReview/PerformanceReview.module').then(m => m.PerformanceReviewModule) },
    
        { path: 'Promotion', loadChildren: () => import('./Promotion/Promotion.module').then(m => m.PromotionModule) },
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }