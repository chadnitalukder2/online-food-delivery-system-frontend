<script setup>
import { useNotification } from "@kyvg/vue3-notification";
import axios from "axios";
import { useRouter } from "vue-router";
import { ref } from "vue";

const router = useRouter();
const { notify } = useNotification();
//==================================
const form = ref({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    role: "customer",
});
const validation = ref({});
//---------------------------------------------
const clearValidationMessage = (field) => {
    setTimeout(() => {
        validation.value[field] = '';
    }, 5000); // Set the timeout duration in milliseconds (e.g., 3000 for 3 seconds)
}

//---------------------------------------------------
const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
//---------------------------------------
const handleRegister = async () => {
    if (form.value.name === '') {
        validation.value.name = "Name is required";
        clearValidationMessage('name');
    }
    if (form.value.email === "" || !validateEmail(form.value.email)) {
        validation.value.email = "Email is required and must be a valid email address";
        clearValidationMessage('email');
    }
    if (form.value.password === "" || form.value.password.length < 8) {
        validation.value.password = "Password is required and must be at least 6 characters long";
        clearValidationMessage('password');
    }
    if (form.value.password_confirmation === "") {
        validation.value.password_confirmation = "Password confirmation is required";
        clearValidationMessage('password_confirmation');
    }
    if (form.value.password_confirmation !== form.value.password) {
        validation.value.password_confirmation = "The password confirmation does not match.";
        clearValidationMessage('password_confirmation')
    }
    else {
        await handleApiRequest();
    }
//------------------------------------------


};
//------------------------------------------
const handleApiRequest = async () => {
        await axios.post('api/register', {
            name: form.value.name,
            email: form.value.email,
            role:  form.value.role,
            password: form.value.password,
            password_confirmation: form.value.password_confirmation,
           
        }).then(() => {
            notify({
                title: "Registration Successful ",
                type: "success",
            });
        })
         router.push("/login");
    }
    //-----------------------------------------

</script>

<template>
    <div class="container">
        <div class="title_section">
            <div class="inner-banner">
                <img src="../assets/baner-img.jpg">
            </div>
            <div class="banner_title">
                <h1>User Register</h1>
            </div>

        </div>
        <div class="login_warper">
            <div class="login_page">
                <h1 class="form-title"> Register</h1>
                <form @submit.prevent="handleRegister" method="post">

                    <div class="form-header">

                      
                        
                        <label for="uname"><b>User Name </b></label><br>
                        <input type="text" v-model="form.name" placeholder="Enter User Name" name="uname">
                        <p style="margin: 0px; color: red; font-size: 14px;">{{ validation.name }}</p><br>

                        <label for="uname"><b>User Email </b></label><br>
                        <input type="email" v-model="form.email" placeholder="Enter User Email" name="uname">
                        <p style="margin: 0px; color: red; font-size: 14px;">{{ validation.email }}</p><br>

                        <label for="psw"><b>Password </b></label>
                        <input type="password" v-model="form.password" placeholder="Enter Password" name="psw">
                        <p style="margin: 0px; color: red; font-size: 14px;">{{ validation.password }}</p><br>

                        <label for="psw"><b> Password Confirmation</b></label>
                        <input type="password" v-model="form.password_confirmation"
                            placeholder="Enter Password Confirmation" name="psw">
                        <p style="margin: 0px; color: red; font-size: 14px;">{{ validation.password_confirmation }}</p>
                        <br>


                        <label style="margin: 0px; color: red; font-size: 14px;"></label>
                        <button type="submit" class="login_btn">Sing up</button>

                    </div>

                    <div class="form-footer">
                        <p class="text-base text-[#adadad]"> Already have an account?
                            <router-link to="/Login" class=""> Login</router-link>
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
                color: var(--text-color-middle);
            }

            .form-header {
                text-align: left;
                padding: 0px 80px;
                @media (max-width: 611px) {
                    padding: 0px 40px;
            }
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
                        background: var(--primary-color-hover);
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
                    color: var(--primary-color-hover);
                }
            }

            .text-base {
                margin-top: 12px;
                color: var(--text-color-big);
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