<template>
  <div class="bg-img" @click="print">
    <div class="bar" :style="{ width: percentage }"></div>
    <header>
      <div @click="toggleMenu" class="menu-btn" :class="{ close: showMenu }">
        <div class="btn-line"></div>
        <div class="btn-line"></div>
        <div class="btn-line"></div>
      </div>

      <nav class="menu" :class="{ show: showMenu }">
        <div class="menu-branding" :class="{ show: showMenu }">
          <div class="portrait"></div>
        </div>
        <ul class="menu-nav" :class="{ show: showMenu }">
          <li @click="toggleMenu" class="nav-item" :class="{ show: showMenu }">
            <NuxtLink to="/" class="nav-link" active-class="test">
              Home
            </NuxtLink>
          </li>
          <li @click="toggleMenu" class="nav-item" :class="{ show: showMenu }">
            <NuxtLink to="/about" class="nav-link" active-class="test">
              About Me
            </NuxtLink>
          </li>
          <li @click="toggleMenu" class="nav-item" :class="{ show: showMenu }">
            <NuxtLink to="/work" class="nav-link" active-class="test">
              My Work
            </NuxtLink>
          </li>
          <li @click="toggleMenu" class="nav-item" :class="{ show: showMenu }">
            <NuxtLink to="/contact" class="nav-link" active-class="test">
              Contact Me
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </header>
    <v-main>
      <Nuxt />
    </v-main>
    <script src="https://apps.elfsight.com/p/platform.js" defer></script>
    <div class="elfsight-app-0cc624cf-85d8-468b-8811-863725f7874d"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false,
      percentage: null,
      scrollHeight: null,
      vewportHeight: null,
      maxScrollHeight: null
    };
  },
  mounted() {
    window.addEventListener("scroll", () => {
      this.scrollHeight = document.body.scrollHeight;
      this.vewportHeight = window.innerHeight;
      this.maxScrollHeight = this.scrollHeight - this.vewportHeight;
      this.percentage = `${(window.scrollY / this.maxScrollHeight) * 100}%`;
      console.log(this.percentage);
    });
  },
  watch: {
    width(val) {
      console.log(val);
    }
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
    print() {
      console.log(this.width);
    }
  }
};
</script>
<style lang="scss" scoped>
.bg-img {
  position: relative;
  .bar {
    content: "";
    position: fixed;
    height: 8px;
    background: linear-gradient(to left, #00ff73, #59b984);
    display: block;
    top: 0;
    left: 0;
    z-index: 10;
  }
}
</style>
