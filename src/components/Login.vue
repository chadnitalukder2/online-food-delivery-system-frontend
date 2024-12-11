<script setup>
import { useNotification } from "@kyvg/vue3-notification";
const { notify } = useNotification();

import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

const router = useRouter();
const errors = ref(null);
//---------------------------------
const form = ref({
    email: "",
    password: "",
});

const validation = ref({});
//---------------------------------------
const clearValidationMessage = (field) => {
    setTimeout(() => {
        validation.value[field] = '';
    }, 5000); // Set the timeout duration in milliseconds (e.g., 5000 for 5 seconds)
}
//-------------------------------------------------
const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
//----------------------------------------------
const handleLogin = async () => {

    if (form.value.email === "" || !validateEmail(form.value.email)) {
        validation.value.email = "Email is required and must be a valid email address";
        clearValidationMessage('email');
    }
    if (form.value.password === "" || form.value.password.length < 6) {
        validation.value.password = "Password is required and must be at least 6 characters long";
        clearValidationMessage('password');
    } else {
        await handleApiRequest();
    }

};
//---------------------------------------------
const handleApiRequest = async () => {

    try {
        await axios.post("api/login", {
            email: form.value.email,
            password: form.value.password,
        }).then((res) => {
            notify({
                title: "Login Successful ",
                type: "success",
            });
            localStorage.setItem("user_name", res?.data?.user?.name);
            localStorage.setItem("user_email", res?.data?.user?.email);
            localStorage.setItem("user_role", res?.data?.user?.role);
            localStorage.setItem("user_id", res?.data?.user?.id);

            router.push('/').then(() => {
                location.reload();
            });
        })
    } catch (error) {
        errors.value = error.response.data.message || 'An error occurred during login.';
        validation.value.email = '';
        validation.value.password = '';
    }
};

</script>

<template>
    <div class="container">
        <div class="title_section">
            <div class="inner-banner">
                <img src="../assets/baner-img.jpg">
            </div>
            <div class="banner_title">
                <h1>Login</h1>
            </div>
        </div>

        <div class="login_warper">
            <div class="login_page">
                <h1 class="form-title">Login</h1>
                <form @submit.prevent="handleLogin" method="post">

                    <div class="form-header">
                        <label for="uname"><b>User Email </b></label><br>
                        <input type="email" v-model="form.email" placeholder="Enter User Email" name="uname">
                        <p style="margin: 0px; color: red; font-size: 14px;">{{ validation.email }}</p><br>

                        <label for="psw"><b>Password </b></label>
                        <input type="password" v-model="form.password" placeholder="Enter Password" name="psw">
                        <p style="margin: 0px; color: red; font-size: 14px;">{{ validation.password }}</p><br>

                        <p style="margin: 0px; padding-bottom: 10px; color: red; font-size: 14px;">{{ errors }}</p>
                        <button type="submit" class="login_btn">Login</button>

                    </div>

                    <div class="form-footer">
                        <router-link to="/forgot-password" class="form_forgot_pass">Forgot Password?</router-link>
                        <p class="text-base text-[#adadad]"> Don't have any account yet?
                            <router-link to="/register" class=""> Register </router-link>
                        </p>
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
            @media (max-width: 1088px) {
                flex-basis: 80%;
            }
            @media (max-width: 611px) {
                flex-basis: 90%;
            }
            .form-title {
                font-size: 32px;
                padding-bottom: 30px;
                font-weight: 500;
                color: #484646;
            }

            .form-header {
                text-align: left;
                padding: 0px 80px;
                @media (max-width: 611px) {
                    padding: 0px 40px;
            }
                label {
                    font-size: 16px;
                    color: #484646;
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
                        background: var( --primary-color-hover);
                    }
                }
            }

        }

        .form-footer {
            .form_forgot_pass {
                text-decoration: none;
                font-size: 16px;
                color: #716f6f;
                transition: all .3s;

                &:hover {
                    color: var(--text-color-link);
                }
            }

            .text-base {
                margin-top: 12px;
                color: #212121;
                font-size: 16px;

                a {
                    color: var(--text-color-link);
                    text-decoration: none;
                }
            }
        }
    }

}
</style>