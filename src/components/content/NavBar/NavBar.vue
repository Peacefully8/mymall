<template>
    <div class="navbar">
        <div class="left"><slot name="left"></slot></div>
        <div class="center"><slot name="center"></slot></div>
        <div class="right"><slot name="right"></slot></div>
    </div>
</template>

<script>
export default {
    name: 'NavBar'

}
</script>

<style scoped>
.navbar {
    width: 100%;
    height: 44px;
    display: flex;
    line-height: 44px;
    justify-content: space-between;
    background-color: var(--color-tint);
    text-align: center;
    /* position: fixed;
    top: 0;
    z-index: 9; */
}
.left,.right {
    width: 60px;
}

.center {
    flex: 1;
}

</style>