<template>
  <v-layout
    column
    justify-center
    align-center>
    <img src="~assets/img/sb.png" >
    <v-flex
      xs12
      sm8
      md8>
      <v-card
        class = "pa-2 text-xs-center"
        color="teal lighten-1"
        dark>
        <h1>श्रुतबोध-शिक्षकः - परस्परव्यवहारपूर्वकशिक्षणम्</h1>
        <h1>Interactive tutorial for Shrutabodha</h1>
        <v-card-text>
          <h3>Interactive self learning software for learning Sanskrit prosody, various types of meters used in poetry.</h3>
        </v-card-text>
        <v-card-actions>
          <v-dialog
            v-model="dialog"
            scrollable>
            <v-btn
              slot="activator"
              :ripple="{ class: 'error--text' }"
              round
              color="primary"
              class="text-capitalize font-weight-bold"
              large> About <br> Shrutabodha</v-btn>
            <v-card
              color="info"
              class="papyrus bg1"
              light>
              <v-card-title><h1>Shrutabodha</h1></v-card-title>
              <v-divider/>
              <v-card-text class="subheading papyrus font-weight-bold">This minor work, having just 44 sloka-s is a small masterpiece that teaches the basics of the Sanskrit Chandas and Vritta-s to students in the simplest possible manner. Ascribed to one of the greatest poets Kalidasa, it enables the student to grasp the definitions of the various meters used in Sanskrit literature. Until now, this work has not been published with a good English translation and illustrative examples. As part of this project, it is proposed to fill this void and help students of Sanskrit gain good knowledge of the theories associated with the meters of Sanskrit words.</v-card-text>
              <v-divider/>
              <v-card-actions>
                <v-spacer/>
                <v-btn
                  color="secondary"
                  ripple
                  @click.native="dialog = false">Close</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-spacer/>
          <v-btn
            round
            color="primary"
            class="font-weight-bold text-capitalize"
            nuxt
            to="/srutabodha/lessons"
            large>अध्यायाः<br>Learn</v-btn>
          <v-spacer/>
          <v-btn
            round
            color="primary"
            class="font-weight-bold text-capitalize"
            nuxt
            to="/srutabodha/exercises"
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
img {
  width: 60%;
}
</style>
