<script>


</script>

<template>
    <div class="container">
        <div class="title_section">
            <div class="inner-banner">
                <img src="../../../assets/menu-cover.png">
            </div>
            <div class="banner_title">
                <h1> Restaurants Name</h1>
            </div>
        </div>

        <section class="restaurant-page">
            <div class="restaurant-info">
                <div class="restaurant-info-box__thumb">
                    <div class="image">
                        <img src="../../../assets/res-logo-1.png">
                    </div>
                </div>
                <div class="restaurant-info-box__meta">
                    <h4 class="restaurant-name">
                        Urban Eats
                    </h4>
                    <div class="restaurant-location">
                        <i class="fa-regular fa-compass"></i>
                        San Francisco,California
                    </div>
                    <div class="restaurant-rating">
                        <div class="rating-review">
                            <i class="fa-solid fa-star-half-stroke"></i>
                            <i class="fa-solid fa-star-half-stroke"></i>
                            <i class="fa-solid fa-star-half-stroke"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>

                        <div class="status">
                            <span class="badge badge--base badge--sm">OPEN</span>
                        </div>
                    </div>
                    <div class="restaurant-info_meta-time">
                        <div class="delivery-fee">
                            <i class="fa-solid fa-calendar-minus"></i>
                            Delivery Fee 20TK 
                        </div>
                        <div class="delivery-time delivery-fee">
                            <i class="fa-regular fa-clock"></i>
                            Delivery 45 min
                        </div>
                    </div>
                </div>
            </div>

        </section>

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

    .restaurant-page {
        padding: 64px 80px;
        background-color: #fff;

        .restaurant-info {
            display: flex;
            gap: 30px;

            .restaurant-info-box__thumb {
                .image {
                    width: 90px;
                    height: 90px;
                    border-radius: 8px;
                    overflow: hidden;

                    img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }
                }
            }

            .restaurant-info-box__meta {
                .restaurant-name {
                    font-weight: 600;
                    font-size: 24px;
                    line-height: 1.2;
                    color: #212121;
                    margin-bottom: 5px;
                }

                .restaurant-location {
                    margin-bottom: 10px;
                    font-size: 18px;
                    color: #919191;

                    i {
                        color: #9c4202;
                        padding-right: 3px;
                    }
                }

                .restaurant-rating {
                    display: flex;
                    align-items: center;
                    padding-bottom: 10px;
                    .rating-review {
                        margin-right: 20px;

                        i {
                            color: rgb(253, 216, 6);
                            font-size: 14px;
                        }
                    }

                    .status {
                        background: #9c4202;
                        color: #fff;
                        padding: 5px 10px;
                        border-radius: 50px;
                        display: flex;
                        align-items: center;
                        span {
                            letter-spacing: 1px;
                            font-size: 13px;
                            font-weight: 500;
                        }
                    }
                }

                .restaurant-info_meta-time{
                    display: flex;
                    align-items: center;
                    .delivery-fee{
                        i{
                            color: #9c4202;
                            padding-right: 2px;
                        }
                        color: #919191;
                        padding-right: 12px;
                        font-size: 14px;
                        border-right: 1.5px solid #919191;
                    }
                    .delivery-time{
                        padding-right: 0px;
                        padding-left: 12px;
                        border-right: none;
                    }
                }
            }


        }
    }

}
</style>