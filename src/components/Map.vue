<template>
    <div>
        <div v-for="(item,index) in map" :key = "index">
            <input type="text" v-for="(cItem,cIndex) in map[index]" :key="cIndex" :value="cItem" @input="mapChange($event,index,cIndex)"/>
        </div>
        <button @click="submit">获取地图</button>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                map:[]
            }
        },
        created(){
            let num = 9
            for(let i = 0;i < num ;i++){
                this.map[i] = []
                for(let j = 0 ; j < num ;j++){
                    this.map[i][j] = ''
                }
            }
        },
        methods:{
            submit(){
                console.log(this.map)
            },
            mapChange(event,i,j){
                this.map[i][j] = event.target.value
            }
        }
    }
</script>