<template>
    <div id="QuickViewProductModal">
    <!-- The Modal -->
        <div class="modal isActive" v-if="showProductModal">
            <!-- Modal content -->
            <div class="modal-content">
                <div class="modal-header">
                  <span class="close" @click="closeProductModal()">&times;</span>
                </div>
                <div class="modal-body">
                   <div class="row">
                        <div class="col-12 col-sm-5"><!-- tabs -->
                            <div class="w3-content" style="max-width:1200px">
                                <div class="card-head">
                                    <img :src="product.currentImageModal" alt="Shoe" class="product-img">
                                </div>
                                <div class="row">
                                    <div class="col-sm-6" v-for="(image, index) in product.images" :key="image.id" :class="['thumbnail-image', (activeImage == index) ? 'active' : '']" @click="activateImageModal(image, product)">
                                        <img class="img-thumb" :src="image.thumb" alt="Some thumbnail">
                                    </div>
                                    <!-- <div class="col-sm-6 thumbnail-image" >
                                        <img class="img-thumb" src="https://images.pexels.com/photos/413727/pexels-photo-413727.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb" alt="Some thumbnail">
                                    </div>
                                    <div class="col-sm-6 thumbnail-image">
                                        <img class="img-thumb" src="https://images.pexels.com/photos/413727/pexels-photo-413727.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb" alt="Some thumbnail">
                                    </div> -->
                                </div>

                            </div><!-- End .w3-content -->
                        </div><!-- End col-12 col-sm-5 -->

                      <div class="col-12 col-sm-7">
                          <div class="quick-right">
                              <div class="quick-right-text">
                                    <h3><strong>{{ product.title }}</strong></h3>
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
        product: {
            type: Object
        },
        showProductModal: {
            type: Boolean,
        }
    },
    data () {
        return {
            productCounter: 0,
            quantity: '0',
        }
    },
    methods: {
        closeProductModal() {
            this.$emit('closeQuickViewModal');
        },
        activateImageModal(image, product) {
            product.currentImageModal = image.thumb;
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

#QuickViewProductModal {
    .card-head {
        height: 250px;
        .product-img{
            height: 250px;
        }
        
    } 
    .thumbnail-image .img-thumb{
        width: 100%;
        margin-top: 15px;
        cursor: pointer;
        &:hover {
            -webkit-box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
        }
    }
}



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

.img-thumb {
    max-height: 100px;
    max-width: 100%;
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
