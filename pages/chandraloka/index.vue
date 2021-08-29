<template>
  <v-layout
    column
    justify-center
    align-center>
    <img src="~assets/img/cl.png" >
    <v-flex
      xs12
      sm8
      md8
      align-center>
      <v-card
        class = "text-xs-center pa-2"
        color = "secondary"
        dark
        align-center>
        <h1>चन्द्रालोक-शिक्षकः - परस्परव्यवहारपूर्वकशिक्षणम्</h1>
        <h2>Interactive tutorial for Candrāloka</h2>
        <h3>Interactive self learning software for learning rhetorics used in Sanskrit poetry.</h3>
        <v-card-actions>
          <v-dialog
            v-model="dialog"
            scrollable>
            <v-btn
              slot="activator"
              :ripple="{ class: 'error--text' }"
              round
              color="accent darken-2"
              class="font-weight-bold"
              large> About <br> Candrāloka</v-btn>
            <v-card align-center>
              <v-flex align-center>
                <img 
                  src="~assets/img/cl-text.png" 
                  alt="About Chandraloka" >
              </v-flex>
              <v-card-actions>
                <v-btn
                  color="primary"
                  ripple
                  @click.native="dialog = false">Close</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-spacer/>
          <v-btn
            round
            color="accent darken-2"
            class="font-weight-bold"
            nuxt
            to="/chandraloka/lessons"
            large>अध्यायाः<br>Learn</v-btn>
          <v-spacer/>
          <v-btn
            round
            color="accent darken-2"
            class="font-weight-bold"
            nuxt
            to="/chandraloka/exercises"
            large>अभ्यासाः <br> Exercises</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data: () => {
    return {
      dialog: false
    }
  }
}
</script>

<style scoped>
* {
  background-image: url('~assets/img/cl-bg.png') no-repeat center;
  background-size: cover;
}

img {
  width: 60%;
}
</style>
