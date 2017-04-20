import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {

   createDb() {
        const employees = [
            { id: 1, name: 'Nelson Bighetti', position: 'PHP Developer'},
            { id: 2, name: 'Richard Hendricks', position: 'JS Developer'}
        ];

        return { employees };

    }
}
