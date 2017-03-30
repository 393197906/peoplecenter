<template>
  <div>
    <Row class="title">
      <Col span="6">
      订单编号:{{order.order_sn}}</Col>
      <Col span="18">
      成交时间:{{order.add_time}}</Col>
    </Row>
    <Row class="border" :class="bc[order.pay_status]">
      <Col span="12">
      <Row v-for="(v,k) in order.goods" :key="k">
        <Col span="5">
        <img class='img' :src="v.goods_fristimage" alt="image">
        </Col>
        <Col span="11" class="content">
        <p><strong>{{v.goods_name}}</strong></p>
        <p class="line2">类型:{{v.goods_tag}}</p>
        </Col>
        <Col span="5">
        {{v.goods_amount}}</Col>
        <Col span="3">
        x{{v.goods_num}}</Col>
      </Row>
      </Col>
      <Col span="6">
      <strong>合计:{{order.order_amount}}</strong> <!--含运费10.00--></Col>
      <!--订单状态判断-->
      <div v-if="order.pay_status === 0 ">
        <Col span="3">
        等待买家付款<br><br><span>取消订单</span></Col>
        <Col span="3">
        <Button type="warning">立刻付款</Button>
        </Col>
      </div>

      <div v-if="order.pay_status === 1 ">
        <Col span="3">
        买家已付款<br><br>未发货<br><br><span>订单详情</span></Col>
        <Col span="3">
        <Button type="error">提醒发货</Button>
        </Col>
      </div>

      <div v-if="order.pay_status === 2 ">
        <Col span="3">
        商家已发货<br><br><span>查看物流</span><br><br><span>订单详情</span></Col>
        <Col span="3">
        <Button type="success">确认收货</Button>
        </Col>
      </div>

      <div v-if="order.pay_status === 3 ">
        <Col span="3">
        已确认收货<br><br><span>查看物流</span><br><br><span>订单详情</span></Col>
        <Col span="3">
        <Button @click="commentOrder">评价商品</Button>
        </Col>
      </div>

      <div v-if="order.pay_status === 4 ">
        <Col span="3">
        交易成功<br><br><span>查看物流</span></Col>
        <Col span="3">
        <Button type="dashed" @click="deleteOrder">删除订单</Button>
        </Col>
      </div>
    </Row>
  </div>
</template>
<script>

  import service from '@/service/service';
  export default {
    props: {
      order: {}
    },
    methods: {
      /**
       * 删除订单
       */
      deleteOrder(){
        console.log(this.order.ID);
        this.$Modal.confirm({
          title: '确认删除',
          content: '确定要删除此订单吗？',
          loading: true,
          onOk: () => {
            service.deleteOrder(this.order.ID).then(() => {
              this.$store.commit("REMOVE_ONE_ORDER", {ID: this.order.ID}); //state 移除订单
              this.$Modal.remove();
              this.doSuccess("订单删除成功");
            }).catch(this.doError);
          }
        });
      },
      /**
       * 评价订单
       */
      commentOrder(){
        this.comment.display = true;
      }
    },
    data(){
      return {
        bc: ['bc0', 'bc1', 'bc2', 'bc3', 'bc4'],
        comment: {
          display: false
        }
      }
    }
  }
</script>
<style scoped>

  .line2 {
    font-size: 12px;
    margin-top: 3px;
    color: #9C9C9C;
  }

  .content {
    padding: 0 10px;
    line-height: 120%;
  }

  .img {
    border-radius: 2px;
    max-width: 80px;
    max-height: 80px;
    /*border:1px solid #fb9f33;*/
  }

  .border {
    border: 1px solid #d7dde4;
    border-top: 2px solid #d7dde4;
    padding: 15px;
  }

  .title {
    padding: 20px 2px;
  }

  .bc0 {
    border-top-color: rgba(255, 153, 0, 0.3);
  }

  .bc1 {
    border-top-color: rgba(255, 51, 0, 0.3);
  }

  .bc2 {
    border-top-color: rgba(0, 204, 102, 0.3);
  }

  .bc3 {
    border-top-color: rgba(215, 221, 228, 0.4);;
  }

  .bc4 {
    border-style: dashed;
  }

</style>
