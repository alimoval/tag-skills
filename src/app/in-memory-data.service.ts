import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {

   createDb() {
        const employees = [
            { id: 1, name: 'Nelson Bighetti', position: 'PHP Developer', imgSrc: 'http://www.piedpiper.com/app/themes/pied-piper/dist/images/bighead.png', skillIcon: 'database'},
            { id: 2, name: 'Richard Hendricks', position: 'JS Developer', imgSrc: 'http://www.piedpiper.com/app/themes/pied-piper/dist/images/richard.png', skillIcon: 'tv'},
            { id: 3, name: 'John Doe', position: 'PHP Developer', imgSrc: 'http://themifycloud.com/demos/templates/joli/assets/images/users/avatar.jpg', skillIcon: 'database'},
            { id: 1, name: 'Ivan Ivanov', position: 'PHP Developer', imgSrc: 'http://votre-voyance-en-ligne.net/wp-content/themes/votrevoyanceenligne/img/voyants/jim.jpg', skillIcon: 'database'},
            { id: 2, name: 'Dinesh Chugtai', position: 'iOS Developer', imgSrc: 'http://www.piedpiper.com/app/themes/pied-piper/dist/images/dinesh.png', skillIcon: 'apple'},
            { id: 3, name: 'Roy Trenneman', position: 'JS Developer', imgSrc: 'http://demo.cuckoothemes.com/cuckootap/features/wp-content/uploads/2013/10/it_roy_trenneman1-225x225.jpg', skillIcon: 'tv'},

            { id: 3, name: 'Maurice Moss', position: 'Android Developer', imgSrc: 'http://demo.cuckoothemes.com/cuckootap/features/wp-content/uploads/2013/10/it_maurice_moss1-225x225.jpg', skillIcon: 'android'},
            { id: 1, name: 'Jen Barber', position: 'Android Developer', imgSrc: 'http://ic.c4assets.com/bips/the-it-crowd/characters/a23bee02-d06c-4b52-9d78-ca950d12c30b.jpg?interpolation=progressive-bicubic&output-quality=90', skillIcon: 'android'},
            { id: 2, name: 'Douglas Reynholm', position: 'C# Developer', imgSrc: 'https://www.dorksandlosers.com/wp-content/uploads/2011/02/Douglas_Reynholm-2.jpg', skillIcon: 'moon'},
            { id: 3, name: 'Denholm Reynholm', position: 'Java Developer', imgSrc: 'http://www.aveleyman.com/Gallery/ActorsM/tve89036-20060204-1842.jpg', skillIcon: 'joomla'}
        ];

        return { employees };

    }
}
