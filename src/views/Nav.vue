<script>
</script>

<template>
<div class="nav">
    <div class="top_nav">
        <p>Do you need a business account?</p>
        <el-button class="btn" type="primary">Singup Now</el-button>
    </div>
    <div class="ofd_nav">
        <div class="header-main">
            <div class="logo">
                <h1>F<span>oo</span>dHat</h1>
            </div>
            <div class="menu-items">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Restaurant</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <div class="menu-items">
               <ul>
                <li><i class="fa-regular fa-heart"></i></li>
                <li class="btn_login"><a href="" style=" color: #9c4202 ;">Log in</a></li>
                <li class="btn_singup"><a href="" style=" color: #fff ;" >Sing up </a></li>
               </ul>
            </div>

        </div>
    </div>

</div>
</template>

<style lang="scss">
.nav{
    font-family: Tahoma;
.top_nav{
    background-color: #9c4202;
    text-align: center;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    p{
        color: #fff;
        font-size: 18px;
        font-family: Tahoma;
        font-weight: 500;
    }
    .btn{
        padding: 8px 12px;
        color: #fff;
        background: #9c4202;
        border-radius: 6px;
        border: 1px solid #fff;
        cursor: pointer;
        font: 14px;
        transition: all .3s;
        &:hover{
            color: #9c4202;
            background: #fff;
        }
    }
}
.ofd_nav{
    .header-main{
        background: #fff;
        padding:  12px 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-shadow: 1px 4px 15px #e7e4e4;
        .logo{
            h1{
                color: #3f3636;
                font-size: 32px;
                font-weight: 600;
                cursor: pointer;
                span{
                    color: #9c4202;
                    font-weight: 500;
                }
            }
        }
        .menu-items{
            ul{
                display: flex;
                gap: 30px;
                li{
                    list-style: none;
                    font-size: 18px;
                    a{
                        text-decoration: none;
                        font-weight: 500;
                        color: #484646;
                        &:hover{
                            color: #9c4202;
                        }
                    }
                }
            }
            .btn_login{
                background: #fff;
                border: 1px solid #9c4202;
                padding: 6px 12px;
                border-radius: 6px;
                font-size: 14px  !important;
                transition: all .3s;
                &:hover{
                    transform: scale(1.1);
                }
            }
            .btn_singup{
                background: #9c4202;
                border: 1px solid #9c4202;
                padding: 6px 12px;
                border-radius: 6px;
                font-size: 14px  !important;
                transition: all .3s;
                &:hover{
                    transform: scale(1.1);
                    color: #fff;
                }
            }
        }
    }
}

}


</style>