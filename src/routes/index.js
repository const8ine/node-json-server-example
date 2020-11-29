'use strict';

import EmployeesController from '../controllers/employees/employees-controller';
import ErrorController from '../controllers/error/error-controller';
import ImagesController from '../controllers/profile-pic/profile-pic-controller';

const routes = [
  {
    method: 'GET',
    path: '/employees',
    handler: EmployeesController.getEmployeesList,
  },
  {
    method: 'GET',
    path: '/employees/{username}',
    handler: EmployeesController.getEmployee,
  },
  {
    method: 'GET',
    path: '/profile-pic/{file}',
    handler: ImagesController.getImage,
  },
  {
    method: 'GET',
    path: '/*',
    handler: ErrorController.notFound,
  },
];

export default routes;
