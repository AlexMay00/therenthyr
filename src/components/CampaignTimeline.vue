<template>
  <v-timeline side="end">
    <v-timeline-item
      v-for="event in events"
      :key="event"
      :dot-color="event.color"
      :icon="event.icon"
      size="large"
    >
      <template v-slot:opposite>
        <div
          :class="`pt-1 headline font-weight-bold text-${event.color}`"
          v-text="event.year"
        ></div>
      </template>
      <div>
        <h2 :class="`mt-n1 headline font-weight-light mb-4 text-${event.color}`">
          {{ event.headline }}
        </h2>
        <div>
          {{ event.text }}
        </div>
      </div>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
  export default {
    data: () => ({
      events: [
        {
          color: 'red',
          year: '36052',
          headline: 'Manta Forms',
          text: 'Lost to time, it is believed that nations in Manta began to form around this time. I\'m making this up to fill the page, but I\'m sure Mitch has legit dates.',
          icon: 'mdi-flag'
        },
        {
          color: 'blue',
          year: '45000',
          headline: 'The Six Dungeons',
          text: 'Energy begins to seep from the earth and the six dungeons of Manta are discovered, one by one. Again making this up so the page looks cool. Help me out, Mitch!',
          icon: 'mdi-castle'
        },
        {
          color: 'teal-darken-1',
          year: '49252',
          headline: 'The Adventure Begins',
          text: 'Present day, where we start our journey. I think I am going to use this page to build out historical information and important in-game events.',
          icon: 'mdi-shield-sword'
        },
      ].reverse(),
    }),
  }
</script>