<template>
  <div>
    <main id="home">
      <h1 class="lg-heading">
        Zahed
        <span class="text-secondary">Abrar</span>
      </h1>
      <h2 class="sm-heading  scnd">
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
  data() {
    return {};
  },
  methods: {
    goToWorkPage() {
      this.$router.push("/work");
    }
  }
};
</script>
