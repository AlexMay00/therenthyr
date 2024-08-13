<template>
  <v-text-field v-model="search" clearable hide-details persistent-clear label="Search Links" prepend-inner-icon="mdi-magnify" variant="solo-filled">
  </v-text-field>
  <v-data-iterator
  :items="events"
  :items-per-page="-1"
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
          description: 'Link to the campaign page with all characters in the Therenthyr Campaign',
          link: 'https://www.dndbeyond.com/campaigns/5786479',
        },
        {
          icon:'mdi-map-search',
          color: 'blue-accent-2',
          title: 'Arcis - Detailed',
          description: 'A high-res map of Arcis that shows nations, cities, landmarks, and topography.',
          link: 'https://drive.google.com/file/d/1hxU-si9RzPeZ5fZlO-cn7GB0EAKwWDPR',
        },
        {
          icon:'mdi-map-search-outline',
          color: 'brown',
          title: 'Arcis - Political',
          description: 'A high-res map of Arcis that shows borders and the reach of the Empire\'s rule.',
          link: 'https://drive.google.com/file/d/18-PPGYBxxsLRLrl4dMRCrGAMIXbmmDMu/view?usp=drive_link',
        },
        {
          icon:'mdi-google-drive',
          color: 'green-darken-1',
          title: 'Shared Google Drive',
          description: 'A folder in Alex\'s google drive that will be updated with documents for us.',
          link: 'https://drive.google.com/drive/folders/1zMlT6cWBQ5PAYvHBbU8YRYRcfwQuAp-p?usp=sharing',
        },
        // {
        //   icon:'mdi-note-edit',
        //   color: 'pink-accent-4',
        //   title: 'Shared Notes',
        //   description: 'A folder in Felicity\'s google drive with notes from the campaign.',
        //   link: 'https://docs.google.com/document/d/1KomxGQp62DW_bXIB5Xhaaechwkv0JcPD2Q_KfxB6jLs/edit',
        // },
        {
          icon:'mdi-code-json',
          color: 'light-green-accent-3',
          title: 'Github Repository',
          description: 'The code that makes this site exist. Want to contribute? Let me know!',
          link: 'https://github.com/AlexMay00/therenthyr',
        },       
      ].sort(function(a, b){return a.title - b.title}),
    })
  }
</script>