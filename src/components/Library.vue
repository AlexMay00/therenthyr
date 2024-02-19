<template>
  <v-text-field v-model="search" clearable hide-details persistent-clear label="Search for anything" prepend-inner-icon="mdi-magnify" variant="solo-filled">
  </v-text-field>
  <Filter @optionChanged="optionChanged($event)">
  </Filter>
  <v-data-iterator
    :items="currentOption === 'all' ? nouns : nouns.filter(noun => noun.type === currentOption || noun.subtype == currentOption)"
    :items-per-page="2400"
    :search="search"
  >
    <template v-slot:default="{ items }">
      <v-row>
        <v-col v-for="n in items" :key="n" xs="12" sm="12" md="6">
          <NounCard :item="n">
          </NounCard>
        </v-col>
      </v-row>
    </template>
  </v-data-iterator>
</template>

<script>
  export default {
    data: () => ({
      currentOption: 'all',
      search: '',
      nouns: [
        {
          title: 'Dave Nornackle',
          subtitle: 'Goliath Barbarian, Burrowburgh',
          avatar: '../dave.jpeg',
          text: 'David Nornackle is a goliath barbarian who hails from Burrowburgh, a small village outside of Alpharen in the Land of the Small. Dave was adopted by two gnomes, Pabavyc and Lorininn Nornackle, when he was a baby - a \"huge fuckin\' baby\" as a family friend once eloquently stated.',
          info: 'Here is a bunch of info about Big Dave. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis in est quis rutrum. Etiam malesuada porttitor malesuada. Cras lacinia sem vel leo interdum, in porta velit molestie. Praesent sit amet sodales elit, et consequat ante. Nunc at tincidunt velit. Nullam egestas, libero ut accumsan vulputate, erat est hendrerit erat, sed consequat tortor nibh gravida mauris. Sed elit lacus, euismod vel porttitor ac, maximus ac enim. Vestibulum vehicula tristique lacus, ultricies ornare lectus hendrerit ut. Etiam mollis dapibus sagittis. Aliquam sed est vel justo volutpat porttitor sodales nec turpis. Praesent volutpat neque eu sapien faucibus iaculis. Mauris in dolor eget mauris luctus iaculis. Vivamus convallis diam vitae sapien lacinia rhoncus. Praesent enim diam, feugiat vitae ullamcorper eget, commodo eget urna. Proin ut tempus felis. Phasellus quis velit vitae lacus tristique scelerisque. Quisque interdum sem ligula, ut sodales ipsum hendrerit sit amet. Sed malesuada hendrerit ultrices. Ut blandit justo ut justo ullamcorper, id molestie tellus tincidunt. Integer elit lacus, congue id varius sit amet, congue in dolor. Duis aliquet tellus in enim iaculis, ut condimentum erat semper. In ut justo vitae risus facilisis posuere id ut elit. Phasellus eu venenatis ex. Mauris non elementum purus, vitae vulputate velit. Praesent varius tristique orci lobortis auctor. Aliquam tristique pellentesque tempor. Sed lacinia enim ligula, at laoreet risus consectetur nec. Integer eleifend ultrices tellus, ac pretium arcu placerat id. Phasellus dictum augue non nunc condimentum scelerisque. Pellentesque eget arcu id ligula iaculis dignissim. Nam eros mi, interdum imperdiet ultricies vel, fermentum sed lacus. Fusce fermentum tempus ante, vitae tempus tellus pulvinar vel. Quisque venenatis scelerisque neque in volutpat. Maecenas at luctus sapien. Vestibulum suscipit feugiat gravida. Pellentesque egestas egestas risus ac interdum. Fusce non vulputate dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec hendrerit enim, in commodo erat. Vivamus in fringilla felis, eget viverra sapien. Fusce eget gravida dolor. Nullam sed ligula felis. Nulla a ultricies nisi. Praesent ex ex, cursus ac sollicitudin commodo, dignissim ut justo.',
          tags: ['PC', 'Barbarian', 'Goliath', 'Land of the Small', 'Burrowburgh'],
          associations: ['Almiraj', 'Pabavyc Nornackle', 'Lorininn Nornackle', 'Sunbeam Wonderbite', 'Timber Wonderbite'],
          voice: '../dave.m4a',
          icon: 'mdi-account',
          type: 'character',
          subtype: 'pc',
          order: 10
        },
        {
          title: 'Chipp',
          subtitle: 'Aasimar Monk, Somewhere',
          avatar: 'https://www.dndbeyond.com/avatars/17/965/636378921768973657.jpeg',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In maximus purus nunc, in ullamcorper tortor facilisis vel. Quisque eu mauris non.',
          info: 'Chipp is a Monk. Chipp the Monk. Chipp-monk. Chipmunk. Get it? Get it?!',
          tags: ['PC', 'Aasimar', 'Monk', 'Student'],
          associations: ['Almiraj'],
          icon: 'mdi-account',
          type: 'character',
          subtype: 'pc',
          order: 20
        },
        {
          title: 'Dahlen Mirkwood',
          subtitle: 'Half Elf Warlock, Aplace',
          avatar: 'https://www.dndbeyond.com/avatars/39554/94/1581111423-117538070.jpeg',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit fermentum mi, nec pellentesque sapien commodo ut. Vestibulum dolor nisi, vestibulum id tellus id, rutrum lobortis eros. In maximus purus nunc, in ullamcorper tortor facilisis vel.',
          info: 'Dahlen\'s got some Murkey-ass wood!',
          tags: ['PC', 'Half Elf', 'Warlock', 'Student'],
          associations: ['Almiraj'],
          icon: 'mdi-account',
          type: 'character',
          subtype: 'pc',
          order: 30
        },
        {
          title: 'Dashiel Graves',
          subtitle: 'Variant Human Bard, Areatown',
          avatar: 'https://www.dndbeyond.com/avatars/39576/330/1581111423-117534960.jpeg',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In maximus purus nunc, in ullamcorper tortor facilisis vel. Quisque eu mauris non.',
          info: 'Dashiel is dashing.',
          tags: ['PC', 'Human', 'Bard', 'Student'],
          associations: ['Almiraj'],
          icon: 'mdi-account',
          type: 'character',
          subtype: 'pc',
          order: 40
        },
        {
          title: 'Sefy Hart',
          subtitle: 'Satyr Cleric, Origincity',
          avatar: 'https://www.dndbeyond.com/avatars/39697/438/1581111423-117973322.jpeg',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In maximus purus nunc, in ullamcorper tortor facilisis vel. Quisque eu mauris non.',
          info: 'I know nothing! \n     - Michael Scott',
          tags: ['PC', 'Satyr', 'Cleric', 'Student'],
          associations: ['Almiraj'],
          icon: 'mdi-account',
          type: 'character',
          subtype: 'pc',
          order: 50
        },
        {
          title: 'Selmenoch Lowenoch',
          subtitle: 'Fairy Fighter, Fairyville',
          avatar: 'https://www.dndbeyond.com/avatars/20552/265/637680873200277276.jpeg',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In maximus purus nunc, in ullamcorper tortor facilisis vel. Quisque eu mauris non.',
          info: 'Is it Lowenoch with and L or Iowenoch with an I',
          tags: ['PC', 'Fairy', 'Fighter', 'Land of the Small', 'Student'],
          associations: ['Almiraj'],
          icon: 'mdi-account',
          type: 'character',
          subtype: 'pc',
          order: 60
        },
        {
          title: 'Alpharen',
          subtitle: 'City in the Land of the Small',
          avatar: '../alpha-a-circle-outline.svg',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In maximus purus nunc, in ullamcorper tortor facilisis vel. Quisque eu mauris non.',
          info: 'I\'m pretty sure this city is loosely named after Alphari Drenn, a toddler wizard we once killed people with.',
          tags: ['Land of the Small', 'City', 'Gnome', 'Halfling', 'Fairy'],
          associations: ['Burrowburgh'],
          icon: 'mdi-city',
          type: 'location',
          subtype: 'city',
          order: 70
        },
        {
          title: 'Land of the Small',
          subtitle: 'Western Coast',
          avatar: '../alpha-s-circle.svg',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In maximus purus nunc, in ullamcorper tortor facilisis vel. Quisque eu mauris non.',
          info: '\nALL THE \n\nSMALL THINGS',
          tags: ['Nation', 'Gnome', 'Halfling', 'Fairy'],
          associations: ['Burrowburgh', 'Alpharen', 'Dave Nornackle', 'Selmenoch Lowenoch', 'Sunbeam Wonderbite', 'Timber Wonderbite', 'n\'Rob', 'Pabavyc Nornackle', 'Lorininn Nornackle'],
          icon: 'mdi-earth',
          type: 'location',
          subtype: 'nation',
          order: 80
        },
        {
          title: 'Burrowburgh',
          subtitle: 'Town near Alpharen - Land of the Small',
          avatar: '../alpha-b.svg',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In maximus purus nunc, in ullamcorper tortor facilisis vel. Quisque eu mauris non.',
          info: 'Dave\'s hometown. Once attacked by a giant toad.',
          tags: ['Nation', 'Gnome', 'Halfling', 'Fairy'],
          associations: ['Dave Nornackle', 'Pabavyc Nornackle', 'Lorininn Nornackle', 'Sunbeam Wonderbite', 'Timber Wonderbite'],
          icon: 'mdi-home-city',
          type: 'location',
          subtype: 'town',
          order: 80
        },
        {
          title: 'Cursed Weapon',
          subtitle: '+2 to hit, -2 to your soul',
          avatar: '../cursed.webp',
          text: 'IT IS I, SKRTTATTEN OF THE UNDEREARTH. YOU WILL WIELD ME AND ALL WILL SUFFER.',
          info: 'WISDOM SAVING THROW!\nHA YOU HAVE FAILED\nYOU CANNOT RESIST SKRTTATTEN',
          tags: ['Cursed', 'Weapon', 'Item', 'Magic', 'Yikes'],
          associations: ['Slashing Damage', 'Fire Damage'],
          icon: 'mdi-sword-cross',
          type: 'item',
          subtype: 'weapon',
          order: 90
        },
        {
          title: 'Sunbeam Wonderbite',
          subtitle: 'Fairy Cleric, Burrowburgh',
          avatar: '../sunbeam.png',
          text: 'Sunbeam is the best friend of Dave Nornackle and the daughter of Timber Wonderbite. One of her wings is significantly smaller than the other, making it difficult for her to fly. She was recruited by Almiraj for her healing prowess.',
          info: '',
          tags: ['NPC', 'Fairy', 'Cleric', 'Burrowburgh'],
          associations: ['Almiraj','Timber Wonderbite', 'Dave Nornackle', 'Land of the Small'],
          icon: 'mdi-account-outline',
          type: 'character',
          subtype: 'npc',
          order: 100
        },
        {
          title: 'Timber Wonderbite',
          subtitle: 'Fairy, Burrowburgh',
          avatar: '../carl.png',
          text: 'Timber Wonderbite is a crude speaking, greasy, grumpy, slightly-drunk-all-the-time fairy. He is the father of Sunbeam Wonderbite and a family friend of the Nronackle\'s.',
          info: '\"Holy shit, that\'s a huge fuckin\' baby!\"',
          tags: ['NPC', 'Fairy', 'Burrowburgh'],
          associations: ['Sunbeam Wonderbite', 'Dave Nornackle', 'Land of the Small', 'Pabavyc Nornackle', 'Lorininn Nornackle'],
          voice: '../carl.mp3',
          icon: 'mdi-account-outline',
          type: 'character',
          subtype: 'npc',
          order: 100
        },
      ].sort(function(a, b){return b.order - a.order})
    }),

    methods: {
      optionChanged (option) {
        this.currentOption = option
      }
  }
}
</script>