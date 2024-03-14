<template>
  <van-form @submit="onSubmit">
    <van-field
        v-model="editUser.currentValue"
        :name="editUser.editKey"
        :label="editUser.editName"
        :placeholder="`请输入${editUser.editName}`"
    />
    <div style="margin: 16px;">
      <van-button round block type="primary" native-type="submit">
        提交
      </van-button>
    </div>
  </van-form>
</template>

<script setup lang="ts">
import {useRoute, useRouter} from "vue-router";
import {ref} from "vue";
import myAxios from "../plugins/myAxios";
import {showFailToast, showSuccessToast} from "vant";

const route = useRoute();
const router = useRouter();

//编辑用户 的 参数
const editUser = ref({
  editKey: route.query.editKey,
  currentValue: route.query.currentValue,
  editName: route.query.editName,
})

const onSubmit = async () => {
  const res = await myAxios.post('user/update' , {
    'id':1,
    [editUser.value.editKey ]:editUser.value.currentValue
  })
// todo
  console.log(res,'更新请求')
  //鱼皮写的 是res.code === 0  但是报错，我这样写是猜的
  if(res.code === 0 && res.data > 0){
    showSuccessToast('修改成功');

    router.back();
  }else{
    showFailToast('修改失败');
  }

};

</script>

<style scoped>

</style>