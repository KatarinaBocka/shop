<template>
  <div id="singleProduct">
    <div class="gradient-div"></div>
    <section class="shop-single-img-area">
      <div class="container">
        <div class="row">
            <div class="col-md-12 text-center">
              <h1></h1>
            </div>
        </div>
      </div>
    </section>

    <div id="single-product-page-wrapper">
      <div class="container">
        <!-- Main row-wrapp -->
        <div class="row">
          <div class="col-lg-12">
            <div class="single-product-page-content">
              <div class="row">
                 <!-- Left col -->
                <div class="col-lg-6">
                  <div class="product-image-carousel">
                    <img :src="singleProduct.currentImage" alt="Shoe"  class="product-img">
                  </div>
                  <div class="row pro-img-nav">
            
                    <div class="col-sm-3 col-3 thumbnail-image" >
                        <img class="img-thumb" src="https://www.ikea.com/PIAimages/0447375_PE597300_S5.JPG" alt="Some thumbnail">
                    </div>
                    <div class="col-sm-3 col-3 thumbnail-image">
                        <img class="img-thumb" src="https://www.ikea.com/PIAimages/0447378_PE597298_S5.JPG" alt="Some thumbnail">
                    </div>
                    <div class="col-sm-3 col-3 thumbnail-image" >
                        <img class="img-thumb" src="https://www.ikea.com/PIAimages/0447457_PE597297_S5.JPG" alt="Some thumbnail">
                    </div>
                    <div class="col-sm-3 col-3 thumbnail-image">
                        <img class="img-thumb" src="https://www.ikea.com/rs/sr/images/products/evertsberg-trosed-lezaj-s-odlaganjem-bez__0447458_PE597294_S4.JPG" alt="Some thumbnail">
                    </div>
                  </div>
                </div>
                <!-- End Left col -->

                <!-- Right col -->
                <div class="col-lg-6">
                  <div class="product-details">
                    <div class="row mx-0">
                      <div class="col-12">
                        <h2>{{ singleProduct.name }}</h2>
                        <span class="product-subcategory">{{ singleProduct.subcategory.split('-').join(' ') }}</span><br>
                        <span class="product-sku-status"><span class="label">Šifra:</span> SKU MH03</span>
                        <div class="price-group">
                          <div class="price">{{ singleProduct.price }} USD</div>
                          <del class="price sale-price">{{ singleProduct.oldPrice }} USD</del>
                        </div><!-- End price-group -->  
                      </div><!-- End col-12 -->
                    </div><!-- End row -->
                    
                    <!-- Product Color -->
                    <div class="row color-sec mx-0">
                      <div class="col-md-12 col-12 pt-3 color-group">
                        <span>Raspoloživo u sledećim bojama:</span>
                          <ul>
                            <a class="s-product-color active" href="#"><li><img src="https://www.nefa.rs/files/images/dezeni/BONN-86.jpg" alt=""></li></a> 
                            <a class="s-product-color" href="#"><li><img src="https://www.nefa.rs/files/images/dezeni/GRANDE-81-EASY-CLEAN.jpg" alt=""></li></a>
                            <a class="s-product-color" href="#"><li><img src="https://www.nefa.rs/files/images/dezeni/BONN-24.jpg" alt=""></li></a>
                          </ul>
                      </div>
                    </div>
                    <!-- End Product Color -->
                  
                    <div class="row product-features mx-0">
                      <div class="col-lg-8 col-md-6 col-7">
                          <ul>
                            <li class="single-quantity">
                                <form action="#">
                                    <button class="dec-btn qtybutton" @click.prevent="decrease"><i class="fas fa-minus"></i></button>
                                    <input type="text" v-model="quantity" value="0"  name="qtybutton" class="plus-minus-box">
                                    <button class="inc-btn qtybutton" @click.prevent="increase"><i class="fas fa-plus"></i></button>
                                </form>
                                <a class="s-shop-btn" href="#"><span><i class="fas fa-shopping-cart"></i> Kupi </span></a>
                            </li>
                          </ul>
                      </div><!-- End .col -->

                      <div class="col-lg-4 col-md-6 col-5">
                          <div class="product-detail-links">
                            <a href="" class="prod-link"><span><i class="fas fa-question"></i></span>Kako da porucim?</a>
                            <a href="" class="prod-link"><span><i class="fas fa-truck"></i></span>Dostava</a>     
                            <a href="" class="prod-link"><span><i class="fas fa-heart"></i></span>Dodaj u listu želja</a>
                          </div>
                      </div><!-- End .col -->
                      </div>
                      
                      <!-- Social Media Icon -->
                      <div class="col-12 s-icon d-flex justify-content-end">
                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-linkedin-in"></i></a>
                      </div>
                      <!-- End Social Media Icon -->
                  
                  </div>

                </div><!-- End Right col -->
              </div><!-- End row -->

              <!-- ////// PRODUCT DESCRIPTION ////// -->
              <div class="row">
                <div class="col-lg-12">
                  <!-- Product Full Description Start -->
                    <div class="product-full-info-reviews">
                      <!-- Single Product tab Menu -->
                      <div class="nav" id="nav-tab" >
                        <a href="#specification" @click='showSpecification=true, showInformation=false ' :class="{active: showSpecification }">Dimenzije</a>
                        <a href="#description" @click='showInformation=true, showSpecification=false' :class="{active: showInformation}">O proizvodu</a>
                      </div>
                      <!-- End Single Product tab Menu -->

                      <!-- Single Product tab Content -->
                      <div class="tab-content" id="nav-tabContent">
                        <div v-if='showSpecification' class="tab-pane active" id="specification">
                          <div class="row">
                            
                            <div class="col-md-6">
                              <img class="furniture-dimension-skica" src="https://d2cquv6wfilehq.cloudfront.net/media/wysiwyg/cad/walters/Walters-Sectional-Right-2.png" alt="">
                            </div>
                            <div class="col-md-4">
                              <ul class="furniture-dimensions">
                                <li><span>Širina:</span> 250cm</li>
                                <li><span>Dubina:</span> 200cm</li>
                                <li><span>Visina:</span> 70cm</li>
                                <li><span>Dubina sedalnog dela:</span> 60cm</li>
                                <li><span>Površina za spavanje:</span> 200x140cm</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div v-if='showInformation' class="tab-pane active"  id="description">
                          <strong>Dizajn</strong>
                          <ul>
                            <li>Moderna i kompaktna ugaona garnitura za manje stanove.</li>
                            <li>Univerzalan levi/desni ugao: položaj lenjivca se može menjati prilikom promene rasporeda nameštaja.</li>
                          </ul>
                          <strong>Povrsina za spavanje</strong>
                          <ul>
                            <li>Lako se transformiše u površinu za spavanje dimenzija 140x200 cm.</li>
                          </ul>
                          <strong>Prakticno za odlaganje stvari</strong>
                          <ul>
                            <li>Prostrana kutija od univera za odlaganje posteljine i drugih stvari.</li>
                          </ul>
                          <strong>Materijali i izrada</strong>
                          <ul>
                            <li><strong>Val opruga: </strong> Nezavisne elastične i pouzdane val opruge italijanskog proizvođača obezbeđuju potporu upravo tamo gde je ona potrebna</li>
                            <li><strong>Sunđer: </strong> Sunđer: osnova sedišta od poliuretanske pene za jednaku mekoću na svim delovima sedišta i postojan komfor.</li>
                            <li><strong>Ram: </strong> Ram: lak, otporan na opterećenje, sačinjen od višeslojne brezove šperploče, povezan lepkom i metalnim klamericama i ojačan na svim strukturnim delovima.</li>
                            <li><strong>Ojačanja: </strong> Ojačanja: ram je dodatno ojačan čeličnim elementima za maksimalnu stabilnost.</li>
                          </ul>
                          <strong>ŠTOF </strong>
                          <ul>
                            <li>Štof za tapaciranje koji karakteriše velika otpornost na habanje i trenje, veoma pogodan za korišćenje i održavanje.</li>
                            <li>Odgovara evropskom standardu REACH i međunarodnom standardu 100 OEKO-TEX: bezbedno po zdravlje ljudi - ne sadrži formaldehide, azo boje, pentahlorfenol,kadmijum, nikal i druge štetne hemijske supstance.</li>
                            <li>Ram: lak, otporan na opterećenje, sačinjen od višeslojne brezove šperploče, povezan lepkom i metalnim klamericama i ojačan na svim strukturnim delovima.</li>
                          </ul>
                          <strong>Jastucu </strong>
                          <ul>
                            <li>Veliki jastuci pružaju podršku i omogućavaju regulisanje uspravljenosti ili nagetosti tela.</li>
                            <li>Ispuna od nezavisnih vlakana sa silikonskim nanosom omogućava da se jastuk brzo vrati u prvobitan oblik - dovoljno je samo s vremena na vreme protresti jastuk. </li>
                          </ul>
                          
                        </div>
                      </div>
                      <!-- End Single Product tab Content -->
                    </div>
                  <!-- Product Full Description Start -->
                </div>
              </div>
            </div><!-- End container -->
          </div>
        </div>
      </div>
    </div><!-- #single-product-page-wrapper -->
  </div>
</template>

<script>

export default {
  name: 'SingleProduct',
  data: function() {
		return {
      showSpecification: true,
      showInformation: false,
      productCounter: 0,
      quantity: '0',
    }
  },
  computed: {
    singleProduct() {
      const id = parseInt(this.$route.params.id);
      return this.$store.state.mebl.TapaciraniNamestaj.filter(function(product) {
        return product.id === id;
        // console.log(id)
      })[0];
    },
    modifiedSubcategory() {
      const id = parseInt(this.$route.params.id);
      return this.$store.state.mebl.TapaciraniNamestaj.filter(function(product) {
        return product.id === id;
        console.log(id)
      })[0];
      return singleProduct.subcategoty('').reverse().join('');
    }
  },
  methods: {
    increase() {
      this.quantity++;
      this.quantity;
    },
    decrease() {
      if(this.quantity > 0) {
          this.quantity--;
      }
    }
  }
  
  
  
}

</script>

<style scoped lang="scss">

#singleProduct {
  min-height: 1500px;
  .shop-single-img-area {
    background-image: url('../../../public/single-shop.jpg');
    padding: 200px 0 100px;
    background-position: center top;
    background-repeat: no-repeat;
    // background-size: cover;
    // background-color: rgba(0,0,0, .8);
    position: relative;
    &:before {
        background: rgba(0, 0, 0, 0.3) none repeat scroll 0 0;
        content: "";
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;
    }
    h1 {
        color: #fff;
        font-size: 40px;
        font-style: normal;
        font-weight: normal;
        line-height: 40px;
        margin: 0;
        opacity: 1;
        padding: 0;
        text-transform: uppercase;
    }
  }
  .page-header-wrapper {
    background: #eaeaea;
    color: #222;
    padding: 1rem 0;
  }
}

.product-image-carousel {
  .product-img {
    max-width: 100%;
    
  }
}
.pro-img-nav {
  .thumbnail-image {
    .img-thumb {
      max-width: 100%;
      border: 1px solid #eee;
      &:hover {
        cursor: pointer;
        opacity: .5;
      }
    }
  }
}

.single-product-page-content {
  text-align: left;
  margin-top: 50px;
    .product-details {
        padding-top: 50px;
        margin-bottom: 0;
        h2 {
          font-size: 18px;
          text-transform: uppercase;
          font-weight: 600;
        }
        .price-group {
          position: relative;
          margin-bottom: 15px;
          // border-bottom: 1px solid #9b9b9b;
          padding-top: 20px;
          // padding-bottom: 20px;
          .price {
            font-size: 20px;
            font-weight: 400;
          }
          .sale-price {
           color: #999;
           font-size: 16px;
           font-weight: 400;
          }
        }
      .product-sku-status {
        color: #222;
        font-weight: 400;
        font-size: 14px;
        .label {
          color: #999;
          width: 40px;
          font-weight: 400;
          font-size: 14px;
          display: inline-block;
        }
      }
      .product-subcategory {
        color: #999;
        font-weight: 400;
        font-size: 14px;
        display: inline-block;
      }
      .product-desc {
        font-size: 13px;
      }
    }
}

.color-sec {
  border-top: 1px solid #9b9b9b;
}

.single-quantity {
  form { 
    display: inline-block;
    margin-right: 20px;
    input {
      width: 60px;
      color: #000;
      text-align: center;
      // margin-right: 5px !important;
      border: 1px solid #999;
      border-right: none;
      border-left: none;
      padding: 5px;
    }
    .qtybutton {
      background: #fff;
      color: #999;
      border: 1px solid #999;
      width: 36px;
      height: 36px;
      
      // margin-right: 5px !important;
    }
  }
}

.product-detail-links {
  display: block;
  float: right;
  .prod-link {
    display: block;
    width: 150px;
    font-size: 11px;
    margin-bottom: 20px;
    position: relative;
    text-decoration: none;
    color: #222;
    span {
      width: 25px;
      display: inline-block;
    }
  }
  .prod-link:after {
    content: "";
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 100%;
    height: 1px;
    border-bottom: 1px solid #9b9b9b;
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
    transition: -webkit-transform .15s ease-in-out;
    transition: transform .15s ease-in-out;
    transition: transform .15s ease-in-out,-webkit-transform .15s ease-in-out;
  }
  .prod-link:hover {
    &:after {
      -webkit-transform: scaleX(1.1);
      transform: scaleX(1.1);
    }
  }
}

.color-group span {
  font-size: 14px;
}

.s-product-color li {
  display: inline-block;
  margin-top: 10px;
  img {
    border-radius: 50%;
    height: 30px;
    width: 30px;
    margin-right: 5px;
  }
}
.s-product-color.active li img {
    -webkit-box-shadow: 0px 0px 3px 1px rgba(0,0,0,0.5);
    -moz-box-shadow: 0px 0px 3px 1px rgba(0,0,0,0.5);
    box-shadow: 0px 0px 3px 1px rgba(0,0,0,0.5);
    border: 2px solid #ffffff;
}

.s-shop-btn {
    display: inline-block;
    border: 1px solid #ffd414;
    height: 35px;
    width: 132px;
    display: inline-block;
    background: #ffd414;
    color: #fff;
    text-align: center;
    padding-top: 5px;
    text-transform: uppercase;
    font-weight: 600;
  a {
    color: #fff;
    border: 1px solid #ffd414;
    background: #ffd414;
    width: 100%;
    display: block;
    text-align: center;
    padding: 5px 0;
    &:hover {
      text-decoration: none;
      background: transparent;
      color: #ffd414;
    }
  }
}

.s-icon {
  display: inline-block;
  padding-left: 0px;
  a {
    color: #222;
    // border: 1px solid #999;
    background: #fff;
    width: 20px;
    height: 36px;
    display: block;
    text-align: center;
    padding: 5px 0;
    margin-right: 7px;
    display: inline-block;
    &:hover {
      i {
          color: #ffd414;
      }
    }
  }

  @keyframes toBottomFromTop {
      49% {
          transform: translateY(100%);
      }
      50% {
          opacity: 0;
          transform: translateY(-100%);
      }
      51% {
          opacity: 1;
      }
  }

  .s-cart-btn a {
    border: 1px solid #ffd414;
    height: 35px;
    width: 132px;
    display: inline-block;
    background: #fff;
    color: #ffd414;
    text-align: center;
    padding-top: 5px;
    text-transform: uppercase;
    font-weight: 600;
  }
}

.single-buy-btn {
  .s-cart-btn a {
  border: 1px solid #ffd414;
  height: 35px;
  width: 132px;
  display: inline-block;
  background: #fff;
  color: #999;
  text-align: center;
  padding-top: 7px;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 13px;
  &:hover {
    background: #ffd414;
    color: #fff;
  }
}
} 

input:focus { 
    background-color: #fff !important;
    border: 1px solid #999 !important;
}

.product-features {
  border-top: 1px solid #9b9b9b;
  // border-bottom: 1px solid #9b9b9b;
  padding-top: 30px;
  padding-bottom: 10px;
  // margin-bottom: 40px;
}


/* Product Description i specification */
.product-full-info-reviews {
  margin-top: 50px;
  margin-bottom: 50px;
  .nav {
    background: #eaeaea;
    border: 1px solid #9b9b9b;
    border-bottom: none;
    a {
      color: #222222;
      padding: 20px 35px;
      text-transform: uppercase;
      font-size: 1rem;
      line-height: 1.5;
      font-weight: 700;
      &:hover {
        color: #222222;
        background: #fff;
        // border-left: 1px solid #9b9b9b;
        // border-right: none;
        // border-top: 1px solid #eaeaea;
      }
    }
    a.active {
      color: #222222;
      background: #fff;
      // border-left: 1px solid #9b9b9b;
      border-top: 1px solid #eaeaea;
    }
  }
  .tab-content {
    border: 1px solid #9b9b9b;
    border-top: none;
    padding: 0 30px;
  }

  #specification span {
    width: 200px;
    display: inline-block;
  }
  .furniture-dimension-skica {
    max-width: 100%;
  }
  .furniture-dimensions {
    margin-top: 50px;
    li {
      border-bottom: 1px dashed #999;
      padding: 10px 0px 0 20px;
      font-size: 13px;
    }
  }

}

/* ***** O Proizvodu ***** */
#description {
  padding: 40px 30px;
  ul {
    padding-left: 35px;
    padding-top: 20px;
    padding-bottom: 20px;
    margin-bottom: 20px;
    border-bottom: 1px solid #eaeaea;
  }
  li {
    font-size: 13px;
    list-style: inherit;
  }
}
#description ul:last-child {
  border-bottom: none;
}

/* ---------- MEDIA QUERY ---------- */
@media (min-width: 1200px) {

}
@media (max-width: 1199px) and (min-width: 992px) {
  .single-quantity form {
    margin-bottom: 24px;
  }
}
@media (max-width: 991px) and (min-width: 768px) {

}
@media (max-width: 767px) {
  .single-quantity form {
    margin-bottom: 24px;
  }
  .product-full-info-reviews .nav a {
    width: 50%;
    text-align: center;
  }
  .product-full-info-reviews .furniture-dimensions {
    margin-top: 0px;
  }
  .tab-pane {
    padding: 20px 0;
  }
}
@media (max-width: 430px) {
  .single-quantity form .plus-minus-box {
    width: 35px;
  }
  .s-shop-btn {
    width: 107px;
  }
  .product-detail-links .prod-link {
    width: 130px;
  }
}

</style>


