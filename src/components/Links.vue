<template>
  <v-text-field v-model="search" clearable hide-details persistent-clear label="Search Links" prepend-inner-icon="mdi-magnify" variant="solo-filled">
  </v-text-field>
  <v-data-iterator
  :items="events"
  :search="search"
  >
    <template v-slot:default="{ items }">
      <v-list lines="two">
        <v-list-item link
          v-for="n in items"
          :key="n.raw.title"
        >
        <template v-slot:prepend><v-icon :icon="n.raw.icon" :color="n.raw.color"></v-icon></template>
        
          <a style="text-decoration: none; color: inherit;" :href="n.raw.link" target="_blank" rel="noopener noreferrer">
            <v-list-item-title>{{ n.raw.title }}</v-list-item-title>
            <v-list-item-subtitle style="word-break: break-word;">{{ n.raw.description }}</v-list-item-subtitle>
          </a>
        </v-list-item>
      </v-list>
    </template>
  </v-data-iterator>  
</template>

<script>
  export default {
    data: () => ({
      search: '',
      events: [
        {
          icon: 'mdi-dice-multiple',
          color: 'red-darken-2',
          title: 'D&D Beyond Campaign',
          description: 'Link to the campaign page with all characters in the Manta Campaign',
          link: 'https://www.dndbeyond.com/campaigns/5089565',
        },
        {
          icon:'mdi-map-search',
          color: 'blue-accent-2',
          title: 'Manta - Borders',
          description: 'A high-res map of Manta with borders highlighted in different colors',
          link: 'https://cdn.discordapp.com/attachments/1200034736270213120/1200149858569433179/Manta_Countries_Map-1.jpg?ex=65e0d127&is=65ce5c27&hm=521dc71c23428eb40826192c08855200781eb072e6e5c073b1bb771c59239b44&',
        },
        {
          icon:'mdi-map-search-outline',
          color: 'brown-darken-1',
          title: 'Manta - Topographical',
          description: 'A high-res map of Manta that shows the topography of the land.',
          link: 'https://cdn.discordapp.com/attachments/1200034736270213120/1200149976286769193/Manta_With_Railroads.jpg?ex=65e0d144&is=65ce5c44&hm=5a770a657c94f3d9bd5534c2fdaaddafe62c77855b68c43c77d10063a07bfac6&',
        },
        {
          icon:'mdi-google-drive',
          color: 'green-darken-2',
          title: 'Shared Google Drive',
          description: 'A folder in Mitch\'s google drive that will be updated with documents for us.',
          link: 'https://drive.google.com/drive/folders/1zBtaMlRt0xF3Bp8JDAJr6Ye12_jaqoyf',
        },
      ].sort(function(a, b){return a.title - b.title}),
    })
  }
</script>