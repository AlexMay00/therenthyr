<template>
  <v-dialog max-width="600" max-height="700">

    <template v-slot:activator="{ props }">
          <v-avatar v-if="mdAndUp" v-bind="props" size="150" style="float: left; margin-right: 10px;" rounded  :image="n.raw.thumb ?? n.raw.avatar"></v-avatar>
          <v-avatar v-if="smAndDown" v-bind="props" size="85" style="float: left; margin-right: 15px;" rounded :image="n.raw.thumb ?? n.raw.avatar"></v-avatar>
    </template>

    <template v-slot:default="{ isActive }">
      <v-card>
        <v-img max-height="600" style="margin-top: 10px;" :src="n.raw.avatar"></v-img>
        <v-card-actions>
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

<script setup>
  import { useDisplay } from 'vuetify'

  // Destructure only the keys you want to use
  const { smAndDown, mdAndUp } = useDisplay()
</script>