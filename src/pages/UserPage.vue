<template>
  <van-cell title="昵称" is-link to="/user/edit" :value="user.username" @click="toEdit('username','昵称',user.username) "/>
  <van-cell title="账号" is-link  :value="user.userAccount" />
  <van-cell title="头像" is-link to="/user/edit"  :value="user.avatarUrl" @click="toEdit('avatarUrl','头像',user.avatarUrl) "/>
  <img style="height: 48px" :src="user.avatarUrl" alt=""/>;
  <van-cell title="性别" is-link to="/user/edit"  :value="user.gender" @click="toEdit('gender','性别',user.gender)"/>
  <van-cell title="电话号码" is-link to="/user/edit"  :value="user.phone"  @click="toEdit('phone','电话号码',user.phone) "/>
  <van-cell title="邮箱" is-link to="/user/edit"  :value="user.email" @click="toEdit('email','邮箱',user.email) "/>
  <van-cell title="星球编号" is-link  :value="user.planetCode" />
  <van-cell title="创建时间" is-link  :value="user.createTime.toISOString()" />

</template>

<script setup lang="ts">
import {useRouter} from "vue-router";


const user = {
  id: 1,
  username: '黑大帅',
  userAccount: 'hei',
  avatarUrl: '',
  gender: '女',
  phone: '1234567',
  email: '12345@qq.com',
  planetCode: '1234',
  createTime:new Date(),
}

// const user = ref();

const router = useRouter();


const toEdit = (editKey : string , editName : string ,currentValue : string) => {
  router.push({
    path: '/user/edit',
    query: {
      editKey,
      editName,
      currentValue,
    }
  })
}




</script>

<style scoped>

</style>