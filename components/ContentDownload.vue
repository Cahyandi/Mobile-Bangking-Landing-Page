<template>
<section class="download-app"data-scroll-section >
<div class = "container">
    <div class="column one">
        <img class="column-img" src= "../assets/images/download.png" title="" v-lazy-load>
    </div>
    <div class="column two">
        <div class="title">Download mobile App</div>
        <div class="desc">Download Besnik mobile banking app for IOS and android. It helps you banking quickly and more smartly.</div>
        <div class="dashboard">
        <a href="" class="app-store">
            <img src="../assets/icon/icon appstore.png" title="" v-lazy-load/>
            <span>App Store</span>
        </a>
        <a href="" class="play-store">
            <img src="../assets/icon/icon playstore.png" title="" v-lazy-load />
            <span>Play Store</span>
        </a>
    </div>
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
            .dashboard{
                display: flex;
                flex-direction: column;
                
                .app-store{
                    max-width:130px;
                    margin-bottom: 20px;
                    display: inline-block;
                    text-decoration: none;
                    color: black;
                    border-radius: 10px;
                    border: 0.8px solid #A9A9A9;
                    padding: 5px 10px;
                    display: inline-block;
                    cursor: pointer;
                    text-decoration: none;
                    transition: all .2s ease;
                    display: flex;
                    align-items: center;
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
                    img{
                        height: 45px;
                        padding: 0 10px;
                        @include android{
                            height: 35px;
                        }
                    }
                }
                .play-store{
                    max-width:130px;
                    display: inline-block;
                    text-decoration: none;
                    color: black;
                    border-radius: 10px;
                    border: 0.8px solid #A9A9A9;
                    padding: 5px 10px;
                    display: inline-block;
                    cursor: pointer;
                    text-decoration: none;
                    transition: all .2s ease;
                    display: flex;
                    align-items: center;
                    @include android {
                        max-width:130px;
                        padding: 1px 5px;
                    }
                    span{
                            font-family: $font;
                            font-size: 14px;
                            font-weight: 300;
                            line-height: 24px;
                            pointer-events: none;
                            color: #A9A9A9;
                            @include android{
                                font-size: 12px;
                            }
                    }
                    img{
                        height: 45px;
                        padding: 0 10px;
                        @include android{
                            height: 35px;
                        }
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