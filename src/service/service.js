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
          img: "http://tpl.amazeui.org/template/10/shop/one/images/getAvatar.do.jpg"
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
      }, 9000)
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


  confirmReceive(shippingId){
        return new Promise((res,rej)=>{
          setTimeout(()=>{
            res(true)
          },10)
        })
  }

}
