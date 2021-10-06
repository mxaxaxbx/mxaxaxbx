import { IProject } from '../IProject';

export const yesPlayer: IProject = {
  id: 'D861BC2A-E9F7-4CF1-8F9B-886C255E728C',
  name: 'Yes player',
  description: 'Reproductor de música',
  projectLink: '',
  isFeatured: true,
  liveUrl: 'https://yesplayer-17bbe.web.app/#/search',
  features: [
    'Uso del api de youtube',
    'Registro de colecciones en firebase',
    'Data lake',
  ],
  tags: ['angular'],
  techStuff: ['Angular', 'Firebase'],
//   additionalData: [
//     {
//       title: 'About',
//       data: [
//         'This extension is installed more than 1M (10 lakhs) times from marketplace (by 03.07.18)',
//         'Rating of this extension is 4.8 out of 5 (by 03.07.18)'
//       ]
//     }
//   ]
};
