<template>
    <section class="content-subscribe" data-scroll-section>
    <div class="container">
    <p class="text-Title">
        <strong>Subscribe Newsletter </strong>
    </p>
    <p class="text-content">
        financial transactions remotely using a mobile
    </p>
    <div class="dashboard">
        <input type="text" id="fname" name="fname"  placeholder="Enter your email.">
        <a href="" class="btn-start">
            <span>Get start</span>
        </a>
    </div>
    </div>
    </section>
</template>

<style lang="scss" scoped>
@import '~assets/scss/style.scss';

.content-subscribe{
    padding-top: 20px;
    padding-bottom: 100px;
    @include android{
        padding-top: 90px;
        padding-bottom: 90px;
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
        .dashboard{
            
            input{
                padding: 18px 50px;
                border-radius: 8px;
                background-color: 	#F5F5F5;
                border: 0.8px solid #FFF0F5;
                margin-right: 30px;
                @include android{
                    margin-right: 0;
                    margin-bottom: 10px;
                    padding: 15px 20px;
                }
            }
            .btn-start{
                    border-radius: 10px;
                    background-color: #25274D;
                    padding: 16px 40px;
                    display: inline-block;
                    cursor: pointer;
                    right: 25px;
                    text-decoration: none;
                    transition: all .2s ease;
                    color: #fff;
                    align-items: center;
                    &:hover{
                         background-color: #fff;
                         color: #A9A9A9;
                         border: 0.8px solid #A9A9A9;
                    }
                    span{
                        font-family: $font;
                        font-size: 14px;
                        font-weight: 300;
                        line-height: 24px;
                        pointer-events: none;
                        @include android{
                            font-size: 12px;
                        }
                        
                    }
                    @include android{
                        padding: 10px 30px;
                    }
            }
        }
    .text-Title{
        margin: 0 0 10px;
        text-align: center;
        font-family: $font;
        font-size: 35px;
        line-height: 37px;
        color: #000;
        @include android{
            font-size: 20px;
            line-height: 20px;
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
        padding-bottom: 40px;
        @include android{
            font-size: 14px;
            line-height: 18px;
            max-width: 200px;

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