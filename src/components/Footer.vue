<template>
<footer>
    <div class="footer-top">
        <div class="footer-dsc">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12 col-sm-4 col-md-3 col-lg-4">
                        <div class="single-text res-text">
                            <div class="footer-title">
                                <h4>Kontaktirajte nas</h4>
                            </div>
                            <div class="footer-text">
                                <ul>
                                    <li>
                                        <i class="fas fa-map-marker-alt"></i><span> Ive Lole Ribara 107, 25233 Ruski Krstur</span>
                                    </li>
                                    <li>
                                        <i class="fas fa-phone"></i><span> 025703089</span>
                                    </li>
                                    <li>
                                       <i class="fas fa-mobile-alt"></i><span>065/2703815</span>
                                    </li>
                                    <li>
                                        <i class="fas fa-envelope"></i><span>katarina.bocka@gmail.com</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-4 col-md-3 col-lg-2">
                        <div class="single-text res-text">
                            <div class="footer-title">
                                <h4>My Account</h4>
                            </div>
                            <div class="footer-text">
                                <ul>
                                    <li><a href="#">My Account</a></li>
                                    <li><a href="#">My Wishlist</a></li>
                                    <li><a href="#">My Account</a></li>
                                    <li><a href="#">My Account</a></li>
                                    <li><a href="#">Contact Us</a></li>   
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-4 col-md-3 col-lg-2">
                        <div class="single-text res-text">
                            <div class="footer-title">
                                <h4>Customer Service</h4>
                            </div>
                            <div class="footer-text">
                                <ul>
                                    <li><a href="#">Kako kupiti</a></li>
                                    <li><a href="#">Reklamacije</a></li>
                                    <li><a href="#">Dostava</a></li>
                                    <li><a href="#">Uslovi korišćenja</a></li>
                                    <li><a href="#">Politika privatnisti</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-4 col-md-3 col-lg-4">
                        <div class="single-text res-text">
                            <div class="footer-title">
                                <h4>Newsletter</h4>
                            </div>
                            <div class="footer-text">
                                <p>Prijavite se na našu newsletter listu i kao poklon 
                                    dobrodošlice dodeljujemo Vam vaučer u iznosu od 1.000 
                                    dinara koji možete iskoristiti za narednu online porudžbinu 
                                    veću od 20.000 dinara,
                                    Vaučer važi samo za jednu kupovinu.
                                </p>
                                <form id="newsletter">
                                    <input type="text" name="email" placeholder="Enter Your Email">
                                    <input class="send-btn" type="submit" value="submit">
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr class="duble-border">
            <div class="container">
                <div class="row">
                    <div class="col-md-4 col-12 bank-stuff">
                        <ul>
                            <li><a href="#"><img src="https://www.legend.rs/assets/images/bank/vbm_atmpos_wtbg_2c.jpg" alt=""></a></li>
                            <li><a href="#"><img src="https://www.legend.rs/assets/images/bank/mc_accpt_023_gif.gif" alt=""></a></li>
                            <li><a href="#"><img src="https://www.legend.rs/assets/images/bank/american_express_bluebox.png" alt=""></a></li>
                            <li><a href="#"><img src="https://www.legend.rs/assets/images/bank/ms_accpt_023_gif.gif" alt=""></a></li>
                            <li><a href="#"><img src="https://www.legend.rs/assets/images/bank/banca-intesa.png" alt=""></a></li>
                        </ul>
                    </div>
                     <div class="col-md-4 col-12 footer-bottom">
                        <p>© 2019 Izgled. All Rights Reserved.</p>
                    </div>
                    <div class="col-md-4 col-12 social-media">
                        <ul>
                            <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                            <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                            <li><a href="#"><i class="fab fa-pinterest"></i></a></li>
                            <li><a href="#"><i class="fab fa-youtube"></i></a></li>
                            <li><a href="#"><span id="backToTop"><i class="fas fa-angle-up"></i></span></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div><!-- End Footer Top -->
    <!-- <div class="footer-bottom">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xs-12">
                    <p>© 2019 <span>Izgled</span>. All Rights Reserved.</p>
                    
                </div>
            </div>
        </div>
        <a href="#"><span id="backToTop"><i class="fas fa-angle-up"></i></span></a>
    </div> -->
</footer>
</template>

<script>
export default {
  name: 'Footer',
  
}
</script>


<style scoped lang='scss'>
.footer-top {
    background: #131313;
    padding: 30px 0 0;
    .footer-title h4 {
        font-size: 16px;
        color: #fff;
        text-align: left;
        &:before {
            background: #ffdc12;
            width: 30px;
            height: 2px;
            content: '';
            position: absolute;
            top: 32px;
        }
    }
    .footer-text {
        text-align: left;
        margin-top: 30px;
        color: #fff;
        font-size: 12px;
        font-weight: 300;
        ul {
            padding: 0;
            li {
                list-style: none;
                padding: 1px 0px;
                letter-spacing: .5px;
                a {
                    color: #fff;
                }
                .fa-map-marker-alt { padding-right: 8px; }
                .fa-phone { padding-right: 4px; }
                .fa-mobile-alt { padding-right: 11px; }
                .fa-envelope { padding-right: 7px; }
            }
        }
        p { letter-spacing: .5px; }
    }
}
.duble-border {
    border-top: 1px solid #424242;
}
.footer-bottom {
    background: #131313;
    p { 
        color: #fff;
        font-weight: 300;
        font-size: 13px;
        line-height: 2;
        letter-spacing: 0.3px;
    }
}
#newsletter {
    justify-content: flex-end;
    display: flex;
    input {
        background: #333;
        padding: 5px 20px;
        border: 2px solid #333;
        color: #fff;
        border-bottom-left-radius: 0px;
        border-top-left-radius: 0px;
        width: 70%;
    }
    input:focus {
        border: 1px solid#fff;
        box-shadow: none;
        outline: none;
    }
    .send-btn {
        border-bottom-left-radius: 0px;
        border-top-left-radius: 0px;
        border-bottom-right-radius: 0px;
        border-top-right-radius: 0px;
        border-left: none;
        width: 30%;
        background: #131313;
        &:hover {
            color: #ffdc12;
            cursor: pointer;
        }
    }
 
}
.single-text ul li a:hover {
    text-decoration: none ; 
    color: #ffdc12;
}
.bank-stuff {
    height: 40px;
    ul {
        display: flex;
        justify-content: flex-start;
        padding-left: 0;
        li {
            list-style: none;
            display: inline;
            padding-right: 10px;
            a img {
                height: 18px;
                filter: grayscale(1);
                &:hover {
                    filter: none;
                }
            }
        
        }
    } 
}
.social-media {
    ul {
        display: flex;
        justify-content: flex-end;
        padding-left: 0;
        position: relative;
        li {
            list-style: none;
            display: inline;
            padding-left: 15px;
            a {
                color: #fff;
                &:hover {
                    i { color: #ffdc12; }
                    // .fa-facebook-f { color:	#3b5998; }
                    // .fa-instagram { color: #e4405f }
                    // .fa-pinterest { color: #bd081c }
                    // .fa-youtube { color: #cd201f }
                }
            }
        }
    } 
}
#backToTop {
    // background: #000;
    padding: 10px 13px 5px;
    border-radius: 2%;
    border: 1px solid #ffdc12;
    border-right: 0;
    position: fixed;
    bottom: 190px;
    right: 0;
    color: #ffdc12;
    i { font-size: 26px; }
    &:hover {
        background: #ffdc12;
        i { color: #fff; }
    }
}
 
</style>

