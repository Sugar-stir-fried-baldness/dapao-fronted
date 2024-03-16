/**
 * 导出 异步函数,这个模块可以被其他模块导入使用
 */


import myAxios from "../plugins/myAxios";
import {showSuccessToast , showFailToast} from "vant";
import {getCurrentUserState, setCurrentUserState} from "../states/user";

/**
 * 获取当前用户
 */

export const getCurrentUser = async () =>{
   //鱼皮建议：当用户量少的时候，前端最好不用缓存，当想要获取信息时，就写个路由的钩子
   // const currentUser = getCurrentUserState();
   // if(currentUser) {
   //    return currentUser;
   // }
    // 不存在则从远程获取
    const res = await myAxios.get('/user/current');
    if (res.code === 0) {
        setCurrentUserState(res.data);
        return res.data;
    }
    return null;


}