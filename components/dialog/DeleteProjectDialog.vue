<template>
  <div class="text-center">
    <v-dialog persistent v-model="deleteDialog" width="500">
      <v-card dark>
        <v-card-title class="text-h5">
          Are you sure want to delete this project?
        </v-card-title>
        <v-divider></v-divider>

        <v-card-text v-if="project.createdAt" class="mt-4">
          <b>Created At: </b>{{ new Date(project.createdAt).toLocaleString() }}
        </v-card-text>
        <v-card-title class="text-h6 mt-0 primary--text pt-0">{{
          project.isReal ? "Real Project" : "Practice Project"
        }}</v-card-title>

        <v-card-text> <b>Title: </b>{{ project.title }} </v-card-text>
        <v-card-text> <b>Description: </b> {{ project.desc }} </v-card-text>
        <v-card-text>
          <div class="chips">
            <b>Technologies:</b>
            <v-chip
              outlined
              dark
              small
              label
              v-for="(chip, i) in project.techs"
              :key="i"
            >
              {{ chip }}
            </v-chip>
          </div>
        </v-card-text>

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

<style lang="scss">
.chips {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}
</style>
