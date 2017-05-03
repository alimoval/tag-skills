import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {

    createDb() {

        const languages = ['Java', 'C# /.Net', 'ObjectiveC', 'PHP', 'Javascript', 'Ruby', 'Python'];

        const platforms = ['Android', 'iOS', 'Backend', 'Frontend', 'Desktop'];

        const dbEnginesRDBMS = ['MySQL', 'MSSQL', 'PostgreSQL', 'SQLite'];

        const dbEnginesNoSQL = ['MongoDB', 'CouchDB', 'Redis', 'Cassandra'];

        const offices = ['Mykolaiv', 'Lviv', 'Kyiv', 'Clark'];

        const availabilities = ['GFL Expense', 'Looking for new experience'];

        const typesOfProject = ['Backend', 'Frontend', 'Mobile application'];

        const employees = [
            {
                id: 1, name: 'Nelson Bighetti', position: 'PHP Developer', imgSrc: 'http://www.piedpiper.com/app/themes/pied-piper/dist/images/bighead.png', skillIcon: 'database', warning: true, skills: [
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
            { id: 2, name: 'Richard Hendricks', position: 'JS Developer', imgSrc: 'http://www.piedpiper.com/app/themes/pied-piper/dist/images/richard.png', skillIcon: 'tv', warning: true, skills: [
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
                    ] },
            { id: 3, name: 'John Doe', position: 'PHP Developer', imgSrc: 'http://themifycloud.com/demos/templates/joli/assets/images/users/avatar.jpg', skillIcon: 'database', warning: false, skills: [
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
                    ] },
            { id: 4, name: 'Aleksey Alimov', position: 'JS Developer', imgSrc: 'http://www.picshare.ru/uploads/170425/YxI8nEpPGK.jpg', skillIcon: 'tv', warning: true, skills: [
                    { name: 'Frontend', level: 'medium ' },
                    { name: 'REST API', level: 'low' },
                    { name: 'Javascript', level: 'medium' },
                    { name: 'Angular', level: 'low' },
                    { name: 'jQuery', level: 'low' },
                    { name: 'Git', level: 'medium' },
                    ] },
            { id: 5, name: 'Dinesh Chugtai', position: 'iOS Developer', imgSrc: 'http://www.piedpiper.com/app/themes/pied-piper/dist/images/dinesh.png', skillIcon: 'apple', warning: false, skills: [
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
                    ] },
            { id: 6, name: 'Roy Trenneman', position: 'JS Developer', imgSrc: 'http://demo.cuckoothemes.com/cuckootap/features/wp-content/uploads/2013/10/it_roy_trenneman1-225x225.jpg', skillIcon: 'tv', warning: false, skills: [
                    { name: 'Mobile apps', level: 'low' },
                    { name: 'Frontend', level: 'full' },
                    { name: 'Javascript', level: 'full' },
                    { name: 'jQuery', level: 'full' },
                    { name: 'Angular', level: 'medium' },
                    { name: 'mongodb', level: 'high' },
                    { name: 'Git', level: 'high' },
                    ] },
            { id: 7, name: 'Maurice Moss', position: 'Android Developer', imgSrc: 'http://demo.cuckoothemes.com/cuckootap/features/wp-content/uploads/2013/10/it_maurice_moss1-225x225.jpg', skillIcon: 'android', warning: false, skills: [
                    { name: 'Mobile apps', level: 'high' },
                    { name: 'Java', level: 'high' },
                    { name: 'Phonegap', level: 'low' },
                    { name: 'Angular', level: 'medium' },
                    { name: 'SQLite', level: 'medium' },
                    { name: 'Git', level: 'medium' },
                    ] },
            { id: 8, name: 'Jen Barber', position: 'Android Developer', imgSrc: 'https://lh4.googleusercontent.com/-RUiGmSwTfLs/AAAAAAAAAAI/AAAAAAAAAE8/1BEPWoTmaC8/photo.jpg', skillIcon: 'android', warning: false, skills: [
                    { name: 'Mobile apps', level: 'high' },
                    { name: 'Java', level: 'high' },
                    { name: 'Cordova', level: 'low' },
                    { name: 'SQLite', level: 'medium' },
                    { name: 'Git', level: 'medium' },
                    ] },
            { id: 9, name: 'Douglas Reynholm', position: 'C# Developer', imgSrc: 'https://www.dorksandlosers.com/wp-content/uploads/2011/02/Douglas_Reynholm-2.jpg', skillIcon: 'moon', warning: false, skills: [
                    { name: 'Backend', level: 'high' },
                    { name: 'Frontend', level: 'medium ' },
                    { name: 'C#', level: 'high' },
                    { name: 'MS SQL', level: 'medium' },
                    { name: 'jQuery', level: 'medium' },
                    { name: 'DotNetNuke', level: 'medium' },
                    { name: 'Git', level: 'medium' },
                    ] },
            { id: 10, name: 'Denholm Reynholm', position: 'Java Developer', imgSrc: 'http://www.aveleyman.com/Gallery/ActorsM/tve89036-20060204-1842.jpg', skillIcon: 'joomla', warning: false, skills: [
                    { name: 'Backend', level: 'high' },
                    { name: 'Java', level: 'high ' },
                    { name: 'Velocity', level: 'low' },
                    { name: 'Spring MVC', level: 'medium' },
                    { name: 'Hibernate', level: 'medium' },
                    { name: 'PostgreSQL', level: 'medium' },
                    { name: 'Git', level: 'medium' },
                    ] }
        ];

        return { employees, languages, platforms, dbEnginesRDBMS, dbEnginesNoSQL, offices, availabilities, typesOfProject };

    }
}
