<template>
    <div>
        <div>
            <van-list>
                <van-cell v-for="(item,index) in tempList" :key="index" :title="item.tempName" />
            </van-list>
            <van-button round type="info" icon="plus" class="addButtton" @click="pageEdit"></van-button>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Page',
    data() {
        return {
            tempList: [
                {
                    tempName: '文本模板',
                    tempId: 1
                },
                {
                    tempName: '跳转模板',
                    tempId: 2
                },
                {
                    tempName: '图片模板',
                    tempId: 3
                },
                {
                    tempName: '表单模板',
                    tempId: 4
                },
                {
                    tempName: '换行模板',
                    tempId: 5
                },
            ]
        }
    },
    methods: {
        pageEdit() {
            this.$router.push('/tempEdit')
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