<template>
    <div>
        <van-nav-bar title="页面定义" left-text="返回" left-arrow @click-left="onClickLeft" @click-right="onClickLeft"/>
        <div>
            <van-form @submit="onSubmit">
                <van-field readonly clickable name="picker" :value="item.tempName" :label="`模板`+index+1" placeholder="点击选择模板"
                    @click="openPicker(index)" v-for="(item,index) in formList" :key="index"/>
                <van-popup v-model="showPicker" position="bottom">
                    <van-picker show-toolbar :columns="tempList" @confirm="onConfirm" @cancel="showPicker = false" />
                </van-popup>
                <div style="margin: 16px;">
                    <van-button round block type="info" native-type="button">新增</van-button>
                    <br>
                    <van-button round block type="info" native-type="button">提交</van-button>
                </div>
            </van-form>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Mine',
    data() {
        return {
            showPicker: false,
            nowTempIndex:0,
            formList: [
                {
                    tempName: "文本模板",
                    tempId: 1
                }
            ],
            tempList: [
                {
                    id: 1,
                    text: '模板名称'
                }
            ],
        }
    },
    methods: {
        onSubmit() {

        },
        onConfirm(value) {
            console.log(value)
            this.showPicker = false;
            this.formList[this.nowTempIndex].tempName = value.text
        },
        openPicker(index){
            this.showPicker = true
            this.nowTempIndex = index
        },
        onClickLeft(){
            this.$router.push({
                path:'/home',
                query:{
                    activeTab:0
                }
            })
        }
    }
}
</script>
<style>

</style>