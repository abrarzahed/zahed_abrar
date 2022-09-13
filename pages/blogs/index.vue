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
          <NuxtLink :to="`blogs/${blog.title}`">
            <div class="blog-icon">
              <v-icon color="#fff" size="60">{{ blog.icon }}</v-icon>
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
  head: {
    title: "Blogs",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "I am Abrar Hussen Zahed. A professional and passionate front-end web developer.",
      },
    ],
  },
  data() {
    return {
      blogs: blogs,
      loading: true,
      snippets: "",
    };
  },
  mounted() {
    this.loading = false;

    const stringToHTML = function (str) {
      const dom = document.createElement("div");
      dom.innerHTML = str;
      if (!dom.firstElementChild) return;
      let text = dom.firstElementChild.textContent.substr(0, 90);
      text = text.substr(0, text.lastIndexOf(" ")) + " ...";
      return text;
    };

    this.blogs.map((element) => {
      let snippet = stringToHTML(element.body);
      element.snippet = snippet;
    });
  },
  methods: {},
  computed: {},
};
</script>

<style lang="scss" scoped>
.blogs {
  margin-top: 48px;
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(min(360px, 100%), 350px));
  align-items: center;
  column-gap: 32px;
  row-gap: 56px;
  @media screen and(max-width: 768px) {
    justify-content: center;
  }

  &-item {
    background: #2a2a2a;
    padding-top: 40px;
    border-radius: 8px;
    position: relative;
    transition: all 0.2s linear;
    box-shadow: 5px 5px 50px rgba(0, 0, 0, 0.2);
    box-shadow: 0px 12px 17px rgba(0, 0, 0, 0.14);
    height: 100%;
    a {
      display: block;
      padding: 24px;
      color: #b1b2b3;
    }
    &:hover {
      background: #2d2f2f;
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
      font-weight: 600;
      @media screen and(max-width: 768px) {
        text-align: left;
      }
    }
    p {
      margin-top: 1rem;
      font-size: 1.1rem;
      @media screen and(max-width: 768px) {
        text-align: left;
      }
    }
  }
}
</style>
