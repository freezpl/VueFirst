<template>
<div>
<v-btn color="success" class="mr-4" @click="newArticle">
        New Article
</v-btn>
<v-layout row>
    <v-flex>
      <v-card>
        <v-toolbar color="blue-grey darken-3" dark>
          <v-toolbar-title>Articles</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-list two-line>
          <template v-for="(article, index) in articles">
            <v-list-tile
              :key="article.name"
              avatar
              ripple
              @click="toggle(article.id)"
            >
              <v-list-tile-content>
                <v-list-tile-title>{{ article.name}}</v-list-tile-title>
                <v-list-tile-sub-title>{{ article.description }}</v-list-tile-sub-title>
              </v-list-tile-content>

              <v-list-tile-action>
                <v-list-tile-action-text>aaaaa</v-list-tile-action-text>
              </v-list-tile-action>

            </v-list-tile>
            <v-divider
              v-if="index + 1 < articles.length"
              :key="index"
            ></v-divider>
          </template>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>

</div>
</template>

<script>
  import VARS from '../../helper/vars';

  export default {
    created() {
      this.$store.dispatch('getArticles', this);
    },
    computed: {
      articles(){
        return this.$store.getters.articles;
      }
    },
    data: () => ({
      imgUrl: VARS.IMGURL,
    }),
    methods: {
    toggle (index) {
      const i = this.selected.indexOf(index)

      if (i > -1) {
        this.selected.splice(i, 1)
      } else {
        this.selected.push(index)
      }
    },
    newArticle(){
      this.$router.push({name:"newArticle"});
    }
    }
  }
</script>