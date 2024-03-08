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
          link: 'https://drive.google.com/uc?export=view&id=1uzDpzCaYSoIlLDjxzqUrpZ_ThFsGMA7y',
        },
        {
          icon:'mdi-map-search-outline',
          color: 'brown-lighten-1',
          title: 'Manta - Topographical',
          description: 'A high-res map of Manta that shows the topography of the land.',
          link: 'https://drive.google.com/uc?export=view&id=1dKvyqe9qhKv0VG2Qt0ZbsQQQfC8uSg6e',
        },
        {
          icon:'mdi-google-drive',
          color: 'green-darken-2',
          title: 'Shared Google Drive',
          description: 'A folder in Mitch\'s google drive that will be updated with documents for us.',
          link: 'https://drive.google.com/drive/folders/1zBtaMlRt0xF3Bp8JDAJr6Ye12_jaqoyf',
        },
        {
          icon:'mdi-note-edit',
          color: 'pink-accent-4',
          title: 'Shared Notes',
          description: 'A folder in Felicity\'s google drive with notes from the campaign.',
          link: 'https://docs.google.com/document/d/1KomxGQp62DW_bXIB5Xhaaechwkv0JcPD2Q_KfxB6jLs/edit',
        },        
      ].sort(function(a, b){return a.title - b.title}),
    })
  }
</script>