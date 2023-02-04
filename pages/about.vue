<template>
  <div>
    <main id="about">
      <h1 class="lg-heading">
        About
        <span class="text-secondary">Me</span>
      </h1>
      <!-- <h2 class="sm-heading">Something About Me...</h2> -->
      <div class="about-info">
        <!--  -->
        <!-- <NuxtImg
          src="code-removebg.png"
          sizes="sm:100vw md:40vw lg:400px"
          quality="80"
          format="webp"
          class="bio-image"
        /> -->
        <img src="~/assets/img/code-removebg.png" class="bio-image" alt="" />

        <div class="bio">
          <!-- <h3 class=" text-secondary sm-heading">BIO</h3> -->
          <p>
            I am Abrar Hussen Zahed. Introducing myself as a professional and
            passionate front-end web developer. I have developed a huge number
            of web applications. Most comfortable with javascript. Familiar with
            frameworks like... Bootstrap, Tailwind CSS, jquery, react.js,
            next.js, vue.js, nuxt.js. Besides, I have experience in UI/UX design
            and WordPress Customization. Isn't it superb?😎. If it is then click
            on WhatsApp icon bellow and let me convert your dream into a web
            application.
          </p>
        </div>

        <div class="job job-2">
          <h3>Web Development</h3>
          <h4 class="text-secondary">
            <v-icon dark x-large>mdi-monitor-dashboard</v-icon>
          </h4>
        </div>

        <div class="job job-3">
          <h3>UI/UX Design</h3>
          <h4 class="text-secondary">
            <v-icon dark x-large>mdi-monitor-edit</v-icon>
          </h4>
        </div>
        <div class="job job-4">
          <h3>Wordpress Customization</h3>
          <h4 class="text-secondary">
            <v-icon dark x-large>mdi-wordpress</v-icon>
          </h4>
        </div>
      </div>

      <h2 class="sm-heading skill-heading">Skills</h2>
      <div class="skill-icons">
        <div class="skill-icons__icon" v-for="(skill, i) in skills" :key="i">
          <p>{{ skill.text }}</p>
          <v-icon v-if="skill.type === 'icon'" dark x-large>{{
            skill.icon
          }}</v-icon>
          <img v-else :src="skill.src" alt="" />
        </div>
      </div>
    </main>
    <AppFooter />
  </div>
</template>

<script>
export default {
  head: {
    title: "About",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "I am Abrar Hussen Zahed. Introducing myself as a professional and passionate front-end web developer. I have developed a huge number of web applications. Most comfortable with javascript. Familiar with frameworks like... Bootstrap, Tailwind CSS, jquery vue.js, nuxt.js. Besides, I have experience in UI/UX design and WordPress Customization.",
      },
    ],
  },
  data() {
    return {
      skills: [
        {
          type: "icon",
          text: "html",
          icon: "mdi-language-html5",
        },
        {
          type: "icon",
          text: "css",
          icon: "mdi-language-css3",
        },
        {
          type: "icon",
          text: "scss",
          icon: "mdi-sass",
        },
        {
          type: "icon",
          text: "javascript",
          icon: "mdi-language-javascript",
        },
        {
          type: "icon",
          text: "react",
          icon: "mdi-react",
        },
        {
          type: "image",
          text: "next js",
          src: require("~/assets/img/nextjs-logo.png"),
        },
        {
          type: "icon",
          text: "material ui",
          icon: "mdi-material-ui",
        },
        {
          type: "icon",
          text: "vue js",
          icon: "mdi-vuejs",
        },
        {
          type: "icon",
          text: "nuxt js",
          icon: "mdi-nuxt",
        },
        {
          type: "icon",
          text: "vuetify",
          icon: "mdi-vuetify",
        },
        {
          type: "icon",
          text: "bootstrap",
          icon: "mdi-bootstrap",
        },
        {
          type: "icon",
          text: "material design",
          icon: "mdi-material-design",
        },
        {
          type: "icon",
          text: "tailwind",
          icon: "mdi-tailwind",
        },
        {
          type: "icon",
          text: "git",
          icon: "mdi-github",
        },
        {
          type: "icon",
          text: "firebase",
          icon: "mdi-firebase",
        },
        {
          type: "image",
          text: "figma",
          src: require("~/assets/img/figma-logo.png"),
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.skill-heading {
  margin-top: 3.5rem;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 4px;
  font-weight: bold;
  font-size: 18px;
}
.skill-icons {
  margin-top: -4px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 1.5rem;
  &__icon {
    border-radius: 4px;
    padding: 0.5rem;
    background: #2a2a2a;
    display: grid;
    gap: 0;
    place-items: center;
    min-height: 140px;

    p {
      text-transform: uppercase;
      margin-bottom: 4px;
      letter-spacing: 3px;
      font-size: 12px;
      text-align: center;
    }
    img {
      margin-top: 8px;
      border-radius: 4px;
    }
    .v-icon {
      font-size: 100px !important;
    }
    img {
      width: 90px;
    }
  }
}
</style>
