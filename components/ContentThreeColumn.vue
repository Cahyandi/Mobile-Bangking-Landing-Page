<template>
<section class = "three-column" data-scroll-section>
    <div class = "container">
        <div class="content">
            <div class="image"  data-aos="fade-up"  data-aos-duration="2000"><img src="../assets/images/tc1.png"/></div>
            <div class="title">Information</div>
            <div class="desc">Enter your information ensure your details safe and more secure</div>
        </div>
        <div class="content">
            <div class="image"  data-aos="fade-down" data-aos-duration="3000"><img src="../assets/images/tc2.png"/></div>
            <div class="title">Data Secure</div>
            <div class="desc two">Sending  money faster & eaiser with end to end encryption.</div>
        </div>
        <div class="content">
            <div class="image three"  data-aos="fade-up"  data-aos-duration="2000"><img src="../assets/images/tc3.png"/></div>
            <div class="title">Add Cards</div>
            <div class="desc">Add Multiple cards and track your daily expense with quality interface</div>
        </div>
    </div>
</section>
</template>

<style lang="scss" scoped>
@import '~assets/scss/style.scss';

.three-column{
    display: flex;
    justify-content: center;
    padding-top: 70px;
    padding-bottom: 70px;
    align-items: center;
    
    .container{
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #A9A9A9;
        padding-bottom: 110px;
        @include android{
            flex-direction: column;
            border-bottom: 1px solid #A9A9A9;
            padding-bottom: 50px;
        }
        .content{
            max-width: 199px;
            padding: 0 125px;
            
            @include android{
                padding: 0;
                text-align: center;
                max-width: 199px;
                padding-bottom: 50px;
            }
            @include tablet{
                padding: 0 50px;
                padding-bottom: 20px;
            }
            .image{
                text-align:center;
                height: 200px;
                padding-bottom: 10px;
                @include android{
                    height: 100px;
                }
                @include tablet{
                    height: 180px;
                }
                img{
                    height: 150px;
                    @include android{
                        height: 100px;
                    }
                    @include tablet{
                        height: 100px;
                    }
                }
            }
            .image.three{
                height: 210px;
                @include android{
                    height: 110px;
                }
                @include tablet{
                    height: 180px;
                }
                img{
                    height: 150px;
                    @include android{
                        height: 110px;
                    }
                    
                }
            }
            .title{
                text-align: center;
                font-family: $font;
                font-size: 30px;
                padding-bottom: 10px;
                font-weight: bold;
                @include android{
                    font-size: 18px;
                    font-weight: bold;
                }
                @include tablet{
                    font-size: 20px;
                }
            }
            .desc{
                font-family: $font;
                text-align: center;
                font-size: 15px;
                line-height: 20px;
                letter-spacing: 0;
                color:#A9A9A9;
                @include android{
                    font-size: 12px;
                    color:#A9A9A9;
                }
                @include tablet{
                    padding-top: 20px
                }
            }
            .desc.two{
                font-family: $font;
                text-align: center;
                font-size: 15px;
                line-height: 20px;
                letter-spacing: 0;
                color:#A9A9A9;
                @include android{
                    font-size: 12px;
                    color:#A9A9A9;
                }
                @include tablet{
                    padding-top: 0px;
                }
            }
        }
    }
}
.container{
    width: 100%;
    padding-right: 50px;
    padding-left: 50px;
    margin-right: auto;
    margin-left: auto;
    @include android{
        width: 50%;
        padding-left: 25px;
        padding-right: 25px;
    }
}
</style>