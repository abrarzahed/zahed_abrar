<template>
  <div>
    <main id="work">
      <h1 class="lg-heading modak-font">
        My
        <span class="text-secondary">Work</span>
      </h1>
      <h2 class="sm-heading">Check out some of my projects...</h2>
      <div class="projects">
        <div v-for="(project, i) in projects" :key="i" class="item">
          <a class="item-desc-wrapper" href="https://abhost.netlify.app/">
            <img :src="project.image" alt="Project" />
            <div class="desc">
              <span>
                {{ project.desc }}
              </span>
            </div>
          </a>

          <a :href="project.urlProject" class="btn-light">
            <v-icon dark large>mdi-eye</v-icon> Project
          </a>
          <a :href="project.urlGithub" class="btn-dark">
            <v-icon dark large>mdi-github</v-icon> Github
          </a>
        </div>
      </div>
    </main>
    <AppFooter />
  </div>
</template>

<script>
import projects from "@/api/projects";
export default {
  data() {
    return {
      projects: projects
    };
  }
};
</script>

<style></style>
