<template>
    <section class="header">
        <div class="header-wrapper">
          <a href="" class="logo">
            <img src= "../assets/images/besnik.png">
          </a>
          <div class="navigation">
            <ul class = "header-link">
                <li class= "header-link-item"><span>Business</span></li>
                <li class= "header-link-item"><span>Pricing</span></li>
                <li class= "header-link-item"><span>Features</span></li>
                <li class= "header-link-item"><span>About</span></li>
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
        </div>
    </section>
</template>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700&display=swap");
$font: "open sans bold", sans-serif;

.header{
    background-color: #ffffff;
    text-align : left;
    position: sticky;
    top: 0;
    left: 0; 
    z-index: 99;
    width: 100%;
    
    .header-wrapper{
        display: flex;
        align-items: center;
        justify-content: space-between;
        // margin-right: 30px;
        // margin-left: 20px;
        padding-top: 15px;
        padding-bottom: 15px;
       
        .navigation{
            
            .header-link{
                .header-link-item{
                    display: inline-block;
                    padding: 0 25px;
                    color: #A9A9A9;
                    cursor: pointer;
                    &:hover{
                        color: black;
                    }
                    span{
                        font-family: $font;
                        font-size: 14px;
                        font-weight: 300;
                        line-height: 24px;
                        pointer-events: none;
                    }
                }
            }
        }
        .dashboard{
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
