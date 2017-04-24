import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameFilter'
})
export class NameFilterPipe implements PipeTransform {

  transform(input: Employee[], searchTerm?: string): Employee[] {
    if(!searchTerm){
      return input;
    }
    return input
            .filter(employee => `${employee.name.toLowerCase()}`
            .includes(searchTerm));
  }

}
