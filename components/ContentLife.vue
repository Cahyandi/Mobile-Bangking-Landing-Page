<template>
<section class="two-column" data-scroll-section >
    <div class="column" style="background-color:#FFF0F5;">
        <div class="inner-container container">
            <div class = "text-in-content">
                <p class = "icon-text" >
                <img  src= "../assets/icon/icon1.png">
                30 Days free trial</p>
                <p class = "title">Life Should Be Easy.</p>
                <div class="icon-jam">
                <img class="jam" src="../assets/icon/icon-jam-removebg-preview.png">
                </div>
                <p class = "quote"> financial transaction remotely using a mobile device such as a smartphone or tablet</p>
                <a href = "" class="getButton"><span>Get started</span></a>
            </div>
            <div>
            </div>
        </div>
    </div>
    <div class="column two">
    <img class="column-img" src= "../assets/images/content.png" title="" v-lazy-load>
    </div>
</section>
</template>


<style lang="scss" scoped>
@import '~assets/scss/style.scss';
.two-column{
    padding-top: 65px;
    display: flex;
    @include android{
        flex-direction: column;
        padding-top: 40px;
    }
    @include tablet{
        padding-top: 40px;
    }
    .column.two{
        @include android{
            height : 75%;
        }
    }
    .column{  
        width: 50%;
        height: calc(100vh - 80px);
        @include android{
            width:100%;
            
        }
        @include android{
            width: 100%;
            height: calc(100vh - 80px);
        }
        .column-img{
            height: 100%;
            width: 100%;
            @include android{
                height: 75%;
            }
        }
        .inner-container {
            height: 100%;
            display: flex;
            -webkit-box-flex-direction: column;
            -moz-box-flex-direction: column;
            flex-direction: column;
            justify-content: center;
            -webkit-justify-content: center;
            @include tablet{
                height: 110%;
            }
            .text-in-content{
                padding-bottom: 50px;
                text-align: left;
                max-width: 45%;
                margin-left: 10%;
                @include tablet{
                padding-bottom: none;
            }
                .icon-jam{
                    position: relative;
                    .jam{
                        position: absolute;
                        left: 310px;
                        top: 0px; 
                        width: 50px;
                        @include android{
                            left: 200px;
                            width: 25px;
                        }
                        @include tablet{
                            left: 190px;
                            width: 40px;
                        }
                    }
                }
                .icon-text{
                    font-family: $font;
                    font-size: 14px;
                    font-weight: 300;
                    line-height: 24px;
                    @include android{
                        font-size: 10px;
                    }
                    img{
                        width: 20px;
                        @include android{
                            width: 12px;
                        }
                }
                }
            }
            .title{
                margin: 0;
                font-family: $font;
                font-weight: bold;
                line-height: 80px;
                letter-spacing: 0;
                font-size: 3.5em;
                @include android{
                    font-size: 1.75em;
                    line-height: 40px;
                    letter-spacing: 0;
                }
                @include tablet{
                    font-size: 2.2em;
                    line-height: 40px
            }
            }
            .quote{
                font-family: $font;
                font-size: 14px;
                line-height: 20px;
                max-width: 60%;
                color: #A9A9A9;
                padding-bottom: 30px;
                @include android{
                    font-size: 12px;
                }
                @include tablet{
                    font-size: 13px;
                    padding-bottom: 10px;
                }
            }
            .getButton{
                border-radius: 10px;
                background-color: #25274D;
                padding: 10px 40px;
                display: inline-block;
                cursor: pointer;
                right: 25px;
                text-decoration: none;
                transition: all .2s ease;
                color: #fff;
                &:hover{
                    background-color: #A9A9A9;
                    color: black;
                }
                @include android{
                    padding: 5px 15px;
                }
                @include tablet{
                   padding: 7px 20px;
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
                         @include tablet{
                            font-size: 13px;
                        }
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
        width: 75%;
    }
}
</style>

