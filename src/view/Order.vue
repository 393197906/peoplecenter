<template>
  <div>
    <SubTitle word1="订单管理" word2="Order"></SubTitle>
    <div class="content">
      <Tabs :value="tab">
        <Tab-pane label="所有订单" name="all">
          <OrderList></OrderList>
        </Tab-pane>
        <Tab-pane label="待付款" name="waitPay">
          <OrderList :orderType="0"></OrderList>
        </Tab-pane>
        <Tab-pane label="待发货" name="waitSend">
          <OrderList :orderType="1"></OrderList>
        </Tab-pane>
        <Tab-pane label="待收货" name="waitReceive">
          <OrderList :orderType="2"></OrderList>
        </Tab-pane>
        <Tab-pane label="待评价" name="waitComment">
          <OrderList :orderType="3"></OrderList>
        </Tab-pane>
        <!--<Tab-pane label="退换货" name="returnGoods">-->
        <!--</Tab-pane>-->
      </Tabs>
    </div>
  </div>
</template>
<style scoped>
  .content {
    padding: 20px;
    position: relative;
  }
</style>

<script>
  import SubTitle from '@/components/SubTitle'
  import OrderList from '@/components/order/OrderList'
  export default {
    components: {SubTitle, OrderList},
    props: {
      tab: {
        type: String,
        default: 'all'
      }
    }
  }

</script>
