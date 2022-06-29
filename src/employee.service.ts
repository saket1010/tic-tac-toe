import { Injectable } from '@angular/core';
import { elementAt } from 'rxjs/operators';
import { Employee } from './app/employee';

@Injectable()
export class EmployeeService {
  allemployee = [];

  constructor() {}

  public save(emp: Employee): void {
    if (emp != null) {
      this.allemployee.push(emp);
    } else {
      throw Error('Employee is null');
    }
  }
  public getAllEmployeeByReportingManager(manager: Employee): Employee[] {
    const emp = [];
    this.allemployee.forEach((element) => {
      if (element.reportingManager == emp) {
        emp.push(element);
      }
    });
    return emp;
  }
}
