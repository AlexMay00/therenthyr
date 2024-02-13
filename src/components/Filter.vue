<template>
  <v-row>
    <v-col>
      <v-sheet>
        <v-chip-group
          column
          variant="text"
          mandatory
          selected-class="text-primary"
        >
          <v-chip @click="setCurrentOption(tag.value)"
            v-for="tag in categories"
            :key="tag"
          >
            {{ tag.title }}
          </v-chip>
        </v-chip-group>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script>
  export default {
    data: () => ({
      currentOption: 'all',
      categories: [
      {
          title: 'All',
          value: 'all',
        },
        {
          title: 'Characters',
          value: 'character',
        },
        {
          title: 'PCs',
          value: 'pc',
        },
        {
          title: 'NPCs',
          value: 'npc',
        },
        {
          title: 'Locations',
          value: 'location',
        },
        {
          title: 'Nations',
          value: 'nation',
        },
        {
          title: 'Cities',
          value: 'city',
        },
        {
          title: 'Towns',
          value: 'town',
        },
        {
          title: 'Items',
          value: 'item',
        },
        {
          title: 'Weapons',
          value: 'weapon',
        },
      ],
    }),

    methods: {
      setCurrentOption (option) {
        this.currentOption = option
        this.$emit('optionChanged', option)
      },
    },
  }
</script>
