<template>
    <div>
        <van-tabs v-model="activeTab">
            <van-tab :title="item" v-for="(item,index) in tabList" :key="index">
                <Page v-if="index === 0" />
                <Temp v-if="index === 1" />
                <Data v-if="index === 2" />
                <Handle v-if="index === 3" />
            </van-tab>
        </van-tabs>
    </div>
</template>
<script>
import Page from "@/components/Page.vue"
import Temp from "@/components/Temp.vue"
import Data from "@/components/Data.vue"
import Handle from "@/components/Handle.vue"
export default {
    name: 'Home',
    components: {
        Page,
        Temp,
        Data,
        Handle
    },
    data() {
        return {
            activeTab: 0,
            tabList: ['页面', '模板', '数据集', '操作']
        }
    },
    created(){
        this.activeTab = +this.$route.query.activeTab
    },
    methods: {

    }
}
</script>
<style>

</style>