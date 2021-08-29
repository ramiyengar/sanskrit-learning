<template>
  <v-container class="mt-0 pt-0">
    <v-card
      color="teal lighten-3"
      class="bordered papyrus mt-0 pt-0">
      <v-card-title primary-title>
        <h1>Srutabodha Exercises</h1>
      </v-card-title>
      <v-btn
        to="/srutabodha/exercises/1"
        large
        color="secondary"
        class="text-capitalize font-weight-bold"
        round> Start exercises</v-btn>
    </v-card>
  </v-container>
</template>

<script>
export default {
  layout: 'lessons'
}
</script>
