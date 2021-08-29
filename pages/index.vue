<template>
  <v-container class="text-xs-center">
    <v-container
      align-content-space-around
      class="mt-0 pt-0 text-xs-center">
      <img
        class="title-img-sans"
        src="~assets/img/title_sans.png"
        alt="title">
      <img
        class="title-img-eng"
        src="~assets/img/title_eng.png"
        alt="title">
    </v-container>

    <!-- buttons -->
    <v-container>
      <v-layout row>
        <v-flex xs4>
          <a
            v-ripple
            href="/upayukta" >
            <img
              class="image-btn"
              src="~assets/img/upayukta.png" >
          </a>
        </v-flex>
        <v-flex xs4>
          <a
            v-ripple
            href="/dvirupa" >
            <img
              v-ripple
              class="image-btn"
              src="~assets/img/dk.png" ></a>
        </v-flex>
        <v-flex xs4>
          <a
            v-ripple
            href="/chandraloka" >
            <img
              v-ripple
              class="image-btn"
              src="~assets/img/cl.png" ></a>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs4>
          <a
            v-ripple
            href="/samasashikhamani" >
            <img
              v-ripple
              class="image-btn"
              src="~assets/img/ss.png" ></a>
        </v-flex>
        <v-flex xs4>
          <a
            v-ripple
            href="/kriyanighantu" >
            <img
              v-ripple
              class="image-btn"
              src="~assets/img/kn.png" >
          </a>
        </v-flex>
        <v-flex xs4>
          <a
            v-ripple
            href="/sastrapramana" >
            <img
              v-ripple
              class="image-btn"
              src="~assets/img/sp.png" ></a>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs4>
          <a
            v-ripple
            href="/samasachakra" >
            <img
              v-ripple
              class="image-btn"
              src="~assets/img/sc.png" >
          </a>
        </v-flex>
        <v-flex xs4>
          <a
            v-ripple
            href="/vrittaratnakara" >
            <img
              v-ripple
              class="image-btn"
              src="~assets/img/vr.png" ></a>
        </v-flex>
        <v-flex xs4>
          <a
            v-ripple
            href="/sankshepa" >
            <img
              v-ripple
              class="image-btn"
              src="~assets/img/sr.png" ></a>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs4>
          <a
            v-ripple
            href="/linganushasana" >
            <img
              v-ripple
              class="image-btn"
              src="~assets/img/ls.png" ></a>
        </v-flex>
        <v-flex xs4>
          <a
            v-ripple
            href="/srutabodha" >
            <img
              v-ripple
              class="image-btn"
              src="~assets/img/sb.png" ></a>
        </v-flex>
        <v-flex xs4>
          <a
            v-ripple
            href="/ramayanasangraha" >
            <img
              v-ripple
              class="image-btn"
              src="~assets/img/srs.png" ></a>
        </v-flex>
      </v-layout>
    </v-container>

  </v-container>
</template>

<script>
export default {
  data() {
    return {
      dialog_activity: false
    }
  }
}
</script>
<style scoped>
body {
  font-family: Arial, Helvetica, sans-serif;
}
.title-img-sans {
  width: 55%;
}
.title-img-eng {
  width: 45%;
}
.image-btn {
  width: 100%;
  padding: 0;
  margin: 0;
}
</style>
