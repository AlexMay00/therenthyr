<template>
  <v-card
    class="mx-auto" min-width="260"
    :append-icon="item.raw.icon"
    :prepend-avatar="item.raw.avatar"
    :title="item.raw.title"
    :subtitle="item.raw.subtitle"
  >
    <v-card-text>
      <v-textarea :model-value="item.raw.text" no-resize readonly flat hide-details variant="plain" rows="4">
      </v-textarea>
    </v-card-text>

  <v-card-actions>
    <CardTags :tags="item.raw.tags"></CardTags>
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
