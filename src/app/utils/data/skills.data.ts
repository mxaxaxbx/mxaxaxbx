import { ISkill } from '../ISkill';

export const SKILLS_DATA: ISkill[] = [
  {
    type: 'Lenguajes de programación',
    names: [ 'JavaScript', 'TypeScript', 'Python' ]
  },
  {
    type: 'Backend',
    names: [ 'Node.js & Express.js', 'Python flask' ]
  },
  {
    type: 'Frontend',
    names: [ 'Angular', 'Vuejs', 'CSS', 'SCSS', 'HTML', 'jQuery' ]
  },
  {
    type: 'Bases de datos & ORM',
    names: [ 'MySQL', 'CouchDB', 'Mongoose' ]
  },
  {
    type: 'Cloud',
    names: [ 'Firebase', 'Google app engine', 'Google cloud tasks', 'AWS Beanstalk' ]
  },
  // {
  //   type: 'Testing',
  //   names: [ 'Jest', 'Mocha' ]
  // },
  {
    type: 'Otros',
    names: [ 'Git & GitHub', 'REST API', 'JWT', 'Twilio' ]
  },
];
