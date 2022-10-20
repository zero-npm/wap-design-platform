<template>
  <div>
    <van-search
      v-model="searchKey"
      placeholder="请输入搜索关键词"
      @search="onSearch"
      @cancel="onCancel"
    />
    <van-cell-group>
      <van-cell
        :title="item.monster_name"
        :value="item.monster_id"
        v-for="(item, index) in list"
        :key="index"
      />
    </van-cell-group>
    <van-button
      round
      type="info"
      icon="plus"
      class="addButtton"
      @click="pageEdit"
    ></van-button>
  </div>
</template>
<script>
import { getMonsterList } from "@/service/api";
export default {
  name: "Monster",
  data() {
    return {
      searchKey: "",
      list: [],
    };
  },
  created() {
    getMonsterList(this.searchKey).then((res) => {
      this.list = res.data;
    });
  },
  methods: {
    pageEdit() {
      this.$router.push("/pageEdit");
    },
    onSearch(val) {
      getMonsterList(this.searchKey).then((res) => {
        this.list = res.data;
      });
    },
    onCancel() {
      this.searchKey = "";
    },
  },
};
</script>
<style>
.addButtton {
  position: absolute;
  top: 85vh;
  right: 2vw;
}
</style>