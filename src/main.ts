import { createApp } from 'vue'

import App from './App.vue'
import {Button, Icon, NavBar, Search, Tabbar, TabbarItem, Toast} from "vant";

import * as VueRouter from 'vue-router';
import routes from "./config/router";
import Vant from "vant";

//前端 vue 的入口
//引入 App 的组件 ，将 App.vue 挂载在 html 上的app标签上（在index.html上有写）。#表示是id选择器
// createApp(App).mount('#app')
// 5. 创建并挂载根实例
const app = createApp(App);
app.use(Vant);


const router = VueRouter.createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。 hash模式：通过在路由后面添加#单词 的方式
    history: VueRouter.createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})


app.use(router);

app.mount('#app')

// 现在，应用已经启动了！