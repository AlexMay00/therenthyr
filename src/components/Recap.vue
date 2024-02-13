<template>
  <v-timeline>
    <v-timeline-item size="x-large"
    v-for="event in events"
      :key="event"
      :dot-color="event.color"
      :icon="event.icon"
    >
      <template v-slot:opposite>
        <span>{{ event.year }}</span>
      </template>
      <v-card class="elevation-2">
        <v-card-title class="text-h5">
          {{ event.headline }}
        </v-card-title>
        <v-card-text>{{ event.text }}</v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
  export default {
    data: () => ({
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
          text: 'We all met and discussed the cool plans we have. We decided against crunchy crits and agreed to not be assholes. No dice were rolled this day.',
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