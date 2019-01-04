<template>
  <div>
    <div class="gradient-div"></div>
    <b-carousel id="carousel"
                controls
                indicators
                :interval="6000"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
    >

      <!-- Text slides with image -->
      <b-carousel-slide caption="First slide"
                        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
                        img-src="https://www.nefa.rs/files/images/slike_proizvoda/AMS-COR-S-012_1.jpg">
        <router-link class="shop-btn" to="/proizvodi"><i class="fas fa-shopping-cart"></i>Shop Now</router-link>
    </b-carousel-slide>

      <!-- Slides with custom text -->
  

    <b-carousel-slide caption="Second slide"
                        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
                        img-src="https://images.pexels.com/photos/276554/pexels-photo-276554.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260">
        <router-link class="shop-btn" to="/proizvodi"><i class="fas fa-shopping-cart"></i>Shop Now</router-link>
    </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide img-src="https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260">
      </b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide caption="Second slide"
                        text="Nulla vitae elit libero, a pharetra augue mollis interdum.">
        <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
             src="http://www.izgled.rs/wp-content/uploads/2017/02/LILUSKA.jpg" alt="image slot">
             <router-link class="shop-btn" to="/proizvodi"><i class="fas fa-shopping-cart"></i>Shop Now</router-link>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>

export default {
  data () {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  }
}

</script>

<style lang="scss" scope>
#carousel .active {
    background: #ffdc12;
}
.carousel-indicators {
    bottom: 0;
}
#carousel li {
    background: #fff;
}
.carousel-item img {
    max-height: 700px;
    object-fit: cover;
}
.carousel-caption {
    bottom: 0;
    background: linear-gradient(to bottom, rgba(255,255,255,0), rgba(0,0,0,1));
    width: 100%;
    left: 0;
    h3 {
        font-size: 69px;
        font-weight: 400;
        letter-spacing: 7px;
        line-height: 79px;
        margin: 0;
        text-transform: uppercase;
        animation: fadeInLeft .9s linear alternate;
    }
    p {
        margin: 10px 0 0;
        font-family: 'Poppins', sans-serif;
        text-transform: uppercase;
        font-weight: 600;
        animation: fadeInRight .9s linear alternate;
    }
}
.carousel-control-next-icon,
.carousel-control-prev-icon {
    color: #fff;
}
.shop-btn {
    border-radius: 2px;
    border: 1px solid #fff;
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    line-height: 72px;
    padding: 10px 31px 8px;
    text-transform: uppercase;
    transition: all 0.4s ease 0s !important;
    &:hover {
        background: #ffdc12 none repeat scroll 0 0;
        border: 1px solid #ffdc12;
        text-decoration: none;
        color: #fff;
    }
    i {
        padding-right: 10px;
        font-size: 16px;
    }
}
@keyframes fadeInLeft {
    from {
      transform: translateX(-100%);
      opacity: 0; }
    to {
      transform: translateX(0);
      opacity: 1; } }
  @keyframes fadeInRight {
    from {
      transform: translateX(100%);
      opacity: 0; }
    to {
      transform: translateX(0);
      opacity: 1; } 
}

</style>