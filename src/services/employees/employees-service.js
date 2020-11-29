'use strict';

import fs from 'fs';
import path from 'path';

const BOOKS_FILE_PATH = path.resolve(__dirname, '../../../data/employees.json');

function _readFile() {
  return fs.readFileSync(BOOKS_FILE_PATH, 'utf8');
}

export default class EmployeesService {
  static getAllEmployees(request) {
    let employeesList = JSON.parse(_readFile());
    employeesList.employees.forEach(b => {
      b.cover = `${ request.server.info.uri }/images/${ b.cover }`;
    });

    return JSON.stringify(employeesList);
  }
}
