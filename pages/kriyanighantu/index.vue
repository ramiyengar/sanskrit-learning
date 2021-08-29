<template>
  <v-layout
    column
    justify-center
    align-center>
    <img src="~assets/img/kn.png" >
    <v-card color="lime lighten-2 mb-3">
      <v-card-text>
        The table shows a list of actions which can be viewed and searched based on Activities or verb roots.
      </v-card-text>
    </v-card>
    <v-tabs
      fixed-tabs
      color="lime darken-2"
      dark
      slider-color="yellow"
    >
      <v-tab ripple>
        Activities
      </v-tab>
      <v-tab ripple>
        Verbs
      </v-tab>
      <v-tab-item>
        <v-flex
          xs12>
          <v-card>
            <v-card-title>
              <h3>Activities</h3>
              <v-spacer/>
              <v-text-field
                v-model="search_activity"
                append-icon="search"
                label="Search"
                single-line
                hide-details
              />
            </v-card-title>
            <v-subheader>Click on any row for details</v-subheader>
            <v-data-table
              :headers="headers_activity"
              :items="activity"
              :search="search_activity"
              class="elevation-1 defaultTable">
              <template
                slot="items"
                slot-scope="props">
                <td @click="opendialog('activity', props.item.category, props.item.name_sans, props.item.meaning)">{{ props.item.category }}</td>
                <td @click="opendialog('activity', props.item.category, props.item.name_sans, props.item.meaning)">{{ props.item.name_sans }}</td>
                <td @click="opendialog('activity', props.item.category, props.item.name_sans, props.item.meaning)">{{ props.item.meaning }}</td>
                <td @click="opendialog('activity', props.item.category, props.item.name_sans, props.item.meaning)">{{ props.item.verse }}</td>
              </template>
              <v-alert
                slot="no-results"
                :value="true"
                color="error"
                icon="warning">
                Your search for "{{ search_activity }}" found no results.
              </v-alert>
            </v-data-table>
            <v-dialog
              v-model="dialog_activity">
              <v-card>
                <v-card-title>
                  <span class="headline">Verbs belonging to category: {{ activity_sans }} - {{ activity_eng }}</span>
                </v-card-title>
                <v-card-text class="ma-1">
                  <table class="mytable">
                    <thead>
                      <th>Sl no.</th>
                      <th>Root</th>
                      <th>Example</th>
                      <th>Gana</th>
                      <th>Forms</th>
                      <th>Meaning</th>
                      <th>Sakarmaka/Akarmaka</th>
                      <th>Parasmai/Atmanepadi</th>
                    </thead>
                    <tbody>
                      <tr
                        v-for="(verb,i) in verbs"
                        :key="i">

                        <td data-label="Sl no.">{{ i+1 }}</td>
                        <td data-label="Root">{{ verb.root }}</td>
                        <td data-label="Example">{{ verb.form }}</td>
                        <td data-label="Gana">{{ verb.gana }}</td>
                        <td data-label="Forms"> <a
                          :href="verb.forms_url"
                          target="_blank">Verb Forms</a>
                        </td>
                        <td data-label="Meaning">{{ verb.meaning }}</td>
                        <td data-label="Sakarmaka/Akarmaka">{{ verb.obj }}</td>
                        <td data-label="Parasmai/Atmanepadi">{{ verb.padi }}</td>
                      </tr>
                    </tbody>
                  </table>
                </v-card-text>
                <v-card-actions>
                  <v-spacer/>
                  <v-btn
                    color="blue darken-1"
                    flat
                    @click="close">Close</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-card>
        </v-flex>
      </v-tab-item>
      <v-tab-item>
        <v-flex
          xs12>
          <v-card>
            <v-card-title>
              <h3>Verbs</h3>
              <v-spacer/>
              <v-text-field
                v-model="search_verb"
                append-icon="search"
                label="Search"
                single-line
                hide-details
              />
            </v-card-title>
            <v-data-table
              :headers="headers_verbs"
              :items="verblist"
              :search="search_verb"
              disable-initial-sort
              class="elevation-1">
              <template
                slot="items"
                slot-scope="props">
                <td v-if="props.item.root">{{ props.item.category }}</td>
                <td v-if="props.item.root"><v-btn
                  color="accent"
                  @click="opendialog('verb', props.item.category, props.item.name_sans, props.item.meaning)">{{ props.item.root }}</v-btn></td>
                <td v-if="props.item.root">{{ props.item.gana }}</td>
                <td v-if="props.item.root">{{ props.item.meaning }}</td>
                <td v-if="props.item.root"><a
                  :href="props.item.forms_url"
                  target="_blank">Forms</a></td>
              </template>
              <v-alert
                slot="no-results"
                :value="true"
                color="error"
                icon="warning">
                Your search for "{{ search_verb }}" found no results.
              </v-alert>
            </v-data-table>
            <v-dialog
              v-model="dialog_verbs"
              max-width="600px">
              <v-card>
                <v-card-title>
                  <span class="headline">Verbs belonging to category: {{ activity_sans }} - {{ activity_eng }}</span>
                </v-card-title>
                <v-card-text class="ma-1">
                  <div
                    v-for="(verb,i) in verbs"
                    :key="i">

                    <h3>{{ i+1 }}. {{ verb.root }}</h3>
                    <v-subheader>Example: {{ verb.form }}</v-subheader>
                    <p>{{ verb.gana }}</p>
                    <p><a
                      :href="verb.forms_url"
                      target="_blank">Verb Forms</a></p>
                    <p>{{ verb.meaning }}</p>
                    <p>{{ verb.obj }}</p>
                    <p>{{ verb.padi }}</p>
                  </div>
                </v-card-text>
                <v-card-actions>
                  <v-spacer/>
                  <v-btn
                    color="blue darken-1"
                    flat
                    @click="close">Close</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-card>
        </v-flex>
      </v-tab-item>
    </v-tabs>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      dialog_activity: false,
      dialog_verbs: false,
      verbs: '',
      activity_sans: '',
      activity_eng: '',
      headers_activity: [
        {
          text: 'Sl no.',
          align: 'left',
          sortable: true,
          value: 'category'
        },
        { text: 'Activity Name', value: 'name_sans' },
        { text: 'meaning', value: 'meaning' },
        { text: 'Kriyanighantu Verse', value: 'verse' }
      ],
      headers_verbs: [
        {
          text: 'Activity category no.',
          align: 'left',
          sortable: true,
          value: 'category'
        },
        { text: 'Root', align: 'center', value: 'root' },
        { text: 'Gana', value: 'gana' },
        { text: 'Meaning', value: 'meaning' },
        { text: 'Forms', value: 'forms' }
      ],
      search_activity: '',
      search_verb: '',
      activity: '',
      verblist: ''
    }
  },
  watch: {
    dialog_activity(val) {
      val || this.close()
    },
    dialog_verbs(val) {
      val || this.close()
    }
  },
  created() {
    this.activity = this.$store.state.activities
    this.verblist = this.$store.state.verbs
  },
  methods: {
    opendialog(dialog, val, sans, eng) {
      if (dialog === 'activity') {
        this.dialog_activity = true
        this.activity_sans = sans
        this.activity_eng = eng
        this.verbs = this.$store.state.verbs.filter(verb => {
          return verb.category == val
        })
      } else if (dialog === 'verb') {
        this.dialog_verbs = true
      }
    },
    close() {
      this.dialog_activity = false
      this.dialog_verbs = false
    }
  }
}
</script>
<style scoped>
.mytable {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  border: 1px solid #ddd;
}
.mytable th {
  background: #333;
  color: white;
  font-weight: bold;
}
.mytable th,
td {
  text-align: left;
  padding: 8px;
}
.mytable tr:nth-child(even) {
  background-color: #f2f2f2;
}

img {
  width: 60%;
}
/*Mobile View*/
@media only screen and (max-width: 760px) {
  td,
  tr {
    display: block;
  }

  /* Hide table headers (but not display: none;, for accessibility) */

  thead tr {
    position: absolute;
    top: -9999px;
    left: -9999px;
  }

  tr {
    border: 1px solid #e74c3c;
  }

  tr + tr {
    margin-top: 1.5em;
  }

  td {
    /* make like a "row" */
    border: none;
    border-bottom: 1px solid #eee;
    position: relative;
    padding-left: 50%;
    background-color: #f8d9d5;
    text-align: left;
  }

  td:before {
    content: attr(data-label);
    display: inline-block;
    line-height: 1.5;
    margin-left: -100%;
    width: 100%;
    white-space: nowrap;
  }
}
</style>
