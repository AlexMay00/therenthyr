<template>
  <v-chip-group v-if="mdAndUp" show-arrows>
    <v-chip
      v-for="tag in tags"
      :key="tag"
    >
      {{ tag }}
    </v-chip>
  </v-chip-group>

  <v-chip-group v-if="smAndDown" column>
    <v-chip size="x-small"
      v-for="tag in tags"
      :key="tag"
    >
      {{ tag }}
    </v-chip>
  </v-chip-group>
</template>

<script>
  export default {
    props: {
      tags: Array
    },
  }
</script>

<script setup>
  import { useDisplay } from 'vuetify'

  // Destructure only the keys you want to use
  const { smAndDown, mdAndUp } = useDisplay()
</script>