import Vue from "vue";
import VueRouter from "vue-router";

import Home from "@/pages/Home.vue";
import Preview from "@/pages/Preview.vue";
import Mine from "@/pages/Mine.vue";
import MapEdit from "@/pages/MapEdit.vue";
import TempEdit from "@/pages/TempEdit.vue";
Vue.use(VueRouter);

export default new VueRouter({
    routes:[
        { path: '*', redirect: '/home' },
        {
            path:"/home",
            component:Home
        },
        {
            path:"/preview",
            component:Preview
        },
        {
            path:"/mine",
            component:Mine
        },
        {
            path:"/mapEdit",
            component:MapEdit
        },
        {
            path:"/tempEdit",
            component:TempEdit
        },

      
    ]
})
