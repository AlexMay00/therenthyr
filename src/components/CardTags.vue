<template>
 <div class="pa-2">
    <v-chip-group column>
      <v-chip size="small"
        v-for="tag in tags"
        :key="tag"
      >
        {{ tag }}
      </v-chip>
    </v-chip-group>
  </div>
</template>

<script>
  export default {
    props: {
      tags: Array
    },
  }
</script>
