<template>
  <div class="text-center">
    <v-dialog persistent v-model="editDialog" max-width="700">
      <v-card dark style="border: 1px solid #424242">
        <v-card-title class="text-h5 accent"> Edit Project </v-card-title>
        <v-divider></v-divider>

        <v-card-text v-if="project.createdAt" class="mt-4">
          <b>Created At: </b>{{ new Date(project.createdAt).toLocaleString() }}
        </v-card-text>

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
import { colRef } from "@/firebase";
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
      // console.log("delete");
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
