<!--
  搜索结果页
-->

<template>
  <van-card size=""
      v-for="user in userList"

      :desc= "user.profile"
      :title="`${user.username} (${user.planetCode})`"
      :thumb="user.avatarUrl"
  >
    <template #tags>
      <van-tag plain type="danger" v-for="tag in user.tags" style="margin-right: 8px ; margin-top: 8px" >
      {{tag}}
      </van-tag>
    </template>
    <template #footer>
      <van-button size="mini">联系我</van-button>
    </template>
  </van-card>
<!-- empty -->
  <van-empty v-if="!userList || userList.length < 1"  description="搜索结果为空" />

</template>

<script setup>
import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";
import myAxios from "../plugins/myAxios.ts";
import {showFailToast, showSuccessToast, showToast, Toast} from "vant";
import qs from 'qs';





 const mockUser = ref({
      id: 931,
      username: '黑大帅',
      userAccount: 'dashuai',
      profile: '一条咸鱼',
      gender: 0,
      phone: '123456789101',
      email: 'shayu-yusha@qq.com',
      planetCode: '15135',
      avatarUrl: 'https://mdn.alipayobjects.com/huamei_0prmtq/afts/img/A*9uyGR6gGcI4AAAAAAAAAAAAADvuFAQ/original',
      tags: ['java', 'emo', '打工中', 'emo', '打工中'],
      createTime: new Date(),
    })
;


const route = useRoute();
const userList = ref({mockUser});
const {tags} = route.query;



onMounted( async () =>{

  // 为给定 ID 的 user 创建请求
  const userListData = await  myAxios.get('/user/search/tags',{
    withCredentials: false,
    params: {
      tagNameList: tags
    },
    //序列化
    paramsSerializer: {
      serialize: params => qs.stringify(params, { indices: false}),
    }
     })
      .then(function (response) {
        console.log( '/user/search/tags succeed', response);
        showSuccessToast('请求成功');
        return response.data?.data;
      })
      .catch(function (error) {
        console.log( '/user/search/tags error', error);
        showFailToast('请求失败');

      })

    if(userListData){


      userListData.forEach(user =>{
        if (user.tags){
          user.tags = JSON.parse(user.tags);
        }
      })
      userList.value = userListData;

      }


  });





</script>

<style scoped>


</style>