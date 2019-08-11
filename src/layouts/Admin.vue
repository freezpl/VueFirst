<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
    >
      <v-list dense>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile >
          <v-list-tile-action>
            <v-icon>contact_mail</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Contact</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <!--TOOLBAR-->
    <v-toolbar color="blue-grey darken-3" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>
      <div class="logo">
        <img src="../assets/img/logo.png">
      </div>
      </v-toolbar-title>
    </v-toolbar>

    <v-container>
      <v-layout>
        <!--Center pane-->        
        <v-flex xs10>
          <v-content>
            <slot></slot>
          </v-content>
        </v-flex>
        <!--Right pane-->        
        <v-flex xs2>
        </v-flex>
      </v-layout>
    </v-container>
    <v-footer color="blue-grey darken-3" app>
      <span class="white--text">&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: null
    }),
    props: {
      source: String
    }
  }
</script>