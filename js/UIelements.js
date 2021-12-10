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
        icons.forEach(icon => icon.style.opacity = 0.075 + getScrollPos() * 0.95);
    }
    document.onscroll = throttle(onScroll, 80);

    // hide early works
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