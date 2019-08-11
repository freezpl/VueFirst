<template>
<div>
<common>
  <v-container fluid>
     <v-layout row wrap articles>
      <v-flex v-for="article in articles" xs12 sm6>
      <v-card>
        <v-img :src="imgUrl + article.img" aspect-ratio="2.75"></v-img>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{ article.name }}</h3>
            <div> {{ article.description }} </div>
            <p>{{article.user.fullname}}</p>
            <p>Categories: <span v-for="cat in article.categories">
            <v-icon>{{cat.icon}}</v-icon> {{cat.name}}</span></p>
            <p>Tags: <span v-for="tag in article.tags">{{tag.name}}</span></p>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat color="light-blue darken-4">Read</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
      </v-layout>
  </v-container>
</common>
</div>
</template>

<script>
  import Common from '../../layouts/Common';
  import VARS from '../../helper/vars';

  export default {
    created() {
      this.$store.dispatch('getArticles', this);
    },
    data: () => ({
      imgUrl: VARS.IMGURL,
    }),
    computed: {
      articles(){
        return this.$store.getters.articles;
      }
    },
    components:{
      Common,
    }
  }
</script>