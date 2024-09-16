<template>
  <v-text-field v-model="search" clearable hide-details persistent-clear label="Search Recaps" prepend-inner-icon="mdi-magnify" variant="solo-filled">
  </v-text-field>
  <v-data-iterator
  :items="events"
  :search="search"
  :items-per-page="-1"
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
            <v-card-text style="white-space: pre-wrap;">
              <AvatarDialog v-if="event.raw.avatar" :n="event"></AvatarDialog>{{ event.raw.text }}
            </v-card-text>
            <audio v-if="event.raw.audio" oncontextmenu="return false;" controls controlslist="nodownload noplaybackrate" preload="none" :src="event.raw.audio" onplay="focus()"></audio>
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
          color: 'blue',
          year: 'August 15, 2024',
          headline: 'Session 0',
          text: '- Homebrew rules:\n    - Hidden death rolls (PC & DM only)\n        - Use action for perception/medicine check to see if an ally is dying\n    - Bonus action to drink a potion\n        - Choosing to use an action applies max healing\n    - Lockpicking kits burned on failure\n        - Common loot, purchasable resource\n    - Medicine kits more common for out of combat healing (1 min to apply or something)\n- Don\'t show up wasted\n- Don\'t steal other PCs shit\n- Money harder to come by\n- Loot should be shared\n- Character has to want to be with a party that adventures\n- Resurrection magic is hard to come by, especially early\n\n\n- Character sheets & backstories done ideally by Sept 1',
          icon: 'mdi-video-account'
        },
        {
          color: 'red',
          year: 'September 9, 2024',
          headline: 'Session 1',
          text: 'We began in a dark room on an empire transport ship. The room had been converted into a makeshift prison cell, and our 6 adventurers were chained together.\n\nAfter some introductions the party began scheming a way to escape with the tools some had managed to kiester. A gaunt old man in the corner of the room burst awake and gave the party, Tem in particular, a warning about "shadows." A brief argument ensued between Udo and an imperial soldier.\n\nCommotion was heard on the deck above and a large explosion blew a hole in the side of the ship. The explosion killed the old man and also damaged the door of the prison cell enough to allow the party to exit. Our adventurers fought their way to a storage room where their personal belongings were being held, and they hid out for a while as pirates killed off the remaining soldiers. A goblin pirate named Pickles introduced himself and offered a bite of hit wet, girthy pickle. Eudora accepted the offer, and Pickles returned to the fight.\n\nThe group decided to approach the pirates calmly, figuring that Pickles had made the crew aware of their existence. The pirate captain Two-Tongue, a towering dragonborn with a large hammer and a snack bag full of rats, decided to let the group live and offered them only the crippled ship they were on as means of travel.\n\nAfter some debate, the group agreed to travel south of the empire\'s control, toward Freeman\'s Republic. The ship was partially repaired with the few materials left by Two-Tongue\'s crew, and was able to navigate the group just north of a river that bisects a large jungle between Hamburg and Freeman\'s Republic.\n\nWe fast forwarded a few nights to when the party discovered that they were being watched by a strange tribe of halflings. These halflings spoke a language they did not understand, were dressed in primitive clothes, and had paint and scares all over their bodies. They offered a coconut-like fruit to the group, which had not had a proper meal in a few days.\n\nThe party followed the halflings back to their tiny village where they were welcomed warmly. After taking some time to look around, it was discovered that the village had captured an unnaturally enlarged and zombified elf, which was being restrained against a large rock by illuminated shackles. What in the ever-loving fuck could that be about?? Found out next time!',
          icon: 'mdi-sail-boat-sink',
          avatar: 'session1.jpg'
        },
        {
          color: 'green',
          year: 'September 30, 2024',
          headline: 'Session 2?',
          text: 'Make-up session? Let me know if you can/can\'t make it.',
          icon: 'mdi-dice-d20'
        },
        {
          color: 'orange',
          year: 'October 7, 2024',
          headline: 'Session 2? 3?',
          text: 'Our next scheduled session. You\'re in a camp with halflings who only speak Mandarin Chinese. They are very nice, but they are also holding a giant elf zombie captive.',
          icon: 'mdi-dice-d20'
        },
      ].reverse(),
    }),
  }
</script>

<script setup>
import { useDisplay } from 'vuetify'
import AvatarDialog from './AvatarDialog.vue';

  // Destructure only the keys you want to use
  const { smAndDown, mdAndUp } = useDisplay()
</script>

<style scoped>
audio {
  max-height: 42px;
  margin-left: 10px;
  margin-bottom: 10px;
}
</style>