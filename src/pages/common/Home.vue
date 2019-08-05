<template>
<div>
<common>
  <v-container>
     <v-layout row wrap articles>
      <v-flex v-for="article in articles" xs6>
          <div class="article">
            <h2>{{article.name}}</h2>
            <img :src="imgUrl + article.img">
            <p>{{article.description}}</p>
            <p>{{article.user.fullname}}</p>
            <p>Categories: <span v-for="cat in article.categories">
            <v-icon>{{cat.icon}}</v-icon> {{cat.name}}</span></p>
            <p>Tags: <span v-for="tag in article.tags">{{tag.name}}</span></p>
          </div>
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