<template>
  <div>
    <LogInForm />
  </div>
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
      if (this.authUser) {
        this.$router.push("/projects/add-project");
      }
    }, 1000);
  },
  computed: {
    ...mapGetters("auth/auth", ["authUser"]),
  },
};
</script>

<style></style>
