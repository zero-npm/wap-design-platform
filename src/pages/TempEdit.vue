<template>
    <div>
        <van-nav-bar title="模板定义" left-text="返回" left-arrow @click-left="onClickLeft" @click-right="onClickLeft" />
        <div>
            <van-collapse v-model="activeNames">
                <van-collapse-item :title="item.title" name="1" v-for="(item,index) in configList" :key="index">
                    <van-field readonly clickable name="picker" :value="item.text" label="类型" placeholder="点击选择类型"
                        @click="showPicker = true" />
                    <van-popup v-model="showPicker" position="bottom">
                        <van-picker show-toolbar :columns="columns" @confirm="onConfirm(item,$event)"
                            @cancel="showPicker = false" />
                    </van-popup>
                    <van-field v-model="item.content" label="内容" placeholder="内容" rows="2" autosize type="textarea"
                        v-if="item.type=='span'||item.type=='div'||item.type=='a'" />
                    <van-field v-model="item.pageName" label="页面名称" placeholder="页面名称" rows="2" autosize type="textarea"
                        v-if="item.type=='a'" />
                    <van-field v-model="item.imgUrl" label="页面名称" placeholder="页面名称" rows="2" autosize type="textarea"
                        v-if="item.type=='a'" />
                    <div v-if="item.type=='form'">
                        <div>表单</div>
                        <div v-for="(formConfigItem,index) in item.formConfig" :key="index">
                            <van-field readonly clickable name="picker" :value="formConfigItem.text" label="表单项类型"
                                placeholder="点击选择类型" @click="showPicker1 = true" />
                            <van-popup v-model="showPicker1" position="bottom">
                                <van-picker show-toolbar :columns="columns" @confirm="onConfirm1(formConfigItem,$event)"
                                    @cancel="showPicker1 = false" />
                            </van-popup>
                        </div>

                        <van-button type="primary" @click="addFormItem(item)">新增</van-button>
                    </div>
                </van-collapse-item>
            </van-collapse>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Mine',
    data() {
        return {
            showPicker: false,
            showPicker1: false,
            nowTempIndex: 0,
            activeNames: [],
            columns: [
                {
                    text: '文本',
                    type: 'span'
                },
                {
                    text: '文本(独占一行)',
                    type: 'div'
                },
                {
                    text: '链接',
                    type: 'a'
                },
                {
                    text: '图片',
                    type: 'img'
                },
                {
                    text: '表单',
                    type: 'form'
                }
            ],//基础类型
            configList: [
                {
                    id: 1,
                    title: '模板名称',
                    text: null,//类型名称
                    content: '',//内容
                    type: null,//类型
                    pageName: '',//页面名称
                    imgUrl: '',//图片地址
                    formConfig: [
                        {
                            label: '',//前面显示的内容
                            type: '',//类型
                            key: '',//字段名
                            text: ''//显示的值
                        }
                    ]//表单配置
                }
            ],
        }
    },
    methods: {
        onSubmit() {

        },
        onConfirm(item, event) {
            item.type = event.type
            item.text = event.text
            this.showPicker = false
        },
        onConfirm1(formConfig, event) {
            formConfig.type = event.type
            formConfig.text = event.text
            this.showPicker1 = false
        },
        openPicker(index) {
            this.showPicker = true
            this.nowTempIndex = index
        },
        // 新增一项表单项
        addFormItem(item) {
            item.formConfig.push({
                label: '',//前面显示的内容
                type: '',//类型
                key: '',//字段名
                text: ''//显示的值
            })
        },
        onClickLeft() {
            this.$router.push({
                path: '/home',
                query: {
                    activeTab: 1
                }
            })
        }

    }
}
</script>
<style>

</style>