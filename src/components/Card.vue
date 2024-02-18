<template>
  <v-card
    class="mx-auto" min-width="260"
    :prepend-avatar="item.raw.avatar"
    :title="item.raw.title"
    :subtitle="item.raw.subtitle"
  >
    <v-card-text>
      <v-textarea :model-value="item.raw.text" no-resize readonly flat hide-details variant="plain" rows="4">
      </v-textarea>
    </v-card-text>

    <audio v-if="item.raw.voice" oncontextmenu="return false;" controls controlslist="nodownload noplaybackrate" :src="item.raw.voice"></audio>
  <v-card-actions>
    <DialogTags :tags="item.raw.tags"></DialogTags>
    <v-spacer></v-spacer>
    <CardDialog :n="item"></CardDialog>
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
  height: 30px;
  animation: audioWidth 0.1s forwards;
  margin-left: 15px
}
</style>