import { projects, badges } from "./projectsData.js";

export default function renderProjects() {
  const projectsGrid = document.querySelector('div.projects-grid');

  projects.forEach(project => {
    // data-tech attr
    let dataTechAttr = '';
    // project technologies badges
    let projectBadges = '';

    project.technologies.forEach(technology => {
      dataTechAttr += technology + ' ';
      projectBadges += badges[technology] + '\n';
    });

    const projectHTML =           // remove last space
     `<div data-tech="${dataTechAttr.replace(/ $/, '')}">
          <div class="project-box">
            <div class="overlay">
              <h4><a href=${project.projectUrl} rel="noreferrer" target="_blank">view</a></h4>
              <h4><a href=${project.projectCodeUrl} rel="noreferrer" target="_blank">&lt;view code/&gt;</a></h4>
            </div>
            <picture>
              <source srcset=${project.imgWebp} type="image/webp">
              <img class="project-image" src=${project.imgPng} width="790px" height="448px" alt=${project.imgAlt}>
            </picture>
          </div>
          <p>${project.p}</p>
          ${projectBadges}
      </div>`
      projectsGrid.insertAdjacentHTML('beforeend', projectHTML)
  })
}