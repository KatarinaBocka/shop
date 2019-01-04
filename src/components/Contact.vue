<template>
  <div id="contact">
      <div class="gradient-div"></div>
      <section class="contact-img-area">
          <div class="container">
              <div class="row">
                  <div class="col-md-12 text-center">
                      <h1>Contact</h1>
                  </div>
              </div>
              
          </div>
      </section>
      <div class="container"> 
            <div class="row wrapp-contact">
                <div class="col-md-6 info-col">
                    <h1>Kontakt informacije</h1>
                    <hr>
                    <p>If you have any problems,suggestions and feedback then please feel free to contact with us. 
                        Choose our communication soruces. We will love to hear from you.
                    </p>
                    <li class="contact-info"><a><i class="fas fa-phone"></i><span>025703185</span></a></li>
                    <li class="contact-info"><a><i class="fas fa-mobile-alt"></i><span>0652703815</span></a></li>
                    <li class="contact-info"><a><i class="far fa-envelope"></i><span>katarina.bocka@gmail.com</span></a></li>
                    <li class="contact-info"><a><i class="fa fa-map-marker-alt"></i><span>Ive Lole Ribara 96</span></a></li>
                    <li class="contact-info"><a><i class="fas fa-city"></i><span>Ruski Krstur</span></a></li>
                    <li class="contact-info"><a><i class="far fa-clock"></i><span>7h - 15h / Subotom: 7h - 1hk</span></a></li>
                </div>

                <div class="col-md-6 form-col">
                <h1>Pišite nam</h1>
                <hr>
                <form class="contact-form"> 
                    <div class="row">
                        <div class="col">
                          <input type="text" class="form-control" placeholder="First name">
                        </div>
                        <div class="col">
                          <input type="text" class="form-control" placeholder="Last name">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12 my-1">
                        <label class="sr-only" for="inlineFormInputName">Name</label>
                        <input type="text" class="form-control" placeholder="Jane Doe">
                    </div>
                    <div class="col-md-12 my-1">
                        <label class="sr-only" for="inlineFormInputName">Name</label>
                        <input type="text" class="form-control" placeholder="Jane Doe">
                    </div>
                    <div class="col-md-12 my-1">
                        <label class="sr-only" for="inlineFormInputName">Name</label>
                        <textarea type="text" class="form-control" placeholder="Jane Doe"></textarea>
                    </div>
                    </div>
                    <button type="submit" class="btn btn-primary mb-2 contact-btn">Pošalji</button>
                </form>
            </div>
        </div>          
      </div>
      <section class="store-info">
        <div class="container">
            <div class="row text-left">
                <div class="col-md-4">
                    <div class="single-store">
                        <div class="img-store">
                            <img src="http://www.izgled.rs/wp-content/uploads/2014/07/DSC_0009.jpg" alt="Paris" style="width:300px;height:200px">
                        </div>
                        <h4>Salon Kula:</h4>
                        <li class="contact-info"><a><i class="fas fa-phone"></i><span>025703185</span></a></li>
                        <li class="contact-info"><a><i class="fa fa-map-marker-alt"></i><span>Ive Lole Ribara 96</span></a></li>
                        <li class="contact-info"><a><i class="far fa-clock"></i><span>7h - 15h / Subotom: 7h - 1hk</span></a></li>
                        
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="single-store">
                        <div class="img-store">
                            <img src="http://www.izgled.rs/wp-content/uploads/2015/07/salon-srbobran-3.jpg" alt="Paris" style="width:300px;height:200px">
                        </div>
                        <h4>Salon Srbobran:</h4>
                        <li class="contact-info"><a><i class="fas fa-phone"></i><span>025703185</span></a></li>
                        <li class="contact-info"><a><i class="fa fa-map-marker-alt"></i><span>Ive Lole Ribara 96</span></a></li>
                        <li class="contact-info"><a><i class="far fa-clock"></i><span>7h - 15h / Subotom: 7h - 1hk</span></a></li>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="single-store">
                        <div class="img-store">
                            <img src="https://www.w3schools.com/howto/img_paris.jpg" alt="Paris" style="width:300px;height:200px">
                        </div>
                        <h4>Salon Odžaci</h4>
                        <li class="contact-info"><a><i class="fas fa-phone"></i><span>025703185</span></a></li>
                        <li class="contact-info"><a><i class="fa fa-map-marker-alt"></i><span>Ive Lole Ribara 96</span></a></li>
                        <li class="contact-info"><a><i class="far fa-clock"></i><span>7h - 15h / Subotom: 7h - 1hk</span></a></li>
                    </div>
                </div>
            </div>
        </div>
      </section>
      <section class="google-map">
          <div class="container">
              <google-map name="example"></google-map>
          </div>
           
      </section>
      
  </div>
</template>

<script>
import GoogleMap from './ContactComponent/GoogleMap'

export default {
  name: 'Contact',
  components: {
      GoogleMap
  }
}
</script>

<style lang="scss" scopes>
.contact-img-area {
    background-image: url('../../public/phone1.jpg');
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
.wrapp-contact {
    text-align: left;
    margin: 50px 0;
    color: #222;
    h1 {
        font-size: 1.8rem;
    }
    p {
        font-size: 13px;
        color: #666;
        font-weight: 300;
    }
    .contact-info {
        font-size: 15px;
        list-style: none;
        margin: 5px 0;
        color: #666;
        font-weight: 300;
        i {
            width: 40px;
        }
        .fa-phone { padding-right: 0px; }
        .fa-mobile-alt { padding-left: 2px; }
        .fa-envelope { padding-right: 0px; }
        .fa-map-marker-alt { padding-left: 2px; }
        .fa-city { padding-right: 0px; }
        .fa-clock { padding-left: 1px; }
    }
    .contact-btn {
        background: #222;
        color: #fff;
        text-transform: uppercase;
        border-radius: 0px;
        margin-top: 5px;
        border-color: #000;
        font-size: 14px;
        &:focus {
            -webkit-box-shadow: none;
            box-shadow: none;
        }
        &:hover {
            background: #ffdc12;
            border-color: #ffdc12;
        }
    }
}
.contact-form {
    input::-webkit-input-placeholder { font-size: 13px; }
    input::-moz-placeholder { font-size: 13px; }
    input::-ms-input-placeholder { font-size: 13px; }

    textarea::-webkit-input-placeholder { font-size: 13px; }
    textarea::-moz-placeholder { font-size: 13px; }
    textarea::-ms-input-placeholder { font-size: 13px; }

    .form-control {
        margin: 5px 0;
        border-radius: 0px !important;
        &:focus {
            border-color: #ffdc12;
            box-shadow: none;
        }
    } 
}
.store-info {
    margin: 100px;
}
.single-store {
    img {
        width: 100% !important;
        object-fit: cover;
    }
    h4 {
        color: #333;
        font-size: 18px;
        font-weight: 500;
        margin-top: 20px;
    }
    .contact-info {
        list-style: none;
        font-size: 14px;
        font-weight: 300;
        line-height: 1.8;
        text-align: left;
        color: #666;
        i {
            width: 20px;
        }
    }
}
.google-map {
    margin-bottom: 50px;
}

/* ---------- MEDIA QUERY ---------- */
@media (max-width: 1199px) and (min-width: 992px) {
    .single-store img {
        height: 170px !important;
    }
}
@media (max-width: 991px) and (min-width: 768px) {
    .contact-img-area {
        padding: 100px 0 80px;
    }
    .single-store img {
        height: 130px !important;
    }
}
@media (max-width: 767px) {
    .contact-img-area {
        padding: 100px 0 60px;
        h1 { font-size: 30px; }
    }
     .form-col {
        margin-top: 30px;
    }
    .store-info {
        margin: 50px 20px 0;
    }
    .single-store {
        margin-bottom: 30px;
    }
    .google-map {
        margin-bottom: 0px;
            .container {
            padding: 0;
        }
    }
}

</style>
