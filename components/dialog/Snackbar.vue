<template>
  <div class="text-center">
    <v-snackbar
      v-model="isSnackbarOpen"
      absolute
      bottom
      color="success"
      :timeout="timeout"
    >
      Successfully computed

      <template v-slot:action="{ attrs }">
        <v-btn color="primary" text v-bind="attrs" @click="closeSnackbar">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  props: {
    snackbar: {
      type: Object,
    },
  },
  data: () => ({
    timeout: 2000,
  }),
  methods: {
    ...mapActions("auth/auth", ["updateSnackbar"]),
    closeSnackbar() {
      this.updateSnackbar(false);
    },
  },
  computed: {
    ...mapGetters("auth/auth", ["getSnackbar"]),
    isSnackbarOpen: {
      get() {
        return this.getSnackbar;
      },
      set(value) {
        this.updateSnackbar(value);
      },
    },
  },
};
</script>
