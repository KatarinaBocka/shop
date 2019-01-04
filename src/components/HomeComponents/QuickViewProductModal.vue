<template>
    <div id="QuickViewProductModal">
    <!-- The Modal -->
        <div id="myModal" class="modal isActive" v-if="showProductModal">
            <!-- Modal content -->
            <div class="modal-content">
                <div class="modal-header">
                  <span class="close" @click="closeProductModal()">&times;</span>
                </div>
                <div class="modal-body">
                   <div class="row">
                        <div class="col-12 col-sm-5"><!-- tabs -->
                            <div class="w3-content" style="max-width:1200px">



                                <QuickViewProductModalTabs>

                                    <!-- <div>
                                        <QuickViewProductModalTab v-for="(productImage, index) in images" :key="index" title="slika1" :name="name[0]" :selected="true">
                                            <img class="currentSlide" :src="images[0]" style="width:100%">
                                        </QuickViewProductModalTab>
                                    </div> -->
                                   

                                    <QuickViewProductModalTab title="slika1" :images="images[0]" :name="name[0]" :selected="true">
                                        <img class="currentSlide" :src="images[0]" style="width:100%">
                                    </QuickViewProductModalTab>

                                    <QuickViewProductModalTab title="slika2" :images="images[1]" :name="name[1]">
                                        <img class="currentSlide" :src="images[1]" style="width:100%">
                                    </QuickViewProductModalTab>

                                    <QuickViewProductModalTab title="slika3" :images="images[2]" :name="name[2]">
                                        <img class="currentSlide" :src="images[2]" style="width:100%">
                                    </QuickViewProductModalTab>
                                </QuickViewProductModalTabs>
                            </div><!-- End .w3-content -->
                        </div><!-- End col-12 col-sm-5 -->

                      <div class="col-12 col-sm-7">
                          <div class="quick-right">
                              <div class="quick-right-text">
                                    <h3><strong>product name title</strong></h3>
                                    <div class="amount">
                                      <h4>$65.00</h4>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quod voluptatibus laboriosam sequi obcaecati dolore cupiditate, 
                                        autem amet adipisci consequatur itaque asperiores aliquid ullam perspiciatis corrupti. Saepe assumenda eius corrupti.
                                    </p>
                                    <div class="row row-desc">
                                        <div class="col-sm-6">
                                            <div class="por-left">
                                                <ul>
                                                    <li><span>Availability:</span> Nesto</li>
                                                    <li><span>Condition:</span> Nesto</li>
                                                    <li><span>Category:</span> Nesto</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="por-right">
                                                <ul>
                                                    <li><span>Color:</span> Nesto</li>
                                                    <li><span>Size:</span> Nesto</li>
                                                    <li><span>Tag:</span> Nesto</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Button Row -->
                                    <div class="row row-desc">
                                        <div class="col-sm-6">
                                            <div class="por-left">
                                                <ul>
                                                    <li><span>Quantity:</span>
                                                        <form action="#">
                                                            <button class="dec-btn qtybutton" @click.prevent="decrease"><i class="fas fa-minus"></i></button>
                                                            <input type="text" v-model="quantity" value="0"  name="qtybutton" class="plus-minus-box">
                                                            <button class="inc-btn qtybutton" @click.prevent="increase"><i class="fas fa-plus"></i></button>
                                                        </form>
                                                    </li>
                                                    <li>
                                                        <span>Share:</span> 
                                                        <a href="#"><i class="fab fa-facebook-f"></i></a> 
                                                        <a href="#"><i class="fab fa-instagram"></i></a>
                                                        <a href="#"><i class="fab fa-linkedin-in"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="por-right">
                                                <ul>
                                                    <li>
                                                        <a href="#"><i class="fas fa-heart"></i></a>
                                                        <a href="#"><i class="fas fa-envelope"></i></a>
                                                    </li>
                                                    <li class="cart-btn"><a href="#"><i class="fas fa-shopping-cart"></i> Add to Cart</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                              </div>
                          </div>
                    </div>
                  </div>
                </div><!-- End Modal Body -->
            </div><!-- End Modal Content -->
        </div><!-- End Modal -->
    <div>

  </div>
  </div>
</template>

<script>

import QuickViewProductModalTabs from '../HomeComponents/QuickViewProductModalTabs'
import QuickViewProductModalTab from '../HomeComponents/QuickViewProductModalTab'
export default {
    name: 'QuickViewProductModal',
    components: {
        QuickViewProductModalTabs, // tabs
        QuickViewProductModalTab, // tab
    },
    props: {
        showProductModal: {
            type: Boolean,
        }
    },
    data () {
        return {
            productCounter: 0,
            quantity: '0',
            // images: [
            //     { name: 'About Us', url: 'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' },
            //     { name: 'About Our Culture', url: 'https://images.pexels.com/photos/373530/pexels-photo-373530.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260' },
            //     { name: 'About Our Vision', url: 'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' },
            // ],

            activeSlide: 1,
            name: ['About Us', 'About Our Culture', 'About Our Vision'],
            titles: ['slika1', 'slika2', 'slika3'],
            images: [
                'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                'https://images.pexels.com/photos/373530/pexels-photo-373530.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
                'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            ],
        }
    },
    methods: {
        closeProductModal() {
            this.$emit('closeQuickViewModal');
        },
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
.card-footer {
    background: #FFF;
}
#QuickViewProductModal {
    .isActive {
        display: block;
    }
}

.mySlides { 
    display: none; 
}

.currentSlide {
    display: block !important;
    height: 240px;
    object-fit: cover;
    margin-bottom: 1rem;
}
.modal-images {
    margin-top: 20px;
}
.modal-img {
    height: 70px;
    object-fit: cover;
}

    
.modal {
    display: none; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 100; /* Sit on top */
    padding-top: 100px; /* Location of the box */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.5); /* Black w/ opacity */
    margin: auto;
    .modal-content {
        max-width: 1100px;
        position: relative;
        background-color: #fff;
        margin: auto;
        padding: 0;
        border: 1px solid #888;
        border-radius: 2px;
        width: 80%;
        -webkit-box-shadow: 0 5px 15px rgba(0,0,0,0.5);
        box-shadow: 0 5px 15px rgba(0,0,0,0.5);
        -webkit-animation-name: animatetop;
        -webkit-animation-duration: 0.4s;
        animation-name: animatetop;
        animation-duration: 0.4s;
        .modal-header {
            border: none;
            .close:hover {
                color: #ffdc12;
            }
        }
        .modal-body {
            padding: 1rem 2rem;
           .quick-right-text {
               text-align: left;
               h3, .amount h4 {
                   text-transform: uppercase;
                   font-weight: 600;
                   color: #333;
                   font-size: 24px;
               }
               .amount {
                   border-bottom: 1px solid #ccc;
                   margin-bottom: 20px;
                   padding: 20px 0;
               }
               p {
                    font-weight: 500;
                    line-height: 21px;
                    color: #666666;
                    font-size: 14px;
                    border-bottom: 1px solid #ccc;
                    margin-bottom: 20px;
                    padding: 0 0 20px;
               }
               .row-desc {
                    border-bottom: 1px solid #ccc;
                    margin-bottom: 20px;
                    padding: 0 0 20px;
                    margin-right: 0;
                    &:last-child { border: none; }
                    ul {
                        padding-left: 0;
                        li { 
                            margin-bottom: 5px;
                            list-style: none;
                            font-weight: 500;
                            color: #666666;
                            font-size: 13px;
                            span {
                                width: 100px;
                                display: inline-block;
                            }
                            a { 
                                margin-right: 10px;
                             }
                        }
                    }
                    .por-left, .por-right {
                        li { margin-bottom: 15px; }
                        form {
                            display: inline-block;
                            // button { line-height: 14px; padding-top: 4px; }
                            button, input{
                                background: transparent;
                                border: 1px solid #999;
                                height: 30px;
                                width: 30px;
                                margin-right: 5px !important;
                                text-align: center;
                                color:#333;
                                font-weight: 600;
                                i { color:#999; }
                            }
                            input {
                                padding: 5px 0 4px;

                            }
                            button:hover {
                                background: #ffdc12;
                                border: 1px solid #ffdc12;
                                cursor: pointer;
                                i { color: #fff; }
                            }
                        }
                        a {
                            background: transparent;
                            border: 1px solid #999;
                            height: 30px;
                            width: 30px;
                            margin-right: 5px !important;
                            text-align: center;
                            display: inline-block;
                            padding-top: 5px;
                            color: #999;
                            i { font-size: 15px }
                            &:hover {
                                border: 1px solid #ffdc12;
                                background: #ffdc12;
                                color: #fff;
                                i {
                                    animation: toBottomFromTop 0.4s forwards;
                                }
                            }
                            
                        }
                        .cart-btn {
                            a {
                                width: 110px;
                                background: #ffdc12;
                                border: 1px solid #ffdc12;
                                color: #fff;
                                text-transform: capitalize;
                                font-weight: 600;
                                &:hover {
                                    i {
                                        animation: none;
                                    }
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
                    }    
               }
           } 
        }
    }
}


/* ---------- MEDIA QUERY ---------- */
// @media (max-width: 1199px) and (min-width: 992px) {
//     .modal-content {
//         max-width: 900px;
//     }
// }
// @media (max-width: 991px) and (min-width: 768px) {
//     .modal-content {
//         max-width: 700px;
//     }
// }
// @media (max-width: 767px) {

// }


</style>
