<script>

</script>
<template>
    <div class="container" style="display: flex; justify-content: space-between; gap: 40px;">
        <div class="left_content">
            <div class="profile_section">
                <div class="profile_img">
                    <div class="image">
                        <img src="../../../assets/menu-4.png" style="width: 100%; height: 100%">
                    </div>
                </div>
                <div class="profile_info">
                    <h4>puja</h4>
                    <p style="margin: 0px;">puja@gmail.com</p>
                    <p style=" margin-top: 10px;"> Role : user</p>
                </div>
                <button @click="handleLogout">
                    Logout
                </button>
            </div>
        </div>
        <div class="right_content">

            <div class="table-box">
                <div>
                    <h1 class="title">Order Items</h1>
                </div>

                <table id="customers">
                    <tr>
                        <th></th>
                        <th>Total Amount</th>
                        <th>Order Status</th>
                        <th>Payment Status</th>
                        <th>Date</th>
                        <th></th>
                        <th></th>
                    </tr>
                    <tbody>

                        <tr>
                            <td style="color: blue"># 3</td>
                            <td>3333</td>
                            <td>hello</td>
                            <td>hello</td>
                            <td>hello</td>
                            <td>
                                <p @click="openModalDelete(item.id)" style="color: rgb(191 42 42);cursor: pointer;">
                                    Cancel</p>
                                <p> Delivered</p>
                            </td>
                            <td>
                                <button @click="openModalView()" class="view"> View</button>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>


        </div>
    </div>
</template>

<style lang="scss" scoped>
#myModal {

    .modal_footer {
        button {

            cursor: pointer;
            background: #c1c1c1;
            color: #fff;
            border-radius: 4px;
            text-decoration: none;
            transition: all 0.4s;
            line-height: normal;
            min-width: 120px;
            border: none;
            min-height: 40px;
            border-radius: 3px;
            margin: 0 5px;
        }

    }


}

.container {
    padding: 50px;
    text-align: center;
    background: #d7d1d130;

    .left_content {
        flex-basis: 25%;
        height: 100%;
        background: #fff;
        box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.1);
        border-radius: 5px;

        .profile_section {
            position: relative;

            .profile_img {
                background: rgba(215, 209, 209, 0.1882352941);
                height: 175px;

                .image {
                    border-radius: 50%;
                    overflow: hidden;
                    position: absolute;
                    bottom: 170px;
                    right: 20%;
                    text-align: center;
                    width: 170px;
                    height: 170px
                }
            }

            .profile_info {
                margin-top: 28px;
                margin-bottom: 13px;

                h4 {
                    font-size: 20px;
                    font-weight: 600;
                    margin-bottom: 8px;
                }

                p {
                    color: #363636;
                    font-size: 16px;
                }
            }

            button {
                width: 70%;
                font-size: 15px;
                padding: 8px;
                border-radius: 5px;
                background: #9c4202;
                border: 1px solid #9c4202;
                cursor: pointer;
                margin-bottom: 30px;
                color: white;
                transition: all .3s;

                &:hover {
                    background: #b84f03;
                }
            }
        }
    }

    .right_content {
        flex-basis: 75%;

        .info {
            background: #fff;
            padding: 10px 10px;
            text-align: left;
            box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.1);
            border-radius: 5px;

            h1 {
                margin: 0px;
                font-size: 18px;
            }

            p {
                font-size: 14px;
                font-weight: 500;
                text-transform: capitalize;
            }
        }
    }
}

.table-box {
    .title {
        text-align: left;
        margin: 0px;
        margin-bottom: 18px;
        font-size: 24px;
    }

}

table {
    border-collapse: collapse;
    width: 100%;
    box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    overflow: hidden;
}

th {
    background: #fff;
    padding: 20px 10px !important;
    border: 1px solid transparent;
    font-size: 16px;
    color: #363636;
}

td {
    p {
        font-size: 14px;
        font-weight: 600;
        color: #919191;
        border-radius: 5px;
        padding: 3px 5px;
        background: rgba(215, 209, 209, 0.1882352941);
    }
}

th,
td {
    padding: 15px;
    text-align: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    background: #fff;

}

td {
    color: #656262;

    input {
        width: 40%;
        padding: 15px 10px;
        text-align: center;
        border: 1px solid rgba(0, 0, 0, 0.05);

        &:focus-visible {
            outline: none;
            border: 1px solid rgba(0, 0, 0, 0.05) !important;
        }
    }

    button {
        border-radius: 5px;
        font-size: 16px;
        padding: 5px 10px;
        border: none;
        font-weight: 600;
        color: rgb(61, 66, 66);
        cursor: pointer;

        &:hover {
            color: rgb(14 159 159);
        }
    }
}
</style>