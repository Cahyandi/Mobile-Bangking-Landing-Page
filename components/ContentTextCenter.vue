
<template>
<section class="center-text" data-scroll-section data-aos="fade-left" data-aos-duration="2000">
    <div class="container">
    <p class="text-Title">
        <strong>How it works</strong>
    </p>
    <p class="text-content" data-aos="fade-right" data-aos-duration="2000" data-aos-delay="300">
        Mobile banking differs from mobile payments, which involes the use of a mobile device
    </p>
    </div>
</section>

</template>

<style lang = "scss" scoped>
@import '~assets/scss/style.scss';
.center-text{
    padding-top: 90px;
    padding-bottom: 40px;
    @include android{
        padding-top: 45px;
        padding-bottom: 20px;
    }
    @include tablet{
        padding-top: 55px;
        padding-bottom: 30px;
    }
    .container{
        text-align: center;
        max-width: 680px;
        display: flex;
        -webkit-box-flex-direction: column;
        -moz-box-flex-direction: column;
        flex-direction: column;
        align-items: center;
        -webkit-align-items: center;
    .text-Title{
        margin: 0 0 30px;
        text-align: center;
        font-family: $font;
        font-size: 31px;
        line-height: 37px;
        color: #000;
        @include android{
            font-size: 20px;
            line-height: 0px;
        }
        @include tablet{
            font-size : 28px;
        }        

    }
    .text-content{
        margin: 0;
        text-align: center;
        font-family: $font;
        font-size: 16px;
        line-height: 29px;
        letter-spacing: 0;
        max-width: 400px;
        color: #A9A9A9;
        @include android{
            font-size: 14px;
            line-height: 18px;
            max-width: 250px;
        }
        @include tablet{
            font-size: 15px;
            line-height: 20px;
            max-width: 320px;
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
        width: 75%;
    }
}
</style>
