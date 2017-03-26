<template>
  <div>
    <SubTitle word1="订单管理" word2="Order"></SubTitle>
    <div class="content">
      <Tabs>
        <Tab-pane label="所有订单" name="all">
          <GoodsTitle></GoodsTitle>
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
        <Tab-pane label="待发货" name="waitSendGoods">
          <GoodsTitle></GoodsTitle>
        </Tab-pane>
        <Tab-pane label="待收货" name="waitReciveGoods">
          <GoodsTitle></GoodsTitle>
        </Tab-pane>
        <Tab-pane label="待评价" name="waitComment">
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
  }

</script>
