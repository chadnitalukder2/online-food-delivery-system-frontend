<script setup>
import { ref, onMounted, reactive } from 'vue';
import axios from 'axios';
import { useRouter } from "vue-router";
const router = useRouter();
import { defineProps } from "vue";
//-----------------------
const carts = ref();
const state = reactive({
    loggedIn: false,
    is_admin: false,
    is_owner: false
});
//------------------------------
const handleLogout = async () => {
    await axios.post('api/logout');
    localStorage.removeItem('user_id');
    localStorage.removeItem('user_email');
    localStorage.removeItem('user_role');
    router.push({ name: 'Login' });
    window.location.reload();
};
//------------------------------------


onMounted(async () => {
    getCarts();
    state.loggedIn = localStorage.getItem('user_email') ? true : false;
    state.is_admin = localStorage.getItem('user_role') === 'admin' ? true : false;
    state.is_owner = localStorage.getItem('user_role') === 'owner' ? true : false;
});
//------------------------------------------
const getCarts = async () => {
    const id = localStorage.getItem('user_id')
    let response = await axios.get(`/api/getCarts/${id}`);
    carts.value = response.data.length;
};

</script>

<template>
    <div class="nav">
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
                            <p>{{ carts }}</p>
                        </li>
                        <li class="profile" v-if="state.loggedIn">
                            <router-link active-class="active" :to="{ name: 'profile-page' }">
                                <i class="fa-solid fa-circle-user"></i>
                            </router-link>
                        </li>

                        <li class="btn_login" v-if="!state.loggedIn">
                            <router-link active-class="active" :to="{ name: 'Login' }"
                                style=" color: #017EF3 ;">Login</router-link>
                        </li>
                        <li class="btn_singup" v-if="!state.loggedIn">
                            <router-link active-class="active" :to="{ name: 'register' }" style=" color: var(--text-color-white) ;">Sing
                                up</router-link>
                        </li>
                        <li class="btn_login" v-if="state.is_admin">
                            <router-link active-class="active" :to="{ name: 'dashboard' }"
                                style=" color: #017EF3 ;">Admin</router-link>
                        </li>
                        <li class="btn_login" v-if="state.is_owner">
                            <router-link active-class="active" :to="{ name: 'owner-dashboard' }"
                                style=" color: #017EF3 ;">Owner</router-link>
                        </li>
                        <li v-if="state.loggedIn">
                            <button @click="handleLogout" class="btn_singup"
                                style="color: var(--text-color-white); cursor: pointer;">Logout</button>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    </div>
    <!----------------------------------------------------- -->
    <nav class="navbar">
        <div class="navbar-container container">
            <input type="checkbox" name="" id="">
            <div class="hamburger-lines">
                <span class="line line1"></span>
                <span class="line line2"></span>
                <span class="line line3"></span>
            </div>

            <ul class="menu-items">

                <li> <router-link active-class="active" :to="{ name: 'home' }">Home</router-link></li>
                <li> <router-link active-class="active" :to="{ name: 'restaurants' }">Restaurant</router-link></li>
                <li><router-link active-class="active" :to="{ name: 'cart-page' }">Cart Item</router-link></li>
                <li v-if="state.loggedIn"><router-link active-class="active"
                        :to="{ name: 'profile-page' }">Profile</router-link></li>
                <li v-if="!state.loggedIn"><router-link active-class="active"
                        :to="{ name: 'Login' }">Login</router-link></li>
                <li v-if="!state.loggedIn"><router-link active-class="active"
                        :to="{ name: 'register' }">Register</router-link></li>
                <li v-if="state.is_admin"><router-link active-class="active"
                        :to="{ name: 'dashboard' }">Admin</router-link></li>
                <li v-if="state.is_owner"><router-link active-class="active"
                        :to="{ name: 'owner-dashboard' }">Owner</router-link></li>
                <li v-if="state.loggedIn">
                    <button @click="handleLogout">Logout</button>
                </li>

            </ul>
            <div class="logo">
                <router-link>
                    <h1>F<span>oo</span>dHat</h1>
                </router-link>
            </div>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
.nav {
    font-family: Tahoma;

    @media (max-width: 900px) {
        display: none;
    }

    .ofd_nav {
        box-shadow: 0 3px 5px rgba(0, 0, 0, .02), 0 0 2px rgba(0, 0, 0, .05), 0 1px 4px rgba(0, 0, 0, .08) !important;

        .header-main {
            background: var(--text-color-white);
            padding: 12px 80px;
            display: flex;
            justify-content: space-between;
            align-items: center;

            @media (max-width: 1251px) {
                padding: 12px 50px;
            }

            @media (max-width: 900px) {
                padding: 0px 50px;
            }

            .logo {
                h1 {
                    color: var(--text-color-big);
                    font-size: 32px;
                    font-weight: 600;
                    cursor: pointer;

                    span {
                        color: var(--primary-color);
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
                            color: var(--primary-color);
                        }

                        a {
                            text-decoration: none;
                            font-weight: 500;
                            color: var(--text-color-middle);

                            &:hover {
                                color: var(--primary-color);
                            }
                        }
                    }
                }

                .btn_login {
                    background: var(--text-color-white);
                    border: 1px solid var(--primary-color);
                    padding: 6px 12px;
                    border-radius: 6px;
                    font-size: 14px !important;
                    transition: all .3s;

                    &:hover {
                        transform: scale(1.1);
                    }
                }

                .btn_singup {
                    background: var(--primary-color);
                    border: 1px solid var(--primary-color);
                    padding: 6px 12px;
                    border-radius: 6px;
                    font-size: 14px !important;
                    transition: all .3s;

                    &:hover {
                        transform: scale(1.1);
                        color: var(--text-color-white);
                    }
                }

                .cart,
                .profile {
                    i {
                        font-size: 20px;
                        color: var(--text-color-middle);
                        transition: all .3s;

                        &:hover {
                            color: var(--primary-color);
                        }
                    }

                    .router-link-exact-active {
                        i {
                            color: var(--primary-color);
                        }
                    }
                }

                .cart {
                    position: relative;

                    p {
                        position: absolute;
                        background: red;
                        color: var(--text-color-white);
                        font-size: 10px;
                        font-weight: bold;
                        text-align: center;
                        padding: 1px 4px;
                        margin: -3px -5px 0px 0px;
                        right: 0;
                        top: 0;
                        border-radius: 50%;
                    }
                }
            }
        }
    }

}

//=========================================
.navbar {

input[type="checkbox"],
.hamburger-lines {
    display: none;
}

box-shadow: 0px 2px 7px 0px #EAECF0;
/* border-bottom: 1px solid #aaaaaaa1; */
background: var(--text-color-white);
color: #000;

a {
    text-decoration: none;
    font-size: 1.1rem;
    font-weight: 800;
    text-transform: uppercase;
    transition: all .3s ease;
    color: #232630;
    &.active {
        color: #117964;
    }
    &:hover {
        color: #117964;
    }
}

.navbar-container {
    display: flex;
    justify-content: space-between;
    height: 64px;
    align-items: center;

    .menu-items {
        order: 2;
        display: flex;
    }

    .logo {
        order: 1;
        font-size: 2.3rem;
    }
}

.menu-items {
    // background: var(--text-color-white);

    li {
        list-style: none;
        margin-left: 1.5rem;
    }

    button {
        padding: 8px 16px;
        border: 1px solid #8080803b;
        border-radius: 4px;
        cursor: pointer;
        height: 36px;
        font-size: 16px;
        font-weight: 600;
        color: #444;
        margin-top: -10px;
    }

    button:hover {
        background-color: #4CAF50;
        /* Green */
        color: white;
    }
}
}

.container {
width: 90%;
margin: auto;
}
.navbar {
    
    @media (min-width: 900px) {
        display: none;
        box-shadow: 0 3px 5px rgba(0, 0, 0, .02), 0 0 2px rgba(0, 0, 0, .05), 0 1px 4px rgba(0, 0, 0, .08) !important;
    }

    .logo {
        h1 {
            color: var(--text-color-big);
            font-size: 25px;
            font-weight: 600;
            cursor: pointer;

            span {
                color: var(--primary-color);
                font-weight: 500;
            }
        }
    }
}

@media (max-width: 900px) {
    .navbar {

        .navbar-container {
            z-index: 99999;
            input[type="checkbox"],
            .hamburger-lines {
                display: block;
               
            }

            display: block;
            position: relative;
            height: 64px;

            input[type="checkbox"] {
                position: absolute;
                display: block;
                height: 32px;
                width: 30px;
                top: 20px;
                left: 20px;
                z-index: 5;
                opacity: 0;
                cursor: pointer;
            }

            .hamburger-lines {
                display: block;
                height: 20px;
                width: 25px;
                position: absolute;
                top: 20px;
                left: 20px;
                z-index: 2;
                display: flex;
                flex-direction: column;
                justify-content: space-between;

                .line {
                    display: block;
                    height: 2px;
                    width: 100%;
                    border-radius: 10px;
                    background: #000;
                }

                .line1 {
                    transform-origin: 0% 0%;
                    transition: transform 0.3s ease-in-out;
                }

                .line2 {
                    transition: transform 0.2s ease-in-out;
                }

                .line3 {
                    transform-origin: 0% 100%;
                    transition: transform 0.3s ease-in-out;
                }
            }

            .menu-items {
                background: var(--text-color-white);
                padding-top: 64px;
                margin-top: 0px;
                height: 100vh;
                max-width: 300px;
                transform: translate(-150%);
                display: flex;
                flex-direction: column;
                text-align: center;
                margin-left: -51px;
                padding-left: 40px;
                transition: transform 0.5s ease-in-out;
                box-shadow: 5px 0px 10px 0px #aaa;
                overflow: scroll;

                li {
                    font-size: 1.3rem;
                    padding: 15px;
                    border: 1px solid var(--primary-color);
                    margin: 9px 15px;
                    border-radius: 6px;
                    list-style: none;
                    font-weight: 500;

                    a {
                        text-decoration: none;
                        font-weight: 500;
                        color: var(--primary-color);
                    }

                    &:hover {
                        background: var(--primary-color);

                        a {
                            color: var(--text-color-white);
                        }
                    }

                    button {
                        border: none;
                        background-color: transparent;
                        color: var(--primary-color);
                        font-size: 1.3rem;
                        cursor: pointer;
                    }
                }
            }

            .logo {
                position: absolute;
                top: 10px;
                right: 15px;
                font-size: 2.0rem;
                margin: 0;
            }

            input[type="checkbox"]:checked {
                ~.menu-items {
                    transform: translateX(0);
                }

                ~.hamburger-lines {
                    .line1 {
                        transform: rotate(45deg);
                    }

                    .line2 {
                        transform: scaleY(0);
                    }

                    .line3 {
                        transform: rotate(-45deg);
                    }
                }
            }
        }
    }
}

@media (max-width: 651px) {
    .navbar-container {
        width: 95%;
        input[type="checkbox"]:checked {
            ~.logo {
                display: none;
            }
        }
    }
}
</style>