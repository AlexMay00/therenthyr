<template>
  <v-card class="mx-auto" min-width="260" :density="mdAndUp ? 'default' : 'compact'">
  <v-card-item>
    <v-card-title>
      <v-avatar v-if="smAndDown" size="75" style="float: left; margin-right: 10px;" :image="item.raw.avatar"></v-avatar>
      {{ item.raw.title }}
      <v-icon :icon="item.raw.icon" style="float: right;">
      </v-icon>
      <v-card-subtitle>
      {{ item.raw.subtitle }}
    </v-card-subtitle>
    </v-card-title>

  </v-card-item>
    
    <v-card-text>
      <v-avatar v-if="mdAndUp" rounded size="150" style="float: left; margin-right: 10px; margin-top: 20px;" :image="item.raw.avatar"></v-avatar>
      <v-textarea v-if="item.raw.text || mdAndUp" :model-value="item.raw.text" no-resize readonly flat hide-details variant="plain" :rows="mdAndUp ? 6 : 4">
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