<template>
    <div id="blog">
        <div class="container">
             <!-- Title Section -->
            <div class="row justify-content-center">
                <div class="col-12">
                  <div class="section-title">
                        <h3>FROM THE BLOG</h3>
                        <div class="section-icon">
                            <i class="far fa-dot-circle"></i>
                        </div>
                    </div>
                </div>
            </div>
            <carousel :perPage=3 :autoplayHoverPause='true' :autoplay='true' :autoplayTimeout='5000' :navigationEnabled='true' :scrollPerPage='false' :paginationEnabled='false'>
                <slide>
                    <div class="from-blog-card">
                        <a href="#">
                            <div class="from-blog-card-head">
                                <figure>
                                    <img src="https://images.pexels.com/photos/707196/pexels-photo-707196.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="Shoe" class="from-blog-img">
                                </figure>
                            </div>
                            <div class="from-blog-card-body">
                              <div class="from-blog-desc">
                                <div class="from-blog-title">75 of Ralph Laurenӳ:</div>
                                <div class="from-blog-date"><i class="far fa-clock"></i> 05.06.2019.</div>
                                <div class="blog-caption">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, necessitatibus!</div>
                              </div><!-- End from-blog-desc -->
                            </div><!-- End from-blog-card Body -->
                        </a>
                    </div><!-- End from-blog-card --> 
                </slide>

                <slide>
                    <div class="from-blog-card">
                        <a href="#">
                            <div class="from-blog-card-head">
                                <figure>
                                    <img src="https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&h=350" alt="Shoe" class="from-blog-img">
                                </figure>
                            </div>
                            <div class="from-blog-card-body">
                              <div class="from-blog-desc">
                                <div class="from-blog-title">75 of Ralph Laurenӳ:</div>
                                <div class="from-blog-date"><i class="far fa-clock"></i> 05.06.2019.</div>
                                <div class="blog-caption">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, necessitatibus!</div>
                              </div><!-- End from-blog-desc -->
                            </div><!-- End from-blog-card Body -->
                        </a>
                    </div><!-- End from-blog-card --> 
                </slide>

                <slide>
                    <div class="from-blog-card">
                        <a href="#">
                            <div class="from-blog-card-head">
                                <figure>
                                    <img src="https://images.pexels.com/photos/260689/pexels-photo-260689.jpeg?auto=compress&cs=tinysrgb&h=350" alt="Shoe" class="from-blog-img">
                                </figure>
                            </div>
                            <div class="from-blog-card-body">
                              <div class="from-blog-desc">
                                <div class="from-blog-title">75 of Ralph Laurenӳ:</div>
                                <div class="from-blog-date"><i class="far fa-clock"></i> 05.06.2019.</div>
                                <div class="blog-caption">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, necessitatibus!</div>
                              </div><!-- End from-blog-desc -->
                            </div><!-- End from-blog-card Body -->
                        </a>
                    </div><!-- End from-blog-card --> 
                </slide>

                <slide>
                    <div class="from-blog-card">
                        <a href="#">
                            <div class="from-blog-card-head">
                                <figure>
                                    <img src="https://images.pexels.com/photos/707196/pexels-photo-707196.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="Shoe" class="from-blog-img">
                                </figure>
                            </div>
                            <div class="from-blog-card-body">
                              <div class="from-blog-desc">
                                <div class="from-blog-title">75 of Ralph Laurenӳ:</div>
                                <div class="from-blog-date"><i class="far fa-clock"></i> 05.06.2019.</div>
                                <div class="blog-caption">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, necessitatibus!</div>
                              </div><!-- End from-blog-desc -->
                            </div><!-- End from-blog-card Body -->
                        </a>
                    </div><!-- End from-blog-card --> 
                </slide>

                <slide>
                    <div class="from-blog-card">
                        <a href="#">
                            <div class="from-blog-card-head">
                                <figure>
                                    <img src="https://images.pexels.com/photos/879010/pexels-photo-879010.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="Shoe" class="from-blog-img">
                                </figure>
                            </div>
                            <div class="from-blog-card-body">
                              <div class="from-blog-desc">
                                <div class="from-blog-title">75 of Ralph Laurenӳ:</div>
                                <div class="from-blog-date"><i class="far fa-clock"></i> 05.06.2019.</div>
                                <div class="blog-caption">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, necessitatibus!</div>
                              </div><!-- End from-blog-desc -->
                            </div><!-- End from-blog-card Body -->
                        </a>
                    </div><!-- End from-blog-card --> 
                </slide>

                <slide>
                    <div class="from-blog-card">
                        <a href="#">
                            <div class="from-blog-card-head">
                                <figure>
                                    <img src="https://images.pexels.com/photos/373530/pexels-photo-373530.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="Shoe" class="from-blog-img">
                                </figure>
                            </div>
                            <div class="from-blog-card-body">
                              <div class="from-blog-desc">
                                <div class="from-blog-title">75 of Ralph Laurenӳ:</div>
                                <div class="from-blog-date"><i class="far fa-clock"></i> 05.06.2019.</div>
                                <div class="blog-caption">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, necessitatibus!</div>
                              </div><!-- End from-blog-desc -->
                            </div><!-- End from-blog-card Body -->
                        </a>
                    </div><!-- End from-blog-card --> 
                </slide>

            </carousel>
        </div>
    </div>

<!-- from-blog-card-group-1.vue -->
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
    components: {
    Carousel,
    Slide
  },
  data: 
    function() {
        return  {
            autoplay: true,
            perPage: 3,
        }
    },
}
</script>


<style scoped lang='scss'>
/* ---------- Title Section ---------- */
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

/* ----------- Blog Carousel ---------- */
figure {
	width: 344px;
	height: 180px;
	margin: 0;
	padding: 0;
	background: #fff;
	overflow: hidden;
    &:before {
        background: #000;
        bottom: 0;
        content: "";
        height: 180px;
        width: 344px;
        left: 0;
        opacity: 0;
        position: absolute;
        right: 0;
        top: 0;
        transition: all 300ms ease-in-out 0s;
        visibility: hidden;
        z-index: 1;
    }   
}
.from-blog-card {
  margin: 20px auto;
  max-width: 344px;
  border: none;
}
.from-blog-card a {
    text-decoration: none;
    img {
        transition: transform 0.35s ease 0s;
    }
    &:hover {
        figure:before {
            opacity: .3;
            visibility: visible;
        }
        img {
           -webkit-transform: scale(1.1);
	        transform: scale(1.1);
	        -webkit-transition: 0.35s ease 0s;
	        transform: 0.35s ease 0s; 
        }
    }
}
.from-blog-card-head {
  position: relative;
  height: 180px;
    .from-blog-img {
        width: 100%;
        max-height: 100%;
        object-fit: cover;
    }
}
.from-blog-card-body {
    height: 140px;
    background: #fff;
    padding: 20px 0;
}
.from-blog-title {
    padding: 0px 20px 5px 0px;
    display: block;
    color: #333;
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 1px;
    text-transform: uppercase;
    text-align: left;
}
.from-blog-date {
    color: #333;
    padding: 0;
    font-size: 12px;
    font-weight: 300;
    line-height: 1.8;
    text-align: left;
    font-family: 'Poppins', sans-serif;

}
.blog-caption {
    display: block;
    padding: 0;
    font-size: 14px;
    font-weight: 300;
    line-height: 1.8;
    text-align: left;
    color: #666;
    font-family: 'Poppins', sans-serif;
}



/* ---------- MEDIA QUERY ---------- */
@media (max-width: 1199px) and (min-width: 0px) {
    .from-blog-card-body {
      padding: 0px;
    }
    figure {
        width: auto;
        height: auto;
    }
    
}
@media (max-width: 991px) and (min-width: 768px) {

}

</style>
