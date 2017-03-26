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
          <p>
            <Icon type="ios-refresh-empty"></Icon>
          </p>
          <p>代付款</p>
          </Col>
          <Col span="5" class="icon-container">
          <p>
            <Icon type="ios-upload-outline"></Icon>
          </p>
          <p>代发货</p>
          </Col>
          <Col span="5" class="icon-container">
          <p>
            <Icon type="ios-download-outline"></Icon>
          </p>
          <p>代收货</p>
          </Col>
          <Col span="5" class="icon-container">
          <p>
            <Icon type="compose"></Icon>
          </p>
          <p>代评价</p>
          </Col>
          <Col span="4" class="icon-container">
          <p>
            <Icon type="heart-broken"></Icon>
          </p>
          <p>退换货</p>
          </Col>
        </Row>
      </Card>
      <Card style="margin-top: 10px;">
        <p slot="title">我的物流</p>
        <ShippingCard></ShippingCard>
        <ShippingCard></ShippingCard>
      </Card>
      <Card style="margin-top: 10px;">
        <p slot="title">我的购物车</p>
        <Button slot="extra" type="primary" size="small">去结算</Button>
        <Row>
          <Col span="6" class="coll-container">
          <CollCard></CollCard>
          </Col>
          <Col span="6" class="coll-container">
          <CollCard></CollCard>
          </Col>
          <Col span="6" class="coll-container">
          <CollCard></CollCard>
          </Col>
          <Col span="6" class="coll-container">
          <CollCard></CollCard>
          </Col>
          <Col span="6" class="coll-container">
          <CollCard></CollCard>
          </Col>
        </Row>
      </Card>
      <Card style="margin-top: 10px;">
        <p slot="title">我的收藏</p>
        <Row>
          <Col span="6" class="coll-container">
          <CollCard></CollCard>
          </Col>
          <Col span="6" class="coll-container">
          <CollCard></CollCard>
          </Col>
          <Col span="6" class="coll-container">
          <CollCard></CollCard>
          </Col>
          <Col span="6" class="coll-container">
          <CollCard></CollCard>
          </Col>
          <Col span="6" class="coll-container">
          <CollCard></CollCard>
          </Col>
        </Row>
      </Card>
    </div>
    <div class="right">
      <Card>
        <p slot="title">成长历程</p>
        <Timeline>
          <Timeline-item>
            <p class="time">1976年</p>
            <p class="content">Apple I 问世</p>
          </Timeline-item>
          <Timeline-item>
            <p class="time">1984年</p>
            <p class="content">发布 Macintosh</p>
          </Timeline-item>
          <Timeline-item>
            <p class="time">2007年</p>
            <p class="content">发布 iPhone</p>
          </Timeline-item>
          <Timeline-item>
            <p class="time">2010年</p>
            <p class="content">发布 iPad</p>
          </Timeline-item>
          <Timeline-item>
            <p class="time">2011年10月5日</p>
            <p class="content">史蒂夫·乔布斯去世</p>
          </Timeline-item>
        </Timeline>
      </Card>
      <Card style="margin-top: 20px;">
        <p slot="title">热卖宝贝</p>
        <Carousel autoplay autoplay-speed="3000" v-model="value2">
          <Carousel-item>
            <div class="demo-carousel">1</div>
          </Carousel-item>
          <Carousel-item>
            <div class="demo-carousel">2</div>
          </Carousel-item>
          <Carousel-item>
            <div class="demo-carousel">3</div>
          </Carousel-item>
          <Carousel-item>
            <div class="demo-carousel">4</div>
          </Carousel-item>
        </Carousel>
      </Card>
    </div>
  </div>
</template>
<script>
  import ShippingCard from '@/components/order/ShippingCard'
  import CollCard from '@/components/order/CollCard'
  import UserInfo from '@/components/UserInfo'
  import SubTitle from '@/components/SubTitle'
  export default {
    components: {ShippingCard, UserInfo, SubTitle, CollCard}
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

  .icon-container p:first-child {
    font-size: 40px;
  }

  .icon-container p:last-child {
    margin-top: 5px;
  }
</style>
