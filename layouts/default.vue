<template>
  <div class="bg-img">
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
      showMenu: false
    };
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    }
  }
};
</script>
<style scoped></style>
