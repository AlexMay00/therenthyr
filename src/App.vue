<template>
  <v-app id="almiraj">
    <v-app-bar extended>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-app-bar-title>Almiraj School of Amazing Adventurers</v-app-bar-title>

      <v-spacer>
        <v-img
          :width="400"
          aspect-ratio="16/9"
          cover
          src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
        ></v-img>
      </v-spacer>

      <v-btn icon="mdi-dots-vertical">
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
        <v-row>
          <v-col
            v-for="n in 24"
            :key="n"
            cols="6"
          >
            <v-card height="200" link 
            prepend-avatar="@/assets/thumbnails/dave.jpeg" 
            append-icon="mdi-account"
            title="David Nornackle"
            subtitle="Goliath Barbarian, Burrowburgh"
            >

            <div class="pa-4">
                <v-chip-group column>
                  <v-chip>Barbarian</v-chip>
                  <v-chip>Goliath</v-chip>
                  <v-chip>Burrowburgh</v-chip>
                  <v-chip>Land of the Small</v-chip>
                </v-chip-group>
              </div>
              
              <v-card-actions></v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>

  <v-dialog width="500">
  <template v-slot:activator="{ props }">
    <v-btn v-bind="props" text="Open Dialog"> </v-btn>
  </template>

</template>