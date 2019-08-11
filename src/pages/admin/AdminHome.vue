<template>
<div>
<admin>

</admin>
</div>
</template>

<script>
  import Admin from '../../layouts/Admin';
  import VARS from '../../helper/vars';

  export default {
    created() {
      this.$store.dispatch('articles/getArticles', this);
    },
    data: () => ({
      imgUrl: VARS.IMGURL,
    }),
    components:{
      Admin,
    }
  }
</script>