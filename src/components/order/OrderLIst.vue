<template>
  <div class="container">
    <Spin size="large" fix v-if="toggle"></Spin> <!-- 加载动画-->
    <div v-if="!toggle">
      <GoodsTitle></GoodsTitle>
      <GoodsCard v-for="(v,k) in order" :key="k" :order="v"></GoodsCard>
    </div>
    <div class="page-container">
      <div>
        <Page :total="orderCount" :page-size="pageSize" @on-change="page"></Page>
      </div>
    </div>
  </div>
</template>

<script>
  import GoodsTitle from '@/components/order/GoodsTitle'
  import GoodsCard from '@/components/order/GoodsCard'
  export default {
    props: {
      orderType: {
        default: NaN,
        type: Number
      }
    },
    components: {GoodsTitle, GoodsCard},
    created(){
      if (isNaN(this.orderType)) {
        this.orderName = 'order';
        this.orderCountName = 'orderCount';
      } else {
        this.orderName = 'order' + this.orderType;
        this.orderCountName = 'orderCount' + this.orderType;
      }

      if (this.$store.state.userInfo[this.orderName]) {
        this.toggle = false;
      } else {
        this.$store.dispatch('initOrder', {pnum: 1, psize: this.$const.pageSize, label: this.orderType}).then(() => {
          this.toggle = false;
        }).catch(this.doError);
      }
    },
    data(){
      return {
        orderName: null, //order名称
        orderCountName: null, //orderCount名称
        toggle: true,
        pageSize: this.$const.pageSize
      }
    },
    computed: {
      orderCount(){
        return this.$store.state.userInfo[this.orderCountName];
      },
      order(){
        return this.$store.state.userInfo[this.orderName];
      },

    },
    methods: {
      page(pnum){
        this.toggle = true;
        this.$store.dispatch('initOrder', {pnum, psize: this.$const.pageSize, label: this.orderType}).then(() => {
          this.toggle = false;
        }).catch(this.doError);
      }
    }
  }
</script>

<style scoped>
  .page-container {
    margin-top: 20px;
  }

  .page-container div {
    float: right;
  }

  .container {
    position: relative;
  }
</style>

