/**
 * Created by Administrator on 2017/3/26.
 */
import service from '@/service/service'
import type from "@/store/mtype"

export default {
  state: {
    userInfo: null, //用户信息
    shipping: null,  //用户物流信息
    shopcar: null,   //用户购物车信息
    collection: null,  //用户收藏夹信息
    collectionCount: null, //用户收藏夹总数
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

    order4: null,          //用户交易成功订单
    orderCount4: null,      //用户交易成功订单总数
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
     * 移出收藏夹
     * @param state
     * @param goodsId
     */
      [type.REMOVE_ONE_COLLECTION](state, {goodsId}){
      for (let i = 0; i < state.collection.length; i++) {
        if (state.collection[i].goodsId === goodsId) {
          state.collection.splice(i, 1);
          state.collectionCount--;
          break;
        }
      }
    },
    //TODO
    [type.ADD_ONE_SHOPCAR](state, {goodsId}){

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
     * 确认收货订单
     * @param state
     * @param ID
     */
      [type.CONFIRM_RECEIVE_ONE_ORDER](state, {ID}){
      let index = null;
      for (let i = 0; i < state.order2.length; i++) {
        if (state.order2[i].ID === ID) {
          state.order2[i].pay_status = 3;            //改变订单状态
          state.order2[i].order_status = 3;            //改变订单状态
          index = state.order2.splice(i, 1)[0]
          state.order3.unshift(index); // 3删除订单  4添加订单
          state.orderCount2--;
          state.orderCount3++;
          break;
        }
      }
      for (let j = 0; j < state.order.length; j++) {
        if (state.order[j].ID === index.ID) {
          state.order[j].pay_status = 3;            //改变订单状态
          state.order[j].order_status = 3;
        }
      }
    },

    /**
     * 评价订单
     * @param state
     * @param ID
     */
      [type.COMMENT_ONE_ORDER](state, {ID}){
      for (let i = 0; i < state.order3.length; i++) {
        if (state.order3[i].ID === ID) {
          state.order3[i].pay_status = 4;            //改变订单状态
          state.order3[i].order_status = 4;            //改变订单状态
          state.order.unshift(state.order3.splice(i, 1)[0]); // 3删除订单  (4,all)添加订单
          state.orderCount3--;
          state.orderCount++;
          break;
        }
      }
    },

    /**
     * 删除订单
     * @param state
     * @param ID
     */
      [type.REMOVE_ONE_ORDER](state, {ID}){
      for (let i = 0; i < state.order.length; i++) {
        if (state.order[i].ID === ID) {
          state.order.splice(i, 1);
          state.orderCount--;
          break;
        }
      }
    },

    /**
     * 取消订单
     * @param state
     * @param ID
     */
      [type.CANCLE_ONE_ORDER](state, {ID}){
      let index = null;
      for (let i = 0; i < state.order0.length; i++) {
        if (state.order0[i].ID === ID) {
          index = state.order0.splice(i, 1)[0];
          state.orderCount0--;
          break;
        }
      }
      for (let j = 0; j < state.order.length; j++) {
        if (state.order[j].ID === index.ID) {
          state.order.splice(j, 1);
          state.orderCount--;
        }
      }
    },

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
     * 评价订单
     * @param commit
     * @param ID
     * @param desc
     * @param star
     * @param tag
     * @returns {Promise.<void>}
     */
    async commentOrder({commit}, {ID, desc, star, tag}){
      await service.commentOrder({ID, desc, star, tag});
      commit(type.COMMENT_ONE_ORDER, {ID});
    },

    /**
     * 确认收货
     * @param commit
     * @param ID
     * @returns {Promise.<void>}
     */
    async confirmReceiveOrder({commit}, {ID}){
      await service.confirmReceiveOrder(ID);
      commit(type.CONFIRM_RECEIVE_ONE_ORDER, {ID});
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
    async initCollection({commit}, {pnum, psize}){
      pnum = pnum || 1;
      psize = psize || 5;
      const collection = await service.getCollection({pnum, psize});
      const collectionCount = await service.getCollectionCount();
      commit(type.SET_INFO, {
        index: 'collection',
        data: collection
      });
      commit(type.SET_INFO, {
        index: 'collectionCount',
        data: collectionCount
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
    },

    /**
     * 移出收藏夹
     * @param commit
     * @param goodsId
     * @returns {Promise.<void>}
     */
    async removeCollection({commit}, {goodsId}){
      await service.removeCollection({goodsId});
      commit(type.REMOVE_ONE_COLLECTION, {goodsId});
    },

    /**
     * 加入购物车
     * @param commit
     * @param goodsId
     * @returns {Promise.<void>}
     */
    async addShopcar({dispatch, commit}, {goodsId}){
      await service.addShopcar({goodsId});
      await dispatch('removeCollection', {goodsId});
      await dispatch('initShopcar'); //更新购物车
    },

  }
}
