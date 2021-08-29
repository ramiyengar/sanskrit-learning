<template>
  <v-layout
    wrap
    style="height: 200px;"
  >
    <v-layout
      row
      class="text-xs-center">
      <v-flex>
        <v-btn
          :to="home"
          color="blue"
          dark
          round
          class="ma-4 font-weight-bold text-capitalize"
        >
          Home
        </v-btn>
        <v-btn
          color="blue"
          dark
          round
          class="ma-4 font-weight-bold text-capitalize"
          @click.stop="drawer = !drawer"
        >
          All Lessons
        </v-btn>
      </v-flex>
    </v-layout>

    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="mini"
      class="primary"
      absolute
      dark
      temporary
    >
      <v-list class="pa-1">
        <v-list-tile
          v-if="mini"
          dark
          @click.stop="mini = !mini">
          <v-list-tile-action>
            <v-icon>chevron_right</v-icon>
          </v-list-tile-action>
        </v-list-tile>

        <v-list-tile
          avatar
          tag="div">
          <v-list-tile-avatar>
            <v-icon>library_books</v-icon>
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>Lessons</v-list-tile-title>
          </v-list-tile-content>

          <v-list-tile-action>
            <v-btn
              icon
              @click.stop="mini = !mini">
              <v-icon>chevron_left</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>

      <v-text-field
        v-model="searchlist"
        append-icon="search"
        label="Search"
        single-line
        class = "px-3"
      />

      <v-list
        class="pt-0"
        dense>
        <v-divider light/>

        <div
          v-for="item in items"
          :key="item.title"
          active-class="yellow--text">

          <v-list-group
            v-if="item.group"
            active-class="yellow--text"
            value="true">

            <v-list-tile
              slot="activator"
              :to="item.to"
              active-class="yellow--text"
              dark
              router>
              <v-list-tile-action>{{ item.sl_num }}.</v-list-tile-action>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile>

            <div
              v-for="subitem in item.subitems"
              :key="subitem.title">

              <v-list-group
                v-if="subitem.subgroup"
                active-class="yellow--text"
                sub-group>

                <v-list-tile
                  slot="activator"
                  :to="subitem.to"
                  active-class="yellow--text"
                  class="link"
                  router>
                  <v-list-tile-action>{{ subitem.sl_num }}</v-list-tile-action>
                  <v-list-tile-title>{{ subitem.title }}</v-list-tile-title>
                </v-list-tile>

                <div
                  v-for="div in subitem.divs"
                  :key="div.title">

                  <v-list-group
                    v-if="div.types"
                    active-class="yellow--text"
                    sub-group>

                    <v-list-tile
                      slot="activator"
                      :to="div.to"
                      active-class="yellow--text"
                      class="link"
                      router>
                      <v-list-tile-action>{{ div.sl_num }}</v-list-tile-action>
                      <v-list-tile-title>{{ div.title }}</v-list-tile-title>
                    </v-list-tile>

                    <v-list-tile
                      v-for="vritta in div.vrittas"
                      :key="vritta.title"
                      :to="vritta.to"
                      active-class="yellow--text"
                      class="link"
                      router>
                      <v-list-tile-action>{{ vritta.sl_num }}</v-list-tile-action>
                      <v-list-tile-title>{{ vritta.title }}</v-list-tile-title>
                    </v-list-tile>

                  </v-list-group>

                  <v-list-tile
                    v-else
                    :to="div.to"
                    active-class="yellow--text"
                    class="link"
                    router>
                    <v-list-tile-action>{{ div.sl_num }}</v-list-tile-action>
                    <v-list-tile-title>{{ div.title }}</v-list-tile-title>
                  </v-list-tile>

                </div>

              </v-list-group>

              <v-list-tile
                v-else
                :to="subitem.to"
                active-class="yellow--text"
                class="link"
                router>
                <v-list-tile-action>{{ subitem.sl_num }}</v-list-tile-action>
                <v-list-tile-title>{{ subitem.title }}</v-list-tile-title>
              </v-list-tile>

            </div>

          </v-list-group>

          <v-list-tile
            v-else
            :to="item.to"
            active-class="yellow--text"
            class="link"
            router>
            <v-list-tile-action>{{ item.sl_num }}. </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

        </div>


      </v-list>
    </v-navigation-drawer>
  </v-layout>
</template>

<script>
export default {
  props: {
    text_title: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      home: '/' + this.text_title,
      searchlist: '',
      drawer: null,
      titles: '',
      mini: false,
      right: null
    }
  },
  computed: {
    items() {
      if (this.searchlist) {
        return this.titles.filter(item => {
          return item.title.includes(this.searchlist)
        })
      } else {
        return this.titles
      }
    }
  },
  mounted() {
    if (this.text_title == 'chandraloka') {
      this.titles = this.$store.state.chandraloka_titles
    } else if (this.text_title == 'vrittaratnakara') {
      this.titles = this.$store.state.vrittaratnakara_titles
    } else if (this.text_title == 'srutabodha') {
      this.titles = this.$store.state.srutabodha_titles
    } else if (this.text_title == 'samasashikhamani') {
      this.titles = this.$store.state.samasashikhamani_titles
    } else if (this.text_title == 'samasachakra') {
      this.titles = this.$store.state.samasashikhamani_titles
    } else if (this.text_title == 'upayukta') {
      this.titles = this.$store.state.upayukta_titles
    } else if (this.text_title == 'dvirupa') {
      this.titles = this.$store.state.dvirupa_titles
    } else if (this.text_title == 'linganushasana') {
      this.titles = this.$store.state.linganushasana_titles
    }
  }
}
</script>

<style scoped>
.cl_bg {
  background-image: url('~assets/img/cl_bg.png');
  background-size: contain;
  width: 40%;
  height: 30%;
}
</style>
