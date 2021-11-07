import { projects, badges } from "./projectsData.js";

export default function renderProjects() {
  const projectsGrid = document.querySelector('div.projects-grid');

  projects.forEach(project => {
    // collect project technology badges
    let projectBadges = '';
    project.technologies.forEach(technology => {
      projectBadges += badges[technology] + "\n"
    });
    const projectHTML =
      `<div>
          <div class="project-box">
            <div class="overlay">
              <h4><a href=${project.projectUrl} rel="noreferrer" target="_blank">view</a></h4>
              <h4><a href=${project.projectCodeUrl} rel="noreferrer" target="_blank">&lt;view code/&gt;</a></h4>
            </div>
            <picture>
              <source srcset=${project.imgWebp} type="image/webp">
              <img class="project-image" src=${project.imgPng} width="1280px" height="726px" alt=${project.imgAlt}>
            </picture>
          </div>
          <p>${project.p}</p>
          ${projectBadges}
        </div>`
        projectsGrid.insertAdjacentHTML('beforeend', projectHTML)
  })
}