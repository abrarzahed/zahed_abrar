<template>
  <main>
    <div class="add-project">
      <ProjectCreateForm />
    </div>
  </main>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },

  methods: {},
  mounted() {
    setTimeout(() => {
      if (!this.authUser) {
        this.$router.push("/login");
      }
    }, 500);
  },

  computed: {
    ...mapGetters("auth/auth", ["authUser"]),
  },
};
</script>

<style>
.add-project {
  position: relative;
  max-width: 600px;
  margin: 100px auto;
  border: 1px solid #333;
  padding: 2rem;
}
</style>
