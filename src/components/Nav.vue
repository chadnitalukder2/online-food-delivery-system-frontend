<script setup>
import { computed, onMounted, reactive } from 'vue';
import axios from 'axios';
import { useRouter } from "vue-router";
const router = useRouter();
import { defineProps } from "vue";
//-----------------------
const state = reactive({
    loggedIn: false,
    is_admin: false,
    is_owner: false
});
//------------------------------
const handleLogout = async () => {
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    await axios.post('api/logout');
    console.log('hello');
    state.loggedIn = false;
    router.push({ name: 'Login' });
    // window.location.reload();
};
//------------------------------------
const getUser = async () => {
    await axios.get('/api/user').then(response => {
      if (response.status == 200) {
        state.loggedIn = true;
        if (response.data.role == 'admin') {
          state.is_admin = true;
          router.push({ name: 'dashboard' });
        }
      } else {
        state.loggedIn = false;
      }
    }
    ).catch(error => {
        state.loggedIn = false;
    });
}

onMounted(async () => {
    getUser();
});
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

                        <li> <router-link active-class="active" :to="{ name: 'home' }">Home</router-link></li>
                        <li> <router-link active-class="active" :to="{ name: 'restaurants' }">Restaurant</router-link>
                        </li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div class="menu-items">
                    <ul>

                        <li class="cart">
                            <router-link active-class="active" :to="{ name: 'cart-page' }">
                                <i class="far fa-calendar-plus"></i>
                            </router-link>
                        </li>
                        <li class="profile">
                            <router-link active-class="active" :to="{ name: 'profile-page' }">
                                <i class="fa-solid fa-circle-user"></i>
                            </router-link>
                        </li>

                        <li class="btn_login"> 
                            <router-link active-class="active" :to="{ name: 'Login' }"
                                style=" color: #9c4202 ;">Login</router-link>
                            </li>
                        <li class="btn_singup">
                             <router-link active-class="active" :to="{ name: 'register' }"
                                style=" color: #fff ;">Sing up</router-link>
                            </li>
                        <li class="btn_login">
                            <router-link active-class="active" :to="{ name: 'admin' }"
                                style=" color: #9c4202 ;">Admin</router-link>
                        </li>
                        <li >
                            <button  @click="handleLogout" class="btn_singup" style="color: #fff; cursor: pointer;">Logout</button>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.nav {
    font-family: Tahoma;

    .top_nav {
        background-color: #9c4202;
        text-align: center;
        padding: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 15px;

        p {
            color: #fff;
            font-size: 18px;
            font-family: Tahoma;
            font-weight: 500;
        }

        .btn {
            padding: 8px 12px;
            color: #fff;
            background: #9c4202;
            border-radius: 6px;
            border: 1px solid #fff;
            cursor: pointer;
            font: 14px;
            transition: all .3s;

            &:hover {
                color: #9c4202;
                background: #fff;
            }
        }
    }

    .ofd_nav {
        box-shadow: 0 3px 5px rgba(0, 0, 0, .02), 0 0 2px rgba(0, 0, 0, .05), 0 1px 4px rgba(0, 0, 0, .08) !important;

        .header-main {
            background: #fff;
            padding: 12px 80px;
            display: flex;
            justify-content: space-between;
            align-items: center;

            .logo {
                h1 {
                    color: #212121;
                    font-size: 32px;
                    font-weight: 600;
                    cursor: pointer;

                    span {
                        color: #9c4202;
                        font-weight: 500;
                    }
                }
            }

            .menu-items {
                ul {
                    display: flex;
                    align-items: center;
                    gap: 30px;

                    li {
                        list-style: none;
                        font-size: 18px;

                        .router-link-exact-active {
                            color: #9c4202;
                        }

                        a {
                            text-decoration: none;
                            font-weight: 500;
                            color: #484646;

                            &:hover {
                                color: #9c4202;
                            }
                        }
                    }
                }

                .btn_login {
                    background: #fff;
                    border: 1px solid #9c4202;
                    padding: 6px 12px;
                    border-radius: 6px;
                    font-size: 14px !important;
                    transition: all .3s;

                    &:hover {
                        transform: scale(1.1);
                    }
                }

                .btn_singup {
                    background: #9c4202;
                    border: 1px solid #9c4202;
                    padding: 6px 12px;
                    border-radius: 6px;
                    font-size: 14px !important;
                    transition: all .3s;

                    &:hover {
                        transform: scale(1.1);
                        color: #fff;
                    }
                }

                .cart,
                .profile {
                    i {
                        font-size: 20px;
                        color: #484646;
                        transition: all .3s;

                        &:hover {
                            color: #9c4202;
                        }
                    }

                    .router-link-exact-active {
                        i {
                            color: #9c4202;
                        }
                    }
                }

            }
        }
    }

}
</style>