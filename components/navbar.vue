<template>
  <v-toolbar 
    flat
    color="transparent">
    <v-container>
      <v-toolbar-items>
        <v-btn 
          round
          class="pa-2"
          color="success"  
          to="/">Home</v-btn>
        <v-spacer/>
        <v-btn 
          round
          class="pa-2"
          color="success" 
          dark 
          to="/about">About the project</v-btn>
        <v-spacer/>
        <v-btn 
          round 
          class="pa-2"
          color="success" 
          dark 
          to="/use">How to use this program</v-btn>
        <v-spacer/>
        <v-btn 
          round 
          class="pa-2"
          color="success" 
          dark 
          to="/bib">References / Bibliography</v-btn>
        <v-spacer/>
        <v-btn 
          round 
          class="pa-2"
          color="success" 
          dark 
          to="/credits">Credits</v-btn>
      </v-toolbar-items>
    </v-container>
  </v-toolbar>
</template>


<style scoped>
img {
  width: 100%;
}
</style>
