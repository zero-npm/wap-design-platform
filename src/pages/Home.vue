<template>
    <div>
        <van-tabs v-model="activeTab">
            <van-tab :title="item" v-for="(item,index) in tabList" :key="index">
                <Map v-if="index === 0" />
                <Monster v-if="index === 1" />
                <Npc v-if="index === 2" />
                <Task v-if="index === 3" />
                <Pet v-if="index === 4" />
                <Skill v-if="index === 5" />
                <Goods v-if="index === 6" />
                <Award v-if="index === 7" />
            </van-tab>
        </van-tabs>
    </div>
</template>
<script>
import Map from "@/components/Map.vue"
import Monster from "@/components/Monster.vue"
import Npc from "@/components/Npc.vue"
import Task from "@/components/Task.vue"
import Pet from "@/components/Pet.vue"
import Skill from "@/components/Skill.vue"
import Goods from "@/components/Goods.vue"
import Award from "@/components/Award.vue"
export default {
    name: 'Home',
    components: {
        Map,
        Monster,
        Npc,
        Task,
        Pet,
        Skill,
        Goods,
        Award
    },
    data() {
        return {
            activeTab: 0,
            tabList: ['地图', '怪物', 'NPC', '任务','宠物','技能','物品','掉落']
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