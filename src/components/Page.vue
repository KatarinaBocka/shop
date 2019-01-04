<template>
  <div id="page" class="container text-center">
    <h1>Test</h1>
    <router-view name></router-view>
   
  </div>
</template>

<script>

export default {
  name: 'Page',
  data: function() {
		return {
      
    }
  },
  
}

</script>

<style scoped lang="scss">

#page {
  min-height: 500px;
}


</style>


