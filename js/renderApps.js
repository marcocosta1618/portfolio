import { apps, badges } from "./appsData.js";

export default function renderApps() {
   const appsGrid = document.querySelector('div.apps-grid');

   apps.forEach(app => {
      // data-tech attr
      let dataTechAttr = '';
      // app technologies badges
      let appBadges = '';

      app.technologies.forEach(technology => {
         dataTechAttr += technology + ' ';
         appBadges += badges[technology] + '\n';
      });

      const appHTML =           // remove last space
         `<div data-tech="${dataTechAttr.replace(/ $/, '')}">
          <div class="app-box">
            <div class="overlay">
              <h4><a href=${app.appUrl} rel="noreferrer" target="_blank">view</a></h4>
              <h4><a href=${app.appCodeUrl} rel="noreferrer" target="_blank">&lt;view code/&gt;</a></h4>
            </div>
            <picture>
              <source srcset=${app.imgWebp} type="image/webp">
              <img class="app-image" src=${app.imgPng} width="790px" height="448px" alt=${app.imgAlt}>
            </picture>
          </div>
          <p>${app.p}</p>
          ${appBadges}
      </div>`
      appsGrid.insertAdjacentHTML('beforeend', appHTML)
   })
}