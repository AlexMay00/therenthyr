<template>
  <v-app id="almiraj">
    <v-app-bar image="@/assets/banner.jpg" absolute>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title class="text-h5 font-weight-black ">A.S.A.A.</v-app-bar-title>
      <v-spacer></v-spacer>
      <div id="imACuteLilBunny" class="bunny-pen" @mouseover="bunny = true" @mouseleave="bunny = false"></div>
    </v-app-bar>

    <v-main>
      <v-navigation-drawer width="200" v-model="drawer" location="left" temporary absolute>
        <v-list @click.stop="drawer = !drawer" :items="pages" @click:select="pageChanged($event)">
        </v-list>
          <v-img class="bunny" v-show="bunny" src="/almiraj.png"  position="bottom" rounded></v-img>
      </v-navigation-drawer>

      <v-container v-show="this.currentPage === '/library' || this.currentPage === '/'" v-bind:id="this.currentPage">
        <Library></Library>
      </v-container>

      <v-container v-show="this.currentPage === '/recap'" v-bind:id="this.currentPage">
        <Recap></Recap>
      </v-container>

      <v-container v-show="this.currentPage === '/timeline'" v-bind:id="this.currentPage">
        <CampaignTimeline></CampaignTimeline>
      </v-container>

      <v-container v-show="this.currentPage === '/links'" v-bind:id="this.currentPage">
        <Links></Links>
      </v-container>

      <v-container v-show="this.currentPage === '/404'" v-bind:id="this.currentPage">
        <NotFound></NotFound>
      </v-container>
    

    </v-main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      currentPage: 'library',
      currentOption: 'all',
      drawer: false,
      group: null,
      bunny: false,
      pages: [
        {
          title: 'Library',
          value: '/library',
        },
        {
          title: 'Recap',
          value: '/recap',
        },
        {
          title: 'Timeline',
          value: '/timeline',
        },
        {
          title: 'Links',
          value: '/links',
        }
      ],
    }),

    methods: {
      optionChanged (option) {
        this.currentOption = option
      },
      pageChanged(pageEvent){
        this.$router.push(pageEvent.id)
      }
    },

    watch: {
      group () {
        this.drawer = false
      },
      $route($to, from) {
        if($to.matched.length === 1)
          this.currentPage = $to.fullPath
        else
        this.$router.replace('404')

     }
    },
  }
</script>

<style scoped>
.bunny-pen {
  min-width: 100px;
  min-height: 50px;
}
.bunny {
 position: unset;
 max-width: 50%;
}
</style>