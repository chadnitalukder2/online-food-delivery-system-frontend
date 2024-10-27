<script setup>

</script>

<template>
    <section>
        <div class="container">
            <div class="details_wrapper">
                <div class="left_details">
                    <div class="banner-area">
                        <h2 class="banner-area-title">Most Fastest Food Delivery Service</h2>
                        <p class="banner-area-subtitle">Our job fill your tummy with delicious food and with fast
                            and free delivery</p>
                    </div>
                </div>
               
                <div class="banner_img">
                    <img src="../../assets/delivery-girl.png">
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.container {
    background: #FFFAFA;

    .details_wrapper {
        display: flex;
        justify-content: space-between;
        padding: 64px 80px;
        .left_details{
            flex-basis: 60%;
            .banner-area {
                font-family: "Poppins", sans-serif;
                .banner-area-title{
                    color: #212121;
                    font-size: 60px;
                    margin-bottom: 25px;
                    max-width: 550px;
                    line-height: 1.2;

                }
                .banner-area-subtitle{
                    max-width: 400px;
                    font-size: 18px;
                    margin-bottom: 25px;
                    color: #787878;
                    line-height: 1.5;

                }
            }
        }
       

        .banner_img {
            flex-basis: 40%;
            img{
                width: 100%;
                height: 100%;
            }
        }

    }

}
</style>
