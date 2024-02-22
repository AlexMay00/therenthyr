<template>
  <v-card
    class="mx-auto" min-width="260"
    :prepend-avatar="item.raw.avatar"
    :title="item.raw.title"
    :subtitle="item.raw.subtitle"
    :append-icon="item.raw.icon"
  >
    <v-card-text>
      <v-textarea :model-value="item.raw.text" no-resize readonly flat hide-details variant="plain" rows="4">
      </v-textarea>
    </v-card-text>

  <v-card-actions>
    <audio v-if="item.raw.voice" oncontextmenu="return false;" controls controlslist="nodownload noplaybackrate" :src="item.raw.voice"></audio>
    <NounCardTags v-if="!item.raw.voice" :tags="item.raw.tags"></NounCardTags>
    <v-spacer></v-spacer>
    <NounCardDialog :n="item"></NounCardDialog>
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