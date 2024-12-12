<script>

</script>

<template>
    <div class="container">
        <div class="title_section">
            <div class="inner-banner">
                <img src="../assets/baner-img.jpg">
            </div>
            <div class="banner_title">
                <h1>Reset Password</h1>
            </div>
        </div>

        <div class="login_warper">
            <div class="login_page">
                <h1 class="form-title">Reset Password</h1>
                <form @submit.prevent="handleLogin" method="post">

                    <div class="form-header">
                        <label for="psw"><b>Password </b></label>
                        <input type="password" placeholder="Enter Password" name="psw">
                        <p style="margin: 0px; color: red; font-size: 14px;"></p><br>

                        <label for="psw"><b> Password Confirmation</b></label>
                        <input type="password" placeholder="Enter Password Confirmation" name="psw">
                        <p style="margin: 0px; color: red; font-size: 14px;"></p><br>
    
                        <label style="margin: 0px; color: red; font-size: 14px;"></label>
                        <button type="submit" class="login_btn">Submit</button>

                    </div>

                 
                </form>

            </div>
        </div>


    </div>

</template>

<style lang="scss" scoped>
.container {
    background: #f0f0f085;
    font-family: Tahoma;

    .title_section {
        .inner-banner {
            width: 100%;
            height: 200px;
            position: relative;

            img {
                width: 100%;
                height: 100%;
            }
        }

        .banner_title {
            position: absolute;
            height: 201px;
            top: 62px;
            width: 100%;
            display: flex;
            background: #0e1212a1;
            justify-content: center;
            align-items: center;
            @media (max-width: 942px) {
                top: 62px;
            }
            @media (max-width: 914px) {
                top: 65px;
            }
            h1 {
                font-size: 42px;
                font-weight: 700;
                color: var(--text-color-white);

                @media (max-width: 590px) {
                    font-size: 30px;
                }

                @media (max-width: 410px) {
                    font-size: 25px;
                }
            }

        }
    }

    .login_warper {
        padding: 80px 0px;
        display: flex;
        justify-content: center;
        align-items: center;
        @media (max-width: 1088px) {
            padding: 50px 0px;
            }
        @media (max-width: 611px) {
            padding: 30px 0px;
            }
        .login_page {
            flex-basis: 50%;
            text-align: center;
            background: var(--text-color-white);
            box-shadow: 0px 1px 7px #e7e4e4;
            border-radius: 6px;
            padding: 40px 0px;

            .form-title {
                font-size: 32px;
                padding-bottom: 30px;
                font-weight: 500;
                color: var(--text-color-middle);
            }

            .form-header {
                text-align: left;
                padding: 0px 80px;

                label {
                    font-size: 16px;
                    color: var(--text-color-middle);
                }

                input {
                    padding: 12px 10px;
                    width: 100%;
                    font-size: 14px;
                    margin-top: 10px;
                    border-radius: 6px;
                    border: 2px solid #e7e4e4;

                    &:focus-visible {
                        border: 2px solid var(--primary-color);
                        outline: none;
                    }
                }

                .login_btn {
                    padding: 10px;
                    width: 100%;
                    border: 1px solid var(--primary-color);
                    color: var(--text-color-white);
                    background: var(--primary-color);
                    border-radius: 6px;
                    cursor: pointer;
                    font-size: 18px;
                    font-weight: 500;
                    margin-bottom: 10px;
                    transition: all .5s;

                    &:hover {
                        background: #bb5003;
                    }
                }
            }

        }

    
    }

}
</style>