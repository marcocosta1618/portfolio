import getViewportDim from "./helperFn/getViewportDim.js";
import gridAreas from "./gridAreas.js";

export default function welcomeAnim() {

    const { w, h } = getViewportDim();
    const body = document.querySelector("body");
    const container = document.querySelector("div.welcomeAnim");
    const fragment = document.createDocumentFragment();
    const [cols, rows] = w > h ? [16, 9] : [9, 16];
    let [delayID, timerID, cleanup] = [null, null, null];
    const initialDelay = 0;

    // define the container grid
    container.setAttribute('style',
       `grid-template-columns: repeat(${cols}, 1fr);
        grid-template-rows: repeat(${rows}, 1fr);
        grid-template-areas: ${gridAreas(cols, rows)};`);

    // create an array of unique IDs (one for each div.tile)
    const uIds = [];
    for (let i = 0; i < rows * cols; i++) {
        uIds.push(`tile-${i}`)
    }
    // create the div(s).tile, assign a unique ID to each one
    // and append each one to the document fragment
    uIds.forEach((uId) => {
        const tile = document.createElement('div');
        tile.id = uId;
        tile.className = `tile ${uId}`;
        tile.style = `grid-area: ${uId}`;
        fragment.appendChild(tile);
    })
    // append the document fragment to the container div
    container.appendChild(fragment);

    // set each tile's opacity to 0, one after another
    delayID = setTimeout(() => {
        body.style.overflowY = "hidden";
        container.style.backgroundColor = 'transparent';
        timerID = setInterval(removeTile, 25);
    }, initialDelay);

    function removeTile() {
        let i = Math.floor(Math.random() * uIds.length);
        const tile = document.querySelector(`#${uIds[i]}`);
        tile.style.opacity = 0;

        uIds.splice(i, 1);

        if (uIds.length === 0) {
            clearInterval(timerID);
            clearInterval(delayID);
            // after finishing, remove all tile divs (after the last tile's opacity transition)
            // and replace them with an empty node (should be faster)
            cleanup = setTimeout(() => {
                body.style.overflowY = 'auto';
                container.style.zIndex = -3;
                container.remove();
            }, 500) // n of ms should be equal to div.tile opacity transition time
        }
    }
    // clear last timer
    clearInterval(cleanup);
}