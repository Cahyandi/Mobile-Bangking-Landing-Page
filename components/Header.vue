<template>
    <section class="header" >

        <div class="header-wrapper">
            <a href="" class="logo" data-aos="fade-right">
            Besnik
            </a>
            <!-- Top Bar -->
            <div class="top-bar">
                <ul id="dropdownMenu">
                <li><a href="">Business</a></li>
                </ul>
            </div>
            <!-- End Top Bar -->
            <div class="navigation">
                <ul class = "header-link">
                    <li class= "header-link-item"><a href="">Business</a></li>
                    <li class= "header-link-item"><a href="">Pricing</a></li>
                    <li class= "header-link-item"><a href="">Features</a></li>
                    <li class= "header-link-item"><a href="/Footer">About</a></li>
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
            <div class="hamburger-menu" @click="test">
                <input type="checkbox" />
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
    position: fixed;
    top: 0;
    left: 0; 
    z-index: 99;
    width: 100%;
    @include tablet{
        
    }
    .top-bar{
        display:none;
        @include android{
            display: block;
        }
        #dropdownMenu{
            margin: 0;
            padding: 25px 0;
            background-color:#A9A9A9;
            position: absolute;
            width: 100%;
            top: 75px;
            left: 0;
            z-index: 100;
            list-style: none;
            overflow: hidden;
            opacity: 0;
            border-top: 1px solid #d8d8d8;
            transition: all 0.2s ease-in;
            pointer-events: none;
        }
        #dropdownMenu.active {
            overflow: visible;
            opacity: 1;
            pointer-events: auto;
            overflow-y: scroll;
            padding-bottom: 80px;
            height: 100vh;
    }
    }
    .hamburger-menu{
        display: none;
        position: relative;
            padding-right: 10px;
        @include tablet{
            display: flex;
            flex-direction: column;
            justify-content:space-between;
            height: 20px;
        }
        @include android{
            height: 16px;
        }
        span {
            display: block;
            width: 21px;
            border-radius: 3px;
            height: 3px;
            background-color: #000;
            transition: all 0.5s;
            &:nth-child(2) {
                transform-origin: 0 0;
            }
             &:nth-child(4) {
                transform-origin: 0 100%;
            }
        }
        input {
            position: absolute;
            width: 28px;
            height: 28px;
            opacity: 0;
            top: -8px;
            left: -4px;
            z-index: 2;
            &:checked {
                ~ {
                    span {
                        &:nth-child(2) {
                            background-color: #708090;
                            transform: rotate(45deg) translate(-1px, 1px);
                        }
                        &:nth-child(4) {
                            background-color: #708090;
						transform: rotate(-45deg) translate(-1px, 0);
                        }
                        &:nth-child(3) {
                            transform: scale(0);
                            opacity:0;
                        }
                    }
                }
            }
        }
}
    
    .header-wrapper{
        display: flex;
        align-items: center;
        justify-content: space-between;
        // margin-right: 30px;
        // margin-left: 20px;
        padding-top: 5px;
        padding-bottom: 5px;
        @include android{
            padding-top: 5px;
        }
        @include tablet{
            margin-left: 30px;
            margin-right: 30px;
            padding-top: 10px;
            padding-bottom: 10px;

        }
        .logo{
            text-decoration: none;
            color:  #000;
            font-family: $fontlogo;
            font-size: 30px;
            padding-left: 8px;
            &:hover{
                color: #A9A9A9;
            }
            @include android{
                font-size: 25px;
            }
            @include tablet{
            font-size: 30px;
        }
        }
        .navigation{
            @include android{
                display: none;
            }
            @include tablet{
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
             @include tablet{
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
<script>

export default {
  methods: {
    test() {
      console.log('this is a nice test!!')
    },
    
  },
}
</script>