<template>
  <v-text-field v-model="search" clearable hide-details persistent-clear label="Search for anything" prepend-inner-icon="mdi-magnify" variant="solo-filled">
  </v-text-field>
  <Filter @optionChanged="optionChanged($event)">
  </Filter>
  <v-data-iterator
    :items="currentOption === 'all' ? nouns : nouns.filter(noun => noun.type === currentOption || noun.subtype == currentOption)"
    :items-per-page="-1"
    :search="search"
    :custom-filter="searchAfterThreeChars"
  >
    <template v-slot:default="{ items }">
      <v-row>
        <v-col v-for="n in items" :key="n" xs="12" sm="12" md="6" xl="4">
          <NounCard :item="n">
          </NounCard>
        </v-col>
      </v-row>
    </template>
  </v-data-iterator>
</template>

<script>
  export default {
    data: () => ({
      currentOption: 'all',
      search: '',
      nouns: [
        {
          title: 'Cursed Weapon',
          subtitle: '+2 to hit, -2 to your soul',
          avatar: 'cursed.jpg',
          text: 'IT IS I, SKRTTATTEN OF THE UNDEREARTH. YOU WILL WIELD ME AND ALL WILL SUFFER.',
          info: 'WISDOM SAVING THROW!\nHA YOU HAVE FAILED\nYOU CANNOT RESIST SKRTTATTEN',
          tags: ['Cursed', 'Weapon', 'Item', 'Magic', 'Yikes'],
          associations: ['Slashing Damage', 'Fire Damage'],
          icon: 'mdi-sword-cross',
          type: 'item',
          subtype: 'weapon',
          order: 100
        },
        {
          title: 'Aeis Therenthyr',
          subtitle: 'High Elf, Emperor',
          avatar: 'aeis.jpg',
          thumb: '../thumbs/aeis.jpg',
          text: 'Aeis Therenthyr is the Emperor of Therenthyr. He rose to prominence after uniting the elven tribes of Theren, using his influence to anoint himself as the King of Elves.',
          info: 'Aeis is nearly 400 years old, and appears to be in his prime. He is known as a cunning and brutal leader. It is said that he murdered his own sister for questioning his strategies after expanding into Hamburg.',
          tags: ['Therenthyr', 'Emperor', 'Theren'],
          associations: ['High Elf'],
          icon: 'mdi-crown',
          type: 'character',
          subtype: 'npc',
          order: 500
        },
      ].sort(function(a, b){return b.order - a.order})
    }),
    methods: {
      optionChanged (option) {
        this.currentOption = option
      },
      searchAfterThreeChars (value, query, item) {
        if(query.length > 2) 
          return value != null &&
            query != null &&
            value.toString().toLowerCase().indexOf(query.toLowerCase()) !== -1
      },
  }
}
</script>