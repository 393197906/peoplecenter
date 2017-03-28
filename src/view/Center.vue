<template>
  <div class="container">
    <div class="top">
      <SubTitle word1="个人中心" word2="Personal Center"></SubTitle>
    </div>
    <div class='left'>
      <UserInfo></UserInfo>
      <Card style="margin-top: 20px;">
        <p slot="title">我的订单</p>
        <Row>
          <Col span="5" class="icon-container">
          <div @click="viewModal('waitPay')">
            <p>
              <Icon type="ios-refresh-empty"></Icon>
            </p>
            <p><strong>代付款</strong></p>
          </div>
          </Col>
          <Col span="5" class="icon-container">
          <div @click="viewModal('waitSend')">
            <p>
              <Icon type="ios-upload-outline"></Icon>
            </p>
            <p><strong>代发货</strong></p>
          </div>
          </Col>
          <Col span="5" class="icon-container">
          <div @click="viewModal('waitReceive')">
            <p>
              <Icon type="ios-download-outline"></Icon>
            </p>
            <p><strong>代收货</strong></p>
          </div>
          </Col>
          <Col span="5" class="icon-container">
          <div @click="viewModal('waitComment')">
            <p>
              <Icon type="compose"></Icon>
            </p>
            <p><strong>代评价</strong></p>
          </div>
          </Col>
          <Col span="4" class="icon-container">
          <div @click="viewModal('returnGoods')">
            <p>
              <Icon type="heart-broken"></Icon>
            </p>
            <p><strong>退换货</strong></p>
          </div>
          </Col>
        </Row>
      </Card>
      <Card style="margin-top: 10px;">
        <p slot="title">我的物流</p>
        <Spin size="large" fix v-if="load.shipping"></Spin> <!-- 加载动画-->
        <div v-if="!load.shipping">
          <ShippingCard
            v-for="v in userInfo.shipping"
            :key='v.shippingId'
            :shippingId="v.shippingId"
            :img="v.goodsImg"
            :title="v.goodsTitle"
            :shippingTitle="v.shippingTitle"
            :shippingTime="v.shippingTime"></ShippingCard>
        </div>
      </Card>
      <Card style="margin-top: 10px;">
        <p slot="title">我的购物车</p>
        <Button slot="extra" type="primary" size="small">去结算</Button>
        <Spin size="large" fix v-if="load.shopcar"></Spin> <!-- 加载动画-->
        <Row v-if="!load.shopcar">
          <Col span="6" class="coll-container" v-for="v in userInfo.shopcar" :key='v.goodsId'>
          <CollCard
            :goodsId="v.goodsId"
            :goodsImg="v.goodsImg"
            :goodsTitle="v.goodsTitle"
            :goodsPrice="v.goodsPrice"
            :goodsNum="v.goodsNum"></CollCard>
          </Col>
        </Row>
      </Card>
      <Card style="margin-top: 10px;">
        <p slot="title">我的收藏</p>
        <Button slot="extra" type="error" size="small" @click='viewModal("collection")'>查看更多</Button>
        <Spin size="large" fix v-if="load.collection"></Spin> <!-- 加载动画-->
        <Row v-if="!load.collection">
          <Col span="6" class="coll-container" v-for="v in userInfo.collection" :key='v.goodsId'>
          <CollCard
            :goodsId="v.goodsId"
            :goodsImg="v.goodsImg"
            :goodsTitle="v.goodsTitle"
            :goodsPrice="v.goodsPrice"
            :goodsNum="v.goodsNum"></CollCard>
          </Col>

        </Row>
      </Card>
    </div>
    <div class="right">
      <Card>
        <p slot="title">热卖商品</p>
        <Spin size="large" fix v-if="load.hot"></Spin> <!-- 加载动画-->
        <Carousel autoplay :autoplay-speed="3000" v-if="!load.hot">
          <Carousel-item v-for="v in goods.hot" :key="v.goodsId">
            <div class="demo-carousel">
              <img :src="v.goodsImg" :alt="v.goodsTitle" style="min-width:100%;">
            </div>
          </Carousel-item>
        </Carousel>
      </Card>
      <Card style="margin-top: 20px;">
        <p slot="title">成长历程</p>
        <Spin size="large" fix v-if="load.growup"></Spin> <!-- 加载动画-->
        <Timeline v-if="!load.growup">
          <Timeline-item v-for="v in userInfo.growup" :key="v.id">
            <p class="time">{{v.time}}</p>
            <p class="content">{{v.content}}</p>
          </Timeline-item>
        </Timeline>
      </Card>
    </div>
    <!--modal 路由-->
    <Modal
      v-model="modal.display"
      :title="modal.title"
      :styles="{top: '20px'}"
      @on-ok="ok"
      @on-cancel="cancel" :width="modal.width">
      <router-view :tab="tab"></router-view>
      <p slot="header" style="color:#fb9f33;text-align:center">
        <span>{{modal.title}}</span>
      </p>
      <div slot="footer">
      </div>
    </Modal>
  </div>
</template>
<script>
  import ShippingCard from '@/components/order/ShippingCard'
  import CollCard from '@/components/order/CollCard'
  import UserInfo from '@/components/UserInfo'
  import SubTitle from '@/components/SubTitle'
  export default {
    components: {ShippingCard, UserInfo, SubTitle, CollCard},
    created(){
      const label = ['Shipping', 'Shopcar', 'Collection','Growup'];
      for (let index of label) {
        let lab = index.toLowerCase();
        if (this.$store.state.userInfo[lab]) {
          this.load[lab] = false;
        } else {
          this.$store.dispatch(`init${index}`).then(() => {
            this.load[lab] = false;
          }).catch(err => {
            this.$Notice.error({
              title: '错误',
              desc: err
            });
          });
        }
      }
      //热卖商品
      if (this.$store.state.goods.hot) {
        this.load.hot = false;
      } else {
        this.$store.dispatch('initHot').then(() => {
          this.load.hot = false;
        }).catch(err => {
          this.$Notice.error({
            title: '错误',
            desc: err
          });
        });
      }
    },
    computed: {
      userInfo(){
        return this.$store.state.userInfo;
      },
      goods(){
        return this.$store.state.goods;
      }
    },
    data(){
      return {
        load: { //加载动画
          shipping: true,
          shopcar: true,
          collection: true,
          growup: true,
          hot: true
        },
        modal: { //模态框路由
          title: ' ',
          display: false,
          width: 520
        },
        tab: 'all'
      }
    },
    methods: {
      viewModal(label){ //路由切换
        const parentPath = '/Center';
        this.modal.display = true;
        this.modal.width = 900;
        switch (label) {
          case 'waitPay':
            this.modal.title = "待付款";
            break;
          case 'waitSend':
            this.modal.title = "待发货";
            break;
          case 'waitReceive':
            this.modal.title = "待收货";
            break;
          case 'waitComment':
            this.modal.title = "待评价";
            break;
          case 'returnGoods':
            this.modal.title = "退换货";
            break;
          case 'collection':
            this.modal.title = "我的收藏";
            break;
        }
        this.tab = label;
        this.$router.push(`${parentPath}/${label}`); //路由跳转
      },
      ok(){
//        alert('ok');
      },
      cancel(){
//        alert('cancle');
      }
    }
  }
</script>
<style scoped>
  .container:after {
    content: ".";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
  }

  .top {
    margin-bottom: 10px;
  }

  .left {
    width: 70%;
    float: left;

  }

  .right {
    width: 28%;
    float: right;
  }

  .coll-container {
    padding: 3px;
  }

  .icon-container {
    text-align: center;
  }

  .icon-container:hover {
    color: #fb9f33;
  }

  .icon-container p:first-child {
    font-size: 40px;
  }

  .icon-container p:last-child {
    margin-top: 5px;
  }
</style>
