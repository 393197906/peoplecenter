/**
 * Created by Administrator on 2017/3/26.
 */
import service from '@/service/service'
import * as type from "@/store/mtype"

export default {
  state: {
    userInfo: null, //用户信息
    shipping: null,  //用户物流信息
    shopcar: null,   //用户购物车信息
    collection: null,  //用户收藏夹信息
    growup: null         //用户成长信息
  },
  mutations: {
    /**
     * 设置信息
     * @param state
     * @param data
     */
      [type.SET_INFO](state, {index, data}){
      state[index] = data;
    },

    /**
     * 移除单个物流信息
     * @param state
     * @param shippingId
     */
      [type.REMOVE_ONE_SHIPPING](state, {shippingId}){
      for (let i = 0; i < state.shipping.length; i++) {
        if (state.shipping[i].shippingId === shippingId) {
          state.shipping.splice(i, 1);
          break;
        }
      }
    }
  },
  actions: {
    /**
     * 初始化用户信息
     * @param commit
     * @returns {Promise.<void>}
     */
    async initUserInfo({commit}){
      const userinfo = await service.getUserinfo();
      commit(type.SET_INFO, {
        index: 'userInfo',
        data: userinfo
      });
    },
    /**
     * 初始化用户物流信息
     * @param commit
     * @returns {Promise.<void>}
     */
    async initShipping({commit}){
      const shipping = await service.getShipping();
      commit(type.SET_INFO, {
        index: 'shipping',
        data: shipping
      });
    },
    /**
     * 初始化用户购物车信息
     * @param commit
     * @returns {Promise.<void>}
     */
    async initShopcar({commit}){
      const shopcar = await service.getShopcar();
      commit(type.SET_INFO, {
        index: 'shopcar',
        data: shopcar
      });
    },

    /**
     * 初始化用户收藏夹信息
     * @param commit
     * @returns {Promise.<void>}
     */
    async initCollection({commit}){
      const collection = await service.getCollection();
      commit(type.SET_INFO, {
        index: 'collection',
        data: collection
      });
    },
    /**
     * 初始化用户成长信息
     * @param commit
     * @returns {Promise.<void>}
     */
    async initGrowup({commit}){
      const growup = await service.getGrowUp();
      commit(type.SET_INFO, {
        index: 'growup',
        data: growup
      });
    },

    /**
     * 更新用户信息
     * @param commit
     * @param userInfo
     * @returns {Promise.<void>}
     */
    async updateUserInfo({dispatch}, userInfo){
      await service.updateUserInfo(userInfo);
      await dispatch('initUserInfo');
    }

  }
}
