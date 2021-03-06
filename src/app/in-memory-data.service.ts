/**
 * angular-in-memory-web-api is a virtual data base.
 */

import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {

        createDb() {

                const employees = [
                        {
                                filters: [
                                        // tslint:disable-next-line:max-line-length
                                        { name: 'Languages', type: 'languages', data: ['C#', 'ObjectiveC', 'PHP', 'Javascript', 'Java', 'Ruby', 'Python'] },
                                        { name: 'Platforms', type: 'platforms', data: ['Android', 'iOS', 'Backend', 'Frontend', 'Desktop'] },
                                        // tslint:disable-next-line:max-line-length
                                        { name: 'Db engines RDBMS', type: 'dbEnginesRDBMS', data: ['MySQL', 'MSSQL', 'PostgreSQL', 'SQLite'] },
                                        { name: 'Db engines NoSQL', type: 'dbEnginesNoSQL', data: ['MongoDB', 'CouchDB', 'Redis', 'Cassandra'] },
                                        { name: 'Offices', type: 'offices', data: ['Mykolaiv', 'Lviv', 'Kyiv', 'Clark'] },
                                        // tslint:disable-next-line:max-line-length
                                        { name: 'Availabilities', type: 'availabilities', data: ['GFL Expense', 'Looking for new experience'] },
                                        { name: 'Types of project', type: 'typesOfProject', data: ['Backend', 'Frontend', 'Mobile application'] }
                                ]
                        },
                        {
                                id: 1,
                                name: 'Nelson Bighetti',
                                position: 'PHP Developer',
                                languages: ['PHP', 'Javascript'],
                                platforms: ['Backend', 'Frontend'],
                                dbEnginesRDBMS: ['MySQL'],
                                dbEnginesNoSQL: [],
                                offices: ['Lviv'],
                                availabilities: ['Looking for new experience'],
                                typesOfProject: ['Backend', 'Frontend'],
                                imgSrc: 'http://www.piedpiper.com/app/themes/pied-piper/dist/images/bighead.png',
                                skillIcon: 'database',
                                warning: true,
                                skills: [
                                        { name: 'Backend', level: 'high' },
                                        { name: 'Frontend', level: 'medium ' },
                                        { name: 'Scripts & command line tools', level: 'low ' },
                                        { name: 'REST API', level: 'high' },
                                        { name: 'PHP', level: 'high' },
                                        { name: 'Javascript', level: 'high' },
                                        { name: 'Symfony', level: 'medium' },
                                        { name: 'Zend', level: 'low' },
                                        { name: 'MySQL', level: 'full' },
                                        { name: 'Docker', level: 'low' },
                                        { name: 'vim', level: 'low' },
                                        { name: 'Git', level: 'high' },
                                ]
                        },
                        {
                                id: 2,
                                name: 'Richard Hendricks',
                                position: 'JS Developer',
                                languages: ['PHP', 'Javascript'],
                                platforms: ['Backend', 'Frontend'],
                                dbEnginesRDBMS: ['MySQL'],
                                dbEnginesNoSQL: [],
                                availabilities: ['Looking for new experience'],
                                offices: ['Lviv'],
                                typesOfProject: ['Backend', 'Frontend'],
                                imgSrc: 'http://www.piedpiper.com/app/themes/pied-piper/dist/images/richard.png',
                                skillIcon: 'tv',
                                warning: true,
                                skills: [
                                        { name: 'Backend', level: 'low' },
                                        { name: 'Frontend', level: 'high ' },
                                        { name: 'Scripts & command line tools', level: 'low ' },
                                        { name: 'REST API', level: 'low' },
                                        { name: 'PHP', level: 'high' },
                                        { name: 'Javascript', level: 'full' },
                                        { name: 'Angular', level: 'medium' },
                                        { name: 'jQuery', level: 'low' },
                                        { name: 'MySQL', level: 'low' },
                                        { name: 'Docker', level: 'low' },
                                        { name: 'vim', level: 'low' },
                                        { name: 'Git', level: 'high' },
                                ]
                        },
                        {
                                id: 3,
                                name: 'John Doe',
                                position: 'PHP Developer',
                                languages: ['PHP', 'Javascript'],
                                platforms: ['Backend', 'Frontend'],
                                dbEnginesRDBMS: ['MySQL'],
                                dbEnginesNoSQL: [],
                                availabilities: ['Looking for new experience'],
                                offices: ['Lviv'],
                                typesOfProject: ['Backend', 'Frontend'],
                                imgSrc: 'http://themifycloud.com/demos/templates/joli/assets/images/users/avatar.jpg',
                                skillIcon: 'database',
                                warning: false,
                                skills: [
                                        { name: 'Backend', level: 'high' },
                                        { name: 'Frontend', level: 'medium ' },
                                        { name: 'PHP', level: 'high' },
                                        { name: 'Javascript', level: 'high' },
                                        { name: 'Symfony', level: 'medium' },
                                        { name: 'Zend', level: 'low' },
                                        { name: 'MySQL', level: 'high' },
                                        { name: 'Docker', level: 'low' },
                                        { name: 'vim', level: 'low' },
                                        { name: 'Git', level: 'high' },
                                ]
                        },
                        {
                                id: 4,
                                name: 'Aleksey Alimov',
                                position: 'JS Developer',
                                languages: ['Javascript'],
                                platforms: ['Frontend'],
                                dbEnginesRDBMS: [],
                                dbEnginesNoSQL: [],
                                availabilities: ['Looking for new experience GFL Expense'],
                                offices: ['Mykolaiv'],
                                typesOfProject: ['Frontend'],
                                imgSrc: 'http://www.picshare.ru/uploads/170425/YxI8nEpPGK.jpg',
                                skillIcon: 'tv',
                                warning: true,
                                skills: [
                                        { name: 'Frontend', level: 'high' },
                                        { name: 'REST API', level: 'low' },
                                        { name: 'Javascript', level: 'medium' },
                                        { name: 'Angular 2', level: 'medium' },
                                        { name: 'jQuery', level: 'medium' },
                                        { name: 'Git', level: 'medium' },
                                ]
                        },
                        {
                                id: 5,
                                name: 'Dinesh Chugtai',
                                position: 'iOS Developer',
                                languages: ['PHP', 'Javascript'],
                                platforms: ['Backend', 'iOS'],
                                dbEnginesRDBMS: ['MySQL'],
                                dbEnginesNoSQL: [],
                                availabilities: ['Looking for new experience'],
                                offices: ['Clark'],
                                typesOfProject: ['Backend', 'Mobile application'],
                                imgSrc: 'http://www.piedpiper.com/app/themes/pied-piper/dist/images/dinesh.png',
                                skillIcon: 'apple',
                                warning: false,
                                skills: [
                                        { name: 'Backend', level: 'low' },
                                        { name: 'Mobile apps', level: 'full' },
                                        { name: 'PHP', level: 'high' },
                                        { name: 'Javascript', level: 'high' },
                                        { name: 'Symfony', level: 'medium' },
                                        { name: 'Zend', level: 'low' },
                                        { name: 'MySQL', level: 'full' },
                                        { name: 'Docker', level: 'low' },
                                        { name: 'vim', level: 'low' },
                                        { name: 'Git', level: 'high' },
                                ]
                        },
                        {
                                id: 6,
                                name: 'Roy Trenneman',
                                position: 'JS Developer',
                                languages: ['Javascript'],
                                platforms: ['Frontend'],
                                dbEnginesRDBMS: [],
                                dbEnginesNoSQL: ['MongoDB'],
                                availabilities: ['Looking for new experience'],
                                offices: ['Kyiv'],
                                typesOfProject: ['Frontend', 'Mobile application'],
                                // tslint:disable-next-line:max-line-length
                                imgSrc: 'http://demo.cuckoothemes.com/cuckootap/features/wp-content/uploads/2013/10/it_roy_trenneman1-225x225.jpg',
                                skillIcon: 'tv',
                                warning: false,
                                skills: [
                                        { name: 'Mobile apps', level: 'low' },
                                        { name: 'Frontend', level: 'full' },
                                        { name: 'Javascript', level: 'full' },
                                        { name: 'jQuery', level: 'full' },
                                        { name: 'Angular', level: 'medium' },
                                        { name: 'mongodb', level: 'high' },
                                        { name: 'Git', level: 'high' },
                                ]
                        },
                        {
                                id: 7,
                                name: 'Maurice Moss',
                                position: 'Android Developer',
                                languages: ['Java'],
                                platforms: ['Android'],
                                dbEnginesRDBMS: ['SQLite'],
                                dbEnginesNoSQL: [],
                                availabilities: [],
                                offices: ['Lviv'],
                                typesOfProject: ['Mobile application'],
                                // tslint:disable-next-line:max-line-length
                                imgSrc: 'http://demo.cuckoothemes.com/cuckootap/features/wp-content/uploads/2013/10/it_maurice_moss1-225x225.jpg',
                                skillIcon: 'android',
                                warning: false,
                                skills: [
                                        { name: 'Mobile apps', level: 'high' },
                                        { name: 'Java', level: 'high' },
                                        { name: 'Phonegap', level: 'low' },
                                        { name: 'Angular', level: 'medium' },
                                        { name: 'SQLite', level: 'medium' },
                                        { name: 'Git', level: 'medium' },
                                ]
                        },
                        {
                                id: 8,
                                name: 'Jen Barber',
                                position: 'Android Developer',
                                languages: ['Java'],
                                platforms: ['Android'],
                                dbEnginesRDBMS: ['SQLite'],
                                dbEnginesNoSQL: [],
                                availabilities: [],
                                offices: ['Lviv'],
                                typesOfProject: ['Mobile application'],
                                imgSrc: 'https://s-media-cache-ak0.pinimg.com/236x/10/78/06/10780622b72a55443cd1e0dd4bd519a2.jpg?noindex=1',
                                skillIcon: 'android',
                                warning: false,
                                skills: [
                                        { name: 'Mobile apps', level: 'high' },
                                        { name: 'Java', level: 'high' },
                                        { name: 'Cordova', level: 'low' },
                                        { name: 'SQLite', level: 'medium' },
                                        { name: 'Git', level: 'medium' },
                                ]
                        },
                        {
                                id: 9,
                                name: 'Douglas Reynholm',
                                position: 'C# Developer',
                                languages: ['C#'],
                                platforms: ['Backend', 'Frontend'],
                                dbEnginesRDBMS: ['MSSQL'],
                                dbEnginesNoSQL: [],
                                availabilities: [],
                                offices: ['Kyiv'],
                                typesOfProject: ['Backend', 'Frontend'],
                                imgSrc: 'https://www.dorksandlosers.com/wp-content/uploads/2011/02/Douglas_Reynholm-2.jpg',
                                skillIcon: 'moon',
                                warning: false,
                                skills: [
                                        { name: 'Backend', level: 'high' },
                                        { name: 'Frontend', level: 'medium ' },
                                        { name: 'C#', level: 'high' },
                                        { name: 'MS SQL', level: 'medium' },
                                        { name: 'jQuery', level: 'medium' },
                                        { name: 'DotNetNuke', level: 'medium' },
                                        { name: 'Git', level: 'medium' },
                                ]
                        },
                        {
                                id: 10,
                                name: 'Denholm Reynholm',
                                position: 'Java Developer',
                                languages: ['Java'],
                                platforms: ['Backend'],
                                dbEnginesRDBMS: ['PostgreSQL'],
                                dbEnginesNoSQL: [],
                                availabilities: [],
                                offices: ['Kyiv'],
                                typesOfProject: ['Backend'],
                                imgSrc: 'http://www.aveleyman.com/Gallery/ActorsM/tve89036-20060204-1842.jpg',
                                skillIcon: 'joomla',
                                warning: false,
                                skills: [
                                        { name: 'Backend', level: 'high' },
                                        { name: 'Java', level: 'high ' },
                                        { name: 'Velocity', level: 'low' },
                                        { name: 'Spring MVC', level: 'medium' },
                                        { name: 'Hibernate', level: 'medium' },
                                        { name: 'PostgreSQL', level: 'medium' },
                                        { name: 'Git', level: 'medium' },
                                ]
                        }
                ];

                return { employees };

        }
}
