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
          color: 'white',
          year: 'Jan 24, 2024',
          headline: 'Session -1',
          text: 'Mitch busted out his huge-ass map and we asked him questions about his 2+ year, 500+ city world.\n\n\n\n\nWe love Mitch.',
          icon: 'mdi-map-search-outline',
          avatar: '../session-1.jpg'
        },
        {
          color: 'green',
          year: 'Feb 7, 2024',
          headline: 'Session 0',
          text: 'We all met and discussed the cool plans we have. We decided against crunchy crits and agreed to not be assholes. No dice were rolled this day.\n\nNotable mentions:\n- Drinking potions is a Bonus Action\n- Administering potions to others is an action\n- Death saves will be secret\n- Tone is closer to HP than GOT\n- Strength can be used as intimidation (pending DM approval)\n- We all want solid RP moments\n- Icebreakers & fun facts!\n- Quick combat, be prepared!\n- Death is scary. Reviving PCs will be very hard. The closer we are to each other, the easier it will be.\n- Inspiration nominations! Inspiration tokens grant advantage.',
          icon: 'mdi-play-pause'
        },
        {
          color: 'orange',
          year: 'Feb 21, 2024',
          headline: 'Session 1',
          text: 'The adventure began with the six PCs meeting each other on a train named The Darning Needle, owned and operated by a Verdan man named Slake Toggins. Mr. Toggins provides free rides to Almiraj for students who have been newly accepted to the school as Ruby Basilisks.\n\nAfter some awkward introductions over explosive drinks from Bumper Nosedust, the group settled down for dinner with some of their new friends - Topin the dragonborn, Apple the kobold, and Aaron the elf.\n\nAs the rest of the group sleeps soundly, Dahlen is summoned in his dreams by a woman in a birdcage made of thorns. She tells Dahlen and the 19 other people she summoned “You\'ve all earned a fraction of my power, I\'m looking for 5 that deserve all of my power." The Darning Needle continues on toward Almiraj as we sleep, which is where we leave things until next time!',
          icon: 'mdi-train',
          audio:'../session1.ogg'
        },
        {
          color: 'indigo',
          year: 'Mar 6, 2024',
          headline: 'Session 2',
          text: 'Sleepy Sefy awoke to a chipper Chipp hovering over her and was soon introduced to Dashiel over waffles. Dave, Dahlen, and Selmenoch made their way to the bar cart for some morning Malort.\n\nAura-stunning arrows rained down on the Darning Needle as a strange man with a black & white checkered cape and a 20ft extendable wand summoned an army of cartoon-like chicken mounted bunnies. The party managed to defend the sleeping occupants and kill most of the bunnies, however, a few were missed in the chaos. The owlen guard was killed in the cargo train and several crates of pharmaceutical-grade potions were stolen.\n\nPerhaps worst of all, Cosmo was slain in battle.\n\nThe students spend the next hour cleaning up the mess, healing the wounded, and getting their story straight as they wait for the adults to wake up.',
          icon: 'mdi-rabbit',
          avatar: '../dead-cosmo.jpg',
          audio: '../hedidntmakeit.ogg'
        },
        {
          color: 'grey',
          year: 'Mar 20, 2024',
          headline: 'Session 3',
          text: 'The Teenage Magic Nimble Troopers (patent pending) watched on as Slake and Pepper use magic to put The Darning Needle back on to the magical railway. The party talked with Aunt Meltlake, who revealed that she is the most powerful fire mage in all of Manta.\n\nThe train arrived at the nearest stop to Almiraj, where the kids hopped on a carriage driven by a man named Al Mirage. After a long rest on the bigger-on-the-inside carriage, the kids finally made it to the Almiraj School of Amazing Adventurers for the first time.\n\nThe students\' scarabs guided them toward orientation, where they were checked in as new students and sent on their way. Dave led the party toward an omelette station where Chef Dwayne magically produced some fire breakfast. They took their food to go and headed over to an open air atrium where fighting instructor Garmond Kordah was waiting to give his first lesson, a test.\n\n24 students faced off in tournament style 2v2 fights, protected from death by a magic barrier.\n- Dahlen and Selmenoch teamed up and won their match after a lengthy duel.\n- Chipp unleashed a flurry of blows and worked with Aaron to move on to the next round.\n- Sefy and Dashiel were bested by a classic bard trick, and found themselves sleeping through most of their fight. \n- Dave and Sunbeam stuck with their usual game plan (big guy hit, small girl heal) and defeated their challengers.\n\nUp next: 2v2v2. Selmenoch & Dahlen vs Chipp & Aaron vs Dave & Sunbeam.',
          icon: 'mdi-stadium-outline',
          avatar: '../arena.jpg',
        },
        {
          color: 'yellow-lighten-1',
          year: 'Apr 10, 2024',
          headline: 'Session 4',
          text: 'The students were given an hour to rest and prepare before they had to fight each other once again. Dahlen came out swinging, but was the first one taken down in the match. Chipp and Aaron worked together to wear down the well-armored Selmenoch, while Dave cowered in the corner and tried to prevent Sunbeam from hurting his new friends. Somehow, Dave\'s "strategy" paid off, as he and Sunny B won the match.\n\nFor the final round, Dashiel and Dahlen encouraged Dave, taking the time to explain some of the nuances of good and evil. Dashiel also inspired Redd slyly, in an effort to get laid. The fight began, and Phelothir immediately put Sunbeam to sleep, as expected. Dave was able to wake her up and the two went on to beat the ever-loving shit out of their opponents. Dave and Sunbeam won the tournament, but their victory may have come with the price of a strained friendship for now.\n\nWith the tournament over, Gormand now had to assess the performance of each student in order to break them out into groups for the remainder of their schooling. In the meantime, Chipp and Dahlen broke away to check out the library, Dashiel and Selmenoch checked out their dormitories, Dave sulked in the coliseum, and Sefy met a fellow horticulturist in the woods surrounding Almiraj. A few hours later, the teams were announced, and our PCs were placed in Ruby Basilisks Team C 36300.\n\nFestivities commence! In the cafeteria, Duane Strauss (the chef, bard, mentor, professor, entertainer extraordinaire) put on a feast and a show for all of the students at Almiraj. Dashiel disguised himself as Duane, and took over entertaining for a time. Dahlen taught the party about the traditional elven green slop being served and Dave did his best to make tacos out of the ingredients.\n\nAfter the party, our adventurers returned to their dorms where a kegger was already underway. 6 scrolls were waiting for the group, which the students realized were their class schedules. The students found their beds, and drifted to sleep for the first time at the Almiraj School of Amazing Adventurers.',
          icon: 'mdi-account-school',
          audio: '../session4.ogg',
          avatar: '../session4.jpg'
        },
        {
          color: 'green-darken-4',
          year: 'Apr 17, 2024',
          headline: 'Session 5',
          text: 'The students began classes and met with their mentors for the first time.\n\nDashiel followed Professor Strauss to a theatre called Bashaba\'s Blessing, where they meet the owner Tippy. Tippy hired Dashiel as an intern and tasked him with bringing friends to a show on Friday night. Selmenoch met with his mentor, who happened to have had his arm cut off by Sel\'s grandfather. Dave\'s mentor, Gormand, helped Dave get big mad and encouraged Dave to continue working to find and control his anger. Chipp\'s mentor, Flint, spent some time getting to know his new apprentice, and showed her a few parkour shortcuts around the school. Sefy and her mentor discussed religion and history for a time, and she was encouraged to attend the next Gathering of Faith. Dahlen met with Headmistress Claire, who was concerned about the way Dahlen has been given powers from an unknown patron, especially without a set contract.\n\nThe day ended with Dahlen having an intense dream about being chased by a giant armored bear with rocky protrusions coming from its neck and face. A diadem that Dahlen was wearing falls off of his head and erupts into a green light. As Dahlen awakes, he sees that his necklace has a slight green glow, and is burning hot to the touch. Spooky stuff.\n\nMost importantly, we leveled up! Level 3 baybeee let\'s goooooo',
          icon: 'mdi-notebook-edit',
          audio: '../session5.ogg',
          avatar: '../schedule.jpg'
        },
        {
          color: 'purple',
          year: 'May 1, 2024',
          headline: 'Session 6',
          text: 'The theme of this session was: Auras.\n\nThe party woke up early, and Dahlen shared his dream with everyone. The party attended their perception and auras class, where the fighting mentor, Vasa Gostillar, helped each student figure out how to get in touch with and release their auras.\n\n- Dahlen: (74, Resistance to cold damage)\nGives a feeling of warmth and coziness radiating fom the center of you. \n\n- Dashiel: (95, Sense secrets e.g. hidden items, secret doors, etc)\nFeels like coming home on a Friday, after being away all day, and when you get to your door you find a box left by a close friend. There is a note on the box that says that while they were out, they found this and thought of you. Inside of the box are your favorite cookies, delicious and still warm. Your house is clean, there is nothing to do except put your feet up and relax.\n\n- Dave: (98, Instead of dropping to 0hp, you remain at 1 hp. Once per long rest.)\nFeels too big for the space it is occupying, as if it could burst out of its area at any point. Like pumping air into a glass ball that could explode any minute.\n\n- Sefy: (62, Sense fiend)\nLike being in a grove, green trees above, the sun hitting the perfect spot like beam of light. There is a strong breeze and the smell of wildflowers. A beautiful morning peaking through the trees.\n\n- Chipp: (71, Sense invisibility)\nThat feeling when you\'re staying somewhere new and it feels like you\'re being watched. But also, like you\'re the one doing the watching. A knowing, seeing feeling.\n\n- Selmenoch: (96, Sense Danger, advantage on dex saves against effects in your aura)\nFeels like standing in front of a bonfire on an autumn night. There are people around but they are spread out. You\'re kind of by yourself, and the cold breeze hits you but you\'re still warmed by the fire.\n\nSefy tried to ask Vasa to tell her more about Satyrs, but he swiftly declined. Sefy retreated to the woods for prayer and a good cry. Dave and Selmenoch sparred to pass the time, and Selmenoch realized that Dave, while strong, has awful technique and was quickly defeated. Dahlen signed out a book, a ledger of previous team names, from the library (a.k.a. signed a blood pact). This helped him realize that there is a much larger pact etched onto his soul. Dashiel attempted to set up Dahlen with Mary, but failed. Chipp parkoured around the school for four hours.\nThe party then attended magical items & supplies class where they met Professor Ellen Lozzarr. Chipp and Selmenoch both took jobs helping Ellen with enchantments on Mondays before class.\nAt some point Dahlen pushed his aura into his pendant, at which point a book he had never seen before appeared in his hands. An eldritch blast erupts from the book, and Dave tells Dahlen to practice using the book on him, briefly covering him in fairy fire. Dahlen was later told by Headmaster Claire that this book is his tome book, filled with spells that are currently beyond his comprehension.\nSefy got some new better armor from the Quartermaster Aldo Miraj. The party, after some debate, took a job from the adventurers guild board: "Missing Pet: See Charlie". They traveled into town to try to locate Charlie. They met Calamity Jane, a bartender at The Last Mistake, who pointed them in the right direction.\nCharlie is missing his SPACE HAMSTER Fluffles, and he is willing to pay the group 20gp to return him. He keeps Fluffles locked up in a cage and he seemed generally like a shitty dude.',
          icon: 'mdi-sine-wave',
          audio:'../session6.ogg'
        },
        {
          color: 'blue gray',
          year: 'May 15, 2024',
          headline: 'Session 7',
          text: 'The group asked their classmate Lyss, who is from the moon, about space hamsters. She explained how strong and savage they are, but she was acting very suspicious when she said there is not use to keep them caged as a pet.\n\nThe group made their way into town, where they visited The Gathering of Faith, a shopping-mall-esque building where many religious organizations have spaces for worship. Sefy met Priest Redpelt at Ehlonna\'s temple and talked about her father figure, Darius Strongback. Chipp visited the temple of Pelor where sang with an old lady. She met a warforged name Orrena, who is the keeper of the shrine.\n\nThe group window shopped in town for a bit and then headed to their offensive combat class. There, the party was instructed to fight Garmond, who kicked their asses. Garmond said that the mid-term would be fighting in a simulated dungeon.',
          icon: 'mdi-music',
          avatar:'../session7.jpg',
          audio:'../session7.ogg'
        },
        {
          color: 'red',
          year: 'May 29, 2024',
          headline: 'Session 8',
          text: 'Fate is about to get needled.',
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