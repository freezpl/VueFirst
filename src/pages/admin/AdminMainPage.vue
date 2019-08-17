<template>
<div>
<admin>
<router-view></router-view>
</admin>
</div>
</template>

<script>
  import Admin from '../../layouts/Admin';
  import VARS from '../../helper/vars';

  export default {
    components: {
      Admin
    }
  }
</script>