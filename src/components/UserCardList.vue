<template>
  <van-card
      v-for="user in props.userList"
      :desc="`个人简介：${user.profile}`"
      :title="`${user.username} (${user.planetCode})`"

      :thumb="user.avatarUrl"
  >
    <template #tags>
      <van-tag plain type="danger" v-for="tag in tags" style="margin-right: 8px; margin-top: 8px" >
        {{tag}}
      </van-tag>
    </template>
    <template #footer>
      <van-button size="mini">联系我</van-button>
    </template>
  </van-card>
</template>

<script  lang="ts" setup>

import {UserType} from "../models/user";

interface UserCardListProps {
  userList: UserType[];
}

//获取父组件 userList 传递来的属性
const props = withDefaults(defineProps<UserCardListProps>(),{
  userList: [],
});

</script>


<style scoped>

</style>