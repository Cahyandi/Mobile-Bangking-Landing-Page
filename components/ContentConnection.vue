<template>
<section class="download-app">
<div class = "container">
    <div class="column two">
        <div class="title">Connecting all your banking needs.</div>
        <div class="desc">finacial transsactions remotely using a mobile device such as a smartphone or tablet.</div>
        <a href="" class="app-store">
            <span>Get started</span>
        </a>
        
    </div>
    <div class="column one">
        <img class="column-img" src= "../assets/images/connecting.png">
    </div>
    </div>
    </div>
</section>
</template>

<style lang="scss" scoped>
@import '~assets/scss/style.scss';
.download-app{
    display: flex;
    justify-content: center;
    padding-top: 70px;
    padding-bottom: 70px;
    align-items: center;
    @include android{
        background-color:  #FFF0F5;
    }
    .container{  
        display: flex;
        justify-content: space-between;
        align-items: center;
        @include android{
            border-bottom: 1px solid #A9A9A9;
        }
        .column.two{
            max-width: 260px;
            padding-bottom: 50px;
            .dashboard{
                padding-bottom: 50px;
            }
        }
        .column.one{
            img{
                @include android{
                    display: none;
                }
            }
        }
        .column{
            padding: 0 100px;
            @include android{
                padding: 0;
            }
            .title{
                text-align: left;
                font-family: $font;
                font-size: 35px;
                padding-bottom: 10px;
                font-weight: bold;
                line-height: 45px;
                letter-spacing: 0;
                @include android{
                    font-size: 20px;
                    line-height: 35px;
                }
            }
            .desc{
                font-family: $font;
                text-align: left;
                font-size: 15px;
                line-height: 20px;
                letter-spacing: 0;
                color:#A9A9A9;
                padding-bottom: 50px;
                @include android{
                    font-size: 12px;
                    line-height: 15px;
                    padding-bottom: 30px;
                }
            }
            .app-store{
                    max-width:130px;
                    margin-bottom: 20px;
                    display: inline-block;
                    text-decoration: none;
                    color: black;
                    border-radius: 10px;
                    border: 0.8px solid #A9A9A9;
                    padding: 10px 35px;
                    display: inline-block;
                    cursor: pointer;
                    text-decoration: none;
                    transition: all .2s ease;
                    &:hover{
                        background-color: #000;
                        
                    }
                    @include android {
                        max-width:130px;
                        padding: 1px 5px;
                        margin-bottom: 10px;
                    }
                    span{
                            font-family: $font;
                            font-size: 14px;
                            font-weight: 300;
                            line-height: 24px;
                            pointer-events: none;
                            align-items: center;
                            color: #A9A9A9;
                            @include android{
                                font-size: 12px;
                            }
                    }
                    }
        }
    }
    
}
.container{
    padding-right: 50px;
    padding-left: 50px;
    margin-right: auto;
    margin-left: auto;
    @include android{
        max-width: 160px;
        padding-left: 0;
    }
}
</style>