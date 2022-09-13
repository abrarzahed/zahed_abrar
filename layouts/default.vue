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

            <!-- **************************************** 
            COMMENT: Log In and add Project starts here
            ***************************************** -->
            <!-- <li
              v-if="!authUser"
              @click="toggleMenu"
              class="nav-item"
              :class="{ show: showMenu }"
            >
              <NuxtLink to="/login" class="nav-link" active-class="test">
                Login
              </NuxtLink>
            </li> -->
            <!-- <li
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
            </li> -->
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
  mounted() {
    /*
      COMMENT: subscription to auth: always listening to auth stage for any changes
    */

    // const user = getAuth();
    // onAuthStateChanged(user, (usr) => {
    //   console.log("auth user in mounted", usr);
    //   this.updateAuthUser(usr);
    //   localStorage.setItem("authenticUser", usr);
    //   const usssr = localStorage.getItem("authenticUser");
    //   console.log("auth user from local storage", usssr);
    // });

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
    console.log(this.authUser);
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
          // localStorage.setItem("abrarAuthUser", null);
          this.updateAuthUser(null);
          this.$router.push("/login");
        })
        .catch((err) => console.log(err.message));
    },
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
