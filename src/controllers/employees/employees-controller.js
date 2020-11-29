'use strict';

import Boom from 'boom';

import EmployeesService from '../../services/employees/employees-service';

function getEmployee(request, h) {
  const employees = JSON.parse(EmployeesService.getAllEmployees(request)).employees;
  const employee = employees.find(b => b.username === request.params.username);
  if (!employee) {
    throw Boom.notFound();
  }

  return employee;
}

function getEmployeesList(request, h) {
  return EmployeesService.getAllEmployees(request);
}

export default {
  getEmployee: getEmployee,
  getEmployeesList: getEmployeesList,
};
