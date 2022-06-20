<template>
  <main>
    <div class="add-project">
      <ProjectCreateForm />
    </div>
  </main>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {};
  },

  methods: {},
  mounted() {
    if (!this.authUser) {
      // this.$router.push("/login");
    }
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
