<script setup>
import { useNotification } from "@kyvg/vue3-notification";
const { notify } = useNotification();
import { ref, onMounted } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
const router = useRouter();
//---------------------------------------------------
const category = ref([]);
const image = [];
//---------------------------------------------------
const handleFileChange = async () => {
    image.value = event.target.files[0];
}
//----------------
const addCategory = async () => {
    const formData = new FormData();
formData.append("name", category.value.name);
formData.append("description", category.value.description);
formData.append("image", image.value);

console.log(image.value);
   let response = await axios.post("/api/categories", formData);
   notify({
      title: "Category Item Added Successful",
      type: "success",
    });
   router.push("/owner/categories");
};

</script>

<template>
    <div class="container">
        <div class="title">
            <h1> Add Category</h1>
        </div>
        <div class="content">
            <form @submit.prevent="addCategory" enctype="multipart/form-data" >
                <div class="form-wrapper">
                    <div class="input-box">
                        <p>Category Name <span style="color: #9c4202">*</span></p>
                        <input type="text" v-model="category.name" placeholder="Enter a category name">
                    </div>

                    <div class="input-box">
                        <p>Category Image <span style="color: #9c4202">*</span></p>
                        <input  @change="handleFileChange" type="file" >
                    </div>
                </div>


                <div class="input-box">
                    <p>Category Description <span style="color: #9c4202">*</span></p>
                    <textarea v-model="category.description" rows="5" cols="50"> </textarea>
                </div>

                <div class="submit-btn">
                    <button type="submit">Save</button>
                </div>
            </form>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.container {
    width: 100%;
    padding: 50px 30px;

    .title {
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

            textarea,
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
                &:hover{
                    background: #ba4f03;
                }
            }
        }
    }
}
</style>