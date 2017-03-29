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
      }, 3000)
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
      }, 5000)
    })
  },

  /**
   * 获取用户收藏夹信息
   * @returns {Promise}
   */
  getCollection(){
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
      }, 7000)
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
      }, 3000)
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
      }, 3000)
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
      }, 3000)
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
      }, 3000)
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
      }, 3000)
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
      }, 3000)
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
      }, 3000)
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
      }, 3000)
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
      }, 3000)
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
      }, 3000)
    })
  },

  /**
   * 设置邮箱
   * @param email
   * @param vcode
   * @returns {Promise}
   */
  setEmail({email, vcode}){
    console.log(email);
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(true)
      }, 3000)
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
      }, 3000)
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
            districe: "成武",
            mobile_phone: "1888888888",
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
            districe: "成武",
            mobile_phone: "1888888888",
            address: "我是二号收货地址",
            zipcode: "274200",
            is_default: 1
          }
        ])
      }, 3000)
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
      }, 3000)
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
      }, 3000)
    })
  },

  addAddress(address){
    console.log(address);
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(true);
      }, 3000)
    })
  }

}
