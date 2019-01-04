<template>
  <div id="home">
    <Carousel />
    <Collection />
    <FeaturedProducts />
    <Blog />
  </div>
</template>

<script>
import Carousel from './HomeComponents/Carousel.vue'
import Collection from './HomeComponents/Collection.vue'
import FeaturedProducts from './HomeComponents/FeaturedProducts.vue'
import Blog from './HomeComponents/Blog.vue'

export default {
  name: 'Home',
  components: {
    Carousel,
    Collection,
    FeaturedProducts,
    Blog,
  }
}
</script>

<style>

</style>
