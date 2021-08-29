<template>
  <v-app class = "bg-image">
    <Header />
    <Nav />
    <nuxt />
  </v-app>
</template>

<script>
import Header from '~/components/header.vue'
import Nav from '~/components/navbar.vue'
export default {
  components: {
    Header,
    Nav
  }
}
</script>

<style scoped>
.bg-image {
  background: url('~assets/img/bg.png') no-repeat;
  background-size: cover;
  background-position: center;
}

.text-light {
  color: white;
}
</style>
