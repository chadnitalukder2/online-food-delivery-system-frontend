<script setup>

</script>

<template>
    <div class="side-bar-wrapper">
        <router-link active-class="active">Dashboard</router-link>
        <router-link active-class="active" >All Category</router-link>
        <router-link active-class="active">All Brand</router-link>
        <router-link active-class="active"  >All Product</router-link>
    </div>
</template>


<style lang="scss" scoped>

.side-bar-wrapper {
    display: flex;
    flex-direction: column;
    width: 25%;
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
        &.active {
            background: #9c4202;
            color: #fff;
            border-radius: 8px;
        }
    }
}


</style>