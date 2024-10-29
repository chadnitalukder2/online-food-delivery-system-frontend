<script setup>

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
            <div class="food-category">
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


            </div>
        </div>

    </section>
    <!-- Restaurant section -->
    <section class="restaurant_section">
        <div class="container">
            <div class="header_section">
                <div class="section-title">
                    <h1>Popular Restaurant</h1>
                </div>
                <div class="all_restaurant">
                    <a href="#">View All  <i class="fa-regular fa-circle-right"></i></a>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
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
    padding: 64px 80px;

    .row {
        .food-category {
            display: flex;
            flex-wrap: wrap;
            gap: 25px;

            .food-item {
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

                    .food-item__title a:hover {
                        color: #9c4202;
                    }

                }

            }
        }
    }
}

//================================
.restaurant_section {
    background: #f7f7f7;
    padding: 0px 80px 64px;

    .container {
        .header_section {
            display: flex;
            justify-content: space-between;
            align-items: center;

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
                    border: 1px solid ;
                    color: #fff;
                    text-decoration: none;
                    outline: none !important;
                    &:hover{
                        
                    }
                }
            }
        }
    }
}
</style>
