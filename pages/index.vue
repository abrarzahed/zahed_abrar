<template>
  <div>
    <main id="home">
      <h1 class="lg-heading home-title">
        <code>&lt;<span class="tag">h1</span>&gt;</code>
        <!-- <img src="~/assets/img/logo.png" class="bio-image" alt="" /> -->
        <span>
          Zahed
          <span class="text-secondary">Abrar</span>
        </span>
        <code>&lt;/<span class="tag">h1</span>&gt; </code>
      </h1>
      <h2 class="sm-heading scnd">
        <span>Front-end Software Developer.</span>
        <button @click="goToWorkPage">See My Projects</button>
      </h2>
      <div class="icons">
        <a href="https://facebook.com/abrar.hussen.357/">
          <v-icon dark x-large>mdi-facebook</v-icon>
        </a>
        <a href="https://github.com/abrarzahed">
          <v-icon dark x-large>mdi-github</v-icon>
        </a>
        <a href="https://www.linkedin.com/in/abrar-hussen-zahed/">
          <v-icon dark x-large>mdi-linkedin</v-icon>
        </a>
      </div>
      <!-- wp -->
    </main>
  </div>
</template>

<script>
export default {
  head: {
    title: "Home",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "I am Abrar Hussen Zahed. A professional and passionate front-end web developer. Contact me +8801887877854/abrarzahed6986@gmail.com",
      },
    ],
  },
  data() {
    return {};
  },
  methods: {
    goToWorkPage() {
      this.$router.push("/projects");
    },
  },
};
</script>
