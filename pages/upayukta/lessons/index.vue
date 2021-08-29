<template>
  <v-container class="mt-0 pt-0">
    <v-card 
      color="accent" 
      class="p-1">
      <v-card-title primary-title>
        <h3 class="papyrus myheader">Learn Upayuktaśloka</h3>
      </v-card-title>
      <v-btn 
        to="/upayukta/lessons/1" 
        large 
        color="secondary" 
        class="text-capitalize font-weight-bold" 
        round> Start with Lesson 1 </v-btn>
    </v-card>
  </v-container>
</template>

<script>
export default {
  layout: 'lessons'
}
</script>
