<template>
  <div>
    <main id="credentials">
      <h1 class="lg-heading">
        <code>&lt;<span class="tag">h1</span>&gt;</code>
        <span>
          <span class="text-secondary">Achievements</span>
        </span>
        <code>&lt;/<span class="tag">h1</span>&gt; </code>
      </h1>
      <div class="credentials__images">
        <img
          src="~/assets/img/credentials/javascriptDSA_FCC.png"
          alt=""
          loading="lazy"
        />
        <img src="~/assets/img/credentials/fcc.png" alt="" loading="lazy" />
        <img src="~/assets/img/credentials/netlify.png" alt="" loading="lazy" />
        <img src="~/assets/img/credentials/google.jpg" alt="" loading="lazy" />
        <img
          src="~/assets/img/credentials/solo_css.jpg"
          alt=""
          loading="lazy"
        />
        <img
          src="~/assets/img/credentials/solo_html.jpg"
          alt=""
          loading="lazy"
        />
      </div>
    </main>
    <AppFooter />
  </div>
</template>

<script>
export default {
  head: {
    title: "Achievements",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "I am Abrar Hussen Zahed. Introducing myself as a professional and passionate front-end web developer. I have developed a huge number of web applications. Most comfortable with javascript. Familiar with frameworks like... Bootstrap, Tailwind CSS, jquery vue.js, nuxt.js. Besides, I have experience in UI/UX design and WordPress Customization.",
      },
    ],
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
.credentials {
  &__images {
    margin-top: 1rem;
    display: grid;
    gap: 1.5rem;

    img {
      width: 100%;
      object-fit: cover;
      border: 6px solid #59b984;
    }
  }
}
</style>
