<template>
<!--  如果user不存在，就不展示 -->
  <template v-if="user">
    <van-cell title="昵称" is-link to="/user/edit" :value="user.username" @click="toEdit('username','昵称',user.username) "/>
    <van-cell title="账号" is-link  :value="user.userAccount" />
    <van-cell title="头像" is-link to="/user/edit"  :value="user.avatarUrl" @click="toEdit('avatarUrl','头像',user.avatarUrl) "/>
    <img style="height: 48px" :src="user.avatarUrl" />;
    <van-cell title="性别" is-link to="/user/edit"  :value="user.gender" @click="toEdit('gender','性别',user.gender)"/>
    <van-cell title="电话号码" is-link to="/user/edit"  :value="user.phone"  @click="toEdit('phone','电话号码',user.phone) "/>
    <van-cell title="邮箱" is-link to="/user/edit"  :value="user.email" @click="toEdit('email','邮箱',user.email) "/>
    <van-cell title="星球编号" is-link  :value="user.planetCode" />
    <van-cell title="创建时间" is-link  :value="new Date(user.createTime).toISOString()" />

  </template>

</template>

<script setup lang="ts">
import {useRouter} from "vue-router";
import {onMounted, ref} from "vue";
import myAxios from "../plugins/myAxios";
import {showFailToast, showSuccessToast} from "vant";
import {getCurrentUser} from "../services/user";


// const user = {
//   id: 1,
//   username: '黑大帅',
//   userAccount: 'hei',
//   avatarUrl: '',
//   gender: '女',
//   phone: '1234567',
//   email: '12345@qq.com',
//   planetCode: '1234',
//   createTime:new Date(),
// }
const user = ref();

//钩子函数，它在组件挂载完成后执行 。发起一个GET请求到'/user/current'路径，获取当前用户的信息。
onMounted(async () => {
  user.value = await getCurrentUser();
})

const router = useRouter();

const toEdit = (editKey: string, editName: string, currentValue: string) => {
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