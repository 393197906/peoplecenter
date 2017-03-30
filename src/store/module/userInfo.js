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
    growup: null,         //用户成长信息
    address: null,        //用户收货地址信息
    order: null,          //用户全部订单
    orderCount: null,      //用户全部订单总数

    order0: null,          //用户待付款订单
    orderCount0: null,      //用户待付款订单总数

    order1: null,          //用户代发货订单
    orderCount1: null,      //用户代发货订单总数

    order2: null,          //用户待收货订单
    orderCount2: null,      //用户待收货订单总数

    order3: null,          //用户待评价订单
    orderCount3: null,      //用户待评价订单总数

    order4: null,          //用户退换货订单
    orderCount4: null,      //用户退换货订单总数
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
    },
    /**
     * 删除一个订单
     * @param state
     * @param ID
     */
      [type.REMOVE_ONE_ORDER](state, {ID}){
      for (let i = 0; i < state.order.length; i++) {
        if (state.order[i].ID === ID) {
          state.order.splice(i, 1);
          break;
        }
      }
      state.orderCount--;
    }

  },
  actions: {

    /**
     * 初始化订单数据
     * @param commit
     * @param pnum
     * @param psize
     * @param type
     * @returns {Promise.<void>}
     */
    async initOrder({commit}, {pnum, psize, label}){
      if (isNaN(label)) {
        label = '';
      }
      const order = await service.getOrder({pnum, psize, label});
      const count = await service.getOrderCount({label});
      commit(type.SET_INFO, {
        index: `order${label}`,
        data: order
      });
      commit(type.SET_INFO, {
        index: `orderCount${label}`,
        data: count
      });
    },

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
     * 初始化收货地址
     * @param commit
     * @returns {Promise.<void>}
     */
    async initAddress({commit}){
      const address = await service.getAddress();
      commit(type.SET_INFO, {
        index: 'address',
        data: address
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
