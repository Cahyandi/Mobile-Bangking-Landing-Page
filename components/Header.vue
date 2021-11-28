<template>
    <section class="header">
        <div class="header-wrapper">
            <a href="" class="logo">
            Besnik
            </a>
            <div class="navigation">
            <ul class = "header-link">
                <li class= "header-link-item"><a href="">Business</a></li>
                <li class= "header-link-item"><a href="">Pricing</a></li>
                <li class= "header-link-item"><a href="">Features</a></li>
                <li class= "header-link-item"><a href="">About</a></li>
            </ul>
            </div>
            <div class="dashboard">
            <a href="" class="dashboard-link">
                <span>Log in</span>
            </a>
            <a href="" class="dashboard-link">
                <div class="sign-up">
                <span>Sign up</span>
                </div>
            </a>
            </div>
            <div class="hamburger-menu">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@import '~assets/scss/style.scss';
.header{
    background-color: #ffffff;
    text-align : left;
    position: sticky;
    top: 0;
    left: 0; 
    z-index: 99;
    width: 100%;
   
    .hamburger-menu{
        display: none;
        @include tablet{
            display: flex;
            flex-direction: column;
            justify-content:space-between;
            height: 20px;
        }
        @include android{
            height: 16px;
        }
        span{
            display: block;
            width: 28px;
            border-radius: 3px;
            height: 3px;
            background-color: #000;
        }
    }
    .header-wrapper{
        display: flex;
        align-items: center;
        justify-content: space-between;
        // margin-right: 30px;
        // margin-left: 20px;
        padding-top: 15px;
        padding-bottom: 15px;
        @include android{
            padding-top: 5px;
        }
        .logo{
            text-decoration: none;
            color:  #000;
            font-family: $fontlogo;
            font-size: 30px;
            &:hover{
                color: #A9A9A9;
            }
            @include android{
                font-size: 25px;
            }
        }
        .navigation{
            @include android{
                display: none;
            }
            .header-link{
                .header-link-item{
                    display: inline-block;
                    padding: 0 25px;
                    cursor: pointer;
                    &:hover{
                    > a{
                            color: black;
                    }
                    }
                    a{
                        text-decoration: none;
                        font-family: $font;
                        font-size: 14px;
                        font-weight: 300;
                        line-height: 24px;
                        color: #A9A9A9;
                        pointer-events: none;
                    }
                }
            }
        }
        .dashboard{
            @include android{
                display: none;
            }
            .dashboard-link{
                display: inline-block;
                padding: 0 15px;
                text-decoration: none;
                color: black;
                span{
                        font-family: $font;
                        font-size: 14px;
                        font-weight: 300;
                        line-height: 24px;
                        pointer-events: none;
                }
                .sign-up{
                    border-radius: 10px;
                    background-color: #25274D;
                    padding: 10px 30px;
                    display: inline-block;
                    cursor: pointer;
                    right: 25px;
                    text-decoration: none;
                    transition: all .2s ease;
                    color: #fff;
                    &:hover{
                         background-color: #fff;
                         color: #25274D;
                    }
                    
                }
            }
        }
    }
}



</style>
