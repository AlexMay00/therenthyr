<template>
  <v-text-field v-model="search" clearable hide-details persistent-clear label="Search Timeline" prepend-inner-icon="mdi-magnify" variant="solo-filled">
  </v-text-field>
  <v-data-iterator
  :items="events"
  :search="search"
  >
    <template v-slot:default="{ items }">
      <v-timeline side="end">
        <v-timeline-item
          v-for="event in items"
          :key="event.raw.year"
          :dot-color="event.raw.color"
          :icon="event.raw.icon"
          size="large"
          :density="mdAndUp ? 'default' : 'compact'"
        >
          <template v-slot:opposite>
            <div
              :class="`pt-1 headline font-weight-bold text-${event.raw.color}`"
              v-text="event.raw.year"
            ></div>
          </template>
          <div>
            <h2 :class="`mt-n1 headline font-weight-light mb-4 text-${event.raw.color}`">
              <span v-if="smAndDown">{{ event.raw.year }}<br></span>
              {{ event.raw.headline }}
            </h2>
            <div style="white-space: pre-wrap;">
              {{ event.raw.text }}
            </div>
          </div>
        </v-timeline-item>
      </v-timeline>
    </template>
  </v-data-iterator>  

</template>

<script>
  export default {
    data: () => ({
      search: '',
      events: [
      {
          color: 'white',
          year: '0',
          headline: 'Leaving',
          text: 'The year it is believed the Gods took a step back from Manta. Every year after this point is notated with AL - After Leaving.',
          icon: 'mdi-eye-outline'
        },
        {
          color: 'blue',
          year: '3000',
          headline: 'The Five Dungeons',
          text: 'Energy begins to seep from the earth and the five dungeons of Manta are discovered, one by one.',
          icon: 'mdi-castle'
        },
        {
          color: 'teal-darken-1',
          year: '36300',
          headline: 'The Adventure Begins',
          text: 'Present day, where we start our journey. The year the infamous adventuring party, The Ruby Basilisks Team C, was formed.',
          icon: 'mdi-shield-sword'
        },
      ].sort(function(a, b){return b.year - a.year}),
    })
  }
</script>

<script setup>
  import { useDisplay } from 'vuetify'

  // Destructure only the keys you want to use
  const { smAndDown, mdAndUp } = useDisplay()
</script>