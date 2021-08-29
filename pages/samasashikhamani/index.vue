<template>
  <v-layout
    column
    justify-center
    align-center
    class="papyrus">
    <img src="~assets/img/ss.png" >
    <v-flex
      xs12
      sm8
      md8>
      <v-card
        class = "text-xs-center pa-3"
        color="purple lighten-2"
        dark>
        <h1>समासशिखामणि-शिक्षकः - परस्परव्यवहारपूर्वकशिक्षणम्</h1>
        <h1>Interactive tutorial for Samāsaśikhāmaṇi</h1>
        <v-card-text>
          <h3>Interactive self learning software for learning the basics of compounds in Sanskrit.</h3>
        </v-card-text>
        <v-card-actions>
          <v-dialog
            v-model="dialog"
            scrollable>
            <v-btn
              slot="activator"
              :ripple="{ class: 'error--text' }"
              round
              color="secondary"
              class="text-capitalize font-weight-bold"
              large> About <br> Samāsaśikhāmaṇi</v-btn>
            <v-card
              color="info"
              class="papyrus bg1"
              light>
              <v-card-title><h1>Samāsaśikhāmaṇi</h1></v-card-title>
              <v-divider/>
              <v-card-text class="subheading papyrus font-weight-bold">This is a very important work that teaches the students
              of Sanskrit the basics of all the Compounds (samasa-s) along with the necessary examples. If a student memorizes this entire text, he will be able to remember with examples all aspects associated with samasa-s in Sanskrit language and master this aspect which is very much required for understanding the texts of Sanskrit in a proper manner. This work, until now, this work has not been published with a good English translation and illustrative examples. As part of this project, it is proposed to fill this void and help students of Sanskrit gain good knowledge of the theories associated with the Samasa-s of Sanskrit words.</v-card-text>
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
            color="secondary"
            class="font-weight-bold text-capitalize"
            nuxt
            to="/samasashikhamani/lessons"
            large>अध्यायाः<br>Learn</v-btn>
          <v-spacer/>
          <v-btn
            round
            color="secondary"
            class="font-weight-bold text-capitalize"
            nuxt
            to="/samasashikhamani/exercises"
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
