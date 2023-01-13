<template>
    <div>
        <div v-if="showType == 'quyu'">
            <van-search v-model="searchKey" placeholder="请输入搜索关键词" @search="onSearch" @cancel="onCancel" />
            <van-cell-group>
                <van-cell :title="item.name" :value="item.id" v-for="(item, index) in quyuList" :key="index"
                    @click="quyuEdit(index, 'map')" />
            </van-cell-group>
            <van-button round type="info" icon="plus" class="addButtton" @click="quyuEdit(null, 'map')"></van-button>
        </div>
        <div v-else-if="showType == 'map'">
            <div style="overflow:scroll">
                <div v-for="(item, index) in mapList" :key="index" 
                style="display: flex;flex-wrap: nowrap;width: 100%;">
                    <div  v-for="(map, mapIndex) in item" :key="mapIndex" style="flex-shrink: 0; border:solid 1px;width: 200px;height:22px;margin: 10px;text-align: center;">{{ map?.id }}</div>
                   
                </div>
                <div >
                    <span ></span>
                </div>
            </div>
        </div>
        <div v-else>
            <div>
                <van-form>
                    <van-divider>地图基本信息</van-divider>
                    <van-field v-model="info.map_id" name="地图标识" label="地图标识" placeholder="请输入"
                        :rules="[{ required: true, message: '请填写地图标识' }]" />
                    <van-field v-model="info.map_name" name="地图名称" label="地图名称" placeholder="请输入"
                        :rules="[{ required: true, message: '请填写地图名称' }]" />
                    <van-field v-model="info.map_detail" name="地图描述" label="地图描述" placeholder="请输入" />
                    <van-field name="switch" label="副本区域">
                        <template #input>
                            <van-switch v-model="info.isFb" size="20" />
                        </template>
                    </van-field>
                    <van-field name="switch" label="挑战区域">
                        <template #input>
                            <van-switch v-model="info.isTz" size="20" />
                        </template>
                    </van-field>
                    <van-field name="switch" label="活动区域">
                        <template #input>
                            <van-switch v-model="info.isHd" size="20" />
                        </template>
                    </van-field>
                    <van-field name="switch" label="巢穴区域">
                        <template #input>
                            <van-switch v-model="info.isCaoxue" size="20" />
                        </template>
                    </van-field>
                    <van-field name="switch" label="消费区域">
                        <template #input>
                            <van-switch v-model="info.isXiaofei" size="20" />
                        </template>
                    </van-field>
                    <van-divider>地图基本信息</van-divider>
                    <van-divider>地图NPC</van-divider>
                    <div v-for="(item, index) in info.npcList" :key="'npc' + index">
                        <div class="item">
                            <van-field readonly clickable name="picker" :value="item.npc_id" :label="item.npc_name"
                                placeholder="点击选择Npc" @click="openPicker(index, 'npc')" />
                            <div @click="deleteHandle(index, 'npc')">删除</div>
                        </div>

                    </div>
                    <van-button round block type="info" @click="addNpc" size="mini" style="width:80vw;margin:0 auto;">
                        新增Npc</van-button>
                    <van-divider>地图NPC</van-divider>
                    <van-divider>地图怪物</van-divider>

                    <div v-for="(item, index) in info.monsterList" :key="'monster' + index">
                        <div class="item">
                            <van-field readonly clickable name="picker" :value="item.monster_id"
                                :label="item.monster_name" placeholder="点击选择怪物" @click="openPicker(index, 'monster')" />
                            <div @click="deleteHandle(index, 'monster')">删除</div>
                        </div>
                    </div>
                    <van-button round block type="info" @click="addMonster" size="mini"
                        style="width:80vw;margin:0 auto;">新增怪物</van-button>
                    <van-divider>地图怪物</van-divider>
                    <van-divider>地图出口</van-divider>
                    <div v-for="(item, index) in info.exitList" :key="'exit' + index">
                        <div class="item">
                            <van-field readonly clickable name="picker" :value="item.map_id" :label="item.map_name"
                                placeholder="点击选择怪物" @click="openPicker(index, 'exit')" />
                            <div @click="deleteHandle(index, 'exit')">删除</div>
                        </div>
                    </div>
                    <van-button round block type="info" @click="addExit" size="mini" style="width:80vw;margin:0 auto;">
                        新增出口</van-button>
                    <van-popup v-model="showPicker" position="bottom">
                        <van-picker show-toolbar :columns="tempList" @confirm="onConfirm"
                            @cancel="showPicker = false" />
                    </van-popup>
                    <van-divider>地图出口</van-divider>
                    <div size="mini" style="width:80vw;margin:20px auto;">
                        <van-button round block type="primary" size="mini" @click="onSubmit">提交</van-button>
                        <br>
                        <van-button round block type="warning" size="mini" @click="onReturn">返回</van-button>
                        <br>
                        <van-button round block type="danger" size="mini" @click="deleteMap">删除</van-button>
                    </div>
                </van-form>
            </div>
        </div>

    </div>
</template>
<script>
import { getQuyulist, getQuyuDetail } from "@/service/api";
import { Notify } from 'vant';
export default {
    name: "Map",
    data() {
        return {
            searchKey: "",
            quyuList: [],
            mapList: [],
            info: {
                map_id: '',
                map_name: '',
                map_detail: '',
                npcList: [],
                monsterList: [],
                exitList: [],
                isFb: false,//是否副本区域
                isTz: false,
                isCaoxue: false,
                isTen: false,
                isXiaofei: false
            },
            showPicker: false,
            showType: 'quyu',
            activeNpc: [],
            activeMonster: [],
            activeExit: [],
            npcList: [],
            monsterList: [],
            tempList: [],
            nowType: '',
            nowIndex: 0,
            listIndex: null

        };
    },
    created() {
        getQuyulist(this.searchKey).then((res) => {
            this.quyuList = res.data;
        });
    },
    methods: {
        async quyuEdit(index, type) {
            this.showType = type
            if (this.showType == 'map' && index !== null) {
                let res = await getQuyuDetail(this.quyuList[index]?.id)
                this.mapList = res.data
                console.log(this.mapList, "mapList")
            }

        },
        onSearch(val) {
            getMaplist(this.searchKey).then((res) => {
                this.list = res.data;
            });
        },
        onCancel() {
            this.searchKey = "";
        },
        async onSubmit() {
            if (this.listIndex === null) {
                this.listIndex = this.mapList.length
            }
            this.mapList[this.listIndex] = this.info
            const data = await updateMaplist({
                index: this.listIndex,
                info: this.info
            })
            if (data.success) {
                Notify({ type: 'success', message: '修改成功' });
                this.showType = 'map'
            }
            else {
                Notify({ type: 'danger', message: '修改失败' });
            }
        },
        async deleteMap() {
            if (this.listIndex !== null) {
                this.mapList.splice(this.listIndex, 1)
                const data = await updateMaplist({
                    index: this.listIndex,
                    deleteItem: true
                })
                if (data.success) {
                    Notify({ type: 'success', message: '删除成功' });
                    this.showType = 'map'
                }
                else {
                    Notify({ type: 'danger', message: '删除失败' });
                }
            }
            else {
                Notify({ type: 'danger', message: '删除失败' });
            }

        },
        onReturn() {
            this.showType = 'quyu'
        },
        onConfirm(event) {
            this.info[[this.nowType + 'List']][this.nowIndex] = event
            this.showPicker = false

        },
        openPicker(index, type) {
            this.nowType = type
            this.nowIndex = index
            this.tempList = this[type + 'List']
            this.showPicker = true
        },
        addNpc() {
            this.info.npcList.push({
                npc_id: '',
                npc_name: ''
            })
        },
        addMonster() {
            this.info.monsterList.push({
                monster_id: '',
                monster_name: ''
            })
        },
        addExit() {
            this.info.exitList.push({
                mmap_id: '',
                map_name: ''
            })
        },
        deleteHandle(index, type) {
            this.info[type + 'List'].splice(index, 1)
        }
    },
};
</script>
<style>
.addButtton {
    position: absolute;
    top: 85vh;
    right: 2vw;
}

.item {
    display: flex;
    align-content: center;
}

.item>div:last-child {
    width: 20vw;
    color: red;

}
</style>