<template>
  <v-app id="almiraj">
    <v-app-bar image="@/assets/banner.jpg" absolute>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title>Almiraj School of Amazing Adventurers</v-app-bar-title>
    </v-app-bar>

    <v-main>
      <v-navigation-drawer width="112"
        v-model="drawer"
        location="left"
        temporary
      >
        <v-list @click.stop="drawer = !drawer"
          :items="pages"
        ></v-list>
      </v-navigation-drawer>

      <v-container>
        <v-text-field v-model="search" clearable hide-details persistent-clear label="Search for anything" prepend-inner-icon="mdi-magnify" variant="solo-filled"></v-text-field>
        

        <v-row justify="space-around">
          <v-col cols="auto">
            <v-sheet
              elevation="100"
            >
              <v-chip-group
              variant="text"
                mandatory
                selected-class="text-primary"
              >
                <v-chip @click="setCurrentOption(tag.value)"
                  v-for="tag in categories"
                  :key="tag"
                >
                  {{ tag.title }}
                </v-chip>
              </v-chip-group>
            </v-sheet>
          </v-col>
        </v-row>
        
        <v-data-iterator
      :items="currentOption === 'all' ? nouns : nouns.filter(noun => noun.icon === currentOption)"
      :items-per-page="2400"
      :search="search"
    >
    <template v-slot:default="{ items }">
        <v-row>
          <v-col
            v-for="n in items"
            :key="n"
            xs="12" 
            sm="12" 
            md="6"
          >
            <v-card
            class="mx-auto" min-width="260"
              :append-icon="n.raw.icon"
              :prepend-avatar="n.raw.avatar"
              :title="n.raw.title"
              :subtitle="n.raw.subtitle"
            >
            <v-card-text>
                <v-textarea
                no-resize
                readonly
                flat
                hide-details
                variant="plain"
                rows="4"
                :model-value="n.raw.text"
              ></v-textarea>
            </v-card-text>

            <v-card-actions>

              <div class="pa-2">
                <v-chip-group column>
                  <v-chip size="small"
                    v-for="tag in n.raw.tags"
                    :key="tag"
                  >
                    {{ tag }}
                  </v-chip>
                </v-chip-group>
              </div>
            <v-spacer></v-spacer>
              <v-dialog v-if="n.raw.info" max-width="1000">
                <template v-slot:activator="{ props }">
                  <v-btn v-bind="props" text="More Info"> </v-btn>
                </template>
                <template v-slot:default="{ isActive }">
                  <v-card :title="n.raw.title">
                    <v-card-text style="white-space: pre-wrap;">
                      {{ n.raw.info }}
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn
                        text="Close"
                        @click="isActive.value = false"
                      ></v-btn>
                    </v-card-actions>
                  </v-card>
                </template>
              </v-dialog>
            </v-card-actions>
            </v-card>
          </v-col>
          </v-row>
          </template>
        </v-data-iterator>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      currentOption: 'all',
      drawer: false,
      group: null,
      pages: [
        {
          title: 'Library',
          value: 'library',
        },
        {
          title: 'Timeline',
          value: 'timeline',
        }
      ],
      categories: [
      {
          title: 'All',
          value: 'all',
        },
        {
          title: 'Characters',
          value: 'mdi-account',
        },
        {
          title: 'Locations',
          value: 'mdi-earth',
        },
        {
          title: 'Items',
          value: 'mdi-sword-cross',
        },
      ],
      search: '',
      nouns: [
        {
          title: 'Dave Nornackle',
          subtitle: 'Goliath Barbarian, Burrowburgh',
          avatar: '../dave.jpeg',
          text: 'David Nornackle is a goliath barbarian who hails from Burrowburgh, a small village outside of Alpharen in the Land of the Small. Dave was adopted by two gnomes, Pabavyc and Lorininn Nornackle, when he was a baby - a \"huge fuckin\' baby\" as a family friend once eloquently stated.',
          info: 'Here is a bunch of info about Big Dave. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis in est quis rutrum. Etiam malesuada porttitor malesuada. Cras lacinia sem vel leo interdum, in porta velit molestie. Praesent sit amet sodales elit, et consequat ante. Nunc at tincidunt velit. Nullam egestas, libero ut accumsan vulputate, erat est hendrerit erat, sed consequat tortor nibh gravida mauris. Sed elit lacus, euismod vel porttitor ac, maximus ac enim. Vestibulum vehicula tristique lacus, ultricies ornare lectus hendrerit ut. Etiam mollis dapibus sagittis. Aliquam sed est vel justo volutpat porttitor sodales nec turpis. Praesent volutpat neque eu sapien faucibus iaculis. Mauris in dolor eget mauris luctus iaculis. Vivamus convallis diam vitae sapien lacinia rhoncus. Praesent enim diam, feugiat vitae ullamcorper eget, commodo eget urna. Proin ut tempus felis. Phasellus quis velit vitae lacus tristique scelerisque. Quisque interdum sem ligula, ut sodales ipsum hendrerit sit amet. Sed malesuada hendrerit ultrices. Ut blandit justo ut justo ullamcorper, id molestie tellus tincidunt. Integer elit lacus, congue id varius sit amet, congue in dolor. Duis aliquet tellus in enim iaculis, ut condimentum erat semper. In ut justo vitae risus facilisis posuere id ut elit. Phasellus eu venenatis ex. Mauris non elementum purus, vitae vulputate velit. Praesent varius tristique orci lobortis auctor. Aliquam tristique pellentesque tempor. Sed lacinia enim ligula, at laoreet risus consectetur nec. Integer eleifend ultrices tellus, ac pretium arcu placerat id. Phasellus dictum augue non nunc condimentum scelerisque. Pellentesque eget arcu id ligula iaculis dignissim. Nam eros mi, interdum imperdiet ultricies vel, fermentum sed lacus. Fusce fermentum tempus ante, vitae tempus tellus pulvinar vel. Quisque venenatis scelerisque neque in volutpat. Maecenas at luctus sapien. Vestibulum suscipit feugiat gravida. Pellentesque egestas egestas risus ac interdum. Fusce non vulputate dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec hendrerit enim, in commodo erat. Vivamus in fringilla felis, eget viverra sapien. Fusce eget gravida dolor. Nullam sed ligula felis. Nulla a ultricies nisi. Praesent ex ex, cursus ac sollicitudin commodo, dignissim ut justo.',
          tags: ['PC', 'Barbarian', 'Goliath', 'Land of the Small', 'Burrowburgh'],
          icon: 'mdi-account',
          order: 10
        },
        {
          title: 'Chipp',
          subtitle: 'Aasimar Monk, Somewhere',
          avatar: 'https://www.dndbeyond.com/avatars/17/965/636378921768973657.jpeg',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In maximus purus nunc, in ullamcorper tortor facilisis vel. Quisque eu mauris non.',
          info: 'Chipp is a Monk. Chipp the Monk. Chipp-monk. Chipmunk. Get it? Get it?!',
          tags: ['PC', 'Aasimar', 'Monk', 'Student'],
          icon: 'mdi-account',
          order: 20
        },
        {
          title: 'Dahlen Mirkwood',
          subtitle: 'Half Elf Warlock, Aplace',
          avatar: 'https://www.dndbeyond.com/avatars/39554/94/1581111423-117538070.jpeg',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit fermentum mi, nec pellentesque sapien commodo ut. Vestibulum dolor nisi, vestibulum id tellus id, rutrum lobortis eros. In maximus purus nunc, in ullamcorper tortor facilisis vel.',
          info: 'Dahlen\'s got some Murkey-ass wood!',
          tags: ['PC', 'Half Elf', 'Warlock', 'Student'],
          icon: 'mdi-account',
          order: 30
        },
        {
          title: 'Dashiel Graves',
          subtitle: 'Variant Human Bard, Areatown',
          avatar: 'https://www.dndbeyond.com/avatars/39576/330/1581111423-117534960.jpeg',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In maximus purus nunc, in ullamcorper tortor facilisis vel. Quisque eu mauris non.',
          info: 'Dashiel is dashing.',
          tags: ['PC', 'Human', 'Bard', 'Student'],
          icon: 'mdi-account',
          order: 40
        },
        {
          title: 'Sefy Hart',
          subtitle: 'Satyr Cleric, Origincity',
          avatar: 'https://www.dndbeyond.com/avatars/39697/438/1581111423-117973322.jpeg',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In maximus purus nunc, in ullamcorper tortor facilisis vel. Quisque eu mauris non.',
          info: 'I know nothing! \n     - Michael Scott',
          tags: ['PC', 'Satyr', 'Cleric', 'Student'],
          icon: 'mdi-account',
          order: 50
        },
        {
          title: 'Selmenoch Lowenoch',
          subtitle: 'Fairy Fighter, Fairyville',
          avatar: 'https://www.dndbeyond.com/avatars/20552/265/637680873200277276.jpeg',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In maximus purus nunc, in ullamcorper tortor facilisis vel. Quisque eu mauris non.',
          info: 'Is it Lowenoch with and L or Iowenoch with an I',
          tags: ['PC', 'Fairy', 'Fighter', 'Land of the Small', 'Student'],
          icon: 'mdi-account',
          order: 60
        },
        {
          title: 'Alpharen',
          subtitle: 'City in the Land of the Small',
          avatar: '../alpha-a-circle-outline.svg',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In maximus purus nunc, in ullamcorper tortor facilisis vel. Quisque eu mauris non.',
          info: 'I\'m pretty sure this city is loosely named after Alphari Drenn, a toddler wizard we once killed people with.',
          tags: ['Land of the Small', 'City', 'Gnome', 'Halfling', 'Fairy'],
          icon: 'mdi-earth',
          order: 70
        },
        {
          title: 'Land of the Small',
          subtitle: 'Western Coast',
          avatar: '../alpha-s-circle.svg',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In maximus purus nunc, in ullamcorper tortor facilisis vel. Quisque eu mauris non.',
          info: '\nALL THE \n\nSMALL THINGS',
          tags: ['Nation', 'Gnome', 'Halfling', 'Fairy'],
          icon: 'mdi-earth',
          order: 80
        },
        {
          title: 'Cursed Weapon',
          subtitle: '+2 to hit, -2 to your soul',
          avatar: '../cursed.webp',
          text: 'IT IS I, SKRTTATTEN OF THE UNDEREARTH. YOU WILL WIELD ME AND ALL WILL SUFFER.',
          info: 'WISDOM SAVING THROW!\nHA YOU HAVE FAILED\nYOU CANNOT RESIST SKRTTATTEN',
          tags: ['Cursed', 'Weapon', 'Item', 'Yikes'],
          icon: 'mdi-sword-cross',
          order: 90
        },
      ].sort(function(a, b){return b.order - a.order})
    }),

    methods: {
      setCurrentOption (option) {
        this.currentOption = option
      },
    },

    watch: {
      group () {
        this.drawer = false
      },
    },
  }
</script>
