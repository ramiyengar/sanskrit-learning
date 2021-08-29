<template>
  <v-container class="mt-0 pt-0">
    <v-card
      color="accent"
      class="bordered papyrus mt-0 p-1">
      <v-card-title primary-title>
        <h3 class="papyrus myheader">Learn Candrāloka</h3>
      </v-card-title>
      <v-container
        fluid
        grid-list-sm>
        <v-card>
          <v-card-title>
            <h3>List of all Lessons</h3>
            <v-spacer/>
            <v-text-field
              v-model="search"
              append-icon="search"
              label="Search"
              single-line
              hide-details
            />
          </v-card-title>
          <v-data-table
            :headers="headers"
            :items="alankaras"
            :search="search"
            class="elevation-1 defaultTable">
            <template
              slot="items"
              slot-scope="props">
              <td>{{ props.item.sl_num }}</td>
              <td>{{ props.item.title }}</td>
              <td><v-btn
                :to="props.item.to"
                color="accent darken-2">View</v-btn></td>
            </template>
            <v-alert
              slot="no-results"
              :value="true"
              color="error"
              icon="warning">
              Your search for "{{ search }}" found no results.
            </v-alert>
          </v-data-table>
        </v-card>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
export default {
  layout: 'lessons',
  data() {
    return {
      search: '',
      alankaras: this.$store.state.chandraloka_titles,
      headers: [
        {
          text: 'Sl num',
          align: 'left',
          value: 'serial'
        },
        { text: 'Title', value: 'title' },
        { text: 'Link', value: 'link' }
      ]
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
</style>
