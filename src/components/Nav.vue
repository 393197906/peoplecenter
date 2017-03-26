<template>
  <div class="nav-container">
    <div class="nav-box" v-for=" (v1,i1) in item">
      <p v-for="(v2,i2) in v1">
        <strong v-if="!v2.path">{{v2.name}}</strong>
        <a v-else :href="v2.path" :class="{active:isActive==(i1.toString()+i2)}" @click="isActive=(i1.toString()+i2)">{{v2.name}}</a>
      </p>
    </div>
  </div>
</template>
<script>
  export default {
    methods: {
      changeActive(){
      }
    },
    data(){
      return {
        isActive: '',
        item: [
            [
              {
                  name:"个人中心"
              },
              {
                  name:"个人中心",
                  path:'#/Center'
              }
            ]
            ,
          [
            {
              name: "个人信息"
            },
            {
              name: "个人信息",
              path: "#/PersonInfo"
            },
            {
              name: "安全设置",
              path: "#/Safe"
            },
            {
              name: "收货地址",
              path: "#/Address"
            }
          ],
          [
            {
              name: "我的交易"
            },
            {
              name: "订单管理",
              path: '#/Order'
            },
//            {
//              name: "退款售后",
//              path: '#/'
//            }
          ],
//          [
//            {
//              name: "我的资产"
//            },
//            {
//              name: "退款售后",
//              path: '#/'
//            },
//            {
//              name: "账单明细",
//              path: '#/'
//            }
//          ],
          [
            {
              name: "我的小窝"
            },
            {
              name: "收藏",
              path: '#/Collection'
            },
//            {
//              name: "足迹",
//              path: '#/'
//            },
//            {
//              name: "评价",
//              path: '#/'
//            },
//            {
//              name: "信息",
//              path: '#/'
//            }
          ]
        ]
      }
    }
  }
</script>

<style scoped>
  .active {
    color: #fb9f33;
  }

  .nav-box {
    box-sizing: border-box;
    border-bottom: 1px solid #F5F8FA;
    padding: 10px 10px 20px 10px;
  }

  .nav-box p {
    margin-bottom: 12px;
  }

  .nav-title {
    box-sizing: border-box;
    padding: 20px;
    border-bottom: 1px solid #F5F8FA;
  }

  .nav-container {
    background-color: rgb(245, 248, 250);
    width: 15%;
    float: left;
    border-top: 5px solid #FEC4D7;
    text-align: center;
    color: #666;
    border-radius: 2px;
  }
</style>
