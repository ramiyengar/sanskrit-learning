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
        <h3 class="myheader">{{ lesson.id }}. <span
          v-if="lesson.title_sans" >{{ lesson.title_sans }} <br></span>{{ lesson.title_eng }}</h3>
      </v-card-title>

      <v-layout
        row
        class="myheader3">
        <v-flex
          v-show="lesson.definition_sans"
          xs6>
          <div
            class="devanagari px-1"
            v-html="lesson.definition_sans"/>
        </v-flex>
        <v-flex
          v-show="lesson.definition_eng"
          xs6>
          <div
            class="font-weight-bold px-1"
            v-html="lesson.definition_eng"/>
        </v-flex>
      </v-layout>
      <v-flex xs12>
        <v-layout
          class="myheader3 devanagari px-1"
          v-html="lesson.common"/>
      </v-flex>
      <v-flex
        v-if="lesson.examples"
        xs12>
        <v-layout class="myheader3 devanagari px-1" >
          <h3>Examples:</h3>
          <ul>
            <li
              v-for="(ex,i) in lesson.examples"
              :key="i"
              v-html="ex.text"/>
          </ul>
        </v-layout>
      </v-flex>
      <div
        v-if="lesson.d3treeData"
        class="myheader2">
        <tree
          :data="d3treeData"
          :radius="4"
          type="tree"
          class="tree"
          zoomable
          node-text="name"
          layout-type="euclidean"
          @clicked="onClick" />
        <v-treeview
          :items="treeData"
          :open="open"
          expand-icon="subdirectory_arrow_right"
          loading-icon="all_inclusive"
          hoverable
          multiple-active
          transition
        >
          <template
            slot="append"
            slot-scope="{ item, open, leaf }"
            class="ma-5">
            <v-btn
              v-if="item.link"
              :to="item.link"
              color="primary lighten-3"
              small
              class="ma-3"
              nuxt><b>View</b></v-btn>
          </template>
        </v-treeview>
      </div>

      <div
        v-if="lesson.types"
        class="myheader3">
        <v-expansion-panel
          focusable
          inset>
          <v-expansion-panel-content
            v-for="(t,j) in lesson.type"
            :key="j"
          >
            <div slot="header">{{ t.name }}</div>
            <v-card color="accent lighten-2">
              <v-card-text>
                <p>{{ t.explanation }}</p>
                <div v-if="t.ex">
                  <h3>Examples:</h3>
                  <ul>
                    <li
                      v-for="(example,k) in t.ex"
                      :key="k"
                      v-html="example.text"/>
                  </ul>
                </div>
              </v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </div>
    </v-card>
  </v-container>
</template>

<script>
let tree
if (process.browser) {
  tree = require('vued3tree').tree
  // use scrollmagic
}
export default {
  components: {
    tree
  },
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
      treeData: '',
      d3treeData: '',
      currentNode: null
    }
  },
  layout: 'lessons',
  mounted() {
    // console.log(this.id)
    this.lesson = this.$store.state.samasachakra_lessons.find(
      less => String(less.id) === this.id
    )
    this.treeData = this.lesson.treeData
    this.d3treeData = this.lesson.d3treeData
    // console.log(this.treeData)
  },
  created() {
    // console.log(this.$store.state.lessons.find(lesson => lesson.id === '4.1'))
    this.index = this.$store.state.samasachakra_lessons.findIndex(
      lesson => String(lesson.id) === this.id
    )
    this.prev_lesson = this.$store.state.samasachakra_lessons[this.index - 1]
    this.next_lesson = this.$store.state.samasachakra_lessons[this.index + 1]
    this.length = this.$store.state.samasachakra_lessons.length
    this.previous =
      this.index > 1
        ? '/samasachakra/lessons/' + this.prev_lesson.id
        : '/samasachakra/lessons/1'
    this.next =
      this.index < this.length - 1
        ? '/samasachakra/lessons/' + this.next_lesson.id
        : '/samasachakra/lessons/'
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
    },
    onClick(evt) {
      window.open(evt.element.data.link)
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

.tree {
  height: 350px;
  width: 80%;
}
</style>
