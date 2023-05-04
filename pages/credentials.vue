<template>
  <div>
    <main id="about">
      <h1 class="lg-heading">
        <span class="text-secondary">My</span>
        Credentials
      </h1>
      <div class="about-info">
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
    title: "Credentials",
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
    return {};
  },
};
</script>

<style></style>
