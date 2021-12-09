export const projects = [
  {
    projectUrl: "https://marcocosta1618.github.io/D3-choroplethMap/",
    projectCodeUrl: "https://github.com/marcocosta1618/D3-choroplethMap",
    imgWebp: "./assets/images/d3-choroplethMap.webp",
    imgPng: "./assets/images/d3-choroplethMap.png",
    imgAlt: "D3 choropleth map (US education data)",
    p: `The education data of the US counties are represented here on a choropleth map, with zooming and panning features. 
        <a href="https://d3js.org/">D3.js</a> offers convenient tools to depict geographical data from GeoJSON and TopoJSON files. 
        It also delivers data analysis tools (like <a href="https://observablehq.com/@d3/quantile-quantize-and-threshold-scales" 
        rel="noreferrer" target="_blank">quantile scales</a>) used in this case to coax meaningful percentage intervals from the given data.`,
    technologies: ["d3", "sass"]
  },
  {
    projectUrl: "https://marcocosta1618.github.io/D3-ordinalBarChart/",
    projectCodeUrl: "https://github.com/marcocosta1618/D3-ordinalBarChart",
    imgWebp: "./assets/images/d3-ordinalBarChart.webp",
    imgPng: "./assets/images/d3-ordinalBarChart.png",
    imgAlt: "D3 ordinal barchart (Monthly Global Heat map)",
    p: `Visualization of the monthly global surface temperature of the Earth. Temperatures are mapped into colors using a diverging ordinal scale.`,
    technologies: ["d3", "sass"]
  },
  { // D3 - scatterplot
    projectUrl: "https://marcocosta1618.github.io/D3-scatterplot/",
    projectCodeUrl: "https://github.com/marcocosta1618/D3-scatterplot",
    imgWebp: "./assets/images/d3-scatterplot.webp",
    imgPng: "./assets/images/d3-scatterplot.png",
    imgAlt: "D3 scatterplot (Doping in professional bicycle racing)",
    p: `Data visualization with a scatterplot in <a href="https://d3js.org/"
        rel="noreferrer" target="_blank">D3.js</a> (doping in professional bicycle racing - Alpe d'Huez times, 1993 - 2016).`,
    technologies: ["d3", "sass"]
  },
  { // D3 - bar chart
    projectUrl: "https://marcocosta1618.github.io/D3-barchart/",
    projectCodeUrl: "https://github.com/marcocosta1618/D3-barchart",
    imgWebp: "./assets/images/d3-barchart.webp",
    imgPng: "./assets/images/d3-barchart.png",
    imgAlt: "D3 barchart (US gdp trend 1947 - 2015)",
    p: `Visualization of the US gross domestic product trend (yrs 1947-2015) with a bar chart, using <a href="https://d3js.org/"
        rel="noreferrer" target="_blank">D3.js</a>.`,
    technologies: ["d3", "sass"]
  },
  { // Session Clock
    projectUrl: "https://marcocosta1618.github.io/Session-Clock/",
    projectCodeUrl: "https://github.com/marcocosta1618/Session-Clock",
    imgWebp: "./assets/images/session-clock.webp",
    imgPng: "./assets/images/session-clock.png",
    imgAlt: "Session-Clock.",
    p: `A Session-Clock app made in React. It uses a 
        <a href="https://en.wikipedia.org/wiki/Finite-state_machine" rel="noreferrer" target="_blank">
        finite state machine</a> and <a href="https://xstate.js.org/docs/" rel="noreferrer" target="_blank">xstate</a> 
        to manage the application state. Here is the
        <a href="https://xstate.js.org/viz/?gist=8ee2c8d13d3863ac307f57535e0e84ca" 
        rel="noreferrer" target="_blank">functional statechart</a> for the finite state machine used.`,
    technologies: ["react", "xstate", "sass"]
  },
  { // React Calculator
    projectUrl: "https://marcocosta1618.github.io/JavaScript-Calculator/",
    projectCodeUrl: "https://github.com/marcocosta1618/JavaScript-Calculator",
    imgWebp: "./assets/images/react-calculator.webp",
    imgPng: "./assets/images/react-calculator.png",
    imgAlt: "React-calculator.",
    p: `A Calculator app made in React. It uses a <a
        href="https://en.wikipedia.org/wiki/Finite-state_machine" rel="noreferrer" target="_blank">finite state
        machine</a> and <a href="https://xstate.js.org/docs/" rel="noreferrer" target="_blank">xstate</a> to manage the
        application state. It also recreates the classic Apple's desktop calculator styling. Here is the
        <a href="https://xstate.js.org/viz/?gist=edf865a72430b9f1cf4c291e326dd4bf" rel="noreferrer" target="_blank">functional
        statechart</a> for the finite state machine used.`,
    technologies: ["react", "xstate", "sass"]
  },
  { // React drum-machine 
    projectUrl: "https://marcocosta1618.github.io/drum-machine/",
    projectCodeUrl: "https://github.com/marcocosta1618/drum-machine",
    imgWebp: "./assets/images/react-drum-machine.webp",
    imgPng: "./assets/images/react-drum-machine.png",
    imgAlt: "React-drum-machine.",
    p: `A Drum-machine app made in React. An exercise in events handling, wrapped in a cool styling.`,
    technologies: ["react", "sass"]
  },
  { // Markdown previewer
    projectUrl: "https://marcocosta1618.github.io/markdown-previewer/",
    projectCodeUrl: "https://github.com/marcocosta1618/markdown-previewer",
    imgWebp: "./assets/images/markdown-previewer.webp",
    imgPng: "./assets/images/markdown-previewer.png",
    imgAlt: "React-markdown-previewer.",
    p: `A Markdown previewer made in React. The user's markdown is saved in local storage and
        restored between browser sessions.`,
    technologies: ["react", "sass"]
  },
  { // Random Quotes Machine
    projectUrl: "https://marcocosta1618.github.io/stellar-quotes-machine/",
    projectCodeUrl: "https://github.com/marcocosta1618/stellar-quotes-machine",
    imgWebp: "./assets/images/random-quotes-machine.webp",
    imgPng: "./assets/images/random-quotes-machine.png",
    imgAlt: "Random-quotes-machine.",
    p: `A Random quotes Machine. My first React app.`,
    technologies: ["react", "sass"]
  },
  { // Personal Portfolio
    projectUrl: "https://marcocosta1618.github.io/fcc-portfolio/",
    projectCodeUrl: "https://github.com/marcocosta1618/fcc-portfolio",
    imgWebp: "./assets/images/portfolio.webp",
    imgPng: "./assets/images/portfolio.png",
    imgAlt: "Developer-Portfolio.",
    p: `A responsive Portfolio example</span>.`,
    technologies: ["html5", "css3"]
  },
  { // Technical Documentation Page
    projectUrl: "https://marcocosta1618.github.io/git-tech-doc/",
    projectCodeUrl: "https://github.com/marcocosta1618/git-tech-doc",
    imgWebp: "./assets/images/tech-doc-git.webp",
    imgPng: "./assets/images/tech-doc-git.png",
    imgAlt: "Technical-documentation-page.",
    p: `A responsive technical documentation page about the Git version control system,
        using a mobile-first approach.`,
    technologies: ["html5", "sass", "js"]
  },
  { // Product Landing
    projectUrl: "https://marcocosta1618.github.io/pal-bt-product-landing/",
    projectCodeUrl: "https://github.com/marcocosta1618/pal-bt-product-landing",
    imgWebp: "./assets/images/product-landing.webp",
    imgPng: "./assets/images/product-landing.png",
    imgAlt: "Product-landing-page.",
    p: `A responsive product landing page example.`,
    technologies: ["html5", "css3"]
  },
  { // Survey Form
    projectUrl: "https://marcocosta1618.github.io/bookworm-survey-form/",
    projectCodeUrl: "https://github.com/marcocosta1618/bookworm-survey-form",
    imgWebp: "./assets/images/survey-form.webp",
    imgPng: "./assets/images/survey-form.png",
    imgAlt: "Survey-Form-page.",
    p: `A responsive survey form page example.`,
    technologies: ["html5", "css3"]
  },
  { // Tribute page
    projectUrl: "https://marcocosta1618.github.io/theo-jansen-tribute-page/",
    projectCodeUrl: "https://github.com/marcocosta1618/theo-jansen-tribute-page",
    imgWebp: "./assets/images/tribute-page.webp",
    imgPng: "./assets/images/tribute-page.png",
    imgAlt: "Tribute-page.",
    p: `A responsive tribute page about Theo Jansen.`,
    technologies: ["html5", "css3"]
  },
]

export const badges = {
  html5: `<img src="https://img.shields.io/badge/HTML5-red.svg?&logo=html5&logoColor=white" width="65px" height="20px" alt="HTML5 badge">`,
  css3: `<img src="https://img.shields.io/badge/CSS3-blue.svg?&logo=css3&logoColor=white" width="57px" height="20px" alt="CSS3 badge">`,
  sass: `<img src="https://img.shields.io/badge/SASS-cc6699.svg?&logo=sass&logoColor=white" width="59px" height="20px" alt="SASS badge">`,
  js: `<img src="https://img.shields.io/badge/JavaScript-f7df1e.svg?&logo=javascript&logoColor=black" width="85px" height="20px" alt="JavaScript badge">`,
  react: `<img src="https://img.shields.io/badge/REACT-grey.svg?&logo=react&logoColor=blue" width="65px" height="20px" alt="REACT badge">`,
  xstate: `<img src="https://img.shields.io/badge/XSTATE-000.svg?&logo=xstate&logoColor=white" width="71px" height="20px" alt="XSTATE badge">`,
  d3: `<img src="https://img.shields.io/badge/D3.js-fff.svg?&logo=d3.js&logoColor=f5854b" width="57px" height="20px" alt="D3 badge">`,
}

/*
  { // 
    projectUrl: "",
    projectCodeUrl: "",
    imgWebp: "",
    imgPng: "",
    imgAlt: "",
    p: ``,
    technologies: []
  },
*/