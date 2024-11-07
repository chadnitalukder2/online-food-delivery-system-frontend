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
                    <h4 class="restaurant-info-box__meta-title">
                        Urban Eats
                    </h4>
                    <span class="restaurant-info-box__meta-location"><i class="fas fa-map-marker-alt"></i>San Francisco,
                        California</span>
                    <ul class="restaurant-info-box__meta-rating">
                        <li>
                            <i class="las la-star active"></i><i class="las la-star active"></i><i
                                class="las la-star active"></i><i class="las la-star active"></i><i
                                class="las la-star active"></i>
                        </li>

                        <li><span class="badge badge--base badge--sm">OPEN</span></li>
                        <li class="fav-icon " data-url="https://script.viserlab.com/hungryhub/restaurant/favorite/4"><i
                                class="far fa-heart"></i></li>
                    </ul>
                    <ul class="restaurant-info-box__meta-time">
                        <li><i class="las la-clock"></i>36 Mins </li>
                        <li><i class="las la-biking"></i>$6.18 USD
                        </li>
                    </ul>
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

            .restaurant-info-box__meta {}


        }
    }

}
</style>