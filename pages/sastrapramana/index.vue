<template>
  <v-layout
    column
    justify-center
    align-center>
    <img src="~assets/img/sp.png" >
    <v-flex
      xs12
      sm8
      md8>
      <v-card
        class = "pa-2 text-xs-center"
        color="yellow darken-2"
        dark>
        <h1>शास्त्रप्रमाणवाक्यानि-शिक्षकः - परस्परव्यवहारपूर्वकशिक्षणम्</h1>
        <h1>Interactive tutorial for śāstrapramāṆavākyāni</h1>
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
              large> About <br> śāstrapramāṆavākyāni</v-btn>
            <v-card
              color="info"
              class="papyrus bg1"
              light>
              <v-card-title><h1>śāstrapramāṆavākyāni</h1></v-card-title>
              <v-divider/>
              <v-card-text class="subheading papyrus font-weight-bold">Add text</v-card-text>
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
            to="/sastrapramana/lessons"
            large>अध्यायाः<br>Learn</v-btn>
          <v-spacer/>
          <v-btn
            round
            color="primary"
            class="font-weight-bold text-capitalize"
            nuxt
            to="/sastrapramana/exercises"
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
