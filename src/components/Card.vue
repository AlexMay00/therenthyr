<template>
  <v-card
    class="mx-auto" min-width="260"
    :prepend-avatar="item.raw.avatar"
    :title="item.raw.title"
    :subtitle="item.raw.subtitle"
  >
  
    <template v-slot:append>
      <audio v-if="item.raw.voice" oncontextmenu="return false;" controls controlslist="nodownload" :src="item.raw.voice"></audio>
      <v-icon :icon="item.raw.icon"></v-icon>
    </template>

    <v-card-text>
      <v-textarea :model-value="item.raw.text" no-resize readonly flat hide-details variant="plain" rows="4">
      </v-textarea>
    </v-card-text>
    
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
  width: 160px;
  height: 35px;
  animation: audioWidth 0.1s forwards;
  margin-right: 10px;
}

auto::-webkit-media-controls-panel {
  justify-content: center;
}

audio::-webkit-media-controls-volume-slider {
  display: none !important;
  min-width: 0;
}

audio::-webkit-media-controls-timeline-container {
  display: none !important;
  min-width: 0;
}

audio::-webkit-media-controls-time-remaining-display {
  display: none !important;
  min-width: 0;
}

audio::-webkit-media-controls-timeline {
  display: none !important;
  min-width: 0;
}

@keyframes audioWidth {
  from {
    width: 160px;
  }
  to {
    width: 84px;
  }
}
</style>