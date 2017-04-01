export default  {
  /**
   * 获取用户信息
   * @returns {Promise}
   */
  getUserinfo(){
    return new Promise((res, rej) => {
      setTimeout(() => {
        res({
          title1: "谢利朋",
          title2: "vuex",
          title3: "hello vue",
          img: "http://tpl.amazeui.org/template/10/shop/one/images/getAvatar.do.jpg",
          aname: "远在远方的风",
          name: "谢利朋",
          birthday: new Date("2017-07-21"),
          gender: "male",
          desc: "我是远在远方的风，你他妈的是谁",
          phone: "",
          email: "",
          payPassword: ""
        });
      }, 1000)
    })
  },

  /**
   * 获取用户商品物流信息
   * @returns {Promise}
   */
  getShipping(){
    return new Promise((res, rej) => {
      setTimeout(() => {
        res([{
          shippingId: 1,
          goodsImg: "http://tpl.amazeui.org/template/10/shop/one/images/getAvatar.do.jpg",
          goodsTitle: "下蛋公鸡，公鸡中的战斗机",
          shippingTitle: "快件已从 谢楼 发出",
          shippingTime: "2018-08-08 23:01:01"
        },
          {
            shippingId: 2,
            goodsImg: "http://tpl.amazeui.org/template/10/shop/one/images/getAvatar.do.jpg",
            goodsTitle: "风的追求",
            shippingTitle: "快件已从 菏泽 发出",
            shippingTime: "2013-08-08 23:01:01"
          },
        ])
      }, 1000)
    })
  },

  /**
   * 获取用户购物车信息
   * @returns {Promise}
   */
  getShopcar(){
    return new Promise((res, rej) => {
      setTimeout(() => {
        res([{
          goodsId: 1,
          goodsImg: "http://tpl.amazeui.org/template/10/shop/one/images/getAvatar.do.jpg",
          goodsTitle: "下蛋公鸡，公鸡中的战斗机",
          goodsPrice: 182.52,
          goodsNum: 25
        },
          {
            goodsId: 2,
            goodsImg: "http://tpl.amazeui.org/template/10/shop/one/images/getAvatar.do.jpg",
            goodsTitle: "风的追求",
            goodsPrice: 1182.52,
            goodsNum: 2
          },
        ])
      }, 1000)
    })
  },

  /**
   * 获取用户收藏夹信息
   * @returns {Promise}
   */
  getCollection({pnum, psize}){
    console.log({pnum, psize});
    return new Promise((res, rej) => {
      setTimeout(() => {
        res([{
          goodsId: 1,
          goodsImg: "http://tpl.amazeui.org/template/10/shop/one/images/getAvatar.do.jpg",
          goodsTitle: "下蛋公鸡，公鸡中的战斗机",
          goodsPrice: 182.52,
          goodsNum: 25
        },
          {
            goodsId: 2,
            goodsImg: "http://tpl.amazeui.org/template/10/shop/one/images/getAvatar.do.jpg",
            goodsTitle: "风的追求",
            goodsPrice: 1182.52,
            goodsNum: 2
          },
        ])
      }, 1000)
    })

  },

  /**
   * 获取收藏夹总数
   * @returns {Promise}
   */
  getCollectionCount(){
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(20);
      }, 1000)
    })
  },

  /**
   * 获取用户成长信息
   * @returns {Promise}
   */
  getGrowUp(){
    return new Promise((res, rej) => {
      setTimeout(() => {
        res([{
          id: 1,
          time: '2017-01-01 00:00:01',
          content: "账号注册成功"
        },
          {
            id: 2,
            time: '2017-02-01 00:00:01',
            content: "购买第一件商品"
          },
          {
            id: 3,
            time: '2017-03-03 00:00:01',
            content: "购买第二件商品"
          },
          {
            id: 4,
            time: '2017-03-010 00:00:01',
            content: "账号第三件商品成功"
          },
          {
            id: 5,
            time: '2017-04-01 00:00:01',
            content: "购买弟四件商品"
          },
          {
            id: 6,
            time: '2017-05-01 00:00:01',
            content: "购买第五件商品"
          },
          {
            id: 7,
            time: '2017-01-01 00:00:01',
            content: "账号注册成功"
          }
        ])
      }, 1000)
    })

  },

  /**
   * 获取热卖商品
   * @returns {Promise}
   */
  getHotGoods(){
    return new Promise((res, rej) => {
      setTimeout(() => {
        res([
          {
            goodsId: 1,
            goodsImg: "http://tpl.amazeui.org/template/10/shop/one/images/getAvatar.do.jpg",
            goodsTitle: "我是一件好商品"
          },
          {
            goodsId: 2,
            goodsImg: "http://tpl.amazeui.org/template/10/shop/one/images/getAvatar.do.jpg",
            goodsTitle: "我是一件好商品2"
          },
          {
            goodsId: 3,
            goodsImg: "http://tpl.amazeui.org/template/10/shop/one/images/getAvatar.do.jpg",
            goodsTitle: "我是一件好商3"
          },
          {
            goodsId: 4,
            goodsImg: "http://tpl.amazeui.org/template/10/shop/one/images/getAvatar.do.jpg",
            goodsTitle: "我是一件好商品4"
          },
          {
            goodsId: 5,
            goodsImg: "http://tpl.amazeui.org/template/10/shop/one/images/getAvatar.do.jpg",
            goodsTitle: "我是一件好商品5"
          }
        ])
      }, 1000)
    })
  },

  /**
   * 获取单个商品物流信息
   * @returns {Promise}
   */
  findShipping(shippingId){
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(
          {
            shippingId,
            content: [{
              id: 1,
              time: '2015-01-01 00：:0:20',
              content: "从 奇奇哈儿 发出"
            },
              {
                id: 2,
                time: '2015-01-01 00：:0:20',
                content: "从 北京 发出"
              },
              {
                id: 3,
                time: '2015-01-01 00：:0:20',
                content: "从 南京 发出"
              },
              {
                id: 4,
                time: '2015-01-01 00：:0:20',
                content: "已收货"
              },
            ]
          }
        )
      }, 1000)
    })
  },

  /**
   * 确认收货
   * @param shippingId
   * @returns {Promise}
   */

  confirmReceive(shippingId){
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(true)
      }, 10)
    })
  },

  /**
   * 更新用户信息
   * @param userInfo
   * @returns {Promise}
   */
  updateUserInfo(userInfo){
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(true);
      }, 1000)
    })
  },

  /**
   * 修改登录密码
   * @param oldPassword
   * @param newPassword
   * @returns {Promise}
   */
  changePassword({oldPassword, newPassword}){
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(true)
      }, 1000)
    })
  },

  /**
   * 设置登录密码
   * @param payPassword
   * @returns {Promise}
   */
  setPayPassword({payPassword}){
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(true)
      }, 1000)
    })
  },

  /**
   * 修改支付密码
   * @param payPassword
   * @param newPayPassword
   * @returns {Promise}
   */
  changePayPassword({payPassword, newPayPassword}){
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(true)
      }, 1000)
    })
  },

  /**
   * 发送手机验证码
   * @param phone
   * @returns {Promise}
   */
  sendPhoneVcode({phone}){
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(true)
      }, 1000)
    })
  },

  /**
   * 设置手机
   * @param phone
   * @param vcode
   * @returns {Promise}
   */
  setPhone({phone, vcode}){
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(true)
      }, 1000)
    })
  },

  /**
   * 换绑手机
   * @param oldPhone
   * @param phone
   * @param vcode
   * @returns {Promise}
   */
  changePhone({oldPhone, phone, vcode}){
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(true)
      }, 1000)
    })
  },

  /**
   * 发送邮箱验证码
   * @param eamil
   * @returns {Promise}
   */
  sendEmailVcode({eamil}){
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(true)
      }, 1000)
    })
  },

  /**
   * 设置邮箱
   * @param email
   * @param vcode
   * @returns {Promise}
   */
  setEmail({email, vcode}){
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(true)
      }, 1000)
    })
  },

  /**
   * 修改邮箱
   * @param oldEmail
   * @param eamil
   * @param vcode
   * @returns {Promise}
   */
  changeEmail({oldEmail, eamil, vcode}){
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(true)
      }, 1000)
    })
  },

  /**
   * 获取收货地址
   * @returns {Promise}
   */
  getAddress(){
    return new Promise((res, rej) => {
      setTimeout(() => {
        res([
          {
            id: 1,
            user_name: "达文西",
            contaceperson: "达文西收货",
            province: "山东",
            city: "菏泽",
            districe: "成武县",
            mobile_phone: "13583103635",
            address: "你好，你在哪呢",
            zipcode: "274200",
            is_default: 0
          },
          {
            id: 2,
            user_name: "达文西2",
            contaceperson: "达文西2",
            province: "山东",
            city: "菏泽",
            districe: "曹县",
            mobile_phone: "13771998358",
            address: "我是二号收货地址",
            zipcode: "274200",
            is_default: 1
          }
        ])
      }, 1000)
    })
  },

  /**
   * 设置默认收货地址
   * @param id
   * @returns {Promise}
   */
  setDefaultAddress({id}){
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(true);
      }, 1000)
    })
  },

  /**
   * 删除收货地址
   * @param id
   * @returns {Promise}
   */
  removeAddress({id}){
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(true);
      }, 1000)
    })
  },

  /**
   * 新增收货地址
   * @param address
   * @returns {Promise}
   */
  addAddress(address){
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(true);
      }, 1000)
    })
  },
  /**
   * 编辑收货地址
   * @param address
   * @returns {Promise}
   */
  editAddress(address){
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(true);
      }, 1000)
    })
  },

  /**
   * 获取订单
   * @param psize
   * @param pnum
   * @param label
   * @returns {Promise}
   */
  //0未付款1已付款2已发货3确认收货
  getOrder({psize, pnum, label}){
    if (label === '') {

    }
    return new Promise((res, rej) => {
      setTimeout(() => {
        const data = [
          {
            ID: 1,
            order_sn: "我是一个订单编号",
            order_status: 0,
            shipping_num: 0,
            pay_status: 0,
            order_amount: 123.50,
            add_time: '2017-07-21 10:23:22',
            send_time: '2017-07-21 10:23:22',
            pay_time: '2017-07-21 10:23:22',
            complete_time: '2017-07-21 10:23:22',
            goods: [
              {
                goods_id: 1,
                goods_num: 25,
                goods_name: '联想测试',
                goods_fristimage: "http://tpl.amazeui.org/template/10/shop/one/images/getAvatar.do.jpg",
                goods_tag: '新品',
                goods_amount: 123.54,
                goods_money: 123.54,
                pay_amout: 1000
              },
              {
                goods_id: 2,
                goods_num: 3,
                goods_name: '联想测试',
                goods_fristimage: "http://tpl.amazeui.org/template/10/shop/one/images/getAvatar.do.jpg",
                goods_tag: '新品',
                goods_amount: 123.54,
                goods_money: 123.54,
                pay_amout: 1000
              }
            ]
          },
          {
            ID: 2,
            order_sn: "我是一个订单编号",
            order_status: 0,
            shipping_num: 0,
            pay_status: 1,
            order_amount: 123.50,
            add_time: '2017-07-21 10:23:22',
            send_time: '2017-07-21 10:23:22',
            pay_time: '2017-07-21 10:23:22',
            complete_time: '2017-07-21 10:23:22',
            goods: [
              {
                goods_id: 1,
                goods_num: 25,
                goods_name: '联想测试',
                goods_fristimage: "http://tpl.amazeui.org/template/10/shop/one/images/getAvatar.do.jpg",
                goods_tag: '新品',
                goods_amount: 123.54,
                goods_money: 123.54,
                pay_amout: 1000
              },
              {
                goods_id: 2,
                goods_num: 3,
                goods_name: '联想测试',
                goods_fristimage: "http://tpl.amazeui.org/template/10/shop/one/images/getAvatar.do.jpg",
                goods_tag: '新品',
                goods_amount: 123.54,
                goods_money: 123.54,
                pay_amout: 1000
              }
            ]
          },
          {
            ID: 3,
            order_sn: "我是一个订单编号",
            order_status: 0,
            shipping_num: 1,
            pay_status: 2,
            order_amount: 123.50,
            add_time: '2017-07-21 10:23:22',
            send_time: '2017-07-21 10:23:22',
            pay_time: '2017-07-21 10:23:22',
            complete_time: '2017-07-21 10:23:22',
            goods: [
              {
                goods_id: 1,
                goods_num: 25,
                goods_name: '联想测试',
                goods_fristimage: "http://tpl.amazeui.org/template/10/shop/one/images/getAvatar.do.jpg",
                goods_tag: '新品',
                goods_amount: 123.54,
                goods_money: 123.54,
                pay_amout: 1000
              },
              {
                goods_id: 2,
                goods_num: 3,
                goods_name: '联想测试',
                goods_fristimage: "http://tpl.amazeui.org/template/10/shop/one/images/getAvatar.do.jpg",
                goods_tag: '新品',
                goods_amount: 123.54,
                goods_money: 123.54,
                pay_amout: 1000
              }
            ]
          },
          {
            ID: 4,
            order_sn: "我是一个待评价订单",
            order_status: 3,
            shipping_num: 2,
            pay_status: 3,
            order_amount: 123.50,
            add_time: '2017-07-21 10:23:22',
            send_time: '2017-07-21 10:23:22',
            pay_time: '2017-07-21 10:23:22',
            complete_time: '2017-07-21 10:23:22',
            goods: [
              {
                goods_id: 1,
                goods_num: 25,
                goods_name: '联想测试',
                goods_fristimage: "http://tpl.amazeui.org/template/10/shop/one/images/getAvatar.do.jpg",
                goods_tag: '新品',
                goods_amount: 123.54,
                goods_money: 123.54,
                pay_amout: 1000
              },
              {
                goods_id: 2,
                goods_num: 3,
                goods_name: '联想测试',
                goods_fristimage: "http://tpl.amazeui.org/template/10/shop/one/images/getAvatar.do.jpg",
                goods_tag: '新品',
                goods_amount: 123.54,
                goods_money: 123.54,
                pay_amout: 1000
              }
            ]
          },
          {
            ID: 5,
            order_sn: "我是一个交易成功的订单",
            order_status: 4,
            shipping_num: 1,
            pay_status: 4,
            order_amount: 123.50,
            add_time: '2017-07-21 10:23:22',
            send_time: '2017-07-21 10:23:22',
            pay_time: '2017-07-21 10:23:22',
            complete_time: '2017-07-21 10:23:22',
            goods: [
              {
                goods_id: 1,
                goods_num: 25,
                goods_name: '联想测试',
                goods_fristimage: "http://tpl.amazeui.org/template/10/shop/one/images/getAvatar.do.jpg",
                goods_tag: '新品',
                goods_amount: 123.54,
                goods_money: 123.54,
                pay_amout: 1000
              },
              {
                goods_id: 2,
                goods_num: 3,
                goods_name: '联想测试',
                goods_fristimage: "http://tpl.amazeui.org/template/10/shop/one/images/getAvatar.do.jpg",
                goods_tag: '新品',
                goods_amount: 123.54,
                goods_money: 123.54,
                pay_amout: 1000
              }
            ]
          },
        ]
        const ndata = [];
        ndata.push(data[pnum]);
        res(data);
      }, 1000)
    })
  },

  /**
   * 获取订单总数
   * @param label
   * @returns {Promise}
   */
  getOrderCount({label}){
    if (label === '') {
    }
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(5);
      }, 1000)
    })
  },

  /**
   * 删除订单
   * @param ID
   * @returns {Promise}
   */
  deleteOrder(ID){
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(5);
      }, 1000)
    })
  },

  /**
   * 评价订单
   * @param ID
   * @param desc
   * @param star
   * @param tag
   * @returns {Promise}
   */
  commentOrder({ID, desc, star, tag}){
    console.log({ID, desc, star, tag});
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(5);
      }, 1000)
    })
  },

  /**
   * 确认收货
   * @param ID
   * @returns {Promise}
   */
  confirmReceiveOrder(ID){
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(5);
      }, 1000)
    })
  },

  /**
   * 移出收藏夹
   * @param goodsId
   * @returns {Promise}
   */
  removeCollection({goodsId}){
    return new Promise((rej, res) => {
      setTimeout(() => {
        rej(true);
      }, 1000)
    })
  },
  /**
   * 加入购物车
   * @param goodsId
   * @returns {Promise}
   */
  addShopcar({goodsId}){
    return new Promise((rej, res) => {
      setTimeout(() => {
        rej(true);
      }, 1000)
    })
  }
}
