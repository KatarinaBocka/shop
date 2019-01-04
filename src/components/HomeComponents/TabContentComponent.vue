<template>
  <div class="container" id="TabContentComponent">
    <div class="row tab-content">
      <div class="col-lg-4 col-md-6 col-sm-12 col-12" v-for="product in this.$store.state.products" :key="product.id">
        <div class="card">
          <div class="card-head">
            <img :src="product.currentImage" alt="Shoe" class="product-img">
            <span class="badge">New</span>
          </div>
          <div class="card-body">
            <div class="product-desc">
              <div class="product-title">Ugaona garnitura: <span class="right-part">{{ product.info[0].title }}</span></div>
              <div class="product-caption">Dimenzije: <span class="right-part">{{ product.info[0].dimensions }}</span></div>
              <div class="product-caption">Mehanizam: <span class="right-part">{{ product.info[0].mehanizam }}</span></div>
              <div class="product-caption">Kutija za posteljinu: <span class="right-part">{{ product.info[0].kutijaZaPosteljinu }}</span></div>
              <div class="product-caption">Punjenje: <span class="right-part">{{ product.info[0].punjenje }}</span></div>
              <span class="product-price">{{ product.info[0].price }} USD <br> <span class="old-price">{{ product.info[0].oldPrice }} USD</span><br></span>
              <span class="quick-icon">
                <ul class="ul-color">
                  <li><a @click.prevent="openModal(product)"><i class="fas fa-eye"></i></a></li>
                  <li><a href="#"><i class="fas fa-heart"></i></a></li>
                  <li><a href="#"><i class="fas fa-cart-arrow-down"></i></a></li>
                </ul>
              </span>
            </div><!-- End product-desc -->
          </div><!-- End Card Body -->
          <span class="product-color">
            <ul class="ul-color">
                <li v-for="(image, index) in product.images" :key="image.id" :class="['thumbnail-image', (activeImage == index) ? 'active' : '']" @click="activateImage(image, product)">
                  <img class="img-color" :src="image.colorImg" alt="Some thumbnail">
                </li>
            </ul>
          </span> 
        </div><!-- End Card -->
         <Modal :product="product" :showProductModal="product.showQuickViewModal" @closeQuickViewModal="product.showQuickViewModal = $event"/>
      </div><!-- End .col -->
      <!-- <QuickViewProductModal :showProductModal="showQuickViewModal" @closeQuickViewModal="showQuickViewModal = $event"/> -->
     

      <!-- Modal -->
        
      <!-- End Modal -->

    </div><!-- End .row -->
  </div><!-- End Container -->
</template>

<script>
import QuickViewProductModal from '../HomeComponents/QuickViewProductModal'
import Modal from '../HomeComponents/Modal'
export default {
  name: 'TabContentComponent',
  components: {
    QuickViewProductModal,
    Modal
  },
  data () {
    return {
      // showQuickViewModal: false,
      activeImage: 0
    }
  },
  methods: {
    openModal(product) {
      product.showQuickViewModal = !product.showProductModal;
    },
    closeProductModal(product) {
      product.showProductModal = !product.showProductModal;
    },
    activateImage(image, product) {
      product.currentImage = image.thumb;
    }
  }
}
</script>


<style scoped lang="scss">
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
  height: 210px;
    .product-img {
        width: 100%;
        height: 210px;
        object-fit: cover;
    }
}

.card-body {
  height: 215px;
  background: #fff;
  border-radius: 0 0 25px 25px;
}

.product-title {
    padding: 0px 20px 5px 20px;
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
  padding: 0px 20px 0px;
  font-size: 11px;
  font-weight: 400;
  text-transform: uppercase;
  text-align: left;
  border-bottom: 1px dashed lightgrey;
}

.product-price {
    padding: 15px 20px;
    color: #333333;
    font-size: 20px;
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
    bottom: 210px;
    right: 40px;
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

.ul-color li .img-color {
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
        margin-left: -13px;
        margin-top: -5px;
      }
  }
}

.right-part {
    float: right;
}
.img-color {
    width: 20px;
    height: 20px;
    border-radius: 100%;

}

.quick-icon {
    text-align: right;
    .ul-color {
        background: transparent;
        padding-right: 20px;
        padding-top: 10px;
        li {
            display: inline-block;
            a i {
            color: #000;
            font-size: 18px;
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
    left: 65px;
    background-size: 100% 100%;
    bottom: 30px;
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
