<template>
  <div class="update-form">
    <!-- <h2 class="mb-4">Update Project</h2> -->
    <v-form ref="form" v-model="valid">
      <v-text-field
        :rules="titleRules"
        dark
        filled
        label="Project title"
        required
        v-model.trim="project.title"
      ></v-text-field>
      <v-text-field
        :rules="imageRules"
        dark
        filled
        label="Project image"
        required
        v-model.trim="project.image"
      ></v-text-field>
      <v-text-field
        :rules="iconRules"
        dark
        filled
        label="Project icon"
        required
        v-model.trim="project.icon"
      ></v-text-field>
      <v-textarea
        rows="3"
        dark
        filled
        label="Project description"
        required
        :rules="descRules"
        v-model.trim="project.desc"
      ></v-textarea>
      <v-text-field
        :rules="linkRules"
        filled
        dark
        label="Project link"
        required
        v-model.trim="project.link"
      ></v-text-field>

      <v-select
        filled
        dark
        :items="items"
        label="Technologies"
        required
        multiple
        chips
        :menu-props="{ bottom: true, offsetY: true }"
        :rules="techRules"
        clearable
        v-model.trim="project.techs"
      ></v-select>

      <v-btn
        :disabled="!valid"
        block
        color="primary"
        :loading="loading"
        @click="updateProject"
      >
        Update project
      </v-btn>
    </v-form>
  </div>
</template>

<script>
/* ****************************************
COMMENT: imports
***************************************** */
import { colRef } from "@/firebase";
import { updateDoc, doc } from "firebase/firestore";
import { mapActions, mapGetters } from "vuex";
export default {
  props: {
    project: {
      type: Object,
    },
  },
  data() {
    return {
      loading: false,

      /*
      rules
    */
      valid: true,
      titleRules: [(v) => !!v || "Title is required"],
      imageRules: [(v) => !!v || "Image is required"],
      iconRules: [(v) => !!v || "Icon is required"],
      descRules: [(v) => !!v || "Description is required"],
      linkRules: [(v) => !!v || "Link is required"],
      techRules: [(v) => !!v.length || "Filed is required"],

      items: [
        "html",
        "css",
        "javascript",
        "vue.js",
        "nuxt.js",
        "vuetify",
        "graphql",
        "firebase",
        "bootstrap",
        "tailwindcss",
      ],
    };
  },
  methods: {
    ...mapActions("auth/auth", ["updateEditDialog"]),
    updateProject() {
      this.loading = true;
      const updateDocRef = doc(colRef, this.project.id);
      updateDoc(updateDocRef, this.project).then(() => {
        this.loading = false;
        this.updateEditDialog(false);
      });
    },
  },
};
</script>

<style>
.update-form {
  padding: 2rem;
}
</style>
