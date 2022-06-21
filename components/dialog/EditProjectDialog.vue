<template>
  <div class="text-center">
    <v-dialog persistent v-model="editDialog" width="800">
      <v-card dark>
        <v-card-title class="text-h5 mb-5 black darken-2">
          Edit Project
        </v-card-title>

        <ProjectEditForm :project="project" />

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text color="primary" @click="closeDialog"> Close </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { colRef, projectsCollectionsOrderRefs } from "@/firebase";
import {
  onSnapshot,
  addDoc,
  doc,
  deleteDoc,
  serverTimestamp,
  getDoc,
  updateDoc,
} from "firebase/firestore";
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
    ...mapGetters("auth/auth", ["editDialog"]),
  },
  methods: {
    ...mapActions("auth/auth", ["updateEditDialog"]),
    closeDialog() {
      this.updateEditDialog(false);
      console.log("delete");
    },

    deleteProject() {
      this.loading = true;
      const deleteDocRef = doc(colRef, this.project.id);
      deleteDoc(deleteDocRef).then(() => {
        this.loading = false;
        this.updateEditDialog(false);
        console.log("Item is deleted");
      });
    },
  },
};
</script>
