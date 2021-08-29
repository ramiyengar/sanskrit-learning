<template>
  <v-container class="mt-0 pt-0">
    <v-layout
      row
      class="neg_margin">
      <v-btn
        :ripple="{ class: 'error--text' }"
        :to="previous"
        color="accent darken-2"><b>Previous</b></v-btn>
      <v-spacer/>
      <v-btn
        :ripple="{ class: 'error--text' }"
        :to="next"
        color="accent darken-2"><b>Next</b></v-btn>
    </v-layout>
    <v-card
      color="accent lighten-4"
      class="mt-0 pt-0 bordered">
      <v-card-title primary-title>
        <h3 class="papyrus myheader">{{ exercise.id }}. <span class="devanagari">{{ exercise.title }}</span> <br>{{ exercise.title_eng }}</h3>
        <v-chip
          :color="color"
          text-color="white"
          class ="title devanagari">
          <v-avatar class="green darken-4">{{ score }}</v-avatar>
          Score
        </v-chip>
      </v-card-title>

      <v-layout
        row
        class="myheader3">
        <v-flex>
          <div
            class="devanagari px-1"
            v-html="exercise.question"/>
        </v-flex>
      </v-layout>
      <v-layout
        row
        class="myheader3">
        <v-flex>
          <v-radio-group
            v-model="chosen"
            column
            class="font-weight-bold">
            <v-radio
              v-for="(option, id) in exercise.options"
              :key="id"
              :label="option"
              :value="option"
              success="true"/>
          </v-radio-group>
          <v-btn
            :ripple="{ class: 'error--text' }"
            round
            color="error darken-2"
            @click="check()" ><b>Submit</b></v-btn>
          <v-alert
            v-model="success_alert"
            dismissible
            type="success"
            transition="scale-transition"
          >
            Correct Answer!
          </v-alert>
          <v-alert
            v-model="fail_alert"
            dismissible
            type="error"
            transition="scale-transition"
          >
            Wrong Answer. Please try again or go through the relevant chapters.
          </v-alert>
        </v-flex>
      </v-layout>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      active: null,
      id: String(this.$route.params.id),
      exercise: '',
      index: '',
      prev_ex: '',
      next_ex: '',
      length: '',
      previous: '/',
      next: '/',
      chosen: null,
      success_alert: false,
      fail_alert: false,
      score: 0,
      color: 'red'
    }
  },
  layout: 'lessons',
  mounted() {
    // console.log(this.id)
    this.exercise = this.$store.state.samasachakra_exercises.find(
      ex => String(ex.id) === this.id
    )
  },
  created() {
    // console.log(this.$store.state.exercises.find(exercise => exercise.id === '4.1'))
    this.index = this.$store.state.samasachakra_exercises.findIndex(
      ex => String(ex.id) === this.id
    )
    this.prev_ex = this.$store.state.samasachakra_exercises[this.index - 1]
    this.next_ex = this.$store.state.samasachakra_exercises[this.index + 1]
    this.length = this.$store.state.samasachakra_exercises.length
    this.previous =
      this.index > 1
        ? '/samasachakra/exercises/' + this.prev_ex.id
        : '/samasachakra/exercises/1'
    this.next =
      this.index < this.length - 1
        ? '/samasachakra/exercises/' + this.next_ex.id
        : '/samasachakra/exercises/10'
    // console.log(this.index)
    // console.log(this.prev_exercise)
    // console.log(this.next_exercise.id)
    // console.log(this.$store.state.exercises)
    // console.log(this.$axios.$get('/exercises/' + this.$route.params.id))
  },
  methods: {
    nexttab() {
      const active = parseInt(this.active)
      this.active = active < this.exercise.types - 1 ? active + 1 : 0
    },
    check(ans) {
      let correct = this.exercise.ans
      // let correctAudio = new Audio('correct.mp3')
      const sound = new Audio('correct.wav')
      let wrongAudio = new Audio(
        'https://drive.google.com/file/d/1QZd7mSi6zc-_6fpe1uQgmz-VHX3w2HVK/view?usp=sharing'
      )
      // console.log(correct + ',' + this.chosen)
      if (this.chosen === correct) {
        sound.play()
        this.success_alert = true
        this.fail_alert = false
        this.score = 1
        this.color = 'green'
      } else {
        wrongAudio.play()
        this.success_alert = false
        this.fail_alert = true
        this.score = 0
        this.color = 'red'
      }
    }
  }
}
</script>

<style scoped>
.bordered {
  border: 10px solid transparent;
  -webkit-border-image: url('~/assets/img/border.png') 30 round; /* Safari 3.1-5 */
  -o-border-image: url('~/assets/img/border.png') 30 round; /* Opera 11-12.1 */
  border-image: url('~/assets/img/border.png') 30 round;
  border-radius: 15px;
  margin: 0;
  padding: 2%;
}

.neg_margin {
  margin-top: -10%;
}
</style>
