<template>
    <section class="footer">
        <div class="container">
                <div class="content-footer">
                    <div class = "service-nav">
                        <div class="service-caption logo">Besnik</div>
                        <div class="link-container">
                        <p class="footer-link">
                        financial transactions remotely using a mobile device such as a smartphone or tablet
                        </p>
                            <div class="icon">
                                <img src="../assets/icon/f.png" />
                                <img src="../assets/icon/twitter.png" />
                                <img src="../assets/icon/in.png" />
                            </div>
                        </div> 
                    </div>
                    <div class = "service-nav">
                        <div class="service-caption">Besnik</div>
                        <div class="link-container">
                            <a href="" class="footer-link">About</a>
                            <a href="" class="footer-link">Terms of Use</a>
                            <a href="" class="footer-link">Privacy Policy</a>
                            <a href="" class="footer-link">How it Works</a>
                            <a href="" class="footer-link">Contact Us</a>
                        </div> 
                    </div>
                    <div class = "service-nav">
                        <div class="service-caption">Support</div>
                        <div class="link-container">
                            <a href="" class="footer-link">Support Carrer</a></a>
                            <a href="" class="footer-link">24h Service</a>
                            <a href="" class="footer-link">Quick Chat</a>
                        </div> 
                    </div>
                    <div class = "service-nav">
                        <div class="service-caption">Contact</div>
                        <div class="link-container">
                            <a href="" class="footer-link">WhatsApp</a>
                            <a href="" class="footer-link">Support 24</a>
                        </div> 
                    </div>
                </div>
                <div class="footer-bottom">
                    <div class="copyright">
                    Copyright @ 2021 Lobar.net
                    </div>
                    <div class="create-by">
                    Create by <strong>Cahyandi</strong>
                    </div>
                </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@import '~assets/scss/style.scss';

.footer{
    background-color: #F5F5F5;
    width: 100%;
    .container{
        padding-top: 80px;
        padding-bottom: 50px;
        position: relative;
            .content-footer{
                    display: flex;
                    justify-content: space-between;
                    
                    .service-nav{
                        .service-caption.logo{
                            text-decoration: none;
                            color:  #000;
                            font-family: $fontlogo;
                            font-size: 28px;
                            cursor: pointer;
                            &:hover{
                                color: #A9A9A9;
                            }
                            @include android{
                                font-size: 25px;
                            }
                        }
                        .service-caption{
                                margin: 0;
                                font-family: $font;
                                font-weight: bold;
                                font-size: 20px;
                                line-height: 22px;
                                letter-spacing: 0;
                                color: #000;
                                cursor: pointer;
                        }
                        .link-container{
                            margin-top: 30px;
                            display: flex;
                            flex-direction: column;
                            max-width: 220px;
                            .footer-link{
                                display: block;
                                color: #A9A9A9;
                                font-family: $font;
                                font-size: 15px;
                                line-height: 22px;
                                text-decoration: none;
                                transition: all .2s ease;
                                margin-bottom: 7px;
                            }
                    .icon{
                            cursor: pointer;
                            display: flex;
                            justify-content: space-between;
                            margin-right: 220px;
                            img{
                                height: 30px;
                            }
                        }
                        }
                    }
            }
            
        .footer-bottom{
            padding-top: 70px;
            display: flex;
            justify-content: space-between;
            .copyright{
                font-family: $font;
                font-size: 15px;
                color: #A9A9A9;

            }
            .create-by{
                font-family: $font;
                font-size: 15px;
                color: #A9A9A9;
            }
        }
        }
    }


.container {
    max-width: 1000px;
    width: 100%;
    padding-right: 50px;
    padding-left: 50px;
    margin-right: auto;
    margin-left: auto;
}
</style>