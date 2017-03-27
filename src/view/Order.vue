<template>
  <div>
    <SubTitle word1="订单管理" word2="Order"></SubTitle>
    <div class="content">
      <Tabs :value="tab">
        <Tab-pane label="所有订单" name="all">
          <GoodsTitle></GoodsTitle>
          <GoodsCard></GoodsCard>
          <GoodsCard></GoodsCard>
          <GoodsCard></GoodsCard>
          <GoodsCard></GoodsCard>
          <GoodsCard></GoodsCard>
          <div class="page-container">
            <div>
            <Page :total="100"></Page>
            </div>
          </div>
        </Tab-pane>
        <Tab-pane label="待付款" name="waitPay">
          <GoodsTitle></GoodsTitle>
        </Tab-pane>
        <Tab-pane label="待发货" name="waitSend">
          <GoodsTitle></GoodsTitle>
        </Tab-pane>
        <Tab-pane label="待收货" name="waitReceive">
          <GoodsTitle></GoodsTitle>
        </Tab-pane>
        <Tab-pane label="待评价" name="waitComment">
          <GoodsTitle></GoodsTitle>
        </Tab-pane>
        <Tab-pane label="退换货" name="returnGoods">
          <GoodsTitle></GoodsTitle>
        </Tab-pane>
      </Tabs>
    </div>
  </div>
</template>
<style scoped>
  .page-container{
    margin-top: 20px;
  }
  .page-container div{
    float: right;
  }
  .content {
    padding: 20px;
  }
</style>

<script>
  import SubTitle from '@/components/SubTitle'
  import GoodsTitle from '@/components/order/GoodsTitle'
  import GoodsCard from '@/components/order/GoodsCard'
  export default {
    components: {SubTitle, GoodsTitle,GoodsCard},
    props:{
        tab:{
          type: String,
          default: 'all'
        }
    }
  }

</script>
