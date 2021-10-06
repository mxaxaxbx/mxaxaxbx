import { environment } from '../../environments/environment';

import { IProject } from './IProject';
import { testUniqueness } from './utils';

// import { liveServerData } from './data/live-server.data';
// import { LiveSassData } from './data/live-sass.data';
// import { CakeShopData } from './data/cake-shop.data';
// import { SocialNetworkData } from './data/social-network.data';
// import { WeMateData } from './data/we-mate.data';
// import { SocialDiaryData } from './data/social-diary.data';
// import { SaleItData } from './data/sale-it.data';
// import { portfoliloData } from './data/portfolio.data';
// import { OShopData } from './data/oshop.data';
// import { LiveServerWebExtensionData } from './data/live-server-web-extension.data';
// import { LargeNumberFactorialData } from './data/large-number-factorial.data';
// import { IndecitionData } from './data/indecition.data';
// import { FaceDetectionData } from './data/face-detector-chrome-api.data';
// import { ExpensifyData } from './data/expensify.data';
// import { createFileFolderData } from './data/create-files-folder-on-the-go.data';
// import { techFestData } from './data/college-tech-fest.data';
// import { bikeShopData } from './data/simple-bike-shopping-site.data';
import { backednJs } from './data/backend-js.data';
import { ngTodo } from './data/ng-todo.data';
import { excelFileDistribution } from './data/excel-file-distribution.data';
import { netflixClone } from './data/netfflix-clone.data';
import { yesPlayer } from './data/yes-player.data';
import { simpleInventory } from './data/simple-inventory.data';
import { springMVC } from './data/spring-mvc.data';
import { ngSongLyrics } from './data/ng-song-lyrics.data';

const getAllProject = () => {
  const projects = [
    backednJs,
    ngTodo,
    excelFileDistribution,
    netflixClone,
    yesPlayer,
    simpleInventory,
    springMVC,
    ngSongLyrics,
  ];

  if (!environment.production) {
    const result = testUniqueness(projects, project => project.id);

    if (result.error) {
      const errorLog = [];
      result.duplicates.forEach((project: IProject) => {
        errorLog.push(`Duplicate E-id ${project.id} of ${project.name} `);
      });
      throw new Error(JSON.stringify(errorLog));
    }
  }

  return projects;
};

export const ALL_PROJECT_DATA = getAllProject();
