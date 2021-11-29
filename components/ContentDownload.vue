<template>
<section class="download-app">
<div class = "container">
    <div class="column">
        <img class="column-img" src= "../assets/images/download.png">
    </div>
    <div class="column two">
        <div class="title">Download mobile App</div>
        <div class="desc">Download Besnik mobile banking app for IOS and android. It helps you banking quickly and more smartly.</div>
        <div class="dashboard">
        <a href="" class="app-store">
            <img src="../assets/icon/icon appstore.png" />
            <span>App Store</span>
        </a>
        <a href="" class="play-store">
            <img src="../assets/icon/icon playstore.png" />
            <span>play Store</span>
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
        .column.two{
            max-width: 260px;
        }
        .column{
            padding: 0 100px;
            .title{
                text-align: left;
                font-family: $font;
                font-size: 35px;
                padding-bottom: 10px;
                font-weight: bold;
                line-height: 45px;
                letter-spacing: 0;
            }
            .desc{
                font-family: $font;
                text-align: left;
                font-size: 15px;
                line-height: 20px;
                letter-spacing: 0;
                color:#A9A9A9;
                padding-bottom: 50px;
            }
            .dashboard{
                display: flex;
                flex-direction: column;
                .app-store{
                    background-color: transparent;
                    padding: 11px 250px;
                    display: inline-block;
                    cursor: pointer;
                    position: relative;
                    text-decoration: none;
                    border: 0.8px solid hsla(0,0%,100%,.47059);
                    border-radius: 7.2px;
                    transition: all .1s ease-in-out;
                    margin-right: 100%;
                    white-space: nowrap;
                }
            }
        }
    }
    
}

</style>