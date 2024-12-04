<script setup>
import { useNotification } from "@kyvg/vue3-notification";
const { notify } = useNotification();
import { ref, onMounted } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
const router = useRouter();
import { useRoute } from "vue-router";
const route = useRoute();
//---------------------------------------------------
const user = ref([]);
//---------------------------------------------------
onMounted(async () => {
    getUser();
});

//-------------------------------------
const getUser = async () => {
    const id = route.params.id;
    let response = await axios.get(`/api/users/${id}`);
    user.value = response.data.data;

}
//--------------------------------------------------
const UpdateUser = async () => {
    let id = route.params.id;
    
    let response = await axios
        .patch(`/api/users/${id}`, {
            name: user.value.name,
            email: user.value.email,
            role: user.value.role,
        })
        .then(() => {
            notify({
                title: "User Item Updated Successful",
                type: "success",
            });
            router.push("/admin/users");
        });

};
</script>

<template>
    <div class="container">
        <div class="header">
            <div class="btn">
                <button>
                    <router-link :to="{ name: 'users' }">
                        All User
                    </router-link>
                </button>
            </div>
            <h1>Edit User</h1>
        </div>
        <div class="content">
            <form @submit.prevent="UpdateUser" enctype="multipart/form-data">
                <div class="form-wrapper">
                    <div class="input-box">
                        <p>User Name <span style="color: #9c4202">*</span></p>
                        <input type="text" v-model="user.name" placeholder="Enter a user name">
                    </div>

                    <div class="input-box">
                        <p>User Email <span style="color: #9c4202">*</span></p>
                        <input type="email" placeholder=" Enter your email" v-model="user.email">
                    </div>
                </div>

                <div class="form-wrapper">
                    <div class="input-box">
                        <p>User Role <span style="color: #9c4202">*</span></p>
                        <select v-model="user.role">
                            <option disabled>Select one</option>
                            <option value="admin">Admin </option>
                            <option value="owner">Owner</option>
                            <option value="customer">Customer</option>
                        </select>
                    </div>
                </div>
                <div class="submit-btn">
                    <button type="submit">Update</button>
                </div>
            </form>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.container {
    width: 100%;
    padding: 50px 30px;

    .header {
        .btn {
            text-align: right;
            padding-bottom: 20px;

            button {
                padding: 10px 20px;
                border: 1px solid #9c4202;
                background: #9c4202;
                border-radius: 6px;
                cursor: pointer;
                transition: all ease-in .3s;

                a {
                    text-decoration: none;
                    font-size: 16px;
                    font-weight: 500;
                    color: #fff;
                }

                &:hover {
                    transform: scale(1.05);
                    background-color: #fff;

                    a {
                        color: #9c4202;
                    }
                }
            }
        }

        h1 {
            margin-top: 0px;
            font-size: 22px;
            color: #444;
            font-weight: 600;
            background: #e6e6e652;
            padding: 15px 20px;
            border-radius: 6px;
            border: 1px solid #e1dfdf;
        }
    }

    .content {
        padding: 50px 50px;

        .form-wrapper {
            display: flex;
            justify-content: space-between;
            gap: 30px;
            width: 100%;

            .input-box {
                padding-bottom: 20px;
                flex-basis: 50%;

            }
        }

        .input-box {
            padding-bottom: 20px;

            p {
                font-size: 16px;
                color: #444;
                padding-bottom: 10px;
                font-weight: 500;
            }

            select,
            input {
                width: 100%;
                padding: 15px;
                border: 1.5px solid rgb(214 211 211);
                border-radius: 6px;
                font-size: 14px;

                &:focus {
                    outline: none;
                    border: 1.5px solid #9c4202;
                }
            }
        }

        .submit-btn {
            text-align: right;
            padding-top: 10px;

            button {
                background: #9c4202;
                border: 1px solid #9c4202;
                border-radius: 6px;
                color: #fff;
                font-size: 18px;
                padding: 8px 28px;
                cursor: pointer;
                transition: all .3s;

                &:hover {
                    background: #ba4f03;
                }
            }
        }
    }
}
</style>