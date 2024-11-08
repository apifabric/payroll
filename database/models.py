# coding: utf-8
from sqlalchemy import DECIMAL, DateTime  # API Logic Server GenAI assist
from sqlalchemy import Column, DateTime, Float, ForeignKey, Integer, String, Text
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base

########################################################################################################################
# Classes describing database for SqlAlchemy ORM, initially created by schema introspection.
#
# Alter this file per your database maintenance policy
#    See https://apilogicserver.github.io/Docs/Project-Rebuild/#rebuilding
#
# Created:  November 08, 2024 05:31:19
# Database: sqlite:////tmp/tmp.xlFtJmjsOg/payroll/database/db.sqlite
# Dialect:  sqlite
#
# mypy: ignore-errors
########################################################################################################################
 
from database.system.SAFRSBaseX import SAFRSBaseX
from flask_login import UserMixin
import safrs, flask_sqlalchemy
from safrs import jsonapi_attr
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship
from sqlalchemy.orm import Mapped
from sqlalchemy.sql.sqltypes import NullType
from typing import List

db = SQLAlchemy() 
Base = declarative_base()  # type: flask_sqlalchemy.model.DefaultMeta
metadata = Base.metadata

#NullType = db.String  # datatype fixup
#TIMESTAMP= db.TIMESTAMP

from sqlalchemy.dialects.sqlite import *



class Benefit(SAFRSBaseX, Base):
    """
    description: Enumerates possible employee benefits and descriptions.
    """
    __tablename__ = 'benefits'
    _s_collection_name = 'Benefit'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    description = Column(Text)

    # parent relationships (access parent)

    # child relationships (access children)
    EmployeeBenefitList : Mapped[List["EmployeeBenefit"]] = relationship(back_populates="benefit")



class Deduction(SAFRSBaseX, Base):
    """
    description: Lists deductions applicable to employees.
    """
    __tablename__ = 'deductions'
    _s_collection_name = 'Deduction'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    description = Column(Text)
    amount = Column(Float)

    # parent relationships (access parent)

    # child relationships (access children)
    EmployeeDeductionList : Mapped[List["EmployeeDeduction"]] = relationship(back_populates="deduction")



class Department(SAFRSBaseX, Base):
    """
    description: Holds department information and names.
    """
    __tablename__ = 'departments'
    _s_collection_name = 'Department'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    manager_id = Column(ForeignKey('employees.id'))

    # parent relationships (access parent)
    manager : Mapped["Employee"] = relationship(foreign_keys='[Department.manager_id]', back_populates=("DepartmentList"))

    # child relationships (access children)
    EmployeeList : Mapped[List["Employee"]] = relationship(foreign_keys='[Employee.department_id]', back_populates="department")



class Employee(SAFRSBaseX, Base):
    """
    description: Stores information about employees, including personal and job details.
    """
    __tablename__ = 'employees'
    _s_collection_name = 'Employee'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    first_name = Column(String, nullable=False)
    last_name = Column(String, nullable=False)
    email = Column(String, nullable=False, unique=True)
    phone_number = Column(String)
    hire_date = Column(DateTime)
    job_id = Column(ForeignKey('jobs.id'))
    salary = Column(Float)
    manager_id = Column(ForeignKey('employees.id'))
    department_id = Column(ForeignKey('departments.id'))

    # parent relationships (access parent)
    department : Mapped["Department"] = relationship(foreign_keys='[Employee.department_id]', back_populates=("EmployeeList"))
    job : Mapped["Job"] = relationship(back_populates=("EmployeeList"))
    manager_ : Mapped["Employee"] = relationship(remote_side=[id], back_populates=("EmployeeList"))

    # child relationships (access children)
    DepartmentList : Mapped[List["Department"]] = relationship(foreign_keys='[Department.manager_id]', back_populates="manager")
    EmployeeList : Mapped[List["Employee"]] = relationship(back_populates="manager_")
    AttendanceList : Mapped[List["Attendance"]] = relationship(back_populates="employee")
    EmployeeBenefitList : Mapped[List["EmployeeBenefit"]] = relationship(back_populates="employee")
    EmployeeDeductionList : Mapped[List["EmployeeDeduction"]] = relationship(back_populates="employee")
    LeaveRequestList : Mapped[List["LeaveRequest"]] = relationship(back_populates="employee")
    PayrollList : Mapped[List["Payroll"]] = relationship(back_populates="employee")
    PerformanceReviewList : Mapped[List["PerformanceReview"]] = relationship(back_populates="employee")
    PromotionList : Mapped[List["Promotion"]] = relationship(back_populates="employee")



class Job(SAFRSBaseX, Base):
    """
    description: Lists all jobs and descriptions.
    """
    __tablename__ = 'jobs'
    _s_collection_name = 'Job'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    title = Column(String, nullable=False)
    min_salary = Column(Float)
    max_salary = Column(Float)

    # parent relationships (access parent)

    # child relationships (access children)
    EmployeeList : Mapped[List["Employee"]] = relationship(back_populates="job")
    PromotionList : Mapped[List["Promotion"]] = relationship(back_populates="new_job")



class Attendance(SAFRSBaseX, Base):
    """
    description: Tracks attendance records including presence days and absences.
    """
    __tablename__ = 'attendances'
    _s_collection_name = 'Attendance'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    employee_id = Column(ForeignKey('employees.id'), nullable=False)
    date = Column(DateTime)
    status = Column(String, nullable=False)

    # parent relationships (access parent)
    employee : Mapped["Employee"] = relationship(back_populates=("AttendanceList"))

    # child relationships (access children)



class EmployeeBenefit(SAFRSBaseX, Base):
    """
    description: Connects employees with their assigned benefits.
    """
    __tablename__ = 'employee_benefits'
    _s_collection_name = 'EmployeeBenefit'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    employee_id = Column(ForeignKey('employees.id'), nullable=False)
    benefit_id = Column(ForeignKey('benefits.id'), nullable=False)

    # parent relationships (access parent)
    benefit : Mapped["Benefit"] = relationship(back_populates=("EmployeeBenefitList"))
    employee : Mapped["Employee"] = relationship(back_populates=("EmployeeBenefitList"))

    # child relationships (access children)



class EmployeeDeduction(SAFRSBaseX, Base):
    """
    description: Links employees to their respective deductions.
    """
    __tablename__ = 'employee_deductions'
    _s_collection_name = 'EmployeeDeduction'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    employee_id = Column(ForeignKey('employees.id'), nullable=False)
    deduction_id = Column(ForeignKey('deductions.id'), nullable=False)

    # parent relationships (access parent)
    deduction : Mapped["Deduction"] = relationship(back_populates=("EmployeeDeductionList"))
    employee : Mapped["Employee"] = relationship(back_populates=("EmployeeDeductionList"))

    # child relationships (access children)



class LeaveRequest(SAFRSBaseX, Base):
    """
    description: Manages employee leave applications and statuses.
    """
    __tablename__ = 'leave_requests'
    _s_collection_name = 'LeaveRequest'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    employee_id = Column(ForeignKey('employees.id'), nullable=False)
    start_date = Column(DateTime, nullable=False)
    end_date = Column(DateTime, nullable=False)
    status = Column(String)

    # parent relationships (access parent)
    employee : Mapped["Employee"] = relationship(back_populates=("LeaveRequestList"))

    # child relationships (access children)



class Payroll(SAFRSBaseX, Base):
    """
    description: Records payroll transactions and amounts.
    """
    __tablename__ = 'payrolls'
    _s_collection_name = 'Payroll'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    employee_id = Column(ForeignKey('employees.id'), nullable=False)
    payment_date = Column(DateTime)
    amount = Column(Float, nullable=False)
    tax_deducted = Column(Float)

    # parent relationships (access parent)
    employee : Mapped["Employee"] = relationship(back_populates=("PayrollList"))

    # child relationships (access children)



class PerformanceReview(SAFRSBaseX, Base):
    """
    description: Stores evaluations of employee performance.
    """
    __tablename__ = 'performance_reviews'
    _s_collection_name = 'PerformanceReview'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    employee_id = Column(ForeignKey('employees.id'), nullable=False)
    review_date = Column(DateTime)
    rating = Column(Integer, nullable=False)
    comments = Column(Text)

    # parent relationships (access parent)
    employee : Mapped["Employee"] = relationship(back_populates=("PerformanceReviewList"))

    # child relationships (access children)



class Promotion(SAFRSBaseX, Base):
    """
    description: Contains records of employee promotions and new roles.
    """
    __tablename__ = 'promotions'
    _s_collection_name = 'Promotion'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    employee_id = Column(ForeignKey('employees.id'), nullable=False)
    new_job_id = Column(ForeignKey('jobs.id'), nullable=False)
    promotion_date = Column(DateTime)

    # parent relationships (access parent)
    employee : Mapped["Employee"] = relationship(back_populates=("PromotionList"))
    new_job : Mapped["Job"] = relationship(back_populates=("PromotionList"))

    # child relationships (access children)
