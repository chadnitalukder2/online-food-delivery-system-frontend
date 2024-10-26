<script>

</script>

<template>
    <div class="container">
        <div class="login_warper">
            <div class="login_image">
                <img src="../assets/delivery-girl.png">
            </div>
            <div class="login_page">
                <form>
                    <div class="input_box">
                        <label>Name</label>
                        <input type="text" placeholder="Name">
                    </div>
                </form>
            </div>
        </div>


    </div>

</template>

<style lang="scss">
.container {

    padding: 85px 200px;
    background: #999999;

    .login_warper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-shadow: 0px 1px 7px #e7e4e4;
        border-radius: 6px;
        overflow: hidden;

        .login_image {
            flex-basis: 40%;
            background-color: #fff;
            width: 600px;

            img {
                width: 600px;
            }

        }

        .login_page {
            flex-basis: 60%;

        }
    }

}
</style>