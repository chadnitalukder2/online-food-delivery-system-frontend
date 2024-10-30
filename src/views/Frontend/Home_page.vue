<script setup>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel';



</script>

<template>
    <!-- header section -->
    <section class="header_section">
        <div class="container">
            <div class="details_wrapper">
                <div class="left_details">
                    <div class="banner-area">
                        <h2 class="banner-area-title">Most Fastest Food Delivery Service</h2>
                        <p class="banner-area-subtitle">Our job fill your tummy with delicious food and with fast
                            and free delivery</p>
                    </div>
                    <form class="search-form">
                        <div class="input-group">
                            <input type="text" name="search" class="form-control form--control" id="search">
                            <label for="address">Enter Your Favourite restaurant</label>
                        </div>
                        <div class="banner-search-btn">
                            <button class="btn btn--base" type="submit">Search</button>
                        </div>
                    </form>
                </div>

                <div class="banner_img">
                    <img src="../../assets/delivery-girl.png">
                </div>
            </div>
        </div>
    </section>
    <!-- Category section -->

    <section class="category_section">
        <div class="row">

            <!-- <div class="food-category"> -->

            <Carousel :items-to-show="6" iconArrowRight iconArrowLeft>
                <Slide key="0">
                    <div class="food-item">
                        <div class="food-item-box">
                            <div class="food-item-box__thumb">
                                <a href="#">
                                    <img src="../../assets/food-1.png">
                                </a>
                            </div>
                        </div>
                        <div class="food-item__title">
                            <h1><a href="#">Grilled Dishes</a></h1>
                        </div>
                    </div>
                </Slide>
                <Slide key="1">
                    <div class="food-item">
                        <div class="food-item-box">
                            <div class="food-item-box__thumb">
                                <a href="#">
                                    <img src="../../assets/food-2.png">
                                </a>
                            </div>

                        </div>
                        <div class="food-item__title">
                            <h1><a href="#">Grilled Dishes</a></h1>
                        </div>
                    </div>
                </Slide>
                <slide key="2">
                    <div class="food-item">
                        <div class="food-item-box">
                            <div class="food-item-box__thumb">
                                <a href="#">
                                    <img src="../../assets/food-3.png">
                                </a>
                            </div>
                        </div>
                        <div class="food-item__title">
                            <h1><a href="#">Grilled Dishes</a></h1>
                        </div>
                    </div>
                </slide>
                <slide key="3">
                    <div class="food-item">
                        <div class="food-item-box">
                            <div class="food-item-box__thumb">
                                <a href="#">
                                    <img src="../../assets/food-4.png">
                                </a>
                            </div>
                        </div>
                        <div class="food-item__title">
                            <h1><a href="#">Grilled Dishes</a></h1>
                        </div>
                    </div>
                </slide>
                <slide key="4">
                    <div class="food-item">
                        <div class="food-item-box">
                            <div class="food-item-box__thumb">
                                <a href="#">
                                    <img src="../../assets/food-5.png">
                                </a>
                            </div>
                        </div>
                        <div class="food-item__title">
                            <h1><a href="#">Grilled Dishes</a></h1>
                        </div>
                    </div>
                </slide>
                <slide key="5">
                    <div class="food-item">
                        <div class="food-item-box">
                            <div class="food-item-box__thumb">
                                <a href="#">
                                    <img src="../../assets/food-6.png">
                                </a>
                            </div>
                        </div>
                        <div class="food-item__title">
                            <h1><a href="#">Grilled Dishes</a></h1>
                        </div>
                    </div>
                </slide>
                <slide key="6">
                    <div class="food-item">
                        <div class="food-item-box">
                            <div class="food-item-box__thumb">
                                <a href="#">
                                    <img src="../../assets/food-7.png">
                                </a>
                            </div>
                        </div>
                        <div class="food-item__title">
                            <h1><a href="#">Grilled Dishes</a></h1>
                        </div>
                    </div>
                </slide>
                <template #addons>
                    <navigation />

                </template>

            </Carousel>
        </div>
        <!-- </div> -->

    </section>
    <!-- Restaurant section -->
    <section class="restaurant_section">
        <div class="container">
            <div class="header_section">
                <div class="section-title">
                    <h1>Popular Restaurant</h1>
                </div>
                <div class="all_restaurant">
                    <a href="#">View All <i class="fa-regular fa-circle-right"></i></a>
                </div>
            </div>
            <div class="nearby-restaurant">
                <div class="restaurant_item">
                    <div class="restaurant__thumb">
                        <div class="image">
                            <a href="#">
                                <img src="../../assets/restaurant-1.png">
                            </a>
                        </div>
                        <div class="wishlist">
                            <i class="fa-regular fa-heart"></i>
                        </div>
                    </div>
                    <div class="restaurant__info">
                        <div class="restaurant__info-thumb">
                            <a href="#">
                                <img src="../../assets/res-logo-1.png">
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
                                <img src="../../assets/restaurant-1.png">
                            </a>
                        </div>
                        <div class="wishlist">
                            <i class="fa-regular fa-heart"></i>
                        </div>
                    </div>
                    <div class="restaurant__info">
                        <div class="restaurant__info-thumb">
                            <a href="#">
                                <img src="../../assets/res-logo-1.png">
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
                                <img src="../../assets/restaurant-1.png">
                            </a>
                        </div>
                        <div class="wishlist">
                            <i class="fa-regular fa-heart"></i>
                        </div>
                    </div>
                    <div class="restaurant__info">
                        <div class="restaurant__info-thumb">
                            <a href="#">
                                <img src="../../assets/res-logo-1.png">
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
                                <img src="../../assets/restaurant-1.png">
                            </a>
                        </div>
                        <div class="wishlist">
                            <i class="fa-regular fa-heart"></i>
                        </div>
                    </div>
                    <div class="restaurant__info">
                        <div class="restaurant__info-thumb">
                            <a href="#">
                                <img src="../../assets/res-logo-1.png">
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
                                <img src="../../assets/restaurant-1.png">
                            </a>
                        </div>
                        <div class="wishlist">
                            <i class="fa-regular fa-heart"></i>
                        </div>
                    </div>
                    <div class="restaurant__info">
                        <div class="restaurant__info-thumb">
                            <a href="#">
                                <img src="../../assets/res-logo-1.png">
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
    </section>
    <!-- Menu section -->
    <section class="restaurant_section">
        <div class="container">
            <div class="header_section">
                <div class="section-title">
                    <h1>Popular Food Item</h1>
                </div>
                <div class="all_restaurant">
                    <a href="#">View All <i class="fa-regular fa-circle-right"></i></a>
                </div>
            </div>
            <div class="popular-foods-wrapper">
                <div class="food_item">
                    <div class="food__item-thumb">
                        <a href="#">
                            <img src="../../assets/menu-1.png">
                        </a>
                    </div>
                    <div class="add-btn">
                        <a href="#">
                            <i class="fa-solid fa-plus"></i>
                        </a>
                    </div>
                    <div class="popular-food__item-info">
                        <div class="food-name">
                            <h1>  <a href="#">Chicken Tehari</a> </h1>
                        </div>
                        <div class="price">
                            from Tk <span>300</span>
                        </div>
                        <div class="description">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                        </div>
                    </div>
                    <div class="heart">
                        <a href="#">
                            <i class="fa-regular fa-heart"></i>
                        </a>
                    </div>
                </div>
                <div class="food_item">
                    <div class="food__item-thumb">
                        <a href="#">
                            <img src="../../assets/menu-2.png">
                        </a>
                    </div>
                    <div class="add-btn">
                        <a href="#">
                            <i class="fa-solid fa-plus"></i>
                        </a>
                    </div>
                    <div class="popular-food__item-info">
                        <div class="food-name">
                            <h1>  <a href="#">Chicken Tehari</a> </h1>
                        </div>
                        <div class="price">
                            from Tk <span>300</span>
                        </div>
                        <div class="description">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                        </div>
                    </div>
                    <div class="heart">
                        <a href="#">
                            <i class="fa-regular fa-heart"></i>
                        </a>
                    </div>
                </div>
                <div class="food_item">
                    <div class="food__item-thumb">
                        <a href="#">
                            <img src="../../assets/menu-3.png">
                        </a>
                    </div>
                    <div class="add-btn">
                        <a href="#">
                            <i class="fa-solid fa-plus"></i>
                        </a>
                    </div>
                    <div class="popular-food__item-info">
                        <div class="food-name">
                            <h1>  <a href="#">Chicken Tehari</a> </h1>
                        </div>
                        <div class="price">
                            from Tk <span>300</span>
                        </div>
                        <div class="description">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                        </div>
                    </div>
                    <div class="heart">
                        <a href="#">
                            <i class="fa-regular fa-heart"></i>
                        </a>
                    </div>
                </div>
                <div class="food_item">
                    <div class="food__item-thumb">
                        <a href="#">
                            <img src="../../assets/menu-4.png">
                        </a>
                    </div>
                    <div class="add-btn">
                        <a href="#">
                            <i class="fa-solid fa-plus"></i>
                        </a>
                    </div>
                    <div class="popular-food__item-info">
                        <div class="food-name">
                            <h1>  <a href="#">Chicken Tehari</a> </h1>
                        </div>
                        <div class="price">
                            from Tk <span>300</span>
                        </div>
                        <div class="description">
                            <p>Lorem, ipsum vjjdj ndjj ns nd dolor sit amet consectetur adipisicing.</p>
                        </div>
                    </div>
                    <div class="heart">
                        <a href="#">
                            <i class="fa-regular fa-heart"></i>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
a {
    text-decoration: none;
}

.header_section {
    .container {
        background: #f7e5e5cf;

        .details_wrapper {
            display: flex;
            grid-area: 20px;
            justify-content: space-between;
            padding: 64px 80px;

            .left_details {
                flex-basis: 58%;

                .banner-area {
                    font-family: "Poppins", sans-serif;

                    .banner-area-title {
                        color: #212121;
                        font-size: 60px;
                        margin-bottom: 25px;
                        max-width: 550px;
                        line-height: 1.2;
                        font-weight: 600;

                    }

                    .banner-area-subtitle {
                        max-width: 400px;
                        font-size: 20px;
                        margin-bottom: 25px;
                        color: #787878;
                        line-height: 1.5;

                    }
                }

                .search-form {
                    color: #999999;
                    border-radius: 10px;
                    background: #fff;
                    width: 100%;
                    max-width: 830px;
                    padding: 25px;
                    display: flex;
                    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.05);

                    .input-group {
                        position: relative;
                        display: flex;
                        flex-wrap: wrap;
                        align-items: stretch;
                        width: 100%;

                        input {
                            border-radius: 6px !important;
                            background: #fff;
                            height: 60px;
                            padding: 0px 20px 0px 20px;
                            position: relative;
                            flex: 1 1 auto;
                            width: 1%;
                            min-width: 0;
                            font-size: 1rem;
                            font-weight: 400;
                            line-height: 1.5;
                            color: #787878;
                            border: 1px solid #ced4da;
                            transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
                        }

                        label {
                            position: absolute;
                            top: 50%;
                            transform: translateY(-50%);
                            left: 20px;
                            transition: 0.2s linear;
                            background-color: #fff;
                            padding: 1px 5px;
                            z-index: 11;
                            pointer-events: none;
                        }

                        input:focus {
                            outline: none;
                            border: 1px solid #9c4202;
                        }

                        input:focus+label {
                            top: 0%;
                            color: #212121;
                        }

                    }

                    .input-group>:not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback) {
                        margin-left: -1px;
                        border-top-left-radius: 0;
                        border-bottom-left-radius: 0;
                    }

                    .banner-search-btn {
                        button {
                            font-size: 18px;
                            font-weight: 400;
                            text-transform: inherit;
                            text-align: center;
                            border: 1px solid #9c4202;
                            color: #fff;
                            background: #9c4202;
                            cursor: pointer;
                            border-radius: 6px !important;
                            font-family: var(--body-font);
                            margin-left: 20px !important;
                            padding: 7px 65px !important;
                            height: 60px;
                            transform: all .3s;

                            &:hover {
                                background: #a94804;
                            }

                        }
                    }
                }
            }


            .banner_img {
                flex-basis: 40%;

                img {
                    width: 100%;
                    height: 100%;
                }
            }

        }

    }
}

//================================
.category_section {
    background: #f7f7f7;
    padding: 40px 80px 64px;

    .row {
        // .food-category {
        //     display: flex;
        //     flex-wrap: wrap;
        //     gap: 25px;


        .food-item {
            padding: 30px 15px 20px 15px;

            .food-item-box {
                width: 155px;
                height: 155px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: #fff;
                margin: 0 auto;
                margin-bottom: 20px;
                transition: all .5s;

                .food-item-box__thumb {
                    width: 115px;
                    height: 115px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 1;
                    background: white;

                    img {
                        height: 100%;
                        width: 100%;
                        object-fit: cover;
                        border-radius: 50%;
                    }
                }
            }

            .food-item__title {
                font-size: 16px;
                font-weight: 500;
                text-align: center;

                a {
                    text-decoration: none;
                    color: #212121;

                }
            }

            &:hover {
                .food-item-box {
                    box-shadow: 0px 0px 18px 0px #d5681b70;
                }

                .food-item__title a {
                    color: #9c4202;
                }

            }

        }


    }

}

// }

//=====================================
.restaurant_section {
    background: #f7f7f7;
    padding: 0px 80px 64px;

    .container {
        .header_section {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-bottom: 30px;

            .section-title {
                h1 {
                    font-size: 28px;
                    line-height: 1.2;
                    font-weight: 600;
                    position: relative;
                    color: #212121;
                    display: inline-block;
                }
            }

            .all_restaurant {
                a {
                    padding: 8px 16px;
                    font-size: 16px;
                    border-radius: 6px;
                    position: relative;
                    background: #9c4202;
                    border: 1px solid;
                    color: #fff;
                    text-decoration: none;
                    outline: none !important;
                    transition: all .3s;

                    &:hover {
                        transform: scale(1.1);
                        background: #b54d02;
                    }
                }
            }
        }

        .nearby-restaurant {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 30px;

            .restaurant_item {
                .restaurant__thumb {
                    position: relative;
                    transition: all ease 0.3s;
                    overflow: hidden;
                    border-radius: 8px 8px 0px 0px;

                    .image {
                        transition: all ease 0.3s;
                        width: 100%;
                        height: 175px;
                        display: block;

                        img {
                            width: 100%;
                            height: 100%;
                            transition: all ease .3s;
                        }
                    }

                    .wishlist {
                        position: absolute;
                        font-size: 20px;
                        margin: 0 auto;
                        top: 0;
                        right: 0;
                        background: #fff;
                        color: #8f8787;
                        height: 40px;
                        width: 40px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        text-align: center;
                        margin-right: 15px;
                        margin-top: 12px;
                        border-radius: 50%;
                        box-shadow: 0px 0px 8px #ddd;
                    }
                }

                .restaurant__info {
                    padding: 25px 15px 20px 15px;
                    background-color: #fff;
                    border-radius: 0px 0px 8px 8px;
                    display: flex;
                    justify-content: space-between;

                    .restaurant__info-thumb {
                        margin-right: 15px;
                        width: 45px;

                        img {
                            width: 43px;
                            height: 40px;
                            border-radius: 6px;
                            object-fit: cover;
                        }
                    }

                    .restaurant__info-content {
                        width: calc(100% - 45px);

                        .restaurant__info-content-title {
                            line-height: 1;
                            margin-bottom: 6px;

                            a {
                                text-decoration: none;
                                font-size: 18px;
                                font-weight: 600;
                                color: #212121;
                                transition: all .3s;
                            }
                        }

                        .restaurant__info-content-location {
                            font-size: 16px;
                            color: #999999;

                            i {
                                color: #9c4202;
                                font-size: 16px;
                                margin-right: 5px;
                            }
                        }

                        .restaurant__info-content-review {
                            margin-top: 6px;
                            font-size: 13px;
                            font-weight: 500;
                            color: #8f8787;

                            i {
                                color: gold;
                            }
                        }
                    }
                }
            }

            .restaurant_item:hover {
                box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

                .image img {
                    transform: scale(1.2);
                }

                .restaurant__info-content-title a {
                    color: #9c4202 !important;
                }
            }



        }
    }
}

//===========================================
.popular-foods-wrapper {
    gap: 25px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    .food_item {
        padding: 15px;
        height: 100%;
        border: 0.5px solid rgba(0, 0, 0, 0.05);
        border-radius: 8px;
        background-color: #fff;
        transition: all ease 0.3s;
        align-items: center;
        display: flex;

        .food__item-thumb {
            position: relative;
            margin-right: 15px;
            height: 90px;
            width: 125px;
            border-radius: 6px;
            overflow: hidden;

            img {
                height: 100%;
                width: 100%;
                object-fit: cover
            }
        }

        .add-btn {
            position: absolute;
            font-size: 12px;
            background: #fff;
            width: 25px;
            display: flex;
            border-radius: 50%;
            box-shadow: 0px 0px 8px #ddd;
            justify-content: center;
            height: 25px;
            align-items: center;
            margin: 60px 0px 10px 8px;
            transition: all ease .3s;

            a {
                color: #787878;
            }

            &:hover {
                background: #f6f5f5;

                a {
                    color: #9c4202;
                }

            }
        }

        .popular-food__item-info {
            .food-name {
                padding-bottom: 6px;
                h1 {
                    font-size: 16px;
                    font-weight: 500;
                    a{
                        color: #212121;
                        &:hover{
                            color: #9c4202;
                        }
                    }
                }
            }

            .price {
                color: #5b5858;
                font-size: 14px;
                padding-bottom: 8px;
            }

            .description {
                color: #999999;
                font-size: 14px;
            }
        }

        .heart {
            font-size: 18px;
            margin: -70px 0px 0px 0px;
            a{
                color: #999999;
            }
        }
        &:hover{
            transform: translateY(-5px);
            .food-name h1 a{
                color: #9c4202;
            }
        }

    }
}
</style>
