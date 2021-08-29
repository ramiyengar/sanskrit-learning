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
      color="teal lighten-4"
      class="mt-0 pt-0 bordered">
      <v-card-title primary-title>
        <h1>{{ lesson.id }}. {{ lesson.title_sans }}<br>{{ lesson.title_eng }}</h1>
      </v-card-title>

      <v-layout
        row>
        <v-flex xs6>
          <div
            class="font-weight-bold px-1"
            v-html="lesson.definition_sans"/>
        </v-flex>
        <v-flex xs6>
          <div
            class="font-weight-bold px-1"
            v-html="lesson.definition_eng"/>
        </v-flex>
      </v-layout>
      <h1 v-if="lesson.common">Example: </h1>
      <v-layout
        class="font-weight-bold px-1"
        v-html="lesson.common"/>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      active: null,
      id: String(this.$route.params.id),
      lesson: '',
      index: '',
      prev_lesson: '',
      next_lesson: '',
      length: '',
      previous: '/',
      next: '/',
      treeData: ''
    }
  },
  layout: 'lessons',
  mounted() {
    // console.log(this.id)
    this.lesson = this.$store.state.srutabodha_lessons.find(
      less => String(less.id) === this.id
    )
    this.treeData = this.lesson.tree
  },
  created() {
    // console.log(this.$store.state.lessons.find(lesson => lesson.id === '4.1'))
    this.index = this.$store.state.srutabodha_lessons.findIndex(
      lesson => String(lesson.id) === this.id
    )
    this.prev_lesson = this.$store.state.srutabodha_lessons[this.index - 1]
    this.next_lesson = this.$store.state.srutabodha_lessons[this.index + 1]
    this.length = this.$store.state.srutabodha_lessons.length
    this.previous =
      this.index > 1
        ? '/srutabodha/lessons/' + this.prev_lesson.id
        : '/srutabodha/lessons/1'
    this.next =
      this.index < this.length - 1
        ? '/srutabodha/lessons/' + this.next_lesson.id
        : '/srutabodha/lessons/44'
    // console.log(this.index)
    // console.log(this.prev_lesson)
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
