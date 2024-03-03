<template>
  <v-dialog v-if="n.raw.info || n.raw.associations" max-width="1000">

    <template v-slot:activator="{ props }">
      <v-btn v-bind="props" text="More Info"></v-btn>
    </template>

    <template v-slot:default="{ isActive }">

      <v-card :title="n.raw.title" :append-icon="n.raw.icon">
      
        <v-card-subtitle><audio v-if="n.raw.voice" oncontextmenu="return false;" controls controlslist="nodownload noplaybackrate" :src="n.raw.voice"></audio></v-card-subtitle>

        <v-card-text style="white-space: pre-wrap; text-align: left;">
          <AvatarDialog :n="n"></AvatarDialog>{{n.raw.info}}
        </v-card-text>

        <v-card-actions>
          <DialogTags :tags="!n.raw.associations ? n.raw.tags : n.raw.tags.concat(n.raw.associations)"></DialogTags>
          <v-spacer></v-spacer>
          <v-btn icon="mdi-close" justify="end bottom"
            text="Close"
            @click="isActive.value = false"
          ></v-btn>
        </v-card-actions>

      </v-card>

    </template>
  </v-dialog>
</template>

<script>
  export default {
    props: {
      n: null
    },
  }
</script>

<style scoped>
audio {
  animation: audioWidth 0.1s forwards;
  height: 30px;
  margin-right: 15px;
}
</style>

<script setup>
  import { useDisplay } from 'vuetify'

  // Destructure only the keys you want to use
  const { smAndDown, mdAndUp } = useDisplay()
</script>