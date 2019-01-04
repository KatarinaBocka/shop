<template>
  <section class="featured-products single-products section-padding-top">
      <div class="container">
         
          <!-- Filter Section -->
          <div class="row">
              <div class="col-12">
                  <div class="product-tab nav nav-tabs justify-content-center">
                      <ul>
                          <li class="active"><a href ="#all" data-togle="tab">Svi proizvodi</a></li>
                          <li><a href ="new" data-togle="tab">Novi proizvodi</a></li>
                          <li><a href ="sale" data-togle="tab">Proizvodi na akciji</a></li>
                          <li><a href ="best-selling" data-togle="tab">Najprodavaniji</a></li>
                      </ul>
                  </div>
              </div>
          </div>
            <!-- Tab/Product Content -->  <!-- Title Section -->
            <div class="row justify-content-center">
                <div class="col-12">
                  <div class="section-title">
                        <h3>Featured Products</h3>
                        <div class="section-icon">
                            <i class="far fa-dot-circle"></i>
                        </div>
                    </div>
                </div>
            </div>
            <TabContentComponent />
    </div>
  </section>
</template>

<script>
import TabContentComponent from '../HomeComponents/TabContentComponent';

export default {
  name: 'FeaturedProducts',
  components: {
      TabContentComponent
  }
}
</script>

<style lang="scss" scoped>
.featured-products {
    margin: 50px 0;
}
.section-title {
    h3 {
        color: #ffdc12;
        display: inline-block;
        line-height: 19px;
        margin-bottom: 7px;
        position: relative; 
        text-transform: uppercase;
        &:before {
            background: #ffdc12 none repeat scroll 0 0;
            bottom: -19px;
            content: "";
            height: 1px;
            right: 0;
            position: absolute;
            width: 40%;
        }
        &:after {
            background: #ffdc12 none repeat scroll 0 0;
            bottom: -19px;
            content: "";
            height: 1px;
            left: 0;
            position: absolute;
            width: 40%;
        }
    }
    .section-icon {
        color: #ffdc12;
    }
}

.product-tab.nav {
    border: 0 none;
    margin-bottom: 30px;
    margin-top: 30px;
    text-align: center;
    .active a:after{
        width: 100%;
        background: #ffdc12 none repeat scroll 0 0;
        bottom: 0;
        top: unset;
        height: 1px;
    }
    ul li {
        display: inline-block;
        a {
            text-transform: uppercase;
            color: #333;
            display: block;
            font-weight: 400;
            line-height: 12px;
            margin: 0 18px;
            padding-bottom: 5px;
            position: relative;
            text-decoration: none;
            &:after {
                content: "";
                height: 2px;
                left: 0;
                position: absolute;
                top: 62%;
                transition: all 0.3s ease 0s;
                width: 0;

                
            }
            &:hover {
                &:after {
                    width: 100%;
                    background: #ffdc12 none repeat scroll 0 0;
                    bottom: 0;
                    top: unset;
                    height: 1px;
                }
            }
        }
    }
}


</style>
