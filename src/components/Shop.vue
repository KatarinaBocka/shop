<template>
  <div id="shop">
      <section class="shop-img-area">
          <div class="container">
              <div class="row">
                  <div class="col-md-12 text-center">
                      <h1>Shop</h1>
                  </div>
              </div>
              
          </div>
      </section>
      <section id="shop-page-wrapper">
          <div class="container">
              <div class="row">
                  <!-- Sidebar Area -->
                  <div class="col-lg-3">
                      <div id="sidebar-area-wrapp">
                          <h2 class="sidebar-title">Product Categories</h2>
                          <div class="sidebar-body">
                              <ul class="sidebar-list">
                                  <router-link @click.native='showMebl=!showMebl' :class="{active: showMebl}" class='anchor' tag="li" to="/proizvodi/mebl"><span><img class="cat-icon" src="../../public/sofa-icon.png" alt=""></span><a>Tapacirani nameštaj</a></router-link>

                                    <div v-if='showMebl' class='menu'>
				                        <div class='menu-item'>
                                            <router-link class='inner-list' tag="li" to="/proizvodi/mebl/TDF-Garniture"><a :class="{ 'active':'TDF Garnitura' == selectedListItem }">TDF Garnitura <span> (2) </span></a></router-link>
                                            <router-link class='inner-list' tag="li" to="/proizvodi/mebl/ugaone-Garniture"><a :class="{ 'active':'Ugaone Garniture' == selectedListItem }">Ugaone Garniture <span> (3) </span></a></router-link>
                                            <router-link class='inner-list' tag="li" to="/proizvodi/mebl/francuski-lezajevi"><a :class="{ 'active':'Francuski ležajevi' == selectedListItem }">Francuski ležajevi <span> (3) </span></a></router-link>
                                            <router-link class='inner-list' tag="li" to="/proizvodi/mebl/fotelje"><a :class="{ 'active':'fotelje' == selectedListItem }">Fotelje <span> (4) </span></a></router-link>
                                            <!-- <li class="inner-list"><a @click="selectedListItem = 'TDF Garnitura'" :class="{ 'active':'TDF Garnitura' == selectedListItem }">TDF Garnitura <span> (2) </span></a></li>
                                            <li class="inner-list"><a @click="selectedListItem = 'Ugaone Garniture'" :class="{ 'active':'Ugaone Garniture' == selectedListItem }">Ugaone Garniture <span> (3) </span></a></li>
                                            <li class="inner-list"><a @click="selectedListItem = 'Francuski ležajevi'" :class="{ 'active':'Francuski ležajevi' == selectedListItem }">Francuski ležajevi <span> (3) </span></a></li> -->

                                        </div>
			                        </div>
                              </ul>

                              <ul class="sidebar-list">
                                  <router-link @click.native='showFurniture=!showFurniture' :class="{active: showFurniture}" class='anchor' tag="li" to="/proizvodi/plocasti-namestaj"><span><img class="cat-icon" src="../../public/wardrobe-icon.png" alt=""></span><a>Pločasti nameštaj</a></router-link>
                                    <div v-if='showFurniture' class='menu'>
                                        <router-link class='inner-list' tag="li" to="/proizvodi/plocasti-namestaj/kuhinje"><a :class="{ 'active':'TDF Garnitura' == selectedListItem }">Kuhinje <span> (2) </span></a></router-link>
                                        <router-link class='inner-list' tag="li" to="/proizvodi/plocasti-namestaj/plakari"><a :class="{ 'active':'Ugaone Garniture' == selectedListItem }">Plakari <span> (3) </span></a></router-link>
                                        
			                        </div>
                              </ul>

                              <ul class="sidebar-list">
                                  <li class="outter-list"><span><img class="cat-icon" src="../../public/table-icon.png" alt=""></span><a @click.prevent='showTable=!showTable' :class="{active: showTable}" class='anchor'>Stolovi</a></li>
                                  <div v-if='showTable' class='menu'>
				                    <div class='menu-item' v-for='(item, index) in TapaciranNamestaj' :key='index'>
                                        <li class="inner-list"><a>{{ item.meblCategory }} <span> ({{ item.proizvodi.length }}) </span></a></li>
                                    </div>
			                    </div>
                              </ul>
                              <ul class="sidebar-list">
                                  <li class="outter-list"><span><img class="cat-icon chair" src="../../public/chair-icon.png" alt=""></span><a @click.prevent='showChair=!showChair' :class="{active: showChair}" class='anchor'>Stolice</a></li>
                                  <div v-if='showChair' class='menu'>
				                    <div class='menu-item' v-for='(item, index) in TapaciranNamestaj' :key='index'>
                                        <li class="inner-list"><a>{{ item.meblCategory }} <span> ({{ item.proizvodi.length }}) </span></a></li>
                                    </div>
			                    </div>
                              </ul>
                          </div>
                      </div>
                      <!-- <h1 v-on:click="changeTitle">{{title}}</h1> -->
                  </div>
                  <!-- Shop Area -->
                  <div class="col-lg-9">
                      <div class="shop-page-content-wrap">
                          <div class="products-settings-option">
                              <div class="product-cong-left d-flex align-items-center"><span class="show-items">items 1 - 9 of 17</span></div>
                              <div class="product-sort_by d-flex align-items-center">
                                <label for="">Sort by: </label>
                                <div class="nice-select" :class="{ open: isOpen }" @click="isOpen = !isOpen">
                                    <span class="current">{{ selectedOption }}</span>
                                    <ul class="list">
                                        <li v-for="(sortOption, index) in sortOptions" :key="index" @click="selectedOption = sortOption" class="option" :class="{ 'active':sortOption == selectedOption }" value="Relevance">{{ sortOption }}</li>
                                    </ul>
                                </div>
                              </div>
                          </div><!-- products-settings-option -->
                          <div class="products-wrapper">
                            
                              <!-- Prikaz Proizvoda -->
                                <router-view></router-view>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section> 
  </div>
</template>

<script>
import MeblProducts from './MeblProducts';
import PlocastiNamestaj from './PlocastiNamestaj';

export default {
    name: 'Shop',
    components: {
        MeblProducts,
        PlocastiNamestaj
    },
    data: function() {
		return {
            isOpen: false,
            selectedOption: 'Relevance',
            showMebl: false,
            showFurniture: false,
            showTable: false,
            showChair: false,
            selectedListItem: false,
            isActive: false,
            ActiveCategory: 'TDF Grniture',
            sortOptions: ['Relevance', 'Name, A to Z', 'Price low to heigh', 'Price heigh to low'],
            selectedCategory: 'All', // Filtriranje proizvoda
            subcategory: this.$route.params.subcategory,
            category: this.$route.params.category,
            furniture_category: this.$route.params.furniture_category,
		}
    },
    watch: {
        '$route'(to, from) {
            this.category = to.params.category
            // this.subcategory = to.params.subcategory
        }
    },
    computed: {
        selectOption() {
            return {
                selectedOption: this.selectedOption,
              
            }
        },
        selestListItem() {
            return {
                selectedListItem: this.selectedListItem,
              
            }
        },
    },
}
</script>

<style lang="scss" scope>
.shop-img-area {
    background-image: url('../../public/shop-header.jpg');
    padding: 200px 0 100px;
    background-position: center top;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: transparent;
    position: relative;
    &:before {
        background: rgba(0, 0, 0, 0.2) none repeat scroll 0 0;
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

#shop-page-wrapper {
    margin-top: 50px;
    min-height: 500px; // treba obrisati
    text-align: left;
    .sidebar-title {
        font-size: 1.2rem;
        line-height: 1.2;
        font-weight: 900;
        margin-top: 0px;
        margin-bottom: 36px;
        text-transform: uppercase;
        color: #222;
        background: #f7f7f7;
        padding: 20px 0px;
        height: 60px;
        text-align: center;
    }
    .sidebar-list {
        li {
            margin-bottom: 13px;
            border-bottom: 1px solid #dfdfdf;
            padding-bottom: 10px;
            span { 
                width: 50px;
                display: inline-block;
            }
            .cat-icon {
                max-width: 30px;
            }
            .wardrobe { max-width: 26px; }
            .chair { max-width: 21px; }
            a {
                display: inline-block;
                color: #222222;
                font-size: .8rem;
                -webkit-transition: all 0.2s ease-out 0.2s;
                -moz-transition: all 0.2s ease-out 0.2s;
                -o-transition: all 0.2s ease-out 0.2s;
                transition: all 0.2s ease-out 0.2s;
                display: inline-block;
                text-transform: uppercase;
                cursor: pointer;
                &:hover {
                    color: #ffdc12;
                }
            }
            a.active{ color: #ffdc12; }
        }
        .menu-item:last-child { border-bottom: 1px solid #dfdfdf; }
        .inner-list {
            padding-left: 50px;
            padding-bottom: 5px;
            margin-bottom: 7px;
            border: none;
            a { 
                font-size: 12px;
                width: 200px;
                &:hover {
                    color: #ffdc12;
                    padding-left: 6px;
                }
            }
            span{ float: right; }
        }
        
        
    } 
}

.products-settings-option {
    background: #f7f7f7;
    display: flex;
    -webkit-justify-content: space-between;
    -moz-justify-content: space-between;
    justify-content: space-between;
    -webkit-align-items: center;
    -moz-align-items: center;
    -ms-align-items: center;
    align-items: center;
    height: 60px;
    padding: 0 20px;
    .product-sort_by {
        font-size: 14px;
        label {
            font-weight: 600;
            font-size: 14px;
            margin: 0;
            margin-right: 10px;;
        }
        .nice-select {
            border-radius: 0px;
            float: none;
            height: auto;
            text-transform: capitalize;
            line-height: inherit;
            padding: 8px 30px 8px 0px;
            width: 200px;
            -webkit-tap-highlight-color: transparent;
            background-color: #fff;
            border: 1px solid #e8e8e8;
            box-sizing: border-box;
            clear: both;
            cursor: pointer;
            font-size: 14px;
            font-weight: 400;
            outline: 0;
            position: relative;
            text-align: left!important;
            -webkit-transition: all .2s ease-in-out;
            transition: all .2s ease-in-out;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            &:after {
                border-bottom: 2px solid #999;
                border-right: 2px solid #999;
                content: '';
                display: block;
                height: 5px;
                margin-top: -4px;
                pointer-events: none;
                position: absolute;
                right: 12px;
                top: 50%;
                -webkit-transform-origin: 66% 66%;
                -ms-transform-origin: 66% 66%;
                transform-origin: 66% 66%;
                -webkit-transform: rotate(45deg);
                -ms-transform: rotate(45deg);
                transform: rotate(45deg);
                -webkit-transition: all .15s ease-in-out;
                transition: all .15s ease-in-out;
                width: 5px;
            }
            .current {
                padding-left: 15px;
            }
            .list {
                width: 100%;
                background-color: #fff;
                border-radius: 0;
                box-shadow: 0 0 0 1px rgba(68,68,68,.11);
                box-sizing: border-box;
                margin-top: 5px;
                opacity: 0;
                position: absolute;
                top: 100%;
                -webkit-transform-origin: 50% 0;
                -ms-transform-origin: 50% 0;
                transform-origin: 50% 0;
                -webkit-transform: scale(.75) translateY(-21px);
                -ms-transform: scale(.75) translateY(-21px);
                transform: scale(.75) translateY(-21px);
                -webkit-transition: all .2s cubic-bezier(.5,0,0,1.25),opacity .15s ease-out;
                transition: all .2s cubic-bezier(.5,0,0,1.25),opacity .15s ease-out;
                z-index: 9;
                .option {
                    line-height: 30px;
                    min-height: 30px;
                    cursor: pointer;
                    font-weight: 400;
                    line-height: 40px;
                    list-style: none;
                    min-height: 40px;
                    outline: 0;
                    padding-left: 18px;
                    padding-right: 29px;
                    text-align: left;
                    -webkit-transition: all .2s;
                    transition: all .2s;
                    font-size: 14px;
                    &:hover {
                        background: #f7f7f7;
                        cursor: pointer;
                    }
                }
                .selected {
                    font-weight: 700;
                }
            }
            
        }
        .nice-select.open .list {
            opacity: 1;
            pointer-events: auto;
            -webkit-transform: scale(1) translateY(0);
            -ms-transform: scale(1) translateY(0);
            transform: scale(1) translateY(0);
        }
        .nice-select.open:after {
            -webkit-transform: rotate(-135deg);
            -ms-transform: rotate(-135deg);
            transform: rotate(-135deg);
        }
    }
    .product-view .show-items {
        font-size: 14px;
    }
}

/* ---------- MEDIA QUERY ---------- */

</style>