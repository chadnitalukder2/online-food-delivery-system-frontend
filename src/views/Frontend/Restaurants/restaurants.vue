<script>
import RestaurantCard from '../Home/Menu_card.vue';

</script>

<template>
    <div class="container">
        <div class="title_section">
            <div class="inner-banner">
                <img src="../../../assets/baner-img.jpg">
            </div>
            <div class="banner_title">
                <h1>All restaurants</h1>
            </div>
        </div>

        <div class="restaurant-content">
            <div class="header-section">
                <div class="total-section">
                    <p>Result: 25 items Found</p>
                </div>
                <div class="search-section">
                    <input type="text" placeholder="Search any keyword...">
                    <button type="submit" class="search-btn">Search</button>
                </div>
            </div>
            <div class="body-section">
                hello
                <RestaurantCard></RestaurantCard>
                <div class="restaurant_item">
                    <div class="restaurant__thumb">
                        <div class="image">
                            <a href="#">
                                <img src="../../../assets/restaurant-1.png">
                            </a>
                        </div>
                        <div class="wishlist">
                            <i class="fa-regular fa-heart"></i>
                        </div>
                    </div>
                    <div class="restaurant__info">
                        <div class="restaurant__info-thumb">
                            <a href="#">
                                <img src="../../../assets/res-logo-1.png">
                            </a>
                        </div>
                        <div class="restaurant__info-content">
                            <h1 class="restaurant__info-content-title">
                                <a href="#">Garden Fresh</a>
                            </h1>
                            <span class="restaurant__info-content-location">
                                <i class="fa-regular fa-compass"></i> Miami, Florida
                            </span>
                            <div class="restaurant__info-content-review">
                                <span><i class="fa-solid fa-star"></i></span> <span>(5.0)</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="restaurant_item">
                    <div class="restaurant__thumb">
                        <div class="image">
                            <a href="#">
                                <img src="../../../assets/restaurant-1.png">
                            </a>
                        </div>
                        <div class="wishlist">
                            <i class="fa-regular fa-heart"></i>
                        </div>
                    </div>
                    <div class="restaurant__info">
                        <div class="restaurant__info-thumb">
                            <a href="#">
                                <img src="../../../assets/res-logo-1.png">
                            </a>
                        </div>
                        <div class="restaurant__info-content">
                            <h1 class="restaurant__info-content-title">
                                <a href="#">Garden Fresh</a>
                            </h1>
                            <span class="restaurant__info-content-location">
                                <i class="fa-regular fa-compass"></i> Miami, Florida
                            </span>
                            <div class="restaurant__info-content-review">
                                <span><i class="fa-solid fa-star"></i></span> <span>(5.0)</span>
                            </div>
                        </div>
                    </div>
                </div>
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

    .restaurant-content {
        padding: 64px 80px;

        .header-section {
            background: #fff;
            box-shadow: 1px solid gray;
            padding: 20px;
            border-radius: 6px;
            display: flex;
            justify-content: space-between;
            align-items: center;

            .total-section {
                font-size: 16px;
                color: #787878;
            }

            .search-section {
                flex-basis: 40%;
                display: flex;

                input {
                    width: 100%;
                    padding: 12px;
                    border-radius: 6px 0px 0px 6px;
                    font-size: 16px;
                    color: #787878;
                    border: 1px solid #ced4da;

                    &:focus {
                        outline: none;
                        border: 1px solid #9c4202;
                    }
                }

                .search-btn {
                    font-size: 16px;
                    background: #9c4202;
                    color: #fff;
                    border: 1px solid #9c4202;
                    border-radius: 0px 6px 6px 0px;
                    padding: 10px 12px;
                    cursor: pointer;
                    transition: all .3s;

                    &:hover {
                        background: #b84e02;
                    }
                }
            }
        }

        .body-section {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 30px;
            padding-top: 30px;
        }


    }


}
</style>