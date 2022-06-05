<template>
  <div class="blogs-container">
    <div v-if="loading" class="loading">
      <div class="spinner"></div>
      <span>Loading...</span>
    </div>
    <main v-if="!loading">
      <h1 class="lg-heading">
        <span class="text-secondary">Blogs</span>
      </h1>

      <div class="blogs">
        <div v-for="(blog, i) in blogs" :key="i" class="blogs-item">
          <NuxtLink :to="`blogs/${blog.id}`">
            <div class="blog-icon">
              <v-icon color="#fff" size="60">mdi-language-javascript</v-icon>
            </div>
            <h2>{{ blog.title }}</h2>
            <p>{{ blog.snippet }}</p>
          </NuxtLink>
        </div>
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
    this.loading = false;

    const stringToHTML = function(str) {
      const dom = document.createElement("div");
      dom.innerHTML = str;
      const text = dom.firstElementChild.textContent.slice(0, 90) + "...";
      return text;
    };

    this.blogs.map(element => {
      let snippet = stringToHTML(element.body);
      element.snippet = snippet;
    });
  },
  methods: {},
  computed: {}
};
</script>

<style lang="scss" scoped>
.blogs {
  margin-top: 48px;
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(min(350px, 100%), 350px));
  align-items: center;
  justify-content: center;
  column-gap: 32px;
  row-gap: 56px;

  &-item {
    background: #2a2a2a;
    padding-top: 40px;
    border-radius: 8px;
    position: relative;
    transition: all 0.2s linear;
    box-shadow: 5px 5px 50px rgba(0, 0, 0, 0.2);
    height: 100%;
    a {
      display: block;
      padding: 24px;
    }
    &:hover {
      background: #222;
      box-shadow: none;
    }

    .blog-icon {
      padding: 12px;
      border-radius: 8px;
      position: absolute;
      top: -44px;
      left: 24px;
      background: #1d1d1d;
    }
    h2 {
      font-size: 1.6rem;
      line-height: 1.2;
      font-weight: 700;
    }
    p {
      margin-top: 1rem;
      font-size: 1.1rem;
    }
  }
}
</style>
