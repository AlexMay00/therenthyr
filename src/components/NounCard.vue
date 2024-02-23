<template>
  <v-card class="mx-auto" min-width="260" :density="mdAndUp ? 'default' : 'compact'">
  <v-card-item>
    <v-card-title>
      <AvatarDialog v-if="smAndDown" :n="item"></AvatarDialog>
      {{ item.raw.title }}
      <v-icon :icon="item.raw.icon" style="float: right;">
      </v-icon>
      <v-card-subtitle>
      {{ item.raw.subtitle }}
    </v-card-subtitle>
    </v-card-title>

  </v-card-item>
    
    <v-card-text>
      <AvatarDialog v-if="mdAndUp" :n="item"></AvatarDialog>
      <v-textarea v-if="item.raw.text || mdAndUp" :model-value="item.raw.text" no-resize readonly flat hide-details variant="plain" :rows="mdAndUp ? 5 : 4">
      </v-textarea>
    </v-card-text>

  <v-card-actions>
    <audio v-if="item.raw.voice" oncontextmenu="return false;" controls controlslist="nodownload noplaybackrate" :src="item.raw.voice"></audio>
    <NounCardTags v-if="!item.raw.voice" :tags="item.raw.tags"></NounCardTags>
    <v-spacer></v-spacer>
    <NounCardDialog v-if="item.raw.info" :n="item"></NounCardDialog>
  </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    props: {
      item: null
    },
  }
</script>

<style scoped>
audio {
  max-height: 42px;
}
</style>

<script setup>
  import { useDisplay } from 'vuetify'

  // Destructure only the keys you want to use
  const { smAndDown, mdAndUp } = useDisplay()
</script>