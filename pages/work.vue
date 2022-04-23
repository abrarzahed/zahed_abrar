<template>
  <div class="work">
    <div v-if="loading" class="loading">
      <div class="spiner"></div>
      <span>Loading...</span>
    </div>
    <main v-if="!loading" id="work">
      <h1 class="lg-heading modak-font">
        My
        <span class="text-secondary">Work</span>
      </h1>
      <h2 class="sm-heading">Check out some of my projects...</h2>
      <div class="projects">
        <div v-for="(project, i) in projects" :key="i" class="item">
          <div class="project-image">
            <a :href="project.urlProject">
              <img :src="project.image" alt="Project" />
            </a>
            <div v-if="project.icon" class="project-icon">
              <v-icon>{{ project.icon }}</v-icon>
            </div>
          </div>

          <!-- <span class="desc">
            {{ project.desc }}
          </span> -->

          <a :href="project.urlProject" class="btn-light project-link">
            <v-icon left dark large>mdi-eye</v-icon> Project
          </a>
        </div>
      </div>
    </main>
    <AppFooter v-if="!loading" />
  </div>
</template>

<script>
import projects from "@/api/projects";
export default {
  data() {
    return {
      projects: projects,
      loading: true
    };
  },
  mounted() {
    this.loading = false;
  }
};
</script>

<style lang="scss" scoped>
.work {
  min-height: 100vh;
  position: relative;

  .loading {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    .spiner {
      width: 100px;
      height: 100px;
      background: none;
      border-radius: 50%;
      border-top: 3px solid #fff;
      border-bottom: 1px solid #fff;
      animation: spinner 1s ease infinite;
      margin-bottom: 20px;
    }
  }
}
@keyframes spinner {
  to {
    transform: rotate(360deg);
  }
}
</style>
