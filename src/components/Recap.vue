<template>
  <v-text-field v-model="search" clearable hide-details persistent-clear label="Search Recaps" prepend-inner-icon="mdi-magnify" variant="solo-filled">
  </v-text-field>
  <v-data-iterator
  :items="events"
  :search="search"
  >
    <template v-slot:default="{ items }">
      <v-timeline :side="mdAndUp ? null : 'end'">
        <v-timeline-item
          v-for="event in items"
          :key="event.raw.year"
          :dot-color="event.raw.color"
          :icon="event.raw.icon"
          :size="mdAndUp ? 'x-large' : 'xx-large'"
          :density="mdAndUp ? 'default' : 'compact'"
        >
          <template v-slot:opposite v-if="mdAndUp">
            <span>{{ event.raw.year }}</span>
          </template>
          <v-card class="elevation-2">
            <v-card-title class="text-h5">
              {{ event.raw.headline }}
            </v-card-title>
            <v-card-subtitle v-if="smAndDown">{{ event.raw.year }}</v-card-subtitle>
            <v-card-text style="white-space: pre-wrap;">{{ event.raw.text }}</v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </template>
  </v-data-iterator>
</template>

<script>
  export default {
    data: () => ({
      search:'',
      events: [
        {
          color: 'white',
          year: 'Jan 24, 2024',
          headline: 'Session -1',
          text: 'Mitch busted out his huge-ass map and we asked him questions about his 2+ year, 500+ city world. We love Mitch.',
          icon: 'mdi-map-search-outline'
        },
        {
          color: 'green',
          year: 'Feb 7, 2024',
          headline: 'Session 0',
          text: 'We all met and discussed the cool plans we have. We decided against crunchy crits and agreed to not be assholes. No dice were rolled this day.\n\nNotable mentions:\n- Drinking potions is a Bonus Action\n- Administering potions to others is an action\n- Death saves will be secret\n- Tone is closer to HP than GOT\n- Strength can be used as intimidation (pending DM approval)\n- We all want solid RP moments\n- Icebreakers & fun facts!\n- Quick combat, be prepared!',
          icon: 'mdi-play-pause'
        },
        {
          color: 'orange',
          year: 'Feb 21, 2024',
          headline: 'Session 1',
          text: 'At long last we meet again. Dice will roll.',
          icon: 'mdi-dice-d20'
        },
      ].reverse(),
    }),
  }
</script>

<script setup>
  import { useDisplay } from 'vuetify'

  // Destructure only the keys you want to use
  const { smAndDown, mdAndUp } = useDisplay()
</script>