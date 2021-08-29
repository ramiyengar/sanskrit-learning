<template>
  <v-layout
    column
    justify-center
    align-center>
    <img src="~assets/img/upayukta.png" >
    <v-flex
      xs12
      sm8
      md8>
      <v-card
        color="light-green"
        class = "pa-2 text-xs-center bg-us" >
        <h1>उपयुक्तांश-सङ्ग्रहः - परस्परव्यवहारपूर्वकशिक्षणम्</h1>
        <h1>Interactive tutorial for Upayuktaṣloka</h1>
        <v-card-text>
          <h3>Interactive self learning software for learning elementary Sanskrit grammar.</h3>
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
              large> Introduction</v-btn>
            <v-card
              color="info"
              class="papyrus bg1"
              light>
              <v-card-title><h1>Upayuktaṣloka</h1></v-card-title>
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
            to="/upayukta/lessons"
            large>अध्यायाः<br>Learn</v-btn>
          <v-spacer/>
          <v-btn
            round
            color="primary"
            class="font-weight-bold text-capitalize"
            nuxt
            to="/upayukta/exercises"
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
