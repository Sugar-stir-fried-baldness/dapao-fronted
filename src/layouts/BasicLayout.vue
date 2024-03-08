<!--写所有页面都要用到的东西-->

<template>
  <!--  1.顶部导航栏 -->
  <van-nav-bar
      title="标题"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
  >
    <!-- 搜索框：    一个名为right的插槽  -->
    <template #right>
      <van-icon name="search" size="18"/>
    </template>
  </van-nav-bar>


  <div id="content">
    <!--  根据不同的页面展示不同的内容-->
    <router-view/>


  </div>


  <!--  3.页面底部tab  active:表示当前页面处于哪个tab下  -->
  <!--  <van-tabbar  v-model="active" @change="onChange">-->
  <van-tabbar route @change="onChange">
    <van-tabbar-item to="/" icon="home-o" name="index">主页</van-tabbar-item>
    <van-tabbar-item to="/team" icon="search" name="team">队伍</van-tabbar-item>
    <van-tabbar-item to="/user" icon="friends-o" name="user">个人</van-tabbar-item>
  </van-tabbar>
</template>

<script setup>
//定义两个方法
// 和 1.顶部导航栏 相对应

import { ref } from 'vue';
import { showToast } from 'vant';

import {useRouter} from "vue-router";




const router = useRouter()

//点左侧就回到上一个页面
const onClickLeft = () =>  {
  router.back();
};
//跳转到search页面
const onClickRight = () => {
  router.push('/search')
};


const active = ref(0);
const onChange = (index) => showToast(`标签 ${index}`);
</script>

<style scoped>

</style>