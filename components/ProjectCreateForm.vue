<template>
  <div>
    <h2 class="mb-4">Add a Project</h2>
    <v-form ref="form" v-model="valid">
      <v-switch
        dark
        v-model="project.isReal"
        :label="`${project.isReal ? 'Real Project' : 'Practice Project'}`"
      ></v-switch>
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

      <v-select
        filled
        dark
        :items="icons"
        label="Project icon"
        required
        :menu-props="{ bottom: true, offsetY: true }"
        :rules="iconRules"
        v-model.trim="project.icon"
      ></v-select>
      <v-textarea
        rows="3"
        dark
        filled
        label="Project description"
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
        @click="addProject"
      >
        Add project
      </v-btn>
    </v-form>
  </div>
</template>

<script>
/* ****************************************
COMMENT: imports
***************************************** */
import { colRef } from "@/firebase";
import { addDoc } from "firebase/firestore";
export default {
  data() {
    return {
      /*
      project
    */
      project: {
        isReal: true,
        title: "",
        image: "",
        icon: "",
        desc: "",
        link: "",
        techs: [],
      },
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
        "react",
        "vue.js",
        "nuxt.js",
        "vuetify",
        "graphql",
        "firebase",
        "bootstrap",
        "tailwindcss",
        "stripe",
      ],
      icons: [
        "mdi-language-css3",
        "mdi-react",
        "mdi-nuxt",
        "mdi-vuejs",
        "mdi-vuetify",
        "mdi-language-javascript",
        "mdi-jquery",
      ],
    };
  },
  methods: {
    addProject() {
      this.loading = true;
      addDoc(colRef, { ...this.project, createdAt: Date.now() })
        .then(() => {
          this.loading = false;
          this.$refs.form.reset();
          this.$router.push("/projects");
        })
        .catch((err) => {
          this.loading = false;
          console.log(err.message);
        });
    },
  },
};
</script>

<style></style>
