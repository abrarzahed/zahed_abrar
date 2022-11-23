<template>
  <div>
    <main id="about">
      <h1 class="lg-heading">
        About
        <span class="text-secondary">Me</span>
      </h1>
      <!-- <h2 class="sm-heading">Somthing About Me...</h2> -->
      <div class="about-info">
        <!--  -->
        <!-- <NuxtImg
          src="code-removebg.png"
          sizes="sm:100vw md:40vw lg:400px"
          quality="80"
          format="webp"
          class="bio-image"
        /> -->
        <img src="code-removebg.png" class="bio-image" alt="" />

        <div class="bio">
          <!-- <h3 class=" text-secondary sm-heading">BIO</h3> -->
          <p>
            I am Abrar Hussen Zahed. Introducing myself as a professional and
            passionate front-end web developer. I have developed a huge number
            of web applications. Most comfortable with javascript. Familiar with
            frameworks like... Bootstrap, Tailwind CSS, jquery vue.js, nuxt.js.
            Besides, I have experience in UI/UX design and WordPress
            Customization. Isn't it superb?😎. If it is then click on WhatsApp
            icon bellow and let me convert your dream into a web application.
          </p>
        </div>

        <!-- <div class="job job-1">
          <h3>Web Design</h3>
          <h4 class="text-secondary">
            <v-icon dark x-large>mdi-monitor-cellphone-star</v-icon>
          </h4>
        </div> -->

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
      <!-- wp -->
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
};
</script>

<style></style>
