<template>
  <div id="mebl-products">
    
      <div class="container px-0">
        <div class="row tab-content">
          <div class="col-lg-4 col-md-6 col-sm-12 col-12" v-for="(item, id) in filterFurniture" :key="id">
            <!-- <div class="col-lg-4 col-md-6 col-sm-12 col-12" v-for="(item, id) in  this.$store.state.mebl.TapaciraniNamestaj" :key="id"> -->
            <div class="card">
              <div class="card-head">
                <img :src="item.image1" alt="Shoe"  class="product-img primary-thumb">
                <span class="badge">New</span>
              </div>
              <div class="card-body">
                <div class="product-desc">
                  <div class="product-title">{{ item.category }}: <span class="right-part">{{ item.name }}</span></div>
                  <div class="product-caption">Dimenzije: <span class="right-part">260 x 150</span></div>
                  <div class="product-caption">Mehanizam: <span class="right-part">Obaranje naslona</span></div>
                  <div class="product-caption">Kutija za posteljinu: <span class="right-part">Da</span></div>
                  <div class="product-caption">Punjenje: <span class="right-part">Val opruge, sunđer</span></div>
                  <span class="product-price">23,453 USD <br> <span class="old-price">25.500 USD</span><br></span>
                  <span class="quick-icon">
                    <ul class="ul-color">
                      <li><a href="#"><i class="fas fa-eye"></i></a></li>
                      <li><a href="#"><i class="fas fa-heart"></i></a></li>
                      <li><a href="#"><i class="fas fa-cart-arrow-down"></i></a></li>
                    </ul>
                  </span>
                </div><!-- End product-desc -->
              </div><!-- End Card Body -->
              <span class="product-color">
                <ul class="ul-color">
                    <li><a href="#" class="orange active"></a></li>
                    <li><a href="#" @mouseover='showSecond=true' @mouseleave="showSecond = false" class="green"></a></li>
                    <li><a href="#" @mouseover='showThird=true' @mouseleave="showThird = false" class="yellow"></a></li>
                </ul>
              </span> 
            </div><!-- End Card -->  
          </div><!-- End .col -->
        </div><!-- end .row -->
      </div><!-- End .container -->
  </div>
</template>

<script>

export default {
    name:'MeblProducts',
    data: function() {
    	return {
          selectedCategory: 'TDF Garnitura', // Filtriranje proizvoda
          category: this.$route.params.category,
          subcategory: this.$route.params.subcategory
      }
    },
    watch: {
        '$route'(to, from) {
            this.subcategory = to.params.subcategory
            this.category = to.params.category
        },
    },
    computed: {
        filterFurniture(item) {
            var category = this.$route.params.category;
            var subcategory = this.$route.params.subcategory;

            if (subcategory === undefined){
              console.log("test1 plocasti")
              return this.$store.state.furniture.PlocastiNamestaj;
            }
            else if( item.subcategory === subcategory ) {
              // return this.$store.state.mebl.TapaciraniNamestaj;
              console.log("test " + subcategory)
                return this.$store.state.furniture.PlocastiNamestaj.filter(function(item) {
                 return item.subcategory === subcategory;
              });
            } 

        }
    },
    // computed: {
    //     filterFurniture(item) {
    //         var category = this.$route.params.category;
    //         var subcategory = this.$route.params.subcategory;
    //         console.log("test m")
    //         if(category == 'plocasti-namestaj' ) {
    //           return this.$store.state.furniture.PlocastiNamestaj;

    //         } else {
    //           return this.$store.state.furniture.PlocastiNamestaj.filter(function(item) {
    //              return item.subcategory === subcategory;
    //           });
    //         }
    //     }
    // },
    methods: {
        mouseOver(){
            this.showSecond = !this.showSecond; 
        }

    }
}
</script>

<style lang="scss" scope>
/* ---------- Tab/Products Content ---------- */
.card {
  border-radius: 2px;
  margin: 20px auto;
  max-width: 344px;
  &:hover {
    -webkit-box-shadow: 0 2px 6px rgba(0,0,0,.2);
    box-shadow: 0 2px 6px rgba(0,0,0,.2);
  }
}

.card-head {
  position: relative;
  height: 155px;
    .product-img {
        width: 100%;
        max-height: 100%;
        object-fit: contain !important;
    }
    .primary-thumb {
        opacity: 1;
        position: absolute
    }
    .secondary_thumb, .thiry_thumb {
        opacity: 1;
        position: absolute;
    }
}

.card-body {
  height: 190px;
  background: #fff;
  border-radius: 0 0 25px 25px;
  padding: 10px;
}

.product-title {
    padding: 5px 0 10px;
    display: block;
    color: #333;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
    border-bottom: 1px dashed lightgrey;
    text-align: left;
}

.product-title b {
  font-weight: 900;
  letter-spacing: 0px;
}

.badge {
    position: absolute;
    font-size: 15px;
    font-weight: 300;
    color: #fff;
    background: #ffdc12;
    padding: 7px 15px;
    border-radius: 2px;
    top: 10px;
    margin-left: 0px;
    left: 0;
}

.product-caption {
  display: block;
  padding: 0;
  font-size: 11px;
  font-weight: 400;
  text-transform: uppercase;
  text-align: left;
  border-bottom: 1px dashed lightgrey;
}

.product-price {
    padding: 15px 0;
    color: #333333;
    font-size: 17px;
    font-weight: 600;
    float: left;
}

.product-price i.grey {
  color: #acacab;
}

.product-size h4 {
  display: block;
  padding: 0 20px;
  font-size: 11px;
  font-weight: 400;
  text-transform: uppercase;
}

.ul-size {
  margin-left: 15px;
}

.ul-size li {
  list-style: none;
  float: left;
  margin-right: 20px;
}

.ul-size li a {
  display: inline-block;
  text-decoration: none;
  font-size: 11px;
  width: 22px;
  height: 22px;
  border-radius: 100%;
  text-align: center;
  line-height: 23px;
  color: #000;
}

.ul-size li a.active {
  background: #ffdc12;
  color: #fff;
}

.product-size:before,
.product-size:after {
  content: '';
  display: block;
  clear: both;
}

.product-color  {
    position: absolute;
    bottom: 180px;
    right: 5px;
    .ul-color li {
        list-style: none;
        display: inline-block;
        margin: 10px 5px;
    }
}

.ul-color {
  margin: 0;
  padding: 0;
}

.ul-color li {
    list-style: none;
    display: inline-block;
    margin: 10px;
}

.ul-color li a {
  display: inline-block;
  width: 16px;
  height: 16px;
  border-radius: 100%;
  &:hover {
      &:after {
        position: absolute;
        content: '';
        display: inline-block;
        border: 2px solid rgba(255,255,255, .5);
        width: 26px;
        height: 26px;
        border-radius: 100%;
        margin-left: -5px;
        margin-top: -5px;
      }
  }
}

.right-part {
    float: right;
}

.ul-color li a.orange {
  background: #f35e3d;
}

.ul-color li a.green {
  background: #11e95b;
}

.ul-color li a.yellow {
  background: #ffd414;
}

.ul-color li a.active:after {
    position: absolute;
    content: '';
    display: inline-block;
    border: 2px solid rgba(255,255,255, .5);
    width: 26px;
    height: 26px;
    border-radius: 100%;
    margin-left: -5px;
    margin-top: -5px;
}



.quick-icon {
    text-align: right;
    .ul-color {
        background: transparent;
        padding-right: 0;
        padding-top: 10px;
        li {
            display: inline-block;
            a i {
            color: #000;
            font-size: 17px;
        }
        } 
        a:hover {
            &:after{ display: none; }
            i { color: #ffdc12; }
        }
    }
}
.old-price {
    font-size: 14px;
    float: left;
    font-weight: 400;
}
.old-price:before {
    content: '';
    background: url('http://www.onlygfx.com/wp-content/uploads/2018/10/6-watercolor-x-brush-stroke-5.png') no-repeat;
    width: 35px;
    height: 24px;
    position: absolute;
    top: initial;
    -webkit-transform: translate(-50%,-50%);
    -moz-transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
    -o-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
    left: 35px;
    background-size: 100% 100%;
    bottom: 25px;
}

/* ---------- MEDIA QUERY ---------- */
@media (max-width: 1199px) and (min-width: 992px) {
    .card-body {
      padding: 0px;
    }
    .old-price:before {
      bottom: 42px;
      left: 40px;
    }
    .quick-icon .ul-color li {
      margin: 10px 8px;
    }
    .product-color {
      bottom: 245px;
      right: 15px;
    }
}
@media (max-width: 991px) and (min-width: 768px) {
    .quick-icon .ul-color li {
      margin: 10px 8px;
    }
    .product-color {
      bottom: 225px;
      right: 35px;
    }
}
</style>


