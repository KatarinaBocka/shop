<template>
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
                  </div>
</template>

<script>

export default {
  name: 'ShopSidebar',
  data: function() {
		return {
      
    }
  },
  
}

</script>

<style scoped lang="scss">

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

</style>


