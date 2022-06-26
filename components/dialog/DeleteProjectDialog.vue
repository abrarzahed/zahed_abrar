<template>
  <div class="text-center">
    <v-dialog persistent v-model="deleteDialog" width="500">
      <v-card>
        <v-card-title class="text-h5 mb-5 grey lighten-2">
          Are you sure want to delete this project?
        </v-card-title>

        <v-card-text> <b>Title: </b>{{ project.title }} </v-card-text>
        <v-card-text> <b>Description: </b> {{ project.desc }} </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text color="primary" @click="closeDialog"> Close </v-btn>
          <v-btn color="error" text @click="deleteProject" :loading="loading">
            Delete
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { colRef } from "@/firebase";
import { doc, deleteDoc } from "firebase/firestore";
export default {
  props: {
    project: {
      type: Object,
    },
  },
  data() {
    return {
      loading: false,
    };
  },
  computed: {
    ...mapGetters("auth/auth", ["deleteDialog"]),
  },
  methods: {
    ...mapActions("auth/auth", ["updateDeleteDialog"]),
    closeDialog() {
      this.updateDeleteDialog(false);
      // console.log("delete");
    },

    deleteProject() {
      this.loading = true;
      const deleteDocRef = doc(colRef, this.project.id);
      deleteDoc(deleteDocRef).then(() => {
        this.loading = false;
        this.updateDeleteDialog(false);
      });
    },
  },
};
</script>
