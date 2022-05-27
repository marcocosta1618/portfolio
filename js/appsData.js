/*
  appData object
  { // APP NAME
    appUrl: "",
    appCodeUrl: "",
    imgWebp: "",
    imgPng: "",
    imgAlt: "",
    p: ``,
    technologies: []
  },
*/

export const apps = [
   { // World Atlas App
      appUrl: "https://marcocosta1618.github.io/world-atlas-app/",
      appCodeUrl: "https://github.com/marcocosta1618/world-atlas-app/blob/main/README.md",
      imgWebp: "./assets/images/app-WorldAtlas.webp",
      imgPng: "./assets/images/app-WorldAtlas.png",
      imgAlt: "World Atlas App",
      p: `An interactive map of the Earth made with <a href="https://d3js.org/" target="_blank" rel="noreferrer">D3</a> and <a href="hthttps://reactjs.org/" target="_blank" rel="noreferrer">React</a>.
         Clicking on a country will retrive the corresponding Wikipedia page's summary about the country, along with the geographical coordinates and flag.
         A selection of images from the country's page is also returned.
         In doing that, the App uses the <a href="https://www.npmjs.com/package/wikipedia" target="_blank" rel="noreferrer">Wikipedia npm package</a>.
         The globe map is freely and naturally draggable thanks to the <a href="https://www.npmjs.com/package/versor" target="_blank" rel="noreferrer">versor npm package</a>.`,
      technologies: ['react', 'd3']
   },
]

export const badges = {
   html5: `<img src="https://img.shields.io/badge/HTML5-red.svg?&logo=html5&logoColor=white" width="65px" height="20px" alt="HTML5 badge">`,
   css3: `<img src="https://img.shields.io/badge/CSS3-blue.svg?&logo=css3&logoColor=white" width="57px" height="20px" alt="CSS3 badge">`,
   sass: `<img src="https://img.shields.io/badge/SASS-cc6699.svg?&logo=sass&logoColor=white" width="59px" height="20px" alt="SASS badge">`,
   javascript: `<img src="https://img.shields.io/badge/JavaScript-f7df1e.svg?&logo=javascript&logoColor=black" width="85px" height="20px" alt="JavaScript badge">`,
   react: `<img src="https://img.shields.io/badge/REACT-grey.svg?&logo=react&logoColor=blue" width="65px" height="20px" alt="REACT badge">`,
   xstate: `<img src="https://img.shields.io/badge/XSTATE-000.svg?&logo=xstate&logoColor=white" width="71px" height="20px" alt="XSTATE badge">`,
   d3: `<img src="https://img.shields.io/badge/D3.js-fff.svg?&logo=d3.js&logoColor=f5854b" width="57px" height="20px" alt="D3 badge">`,
   express: `<img src="https://img.shields.io/badge/Express.js-fff.svg?&logo=Express&logoColor=000" width="85px", height="20px" alt="Express badge">`,
   mongodb: `<img src="https://img.shields.io/badge/MongoDB-fff.svg?&logo=MongoDB&logoColor=#47A248" width="80px", height="20px" alt="MongoDB badge">`
}