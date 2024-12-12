<script setup>

</script>

<template>
    <div class="side-bar-wrapper">
        <router-link active-class="active" :to="{ name: 'dashboard' }" >Dashboard</router-link>
        <router-link  active-class="active" :to="{ name: 'all-restaurants' }" >Restaurants</router-link>
        <router-link  active-class="active" :to="{ name: 'users' }" >User</router-link>
        
        
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
    min-height: 100vh;
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
        background: var(--text-color-white);
        border: 1px solid var(--primary-color);
        color: var(--primary-color);
        border-radius: 8px;
        transition: all ease .3s;
        &:hover{
            background: var(--primary-color);
            color: var(--text-color-white);
            border-radius: 8px;
        }
        &.router-link-exact-active {
            background: var(--primary-color);
            color: var(--text-color-white);
            border-radius: 8px;
        }
    }
}


</style>