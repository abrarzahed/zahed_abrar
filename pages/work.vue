<template>
  <div class="work">
    <div v-if="loading" class="loading">
      <div class="spinner"></div>
      <span>Loading...</span>
    </div>
    <main v-if="!loading" id="work">
      <h1 class="lg-heading">
        My
        <span class="text-secondary">Work</span>
      </h1>
      <div class="projects-tab__header">
        <h2 class="sm-heading">Check out my projects</h2>
        <div class="projects-tab__header__btn__group">
          <button
            @click="toggleActiveButton('realProjects')"
            :class="{ active: activeTabItem === 'realProjects' }"
          >
            Real Projects
          </button>
          <button
            @click="toggleActiveButton('all')"
            :class="{ active: activeTabItem === 'all' }"
          >
            All
          </button>
          <button
            @click="toggleActiveButton('vueNuxt')"
            :class="{ active: activeTabItem === 'vueNuxt' }"
          >
            Vue & Nuxt
          </button>
          <button
            @click="toggleActiveButton('js_css')"
            :class="{ active: activeTabItem === 'js_css' }"
          >
            Js & Css
          </button>
        </div>
      </div>
      <div class="projects">
        <div v-for="(project, i) in projects" :key="i" class="item">
          <div class="project-image">
            <a :href="project.urlProject">
              <NuxtImg
                :src="`/projects/${project.image}`"
                sizes="sm:100vw md:40vw lg:300px"
                quality="60"
                format="webp"
              />
            </a>
            <div v-if="project.icon" class="project-icon">
              <v-icon>{{ project.icon }}</v-icon>
            </div>
          </div>

          <div class="technology">
            <h4>{{ project.title }}</h4>
            <div class="chips">
              <v-chip
                outlined
                dark
                small
                label
                v-for="(chip, i) in project.tech"
                :key="i"
              >
                <v-icon left> mdi-label </v-icon>
                {{ chip }}
              </v-chip>
            </div>
          </div>

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
  head: {
    title: "Works",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "I am Abrar Hussen Zahed. A professional and passionate front-end web developer. Check out my projects",
      },
    ],
  },
  data() {
    return {
      initial: projects,
      main: projects,
      projects: projects,
      loading: true,
      activeTabItem: "all",
    };
  },
  mounted() {
    this.loading = false;
  },
  methods: {
    toggleActiveButton(value) {
      this.activeTabItem = value;
      if (value === "all") {
        this.projects = this.initial;
      } else if (value === "js_css") {
        this.projects = [...this.jsProjects, ...this.cssProjects];
      } else if (value === "vueNuxt") {
        this.projects = this.vueNuxtProjects;
      } else if (value === "realProjects") {
        this.projects = this.realProjects;
      }
    },
  },
  computed: {
    realProjects() {
      return this.main.filter((item) => item.isRealProject);
    },
    cssProjects() {
      return this.main.filter((item) => item.icon === "mdi-language-css3");
    },
    jsProjects() {
      return this.main.filter(
        (item) => item.icon === "mdi-language-javascript"
      );
    },
    vueNuxtProjects() {
      return this.main.filter(
        (item) => item.icon === "mdi-vuejs" || item.icon === "mdi-nuxt"
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.work {
  min-height: 100vh;
  position: relative;
  .projects-tab__header {
    display: flex;
    align-items: center;
    background: #2a2a2a;
    padding: 0.5rem 1rem;
    margin-bottom: 3rem;
    justify-content: space-between;
    @media (max-width: 1020px) {
      padding: 1rem;
      border-radius: 8px;
      gap: 1rem;
      flex-direction: column;
    }
    .sm-heading {
      padding: 0;
      margin: 0;
      background: none;
      border-radius: 0;
    }
    &__btn__group {
      display: flex;
      background: #1f1f1f;
      align-items: center;
      border-radius: 100px;
      button {
        isolation: isolate;
        position: relative;
        padding: 1rem 2rem;
        text-transform: capitalize;
        font-size: 1rem;
        line-height: 1.6;
        color: #ddd;
        font-weight: 700;
        letter-spacing: 0.05em;
        overflow: hidden;
        @media (max-width: 600px) {
          padding: 0.3rem 0.9rem;
          padding-top: 0.4rem;
          font-size: 0.5rem;
        }

        &::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 0;
          background: #2c744c;
          z-index: -1;
          transition: width 0.15s linear;
        }
        &.active {
          &::before {
            transition: width 0.15s linear;
            width: 100%;
          }
        }
        &:nth-child(1) {
          border-radius: 100px 0 0 100px;
          &::before {
            border-radius: 100px 0 0 100px;
          }
        }
        &:nth-child(2) {
          border-left: 1px solid #444;
          border-right: 1px solid #444;
        }
        &:nth-child(3) {
          border-left: 1px solid #444;
          border-right: 1px solid #444;
        }

        &:last-child {
          border-radius: 0 100px 100px 0;
          &::before {
            border-radius: 0 100px 100px 0;
          }
        }
      }
    }
  }

  .loading {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    .spinner {
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
