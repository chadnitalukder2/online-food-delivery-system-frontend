<script>

</script>

<template>
    <div class="container">
        <div class="login_warper">
            <div class="login_image">
                <img src="../assets/delivery-girl.png">
            </div>
            <div class="login_page">
                <h1 class="form-title">Login</h1>
                <form @submit.prevent="handleLogin" method="post" >

                    <div class="form-header">
                        <label for="uname"><b>User Email </b></label><br>
                        <input  type="text" placeholder="Enter User Email" name="uname">
                        <p style="margin: 0px; color: red; font-size: 14px;"></p><br>


                        <label for="psw"><b>Password </b></label>
                        <input  type="password" placeholder="Enter Password" name="psw">
                        <p style="margin: 0px; color: red; font-size: 14px;"></p><br>

                        <label style="margin: 0px; color: red; font-size: 14px;"></label>
                        <button type="submit" class="login_btn">Login</button>

                    </div>

                    <div class="form-footer" >
                        <router-link to="/forgot-password" class="form_forgot_pass">Forgot Password?</router-link>
                        <p class="text-base text-[#adadad]"> Not a member yet?
                            <router-link to="/register" class=""> register </router-link>
                        </p>
                    </div>
                </form>

            </div>
        </div>


    </div>

</template>

<style lang="scss">
.container {

    padding: 85px 200px;
    background: #f0f0f085;
    font-family: Tahoma;
    .login_warper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-shadow: 0px 1px 7px #e7e4e4;
        border-radius: 6px;
        overflow: hidden;
        background: #fff;

        .login_image {
            flex-basis: 40%;
            background-color: #9c4202;
            border-radius: 6px;
            img {
                width: 100%;
                height: 100%;
            }

        }

        .login_page {
            flex-basis: 60%;
            text-align: center;
            background: #fff;
            .form-title{
                font-size: 32px;
                padding-bottom: 30px;
                font-weight: 500;
                color: #484646;
            }
            .form-header{
                text-align: left;
                padding: 0px 80px;
                label{
                    font-size: 16px;
                    color: #484646;
                }
                input{
                    padding: 10px;
                    width: 100%;
                    font-size: 14px;
                    margin-top: 10px;
                    border-radius: 6px;
                    border: 2px solid #e7e4e4;
                    &:focus-visible{
                        border: 2px solid #9c4202;
                        outline: none;
                    }
                }
                .login_btn{
                    padding: 10px;
                    width: 100%;
                    border: 1px solid #9c4202;
                    color: #fff;
                    background: #9c4202;
                    border-radius: 6px;
                    cursor: pointer;
                    font-size: 16px;
                    font-weight: 500;
                    margin-bottom: 10px;
                    transition: all .5s;
                    &:hover{
                        background: #bb5003;
                    }
                }
            }
           
        }

        .form-footer{
            .form_forgot_pass{
                text-decoration: none;
                font-size: 16px;
                color: #716f6f;
                transition: all .3s;
                &:hover{
                    color:  #0303a4;
                }
            }
        }
    }

}
</style>