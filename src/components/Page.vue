<template>
    <div>
        <van-button round type="info" icon="plus" class="addButtton" @click="pageEdit"></van-button>
    </div>
</template>
<script>
    export default {
        name:'Page',
        methods:{
            pageEdit(){
                this.$router.push('/pageEdit')
            }
        }
    }
</script>
<style>
    .addButtton{
        position: absolute;
        top:85vh;
        right:2vw;
    }
</style>