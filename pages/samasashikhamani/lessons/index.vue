<template>
  <v-container class="mt-0 pt-0">
    <v-card
      color="accent lighten-1"
      class="bordered papyrus mt-0 pt-0">
      <v-card-title primary-title>
        <h3 class="papyrus myheader">Learn Samāsaśikhāmaṇi</h3>
      </v-card-title>
      <v-btn
        to="/samasashikhamani/lessons/1"
        large
        color="secondary"
        class="text-capitalize font-weight-bold"
        round> Start with introduction </v-btn>
    </v-card>
  </v-container>
</template>

<script>
export default {
  layout: 'lessons'
}
</script>
