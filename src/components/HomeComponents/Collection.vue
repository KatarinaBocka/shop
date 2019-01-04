npm run this.$isServer<template>
  <div class="banner-area">
      <div class="container">
          <div class="row">
              <div class="col-lg-4 col-md-4 col-sm-6">
                  <!-- Banner top -->
                  <div class="banner-box banner-box-re">
                      <a href="#">
                            <img src="https://images.pexels.com/photos/276566/pexels-photo-276566.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="">
                            <div>
                              <h2>Dinamic Jazz</h2>
                              <p>When Jazz starts to chase cars, the whole world stands still.</p>
                            </div>
                      </a>
                  </div>
              </div>

              <div class="col-lg-4 col-md-4 col-sm-6">
                  <!-- Banner top -->
                  <div class="banner-box banner-box-re">
                      <a href="#">
                            <img src="https://images.pexels.com/photos/932095/pexels-photo-932095.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="">
                            <div>
                              <h2>Dinamic Jazz</h2>
                              <p>When Jazz starts to chase cars, the whole world stands still.</p>
                            </div>
                      </a>
                  </div>
              </div>

              <div class="col-lg-4 col-md-4 col-sm-6">
                  <!-- Banner top -->
                  <div class="banner-box banner-box-re">
                      <a href="#">
                            <img src="https://images.pexels.com/photos/280209/pexels-photo-280209.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="">
                            <div>
                              <h2>Dinamic Jazz</h2>
                              <p>When Jazz starts to chase cars, the whole world stands still.</p>
                            </div>
                      </a>
                  </div>
              </div>

                <div class="col-lg-4 col-md-4 col-sm-6">
                   <!-- Banner top -->
                  <div class="banner-box banner-box-re">
                      <a href="#">
                        <img src="https://images.pexels.com/photos/1027508/pexels-photo-1027508.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="">
                        <div>
                            <h2>Dinamic Jazz</h2>
                            <p>When Jazz starts to chase cars, the whole world stands still.</p>
                        </div>
                      </a>
                  </div>
              </div>

              <div class="col-lg-4 col-md-4 col-sm-6">
                  <!-- Banner top -->
                  <div class="banner-box banner-box-re">
                      <a href="#">
                        <img src="https://images.pexels.com/photos/817783/pexels-photo-817783.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="">
                        <div>
                            <h2>Dinamic Jazz</h2>
                            <p>When Jazz starts to chase cars, the whole world stands still.</p>
                        </div>
                      </a>
                  </div>
              </div>

              <div class="col-lg-4 col-md-4 col-sm-6 last-boxes">
                  <!-- Banner top -->
                  <div class="banner-box banner-box-re">
                      <a href="#">
                            <img src="https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="">
                            <div>
                            <h2>Dinamic Jazz</h2>
                              <p>When Jazz starts to chase cars, the whole world stands still.</p>
                            </div>
                      </a>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Collection'
}
</script>


<style lang="scss" scoped>
.banner-area {
    margin: 50px 0;
}
.banner-area .banner-box {
    display: block;
    overflow: hidden;
    position: relative;
    text-align: center;
    margin: 30px 0;
    height: 215px;
}
.banner-area .banner-box:before {
    background: #000;
    bottom: 0;
    content: "";
    height: 100%;
    left: 0;
    opacity: 0;
    position: absolute;
    right: 0;
    top: 0;
    transition: all 300ms ease-in-out 0s;
    visibility: hidden;
    width: 100%;
    z-index: 1; 
}
.banner-area .banner-box:hover {
    &:before {
        opacity: .3;
        visibility: visible;
    }
}
.banner-area .banner-box {
    &:hover {
        h2 {
            opacity: 1;
            transform: scale3d(1, 1, 1);
            padding-top: 17%;
            transition: transform 0.35s ease 0s;
        }
        p {
            opacity: 1;
            transform: scale3d(1, 1, 1);
        }
        div:after {
            opacity: 1;
            transform: rotate3d(0, 0, 1, 39deg) scale3d(1, 1, 1);
        }
        p {
            transition: opacity 0.35s ease 0s, transform 0.35s ease 0s;
        }
    }
    a {
        display: block;
        overflow: hidden; 
        transition: all 0.3s ease 0s;
        text-decoration: none;
        background-color: transparent;
        img {
            transition: all 300ms ease-in-out 0s;
            width: 100%;
            max-width: 100%;
        }
        div {
            height: 100%;
            left: 0;
            position: absolute;
            top: 0;
            width: 100%;
            color: #fff;
            z-index: 2; 
        }
        div:after {
                border-bottom: 1px solid #fff;
                border-top: 1px solid #fff;
                content: "";
                height: 100%;
                left: 0;
                opacity: 0;
                position: absolute;
                top: 0;
                transform: rotate3d(0, 0, 1, 45deg) scale3d(1, 0, 1);
                transform-origin: 50% 50% 0;
                width: 100%;
        }
        h2 {
            opacity: 0;
            transform: scale3d(0.8, 0.8, 1);
            padding-top: 26%;
            transition: transform 0.35s ease 0s;
            margin: 0 0 10px;
            font-family: 'Poppins', sans-serif;
            text-transform: uppercase;
            font-weight: 600;
            font-size: 30px;
        }
        p {
            color: #fff;
            font-size: 15px;
            opacity: 0;
            padding: 0.5em 2em;
            text-transform: none;
            transform: scale3d(0.8, 0.8, 1);
            transition: opacity 0.35s ease 0s, transform 0.35s ease 0s;
        }
    }
}
/* ---------- MEDIA QUERY ---------- */
@media (max-width: 1199px) and (min-width: 992px) {
    .banner-area .banner-box {
        height: 190px;
    }
    .banner-area .banner-box a h2 {
        font-size: 26px;
    }
    .banner-area .banner-box a p {
        padding: 0;
    }
}
@media (max-width: 991px) and (min-width: 768px) {
    .banner-area .banner-box {
        height: 137px;
    }
    .banner-area .banner-box a h2 {
        font-size: 22px;
    }
    .banner-area .banner-box:hover h2 {
        padding-top: 26%;
    }
    .banner-area .banner-box a p {
        display: none;
    }
}
@media (max-width: 767px) {
    .banner-area .banner-box[data-v-828db090] {
        max-height: 155px;
        max-width: 340px;
        margin: 20px auto;
    }
    .banner-area .banner-box a h2 {
        font-size: 22px;
    }
    .banner-area .banner-box:hover h2 {
        padding-top: 20%;
    }
    .banner-area .banner-box a p {
        display: none;
    }
}
</style>
