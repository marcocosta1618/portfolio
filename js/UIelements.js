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

    // hide early works on pageload
    const allProjects = document.querySelectorAll(".projects-grid > div");
    const earlierProjects = Array.from(allProjects).slice(6);
    earlierProjects.forEach(project => project.classList.toggle("hidden"));

    // show/hide early projects button:
    const projectsBtn = document.querySelector(".projects-btn");

    projectsBtn.onclick = () => {
        earlierProjects.forEach(project => project.classList.toggle("hidden"));
        projectsBtn.classList.toggle('clicked');
        projectsBtn.innerText === "Show more"
            ? projectsBtn.innerHTML = projectsBtn.innerHTML.replace('more', 'less')
            : projectsBtn.innerHTML = projectsBtn.innerHTML.replace('less', 'more')
    }

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
        allProjects.forEach(project => {
            // make an array out of technologies names in 'data.technologies' attribute
            const projectTech = project.dataset.tech.split(' ');
            // initially add 'filterOut' class to each prj
            project.classList.add('filterOut');
            // remove 'filterOut' class if a prj's tech matches any element of selectedTech array
            projectTech.forEach(tech =>
                selectedTech.indexOf(tech) !== -1 && project.classList.remove('filterOut'));
            // if no technology is selected, remove 'filterOut' class to each prj (display all)
            selectedTech.length === 0 && project.classList.remove('filterOut')
        })
        // after techButtons have been clicked, check how many projects are visible
        const visibleProjects = document.querySelectorAll('.projects-grid > div:not(.hidden):not(.filterOut)')
        // if only one is, clicks 'Show more' button
        visibleProjects.length <= 1 && projectsBtn.innerText === 'Show more' && projectsBtn.click()
        // if more than 6 are, clicks 'Show less' button
        visibleProjects.length > 6 && projectsBtn.innerText === 'Show less' && projectsBtn.click()
    }
}