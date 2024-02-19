<template>
  <v-chip-group show-arrows>
    <v-chip
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
