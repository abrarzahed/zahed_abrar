<template>
  <div>
    <div v-if="loading" class="loading">
      <div class="spinner"></div>
      <span>Loading...</span>
    </div>
    <LogInForm v-else />
  </div>
</template>

<script>
import { getAuth, onAuthStateChanged } from "firebase/auth";
export default {
  data() {
    return {
      loading: true,
    };
  },
  methods: {},
  async mounted() {
    this.loading = false;
    const auth = await getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.$router.push("/projects/add-project");
      }
    });
  },

  computed: {},
};
</script>

<style lang="scss" scoped>
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
</style>
