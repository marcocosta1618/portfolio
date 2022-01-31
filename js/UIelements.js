import throttle from "./helperFn/throttle.js";
import getViewportDim from "./helperFn/getViewportDim.js";
import getScrollPos from "./helperFn/getScrollPos.js";

export default function UIelements() {

    const { _, h } = getViewportDim();
    // social media icons
    const icons = document.querySelectorAll('.social-icons svg');
    // background-image
    const bkgImg = document.querySelector('div.bkg-img');

    function onScroll() {
        bkgImg.style.top = getScrollPos() * -300000 / h + 'px';
        icons.forEach(icon => icon.style.opacity = 0.085 + getScrollPos() * 0.915);
    }
    document.onscroll = throttle(onScroll, 80);

    // filter projects with technologies buttons
    const techButtons = document.querySelectorAll("input[type='checkbox']");
    let selectedTech = [];

    techButtons.forEach(button => button.addEventListener('click', filterProject));

    function filterProject() {
        // update selectedTech arr with chosen technology names
        this.checked
            ? selectedTech = selectedTech.concat(this.name)
            : selectedTech = selectedTech.filter(tech => tech != [this.name])

        // iterate each project
        projects.forEach(project => {
            // make an array out of technologies names in 'data.technologies' attribute
            const projectTech = project.dataset.tech.split(' ');
            // initially add 'filtered' class to each prj
            project.classList.add('filterOut');
            // remove 'filterOut' class if a prj's tech matches any element of selectedTech array
            projectTech.forEach(tech =>
                selectedTech.indexOf(tech) !== -1 && project.classList.remove('filterOut'));
            // if no technology is selected, remove 'filterOut' class to each prj (display all)
            selectedTech.length === 0 && project.classList.remove('filterOut')
        })
    }

    // hide early works on pageload
    const projects = document.querySelectorAll(".projects-grid > div");
    const earlierprojects = Array.from(projects).slice(6);
    earlierprojects.forEach(project => project.classList.toggle("hidden"));

    // show/hide early projects button:
    const projectsButton = document.querySelector(".projects-btn");

    projectsButton.onclick = () => {
        earlierprojects.forEach(project => project.classList.toggle("hidden"));
        projectsButton.classList.toggle('clicked');
        projectsButton.innerText === "Show more"
            ? projectsButton.innerHTML = projectsButton.innerHTML.replace('more', 'less')
            : projectsButton.innerHTML = projectsButton.innerHTML.replace('less', 'more')
    }
}