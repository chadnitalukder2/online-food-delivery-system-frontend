<script>

</script>

<template>
    <div class="container">
        <div class="title_section">
            <div class="inner-banner">
                <img src="../../../assets/baner-img.jpg">
            </div>
            <div class="banner_title">
                <h1>Restaurants </h1>
            </div>
        </div>

        <div>
            <h1>All Restaurant</h1>
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
            height: 201px;
            position: relative;

            img {
                width: 100%;
                height: 100%;
            }
        }

        .banner_title {
            position: absolute;
            height: 200px;
            top: 115px;
            width: 100%;
            z-index: 999;
            display: flex;
            background: #0e1212a1;
            justify-content: center;
            align-items: center;

            h1 {
                font-size: 42px;
                font-weight: 700;
                color: #fff;
            }

        }
    }


}
</style>