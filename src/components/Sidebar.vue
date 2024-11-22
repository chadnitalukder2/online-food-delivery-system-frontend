<script setup>

</script>

<template>
    <div class="side-bar-wrapper">
        <router-link active-class="active" :to="{ name: 'dashboard' }" >Dashboard</router-link>
        <router-link  active-class="active" :to="{ name: 'dashboard' }" >All Category</router-link>
        <router-link  active-class="active" :to="{ name: 'dashboard' }" >All Brand</router-link>
        <router-link active-class="active" :to="{ name: 'dashboard' }" >All Product</router-link>
    </div>
</template>


<style lang="scss" scoped>

.side-bar-wrapper {
    display: flex;
    flex-direction: column;
    width: 20%;
    align-items: center;
    gap: 10px;
    border-right: 1px solid #EAECF0;
    height: 100vh;
    background: #f7e5e5cf;
    padding: 14px;
    padding-top: 30px;
    a {
        text-decoration: none;
        font-weight: 500;
        font-size: 18px;
        padding: 10px 15px;
        width: calc(100% - 30px);
        color: #444;
        background: #fff;
        border: 1px solid #9c4202;
        color: #9c4202;
        border-radius: 8px;
        transition: all ease .3s;
        &:hover{
            background: #9c4202;
            color: #fff;
            border-radius: 8px;
        }
        &.router-link-exact-active {
            background: #9c4202;
            color: #fff;
            border-radius: 8px;
        }
    }
}


</style>