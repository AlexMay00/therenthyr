<template>
  <v-container class="d-flex" :style="{ minHeight: '100%' }">
    <v-row align="center" justify="center">
      <v-col cols="auto">
        <h1 class="text-h3 text-primary">
          Natural 1
          <v-icon icon="mdi-emoticon-dead"></v-icon>
        </h1>

        <p>(404, actually) The page you were looking for does not exist</p>

        <p>
          <v-btn
            @click="this.$router.replace('/')"
            color="primary"
            variant="outlined"
            style="margin-top: 15px;"
          >
            Get me out of here!
          </v-btn>
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>