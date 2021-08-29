<template>
  <v-container 
    xs12
    class="mt-0 pt-0">
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
      class="mt-0 pt-0">
      <v-card-title primary-title>
        <h3 class="display-1">{{ lesson.id }}. <span
          v-if="lesson.title_sans" >{{ lesson.title_sans }} <br></span>{{ lesson.title_eng }}</h3>
      </v-card-title>

      <v-layout
        v-for="(sloka,i) in lesson.slokas"
        :key="i"
        row>
        <v-flex
          xs12
          mb-3>
          <v-expansion-panel
            popout
            focusable>
            <v-expansion-panel-content ripple>
              <div
                v-if="sloka"
                slot="header"
                class="secondary--text subheading font-weight-bold">Sloka {{ i + 1 }}</div>
              <v-layout
                xs12
                row>
                <v-flex>
                  <v-card
                    color="accent lighten-1"
                    class="title text-xs-center">
                    <v-card-text v-html="sloka.sloka" />
                  </v-card>
                </v-flex>
              </v-layout>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel
            popout
            focusable>
            <v-expansion-panel-content>
              <div
                slot="header"
                class="secondary--text subheading font-weight-bold">Explanation of Sloka</div>
              <v-layout
                xs12
                row>
                <v-flex>
                  <v-card color="accent lighten-1">
                    <v-card-text v-html="sloka.eng" />
                  </v-card>
                </v-flex>
              </v-layout>
            </v-expansion-panel-content>
          </v-expansion-panel>
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
      open: ['public'],
      id: String(this.$route.params.id),
      lesson: '',
      index: '',
      prev_lesson: '',
      next_lesson: '',
      length: '',
      previous: '/',
      next: '/',
      currentNode: null
    }
  },
  layout: 'lessons',
  created() {
    // console.log(this.$store.state.lessons.find(lesson => lesson.id === '4.1'))
    this.index = this.$store.state.sastrapramana_lessons.findIndex(
      lesson => String(lesson.id) === this.id
    )
    this.lesson = this.$store.state.sastrapramana_lessons[this.index]
    this.prev_lesson = this.$store.state.sastrapramana_lessons[this.index - 1]
    this.next_lesson = this.$store.state.sastrapramana_lessons[this.index + 1]
    this.length = this.$store.state.sastrapramana_lessons.length
    this.previous =
      this.index > 1
        ? '/sastrapramana/lessons/' + this.prev_lesson.id
        : '/sastrapramana/lessons/1'
    this.next =
      this.index < this.length - 1
        ? '/sastrapramana/lessons/' + this.next_lesson.id
        : '/sastrapramana/lessons/'
    // console.log(this.index)
    console.log(this.lesson)
    // console.log(this.next_lesson.id)
    // console.log(this.$store.state.lessons)
    // console.log(this.$axios.$get('/lessons/' + this.$route.params.id))
  },
  methods: {
    nexttab() {
      const active = parseInt(this.active)
      this.active = active < this.lesson.types - 1 ? active + 1 : 0
    }
  }
}
</script>

<style scoped>
.neg_margin {
  margin-top: -10%;
}
</style>
