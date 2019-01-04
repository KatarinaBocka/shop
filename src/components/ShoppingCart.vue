<template>
  <div id="shoppingCart" class="text-center">
    <section class="shop-img-area">
      <div class="container pt-3">
        <div class="row">
            <div class="col-md-12 text-center">
              <h1>Shopping Cart</h1>
            </div>

        </div>
      </div>
    </section>

    
    <h1></h1>
   
  </div>
</template>

<script>

export default {
  name: 'ShoppingCart',
  data: function() {
		return {
      
    }
  },
  
}

</script>

<style scoped lang="scss">

#shoppingCart {
  min-height: 1500px;
  
}
.shop-img-area {
    background: url('../../public/cart.jpg');
    background-size: cover;
    // background: #000;
    padding: 150px 0 100px;
}

</style>

