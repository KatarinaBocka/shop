<template>
    <div id="header">
        <!-- <div class="gradient-div"></div> -->
        <div class="header-top">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 col-sm-4">
                        <div class="left-header">
                            <ul class="list-inline">
                                <li><a href="#"><i class="fas fa-phone"></i>065/2703815</a></li>
                                <li><a href="#"><i class="fas fa-envelope"></i>izgled@gmail.com</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-8">
                        <div class="right-header">
                            <ul class="list-inline">
                                <li><a href="#"><i class="fas fa-user"></i>My Account</a></li>
                                <router-link tag="li" class="nav-link" to="/shopping-cart" exact><a href="#"><i class="fas fa-shopping-cart"></i>My Cart</a></router-link>
                                <!-- <li><a href="#"><i class="fas fa-shopping-cart"></i>My Cart</a></li> -->
                                <li><a href="#"><i class="fas fa-heart"></i>My Wishlist</a></li>
                                <li><a href="#"><i class="fas fa-lock"></i>Login</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="header-bottom" id="sticky-meni" :class="{sticky: scrollPosition > 65}">
            <div class="container relative">
                <div class="row">
                    <div class="col-4 col-sm-2 col-md-2 d-flex justify-content-start">
                        <div class="logo"><a href="#"><img src="http://www.izgled.rs/wp-content/uploads/2017/03/logo-web-site.png" alt="namestaj"></a></div>
                    </div>
                    <div class="col-8 col-sm-10 col-md-10 d-flex justify-content-end">
                        <div class="all-menu-area">
                            <div class="main-menu hidden-sm hidden-xs">
                                <nav>
                                    <ul mb-0>
                                        <li class="nav-item">
                                            <router-link class="nav-link" to="/" exact>Home</router-link>
                                        </li>
                                        <li class="drop-icon nav-item">
                                            <router-link class="nav-link" to="/proizvodi">Shop</router-link>
                                            <!-- Mega Menu -->
                                            <div class="megamenu">
                                                <ul class="again">
                                                    <li class="single-menu col-20">
                                                        <span>Mebl</span>
                                                        <router-link class="category" to="/proizvodi/mebl/TDF-Garniture">TDF Garniture</router-link>
                                                        <router-link class="category" to="/proizvodi/mebl/ugaone-Garniture">Ugaone Garniture</router-link>
                                                        <router-link class="category" to="/proizvodi/mebl/francuski-lezajevi">Francuski ležajevi</router-link>
                                                        <router-link class="category" to="/proizvodi/mebl/fotelje">Fotelje</router-link>
                                                        <a class="category" href="#">Home 1</a>
                             
                                                    </li>
                                                    <li class="single-menu col-20">
                                                        <span>Pločasti nameštaj</span>
                                                        <router-link class="category" to="/proizvodi/plocasti-namestaj/kuhinje">Kuhinje</router-link>
                                                        <router-link class="category" to="/proizvodi/plocasti-namestaj/plakari">Plakari</router-link>
                                                        <router-link class="category" to="/proizvodi/plocasti-namestaj/plakari">Dnevne sobe</router-link>
                                                        <router-link class="category" to="/proizvodi/plocasti-namestaj/plakari">Komode</router-link>
                                                        <router-link class="category" to="/proizvodi/plocasti-namestaj/plakari">Decije sobe</router-link>
                                                    </li>
                                                    <li class="single-menu col-20">
                                                        <span>Stolovi i Stolice</span>
                                                        <router-link class="category" to="/proizvodi/plocasti-namestaj/kuhinje">Trpezarijski stolovi</router-link>
                                                        <router-link class="category" to="/proizvodi/plocasti-namestaj/plakari">Trpezarijske stolice</router-link>
                                                        <router-link class="category" to="/proizvodi/plocasti-namestaj/plakari">Barske stolice</router-link>
                                                        <router-link class="category" to="/proizvodi/plocasti-namestaj/plakari">Kancelarijske stolice</router-link>
                                                        <router-link class="category" to="/proizvodi/plocasti-namestaj/plakari">Klubski stolovi</router-link>
                                                    </li>
                                                    <li class="single-menu col-40">
                                                        <a href="#">
                                                            <img src="https://devitems.com/html/tasnm-preview/tasnm/img/maga-banner.png" alt="">
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">Lookbook</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">Blog</a>
                                        </li>
                                        <li class="nav-item">
                                            <router-link class="nav-link" to="/page">Page Test</router-link>
                                        </li>
                                         <li class="nav-item">
                                            <router-link class="nav-link" to="/about-us">About Us</router-link>
                                        </li>
                                         <li class="nav-item">
                                            <router-link class="nav-link" to="/contact">Contact</router-link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div class="right-header">
                                <ul>
                                    <li class="nav-item search-item">
                                        <a class="nav-link" href="#" ><i class="fas fa-search"></i></a></li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#" >
                                            <i class="fas fa-shopping-cart"></i>
                                            <span class="number-item">2</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <!-- Mobile Menu Start -->
                            <div class="mobile-menu hidden-lg hidden-md nav-link">
                                <div id="nav-icon3" v-bind:class="{ open: openMobileMenu }" @click="openMobileMenu = !openMobileMenu">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div><!-- Mobile Menu End -->
                            <div class="mobile-shop hidden-md hidden-lg">
                                <ul class="list-inline">
                                    <li><a href="#"><i class="fas fa-user mob-i"></i><span>My Account</span></a></li>
                                    <li><a href="#"><i class="fas fa-shopping-cart mob-i"></i><span>My Cart</span></a></li>
                                    <li><a href="#"><i class="fas fa-heart mob-i"></i><span>My Wishlist</span></a></li>
                                    <li><a href="#"><i class="fas fa-lock mob-i"></i><span>Login</span></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div><!-- End Header -->
</template>

<script>
    export default {
        name: 'Header',
        data: function() {
            return  {
                openMobileMenu: false,
                scrollPosition: null
            }
        },
        methods: {
            updateScroll() {
                this.scrollPosition = window.scrollY
            }
        },
        mounted() {
            window.addEventListener('scroll', this.updateScroll);
        }
    }
</script>

    
<style lang="scss" scope>
.gradient-div {
    background: linear-gradient(rgba(0,0,0,.8), transparent);
    position: absolute;
    width: 100%;
    height: 230px;
    top: 0;
    z-index: 1;
}
#header {
    background: linear-gradient(rgba(0,0,0,.8), transparent);
    transition: all .3s ease-out;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 9;

    /* ---------- HEADER TOP ---------- */
    .header-top {
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        padding: 20px 0;
        .left-header {
            text-align: left;
            .list-inline li {
                margin-right: 10px;
                padding-right: 10px;
                border-right: 1px solid #fff;
            }
            .list-inline li:last-child {
                    border: none;
                
            }
        }
        .right-header {
            text-align: right;
            .list-inline li {
                margin-left: 10px;
                padding-left: 10px;
                border-left: 1px solid #fff;
            }
            .list-inline li:first-child {
                border: none;
            }
        }
        .list-inline {
            list-style: none;
            margin: 0;
            padding: 0;
            line-height: 0;
            li {
                display: inline-block;
                a {
                    font-size: 13px;
                    font-weight: 400;
                    text-decoration: none;
                    color: #fff; // no-defined
                    i {
                        padding-right: 10px;
                    }
                    &:hover {
                        color: #ffdc12;
                    }
                }   
            }
        }

    }

    /* ---------- HEADER BOTTOM ---------- */
    .header-bottom {
        height: 66px;
        // border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        .logo {
            padding: 5px 0;
            z-index: 3;
            img {
                max-width: 130px;
            }
        }
        .all-menu-area {
            display: inherit;
            padding-top: 10px;
            .main-menu {
                position: relative;
                nav ul {
                    margin-bottom: 0 !important;
                }
            }
            .right-header ul {
                margin-bottom: 0 !important;
                padding: 0;
                .search-item {
                border-right: 1px solid #fff; 
                }
                .number-item {
                    font-size: 12px;
                    font-weight: 300;
                    position: absolute;
                    right: 20px;
                    top: 10px;

                }
            } 
        }
        .nav-item {
            display: inline-block;
            // margin: 0 18px;
            .nav-link.router-link-active { color: #ffdc12; }
            .nav-link {
                text-transform: uppercase;
                font-weight: 600;
                color: #fff; //no-defined
                font-size: 14px;
                // position: relative;
                &:hover {
                    color: #ffdc12;
                }
            }
                            .active {
                    color: #ffdc12;
                }
        }
        .drop-icon {
            position: relative;
            &:hover {
                .again {
                    opacity: 1;
                    transition: all 0.5s ease 0s;
                    visibility: visible;
                }
                &:after {
                    opacity: 1
                }
            }
        }
        .drop-icon:after {
            content: "▴";
            font-family: fontawesome;
            font-size: 30px;
            left: 50%;
            margin-left: -10px;
            margin-top: -8px;
            position: absolute;
            top: 100%;
            opacity: 0; // Treba 0
            transition: all 0.3s ease 0s;
            color: #ffdc12;
        }
    }
}

/* ----------- Mega Menu ----------- */
.megamenu .again {
    opacity: 0;// 0 treba da bude
    margin-top: 17px;
    transition: all 0.5s ease 0s;
    visibility: hidden; //hidden treba da bude
    background: #fff none repeat scroll 0 0;
    padding: 20px;
    top: 100%;
    left: -170px;
    width: 780px;
    text-align: left;
    border-top: 3px solid #ffdc12;
    position: absolute;
    .single-menu {
        display: inline-block;
        span {
            color: #333;
            display: block;
            font-size: 14px;
            font-weight: 500;
            margin-bottom: 20px;
            padding-bottom: 5px;
            position: relative;
            &:after {
                background: #e1e1e1 none repeat scroll 0 0;
                bottom: 0;
                content: "";
                height: 2px;
                left: 0;
                position: absolute;
                width: 20%;
            }
        }
        a {
            display: block;
                color: #666;
                display: block;
                font-weight: 400;
                position: relative;
                text-transform: capitalize;
                font-size: 14px;
                text-decoration: none;
                transition: all 0.3s ease 0s;   
             img {
                 height: 135px;
                 max-width: 100%;
            }
        }
        .category {
            &:hover {
                color: #ffdc12;
                padding-left: 8px;
            }
        }
       
    }
    .col-20 {
        width: 20%;
        
    }
    .col-40 {
        width: 40%;
    }
}


/* ---------- Mobile Menu ---------- */
#nav-icon3 {
  width: 20px;
  height: 17px;
  position: relative;
  margin: 10px auto;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: .5s ease-in-out;
  -moz-transition: .5s ease-in-out;
  -o-transition: .5s ease-in-out;
  transition: .5s ease-in-out;
  cursor: pointer;
  span {
    display: block;
    position: absolute;
    height: 3px;
    width: 100%;
    background: #fff;
    border-radius: 9px;
    opacity: 1;
    left: 0;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: .25s ease-in-out;
    -moz-transition: .25s ease-in-out;
    -o-transition: .25s ease-in-out;
    transition: .25s ease-in-out;
  }
}
#nav-icon3 span:nth-child(1) {
  top: 0px;
}

#nav-icon3 span:nth-child(2),#nav-icon3 span:nth-child(3) {
  top: 6px;
}

#nav-icon3 span:nth-child(4) {
  top: 12px;
}

#nav-icon3.open span:nth-child(1) {
  top: 6px;
  width: 0%;
  left: 50%;
}

#nav-icon3.open span:nth-child(2) {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
}

#nav-icon3.open span:nth-child(3) {
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

#nav-icon3.open span:nth-child(4) {
  top: 18px;
  width: 0%;
  left: 50%;
}

/* ---------- Mobile Shop ---------- */
.mobile-shop {
    position: fixed;
    bottom: 0;
    left: 0;
    background: #000;
    width: 100%;
    height: 45px;
    .list-inline{
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
        li {
        display: inline-block;
        padding: 0 3%;
        a {
            color: #fff;
            .mob-i, span {
                display: block;
                font-size: 12px;
                padding-bottom: 3px;
            }
        }
    }
    } 
}

/* ---------- Sticky Meni ---------- */
.sticky {
    position: fixed;
    top: 0;
    z-index: 999;
    width: 100%;
    background: rgba(0, 0, 0, 0.8) none repeat scroll 0 0;
    box-shadow: 0 0 5px 0 #000;
    transition: all 0.5s ease 0s;
}

/* ---------- MEDIA QUERY ---------- */
@media (min-width: 1200px) {
    .hidden-lg {
        display: none !important;
    }
}
@media (max-width: 1199px) and (min-width: 992px) {
    .hidden-md {
        display: none !important;
    }

    .hidden-sm {
        display: none !important;
    }
    .header-top {
        display: none;
    }
    #header .header-bottom .all-menu-area .right-header ul {
        padding-top: 5px;
    }
    #header .header-bottom .all-menu-area .right-header ul .number-item {
        right: 72px;
        top: 15px
    }
    #header .header-bottom {
        border-bottom: none;
    }
}
@media (max-width: 767px) {
    .hidden-xs {
        display: none !important;
    }
    .header-top {
        display: none;
    }
    #header .header-bottom .all-menu-area .right-header ul {
        padding-top: 5px;
    }
    #header .header-bottom .all-menu-area .right-header ul .number-item {
        right: 72px;
        top: 15px;
    }
    #header .header-bottom {
        border-bottom: none;
    }
    .gradient-div {
        height: 100px;
    }
}

</style>
