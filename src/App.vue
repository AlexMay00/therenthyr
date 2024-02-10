<template>
  <v-app id="almiraj">
    <v-app-bar image="@/assets/banner.jpg" scroll-behavior="hide">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title>Almiraj School of Amazing Adventurers</v-app-bar-title>
    </v-app-bar>

    <v-main>
      <v-navigation-drawer
        v-model="drawer"
        location="left"
        temporary
      >
        <v-list @click.stop="drawer = !drawer"
          :items="categories"
        ></v-list>
      </v-navigation-drawer>

      <v-container>
        <v-text-field v-model="search" clearable persistent-clear label="Search for anything" prepend-inner-icon="mdi-magnify" variant="solo-filled"></v-text-field>
        <v-data-iterator
      :items="characters"
      :items-per-page="24"
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
            class="mx-auto" min-width="260" link
              append-icon="mdi-account"
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

              <div class="pa-2">
                <v-chip-group column>
                  <v-chip size="x-small"
                    v-for="tag in n.raw.tags"
                    :key="tag"
                  >
                    {{ tag }}
                  </v-chip>
                </v-chip-group>
              </div>
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
      drawer: false,
      group: null,
      categories: [
        {
          title: 'Characters',
          value: 'characters',
        },
        {
          title: 'Locations',
          value: 'locations',
        },
        {
          title: 'Items',
          value: 'items',
        },
        {
          title: 'Timeline',
          value: 'timeline',
        },
      ],
      search: '',
      characters: [
        {
          title: 'Dave Nornackle',
          subtitle: 'Goliath Barbarian, Burrowburgh',
          avatar: 'src/assets/thumbnails/dave.jpeg',
          text: 'David Nornackle is a goliath barbarian who hails from Burrowburgh, a small village outside of Aplharen in the Land of the Small. Dave was adopted by two gnomes, Pabavyc and Lorininn Nornackle, when he was a baby. A \"huge fuckin\' baby\" as a family friend once eloquently stated.',
          tags: ['PC', 'Barbarian', 'Goliath', 'Land of the Small', 'Burrowburgh']
        },
        {
          title: 'Chipp',
          subtitle: 'Aasimar Monk, Somewhere',
          avatar: 'https://www.dndbeyond.com/avatars/17/965/636378921768973657.jpeg',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In maximus purus nunc, in ullamcorper tortor facilisis vel. Quisque eu mauris non.',
          tags: ['PC', 'Aasimar', 'Monk', 'Student']
        },
        {
          title: 'Dahlen Mirkwood',
          subtitle: 'Half Elf Warlock, Aplace',
          avatar: 'https://www.dndbeyond.com/avatars/39554/94/1581111423-117538070.jpeg',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit fermentum mi, nec pellentesque sapien commodo ut. Vestibulum dolor nisi, vestibulum id tellus id, rutrum lobortis eros. In maximus purus nunc, in ullamcorper tortor facilisis vel.',
          tags: ['PC', 'Half Elf', 'Warlock', 'Student']
        },
        {
          title: 'Dashiel Graves',
          subtitle: 'Variant Human Bard, Areatown',
          avatar: 'https://www.dndbeyond.com/avatars/39576/330/1581111423-117534960.jpeg',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In maximus purus nunc, in ullamcorper tortor facilisis vel. Quisque eu mauris non.',
          tags: ['PC', 'Human', 'Bard', 'Student']
        },
        {
          title: 'Sefy Hart',
          subtitle: 'Satyr Cleric, Origincity',
          avatar: 'https://www.dndbeyond.com/avatars/39697/438/1581111423-117973322.jpeg',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In maximus purus nunc, in ullamcorper tortor facilisis vel. Quisque eu mauris non.',
          tags: ['PC', 'Satyr', 'Cleric', 'Student']
        },
        {
          title: 'Selmenoch lowenoch',
          subtitle: 'Fairy Fighter, Fairyville',
          avatar: 'https://www.dndbeyond.com/avatars/20552/265/637680873200277276.jpeg',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In maximus purus nunc, in ullamcorper tortor facilisis vel. Quisque eu mauris non.',
          tags: ['PC', 'Fairy', 'Fighter', 'Land of the Small', 'Student']
        },
      ]
    }),

    watch: {
      group () {
        this.drawer = false
      },
    },
  }
</script>
