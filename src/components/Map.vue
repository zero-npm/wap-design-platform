<template>
    <div style="width: 7000px;">
        <div v-for="(item, index) in map" :key="index">
            <input type="text" style="width: 400px;" v-for="(cItem, cIndex) in map[index]" :key="cIndex" :value="cItem"
                @input="mapChange($event, index, cIndex)" />
        </div>
        <button @click="submit">获取地图</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            map: []
        }
    },
    created() {
        let num = 14
        for(let i = 0;i < num ;i++){
            this.map[i] = []
            for(let j = 0 ; j < num ;j++){
                this.map[i][j] = ''
            }
        }
    },
    methods: {
        submit() {
            let mapDetail = []
            console.log(JSON.stringify(this.map))
            for(let i = 0 ; i < this.map.length ; i++){
                for(let j = 0 ; j < this.map[i]?.length ; j++){
                    if(this.map[i][j]){
                        mapDetail.push({ id: this.map[i][j], quyu: this.map[i][j].split('_').slice(0,this.map[i][j].split('_').length -1).join('_'), detail: '' })
                    }
                }
            }
            console.log(JSON.stringify(mapDetail))
        },
        mapChange(event, i, j) {
            this.map[i][j] = event.target.value
        }
    }
}
</script>