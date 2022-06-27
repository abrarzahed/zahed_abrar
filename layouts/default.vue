<template>
  <v-app class="body">
    <div class="bg-img">
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
      <v-main id="main">
        <Nuxt />
        <a href="https://wa.me/+8801887877854" target="_blank" class="wp-icon">
          <v-icon large color="#eee">mdi-whatsapp</v-icon>
        </a>
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

    logout() {
      const User = getAuth();
      signOut(User)
        .then(() => {
          this.updateAuthUser(null);
          this.$router.push("/login");
        })
        .catch((err) => console.log(err.message));
    },
  },
  mounted() {
    /* 
      subscription to auth: always listening to auth stage for any changes
    */

    const user = getAuth();
    onAuthStateChanged(user, (usr) => {
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

<style lang="scss">
#main {
  position: relative;
  .wp-icon {
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 48px;
    height: 48px;
    background: #59b984;
    display: grid;
    place-items: center;
    border-radius: 50%;
    outline: 2px solid #1d1d1d;
    animation: blink 1s linear infinite;
    &:hover {
      animation: none;
    }
  }
}
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
@keyframes blink {
  to {
    outline-offset: 0.5rem;
    outline-color: #59b984;
  }
}
</style>
