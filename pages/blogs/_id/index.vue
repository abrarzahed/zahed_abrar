<template>
  <div class="blogs-container">
    <div v-if="loading" class="loading">
      <div class="spinner"></div>
      <span>Loading...</span>
    </div>
    <main v-if="!loading">
      <div class="single-blog">
        <h1>{{ singleBlog[0].title }}</h1>
        <div v-html="singleBlog[0].body"></div>
      </div>
    </main>
    <AppFooter v-if="!loading" />
  </div>
</template>

<script>
import blogs from "@/api/blogs";
export default {
  data() {
    return {
      blogs: blogs,
      loading: true,
      snippets: ""
    };
  },
  mounted() {
    console.log(this.singleBlog);
    this.loading = false;

    const stringToHTML = function(str) {
      const dom = document.createElement("div");
      dom.innerHTML = str;
      const text = dom.firstElementChild.textContent.slice(0, 110) + "...";
      return text;
    };

    this.blogs.map(element => {
      let snippet = stringToHTML(element.body);
      element.snippet = snippet;
    });
  },
  methods: {},
  computed: {
    singleBlog() {
      return this.blogs.filter(item => item.id == this.$route.params.id);
    }
  }
};
</script>

<style lang="scss" scoped>
.single-blog {
  // padding: 1.5rem;
  // background: #222;
  max-width: 800px;
  margin: auto;
  margin-top: 3rem;
  h1 {
    font-size: 3rem;
    margin-bottom: 1.5rem;
    max-width: max-content;
    line-height: 1.2;
  }
  // div {
  // }
}
</style>
