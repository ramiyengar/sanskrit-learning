<template>
  <v-layout
    column
    justify-center
    align-center
    class="papyrus">
    <img src="~assets/img/vr.png" >
    <v-flex
      xs12
      sm8
      md8>
      <v-card
        class = "text-xs-center"
        color="primary lighten-1"
        dark>
        <v-card-title class="myheader2 devanagari text-xs-center"><h1>वृत्तरत्नाकर-शिक्षकः - परस्परव्यवहारपूर्वकशिक्षणम्</h1></v-card-title>
        <v-card-title class="myheader2 papyrus text-xs-center"><h2>Interactive tutorial for Vrittaratnakara</h2></v-card-title>
        <v-card-text>
          <h3>Interactive self learning software for learning Sanskrit prosody, various types of meters used in poetry.
        </h3></v-card-text>
        <v-card-actions>
          <v-dialog
            v-model="dialog"
            scrollable>
            <v-btn
              slot="activator"
              :ripple="{ class: 'error--text' }"
              round
              color="lime darken-3"
              class="text-capitalize font-weight-bold"
              large> About <br> Vrittaratnakara</v-btn>
            <v-card
              color="info"
              class="papyrus bg1"
              light>
              <v-card-title class="myheader papyrus"><h1>Vrittaratnakara</h1></v-card-title>
              <v-divider/>
              <v-card-text class="subheading papyrus font-weight-bold">Vrittaratnakara of Kedara Bhatta (14th Century CE) is one of
              the most popular texts on Sanskrit prosody. Though there are many books on Sanskrit prosody by eminent authors like Kalidasa, Kshemendra, etc, Vritta Ratankara continues to be an essential text for Sanskrit students. A speciality of this work is that the definition and illustration of a meter is given in one and the same verse. The verse defining a particular metre is composed in that particular meter itself. This is very helpful for a student of Sanskrit prosody. Another specialty of this work is that it is very brief – there are merely 136 verses. The author has covered all the prominent metres of Sanskrit literature in these verses.</v-card-text>
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
            color="lime darken-3"
            class="font-weight-bold text-capitalize"
            nuxt
            to="/vrittaratnakara/lessons"
            large>अध्यायाः<br>Learn</v-btn>
          <v-spacer/>
          <v-btn
            round
            color="lime darken-3"
            class="font-weight-bold text-capitalize"
            nuxt
            to="/vrittaratnakara/exercises"
            large>अभ्यासाः <br> Exercises</v-btn>
          <v-spacer/>
          <v-btn
            round
            color="lime darken-3"
            class="font-weight-bold text-capitalize"
            nuxt
            to="/vrittaratnakara/math"
            large>Mathematics in Sanskrit poetry</v-btn>
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
