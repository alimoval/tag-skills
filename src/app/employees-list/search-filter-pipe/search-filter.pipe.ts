/**
 * This module depricated. First logic serched query on clients` side.
 */

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'SearchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(input: Employee[], searchTerm?: any): Employee[] {
    if (!searchTerm) {
      return input;
    }
    return input
      .filter(employee => {
        return !employee.skills.every(skill => {
          return !`${skill.name.toLowerCase()}`
            .includes(searchTerm);
        })
          || `${employee.name.toLowerCase()}`
            .includes(searchTerm)
          || `${employee.availability.toLowerCase()}`
            .includes(searchTerm)
          || `${employee.office.toLowerCase()}`
            .includes(searchTerm)
          || `${employee.position.toLowerCase()}`
            .includes(searchTerm);
      }
      );
  }

}

