<template>
  <v-app class="body">
    <div class="bg-animation">
      <BgAnimation />
    </div>
    <div v-if="loading" class="loading">
      <div class="spinner"></div>
      <span>Loading...</span>
    </div>
    <div v-else class="bg-img">
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
              <NuxtLink to="/credentials" class="nav-link" active-class="test">
                credentials
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

            <!-- **************************************** 
            COMMENT: Log In and add Project starts here
            ***************************************** -->
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
            <!-- **************************************** 
            COMMENT: Log In and add Project ends here   
            ***************************************** -->

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
import { projectsCollectionsOrderRefs } from "@/firebase";
import { onSnapshot } from "firebase/firestore";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
export default {
  data() {
    return {
      authUser: false,
      loading: true,
      showMenu: false,
      percentage: null,
      scrollHeight: null,
      vewportHeight: null,
      maxScrollHeight: null,
    };
  },
  async mounted() {
    /*
      COMMENT: subscription to auth: always listening to auth stage for any changes
    */
    const auth = await getAuth();
    this.loading = false;

    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.authUser = true;
      } else {
        this.authUser = false;
      }
    });

    /*
      COMMENT: Tracking user activity & auto logout inactive user.
    */
    /*
    let warningTimeoutID = undefined;
    let logoutTimeoutID = undefined;
    const events = ["click", "mousemove", "mousedown", "keydown"];

    const callTimeoutFunc = function () {
      console.log(
        `You have been inactive for 5 seconds. we are almost to logout`
      );
      logoutTimeoutID = setTimeout(() => {
        console.log(`logout occurring`);
        const User = getAuth();
        signOut(User)
          .then(() => {
            this.$router.push("/login");
          })
          .catch((err) => console.log(err.message));
      }, 2000);
    };

    const eventHandler = function () {
      if (logoutTimeoutID) {
        clearTimeout(logoutTimeoutID);
      }
      clearTimeout(warningTimeoutID);
      warningTimeoutID = setTimeout(callTimeoutFunc, 5000);
    };

    window.addEventListener("DOMContentLoaded", () => {
      console.log("test test");
      if (this.authUser) {
        warningTimeoutID = setTimeout(callTimeoutFunc, 5000);
        events.forEach((event) => {
          window.addEventListener(event, eventHandler);
        });
      } else {
        clearTimeout(warningTimeoutID);
        clearTimeout(logoutTimeoutID);
        events.forEach((event) => {
          window.removeEventListener(event, eventHandler);
        });
      }
    });
    */

    /*
      COMMENT: In order to show custom scrollbar on top
    */
    window.addEventListener("scroll", () => {
      this.scrollHeight = document.body.scrollHeight;
      this.vewportHeight = window.innerHeight;
      this.maxScrollHeight = this.scrollHeight - this.vewportHeight;
      this.percentage = `${(window.scrollY / this.maxScrollHeight) * 100}%`;
    });
  },

  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },

    logout() {
      const User = getAuth();
      signOut(User)
        .then(() => {
          this.$router.push("/");
        })
        .catch((err) => console.log(err.message));
    },
  },

  computed: {},
};
</script>

<style lang="scss">
.bg-animation {
  position: fixed;
  inset: 0;
  overflow: hidden;
  max-height: 100%;
  background-color: #1d1d1d;
  opacity: 0.1;
  background-image: repeating-radial-gradient(
      circle at 0 0,
      transparent 0,
      #1d1d1d 40px
    ),
    repeating-linear-gradient(#78787855, #787878);
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
