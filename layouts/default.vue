<template>
  <v-app class="body">
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
            <li
              @click="toggleMenu"
              class="nav-item"
              :class="{ show: showMenu }"
            >
              <NuxtLink to="/" class="nav-link" active-class="test">
                Home
              </NuxtLink>
            </li>
            <li
              @click="toggleMenu"
              class="nav-item"
              :class="{ show: showMenu }"
            >
              <NuxtLink to="/about" class="nav-link" active-class="test">
                About Me
              </NuxtLink>
            </li>
            <li
              @click="toggleMenu"
              class="nav-item"
              :class="{ show: showMenu }"
            >
              <NuxtLink to="/projects" class="nav-link" active-class="test">
                My Projects
              </NuxtLink>
            </li>
            <li
              @click="toggleMenu"
              class="nav-item"
              :class="{ show: showMenu }"
            >
              <NuxtLink to="/blogs" class="nav-link" active-class="test">
                Blogs
              </NuxtLink>
            </li>
            <li
              @click="toggleMenu"
              class="nav-item"
              :class="{ show: showMenu }"
            >
              <NuxtLink to="/contact" class="nav-link" active-class="test">
                Contact Me
              </NuxtLink>
            </li>
            <li
              v-if="!authUser"
              @click="toggleMenu"
              class="nav-item"
              :class="{ show: showMenu }"
            >
              <NuxtLink to="/login" class="nav-link" active-class="test">
                Login
              </NuxtLink>
            </li>
            <li
              v-if="authUser"
              @click="toggleMenu"
              class="nav-item"
              :class="{ show: showMenu }"
            >
              <NuxtLink
                to="/projects/add-project"
                class="nav-link"
                active-class="test"
              >
                Add Projects
              </NuxtLink>
            </li>

            <li
              v-if="authUser"
              @click="toggleMenu"
              class="nav-item"
              :class="{ show: showMenu }"
            >
              <v-btn dark block class="mt-3" color="#59b984" @click="logout">
                logout
              </v-btn>
            </li>
          </ul>
        </nav>
      </header>
      <v-main>
        <Nuxt />
      </v-main>
    </div>
  </v-app>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
export default {
  data() {
    return {
      showMenu: false,
      percentage: null,
      scrollHeight: null,
      vewportHeight: null,
      maxScrollHeight: null,
    };
  },

  methods: {
    ...mapActions("auth/auth", ["updateAuthUser"]),
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
    print() {
      // console.log(this.width);
    },
    logout() {
      const User = getAuth();
      signOut(User)
        .then(() => {
          this.updateAuthUser(null);
          console.log(this.authUser);
        })
        .catch((err) => console.log(err.message));
    },
  },
  mounted() {
    /* 
      subscription to auth: always listening to auth stage for any changes
    */

    const user = getAuth();
    // console.log("user in default", user);
    onAuthStateChanged(user, (usr) => {
      // console.log(usr);
      this.updateAuthUser(usr);
    });

    window.addEventListener("scroll", () => {
      this.scrollHeight = document.body.scrollHeight;
      this.vewportHeight = window.innerHeight;
      this.maxScrollHeight = this.scrollHeight - this.vewportHeight;
      this.percentage = `${(window.scrollY / this.maxScrollHeight) * 100}%`;
    });
  },
  computed: {
    ...mapGetters("auth/auth", ["authUser"]),
  },
};
</script>
<style lang="scss" scoped>
.bg-img {
  position: relative;
  .bar {
    content: "";
    position: fixed;
    height: 6px;
    background: linear-gradient(to left, #00ff73, #59b984);
    display: block;
    top: 0;
    left: 0;
    z-index: 10;
    border-radius: 20px;
  }
}
.elfsight-app-0cc624cf-85d8-468b-8811-863725f7874d {
  z-index: 100;
}
</style>
