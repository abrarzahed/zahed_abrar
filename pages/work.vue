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
          <div class="project-image">
            <a :href="project.urlProject">
              <img :src="project.image" alt="Project" />
            </a>
            <div v-if="project.icon" class="project-icon">
              <v-icon>{{ project.icon }}</v-icon>
            </div>
          </div>

          <span class="desc">
            {{ project.desc }}
          </span>

          <a :href="project.urlProject" class="btn-light project-link">
            <v-icon left dark large>mdi-eye</v-icon> Project
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
