const projects = [
  // * vue, nuxt, vuetify
  {
    title: "Nuxt World",
    image: require("@/assets/img/projects/nuxtjs-world.png"),
    urlProject: "https://nuxt-country-list.herokuapp.com//",
    desc:
      "A real application which contains details about every single country of the world. And there is search option to search specific country",
    icon: "mdi-nuxt",
    tech: ["vue.js", "nuxt.js", "vuetify", "graphql", "stripe"],
    isRealProject: false
  },
  {
    title: "Ontario Career Academy",
    image: require("@/assets/img/projects/oca.png"),
    urlProject: "https://ocacademy.ca/",
    desc:
      ' "Ontario career academy"  e-commerce application. Including create course, update course, delete course, vouchers and match more functionalities. With nuxtjs, graphql, vuetify...',
    icon: "mdi-nuxt",
    tech: ["vue.js", "nuxt.js", "vuetify", "graphql", "stripe"],
    isRealProject: true
  },
  {
    title: "Lighthouse Academy Canada",
    image: require("@/assets/img/projects/lha.png"),
    urlProject: "https://course.lighthouseacademy.ca/",
    desc:
      ' "Ontario career academy"  e-commerce application. Including create course, update course, delete course, vouchers and match more functionalities. With nuxtjs, graphql, vuetify...',
    icon: "mdi-nuxt",
    tech: ["vue.js", "nuxt.js", "vuetify", "graphql", "stripe"],
    isRealProject: true
  },
  {
    title: "Universal blog",
    image: require("@/assets/img/projects/uni-blog.png"),
    urlProject: "https://uniblog.netlify.app/",
    desc:
      "Simple and modern blog site with vue js and firebase. It contains create post, edit post, delete post, search by title and some more functionalities.",
    icon: "mdi-vuejs",
    tech: ["vue.js", "firebase", "modern css"]
  },
  {
    title: "Vue Calculator",
    image: require("@/assets/img/projects/vue-calculator.png"),
    urlProject: "https://vue-count.netlify.app/",
    desc:
      "Calculator application with css grid and vuejs to implement the functionalities.",
    icon: "mdi-vuejs",
    tech: ["vue.js", "html", "css"]
  },
  {
    title: "Random Blog",
    image: require("@/assets/img/projects/vueblog-1.png"),
    urlProject: "https://rd-vu2-blog.netlify.app/",
    desc:
      "Simple and modern blog site with vue js and firebase. It contains create post, edit post, delete post, search by title and some  more functionalities.",
    icon: "mdi-vuejs",
    tech: ["vue.js", "firebase", "modern css"]
  },

  // * Vanilla javascript
  {
    title: "Image upload with preview",
    image: require("@/assets/img/projects/imageupload.png"),
    urlProject: "https://js-image-upload.netlify.app/",
    desc:
      "Realtime image upload and preview. With html, css and vanilla javascript.",
    icon: "mdi-language-javascript",
    tech: ["html", "css", "vanilla javascript"]
  },
  {
    title: "Resume Maker",
    image: require("@/assets/img/projects/Resumemaker.png"),
    urlProject: "https://js-resume.netlify.app/",
    desc:
      "Resume maker application with html css and vanilla javascript. It creates resume from user inputs.",
    icon: "mdi-language-javascript",
    tech: ["html", "css", "vanilla javascript"]
  },
  {
    title: "Two player's game",
    image: require("@/assets/img/projects/PigGame.png"),
    urlProject: "https://pig-game-z1.netlify.app/",
    desc:
      "Pig game. Two player can participate at a time. with html css and advance javascript. ",
    icon: "mdi-language-javascript",
    tech: ["html", "css", "vanilla javascript"]
  },
  {
    title: "Bank account management system",
    image: require("@/assets/img/projects/Bankist.png"),
    urlProject: "https://azbank.netlify.app/",
    desc:
      "Bank account management system.It contains- Transfer money, loan, close account and some more functionalities. with html, css, and vanilla javascript. ",
    icon: "mdi-language-javascript",
    tech: ["html", "css", "vanilla javascript"]
  },
  // * html css javascript
  {
    title: "Some awesome web components",
    image: require("@/assets/img/projects/photographer-portfolio.png"),
    urlProject: "https://photographersitedemo.netlify.app/",
    desc: "Simple but awesome portfolio website for photographers.",
    icon: "mdi-language-css3",
    tech: ["html", "css only"]
  },
  {
    title: "Some awesome web components",
    image: require("@/assets/img/projects/WebComponent.png"),
    urlProject: "https://csscomp.netlify.app/",
    desc: "Some awesome web components, animations with pure html and css.",
    icon: "mdi-language-css3",
    tech: ["html", "css only"]
  },
  {
    title: "Luxury hotel landing page",
    image: require("@/assets/img/projects/LuxHome.png"),
    urlProject: "https://next-grid.netlify.app/",
    desc:
      "Luxury hotel landing page with html and a proper use of css grid and some cool animations.",
    icon: "mdi-language-css3",
    tech: ["html", "css", "grid"]
  },
  {
    title: "Modern and fully responsive website",
    image: require("@/assets/img/projects/Natours.png"),
    urlProject: "https://pro-sass.netlify.app/",
    desc:
      "Modern and fully responsive website for travel agency, with html css(scss).",
    icon: "mdi-language-css3",
    tech: ["html", "css", "animations"]
  },
  {
    title: "Responsive digital agency website",
    image: require("@/assets/img/projects/Responsive Website 2022.png"),
    urlProject: "https://digital-agency-landing-page.netlify.app/",
    desc: "Responsive digital agency website with html css jquery.",
    icon: "mdi-language-css3",
    tech: ["html", "css", "animations", "javascript"]
  },
  {
    title: "digital agency website",
    image: require("@/assets/img/projects/digital-agency.png"),
    urlProject: "https://codezahed.netlify.app/",
    desc: "Responsive digital agency website with html css jquery.",
    icon: "mdi-jquery",
    tech: ["html", "css", "animations", "jquery"]
  },

  {
    title: "Microsoft homepage clone",
    image: require("@/assets/img/projects/Microsoft.png"),
    urlProject: "https://m-office.netlify.app/",
    desc: "Microsoft homepage clone with html css and vanilla javascript.",
    icon: "mdi-language-css3",
    tech: ["html", "css", "javascript"]
  },
  {
    title: "Admin dashboard",
    image: require("@/assets/img/projects/trillo.png"),
    urlProject: "https://pr-fx.netlify.app/",
    desc: "Admin dashboard with html css flex box and some cool animations.",
    icon: "mdi-language-css3",
    tech: ["html", "css", "flex", "animations"]
  },
  {
    title: "Product Landing page",
    image: require("@/assets/img/projects/light_dark.png"),
    urlProject: "https://light-dark.netlify.app/",
    desc:
      "Landing page, it contains lots of animations, light and dark theme, with html, css, vanilla javascript And AOS plugin.",
    icon: "mdi-language-css3",
    tech: ["html", "css", "flex", "animations"]
  },
  {
    title: "Clone of heroku homepage",
    image: require("@/assets/img/projects/AbCode.png"),
    urlProject: "https://abhost.netlify.app/",
    desc:
      "Clone of heroku homepage with html css and real time form submission.",
    icon: "mdi-language-css3",
    tech: ["html", "css", "flex", "animations"]
  }
];
export default projects;
