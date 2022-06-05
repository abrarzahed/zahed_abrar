<template>
  <div>
    <main id="contact">
      <h1 class="lg-heading">
        Contact
        <span class="text-secondary">Me</span>
      </h1>
      <h2 class="sm-heading">Get In Touch...</h2>
      <v-row align="center">
        <v-col cols="12" md="6" class="py-0">
          <div class="contact-info">
            <div class="contact-info-box">
              <v-icon>mdi-email</v-icon>
              <span>abrarzahed6986@gmail.com</span>
            </div>
            <div class="contact-info-box">
              <v-icon>mdi-phone-classic</v-icon>
              <span>+8801887877854</span>
            </div>
            <div class="contact-info-box">
              <v-icon>mdi-map-marker</v-icon>
              <span>Beanibazar, Sylhet</span>
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="6">
          <div class="form-part">
            <ContactForm />
          </div>
        </v-col>
      </v-row>
    </main>
    <AppFooter />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.form-part {
  padding: 30px;
  background: #2a2a2a;
  border-radius: 12px;
  @media (max-width: 600px) {
    padding: 10px;
  }
}
.contact-info {
  display: grid;
  gap: 30px;
  align-items: center;
  @media (max-width: 600px) {
    gap: 10px;
  }
  .contact-info-box {
    text-align: center;
    padding: 30px 15px;
    position: relative;
    background: #2a2a2a;
    border-radius: 12px;
    .v-icon {
      font-size: 60px;
      position: absolute;
      top: 50%;
      left: 0;
      transform: translate(-50%, -50%);
      background: #59b984;
      border-radius: 50%;
      color: #fff;
      padding: 20px;
      @media (max-width: 600px) {
        display: none;
      }
    }
    span {
      font-size: 1.3rem;
    }
  }
}
</style>
