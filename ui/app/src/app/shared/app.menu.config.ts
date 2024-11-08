import { MenuRootItem } from 'ontimize-web-ngx';

import { AttendanceCardComponent } from './Attendance-card/Attendance-card.component';

import { BenefitCardComponent } from './Benefit-card/Benefit-card.component';

import { DeductionCardComponent } from './Deduction-card/Deduction-card.component';

import { DepartmentCardComponent } from './Department-card/Department-card.component';

import { EmployeeCardComponent } from './Employee-card/Employee-card.component';

import { EmployeeBenefitCardComponent } from './EmployeeBenefit-card/EmployeeBenefit-card.component';

import { EmployeeDeductionCardComponent } from './EmployeeDeduction-card/EmployeeDeduction-card.component';

import { JobCardComponent } from './Job-card/Job-card.component';

import { LeaveRequestCardComponent } from './LeaveRequest-card/LeaveRequest-card.component';

import { PayrollCardComponent } from './Payroll-card/Payroll-card.component';

import { PerformanceReviewCardComponent } from './PerformanceReview-card/PerformanceReview-card.component';

import { PromotionCardComponent } from './Promotion-card/Promotion-card.component';


export const MENU_CONFIG: MenuRootItem[] = [
    { id: 'home', name: 'HOME', icon: 'home', route: '/main/home' },
    
    {
    id: 'data', name: ' data', icon: 'remove_red_eye', opened: true,
    items: [
    
        { id: 'Attendance', name: 'ATTENDANCE', icon: 'view_list', route: '/main/Attendance' }
    
        ,{ id: 'Benefit', name: 'BENEFIT', icon: 'view_list', route: '/main/Benefit' }
    
        ,{ id: 'Deduction', name: 'DEDUCTION', icon: 'view_list', route: '/main/Deduction' }
    
        ,{ id: 'Department', name: 'DEPARTMENT', icon: 'view_list', route: '/main/Department' }
    
        ,{ id: 'Employee', name: 'EMPLOYEE', icon: 'view_list', route: '/main/Employee' }
    
        ,{ id: 'EmployeeBenefit', name: 'EMPLOYEEBENEFIT', icon: 'view_list', route: '/main/EmployeeBenefit' }
    
        ,{ id: 'EmployeeDeduction', name: 'EMPLOYEEDEDUCTION', icon: 'view_list', route: '/main/EmployeeDeduction' }
    
        ,{ id: 'Job', name: 'JOB', icon: 'view_list', route: '/main/Job' }
    
        ,{ id: 'LeaveRequest', name: 'LEAVEREQUEST', icon: 'view_list', route: '/main/LeaveRequest' }
    
        ,{ id: 'Payroll', name: 'PAYROLL', icon: 'view_list', route: '/main/Payroll' }
    
        ,{ id: 'PerformanceReview', name: 'PERFORMANCEREVIEW', icon: 'view_list', route: '/main/PerformanceReview' }
    
        ,{ id: 'Promotion', name: 'PROMOTION', icon: 'view_list', route: '/main/Promotion' }
    
    ] 
},
    
    { id: 'settings', name: 'Settings', icon: 'settings', route: '/main/settings'}
    ,{ id: 'about', name: 'About', icon: 'info', route: '/main/about'}
    ,{ id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes' }
];

export const MENU_COMPONENTS = [

    AttendanceCardComponent

    ,BenefitCardComponent

    ,DeductionCardComponent

    ,DepartmentCardComponent

    ,EmployeeCardComponent

    ,EmployeeBenefitCardComponent

    ,EmployeeDeductionCardComponent

    ,JobCardComponent

    ,LeaveRequestCardComponent

    ,PayrollCardComponent

    ,PerformanceReviewCardComponent

    ,PromotionCardComponent

];