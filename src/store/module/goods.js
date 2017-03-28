/**
 * Created by Administrator on 2017/3/26.
 */
import service from '@/service/service'
import * as type from "@/store/mtype"

export default {
  state: {
    hot: null, //用户信息
    shippingDetailMap: new Map() //商品物流信息
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
     * 添加物流信息
     * @param state
     * @param goodsId
     * @param content
     */
      [type.ADD_SHIPPING_INFO](state, {shippingId, content}){
      state.shippingDetailMap.set(shippingId, content);
    }
  },
  actions: {
    /**
     * 初始化热门商品信息
     * @param commit
     * @returns {Promise.<void>}
     */
    async initHot({commit}){
      const hot = await service.getHotGoods();
      commit(type.SET_INFO, {
        index: 'hot',
        data: hot
      });
    },

    /**
     * 初始化单个商品物流信息
     * @param commit
     * @param goodsId
     * @returns {Promise.<void>}
     */
    async initShippingDetail({commit}, {shippingId}){
      const {content} = await service.findShipping(shippingId);
      commit(type.ADD_SHIPPING_INFO, {
        shippingId,
        content
      });
    },
    /**
     * 确认收货
     * @param state
     * @param commit
     * @param shippingId
     * @returns {Promise.<void>}
     */
    async confirmReceive({state, commit}, {shippingId}){
      await service.confirmReceive(shippingId);
      commit(type.REMOVE_ONE_SHIPPING, {shippingId});
    }
  }
}
