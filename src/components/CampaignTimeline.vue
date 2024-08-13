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
          headline: 'The Birth of an Empire',
          text: 'The era of elven isolationism comes to an end, as Aeis Therenthyr unites the elven civilizations for the first time in history. The Great Elven Gates open and the citizens of the new Therenthyr Empire spread out across Arcis.',
          icon: 'mdi-arm-flex-outline'
        },
        {
          color: 'green',
          year: '2',
          headline: 'The Grasslands Fall',
          text: 'The nearest nation to Therenthyr, which also happens to be the least organized, is quickly taken over by the Imperial Army. Though most settlements are taken politically through trade & protection agreements, the heavily armed forces of Therenthyr ensure that The Grasslands remain under their control.',
          icon: 'mdi-grass'
        },
        {
          color: 'teal-darken-1',
          year: '53',
          headline: 'Hamburg is Conquered',
          text: 'After negotiations failed, the citizens of Hamburg rallied behind its capital city of Reston for decades, before eventually losing their great war. A generation of humans, gnomes, and halflings fled or were killed as the empire surrounded their home land.',
          icon: 'mdi-shield-sword'
        },
        {
          color: 'red',
          year: '127',
          headline: 'Present Day',
          text: 'Over a century after the empire formed, few remember a time before Therenthyr\'s creeping rule. For the most part, society continues to trudge forward, as it always has. Elves live peacefully in all nations, and not all are loyal to Therenthyr\'s cause. The Empire pushes deeper into new territories, methodically cataloguing any advantage that can be found for some future purpose - elves have the luxury of time that is not afforded to every race.\n\nMost recently, Therenthyr was able to establish several outposts in southern Kolduhr. The waters that typically keep The Tidal Passage submerged have subsided for the time being, allowing trade to reopen with the Dwarves of Kher Kolduhr and Shar Kolduhr. The citizens of Springland tolerate the elves\' presence, knowing all out war with the Empire would bring hell upon their lands.\n\nFreemans Republic remains quietly concerned, somewhat protected by the dangers of deep jungles to the north and the inhospitable wastelands to the south. It is rumored that they have formed an alliance with The Barren Southlands to keep the empire at bay, though both nations face more immediate challenges with pirates and orcs.\n\nThe Dragonborn of Farreach can smell opportunity in the panic of the norther nations. The nation of skilled sailors and muscle-for-hire has its own ambitions, and timing is everything.\n\nWhitecap and Ashtimber know that either of them will be the next to fall under Aeis Therenthyr\'s rule. Some seek to fight back, sabotaging the colonial settlements being built on their lands. Others fear that more will be lost by resisting, and seek to position their towns for the most favorable political positions possible. Sometimes it is better to be early, regardless of morals, cowardice, or courage.\n\nAll the while, monsters roam the lands of Arcis, and wreak havoc on its seas. Reports of especially brutal attacks have been spreading, with entire well-equipped battalions of Theren soldiers being wiped out or disappearing overnight. Aggressive, mutated beasts have been spotted with increased frequency near heavily populated areas, which has driven up the demand for monster hunters and adventurers.',
          icon: 'mdi-map'
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