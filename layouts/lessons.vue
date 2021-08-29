<template>
  <v-app class = "bg-image">
    <Header />
    <v-layout column>
      <Nav />
      <navleft :text_title="text_name" />
    </v-layout>
    <nuxt />
  </v-app>
</template>

<script>
import navleft from '~/components/lessonsnav.vue'
import Header from '~/components/header.vue'
import Nav from '~/components/navbar.vue'

export default {
  components: {
    navleft,
    Header,
    Nav
  },
  computed: {
    text_name() {
      // find name of text from path
      return this.$route.path.split('/')[1]
    }
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
