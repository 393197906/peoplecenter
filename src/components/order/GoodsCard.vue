<template>
  <div class="animated ">
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
        等待买家付款<br><br><span class="label" @click="cancleOrder">取消订单</span></Col>
        <Col span="3">
        <Button type="warning">立刻付款</Button>
        </Col>
      </div>

      <div v-if="order.pay_status === 1 ">
        <Col span="3">
        买家已付款<br><br>未发货<br><br><span class="label">订单详情</span></Col>
        <Col span="3">
        <Button type="error" @click="callSend">提醒发货</Button>
        </Col>
      </div>

      <div v-if="order.pay_status === 2 ">
        <Col span="3">
        商家已发货<br><br><span class="label" @click='openShipping'>{{this.shipping.display?'隐藏物流':'查看物流'}}</span><br><br><span class="label">订单详情</span></Col>
        <Col span="3">
        <Button type="success" @click="confirmReceive">确认收货</Button>
        </Col>
      </div>

      <div v-if="order.pay_status === 3 ">
        <Col span="3">
        已确认收货<br><br><span class="label" @click='openShipping'>{{this.shipping.display?'隐藏物流':'查看物流'}}</span><br><br><span class="label">订单详情</span></Col>
        <Col span="3">
        <Button @click="commentOrder">评价商品</Button>
        </Col>
      </div>

      <div v-if="order.pay_status === 4 ">
        <Col span="3">
        交易成功<br><br><span class="label" @click='openShipping'>{{this.shipping.display?'隐藏物流':'查看物流'}}</span></Col>
        <Col span="3">
        <Button type="dashed" @click="deleteOrder">删除订单</Button>
        </Col>
      </div>
    </Row>
    <!--评价商品-->
    <div class="comment animated slideInLeft" style="margin-top: 10px;"
         v-if="order.pay_status === 3 && comment.display">
      <Form ref="formValidate" :model="comment" :rules="comment.rule" :label-width="60">
        <Form-item label="评分" prop="star">
          <Rate :show-text="true" v-model="comment.star"></Rate>
        </Form-item>
        <Form-item label="标签" prop="tag">
          <Checkbox-group v-model="comment.tag">
            <Checkbox label="物流速度快"></Checkbox>
            <Checkbox label="服务好"></Checkbox>
            <Checkbox label="适合我"></Checkbox>
            <Checkbox label="包装好"></Checkbox>
            <Checkbox label="是正品"></Checkbox>
          </Checkbox-group>
        </Form-item>
        <Form-item label="评价" prop="desc">
          <Input v-model="comment.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入评语"></Input>
        </Form-item>
        <Form-item style="margin:0">
          <Button type="primary" @click="commentSubmit('formValidate')">提交</Button>
          <Button type="ghost" @click="comment.display = false" style="margin-left: 8px;">取消</Button>
        </Form-item>
      </Form>
    </div>
    <div class="shipping animated fadeIn" style="margin-top: 10px;"
         v-if="(order.pay_status === 2 || order.pay_status === 3 || order.pay_status === 4) && shipping.display">
      <Spin fix size="large" v-if="shipping.loading"></Spin>
      <Timeline v-if="!shipping.loading">
        <Timeline-item v-for="v in shipping.data" :key="v.id">
          <p class="time">{{v.time}}</p>
          <p class="content">{{v.content}}</p>
        </Timeline-item>
      </Timeline>
    </div>
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
       * 提醒发货
       */
      callSend(){
        this.$Modal.confirm({
          title: '提醒发货',
          content: '商家已经努力在为您发货了，确定要提醒吗？',
          loading: true,
          onOk: () => {
            setTimeout(() => {
              this.$Modal.remove();
              this.doSuccess("提醒发货成功");
            }, 1000)
          }
        });
      },
      /**
       *确认收货
       */
      confirmReceive(){
        this.$Modal.confirm({
          title: '确认收货',
          content: '确定收到货了吗？',
          loading: true,
          onOk: () => {
            this.$store.dispatch('confirmReceiveOrder', {ID: this.order.ID}).then(() => {
              this.$Modal.remove();
              this.doSuccess("确认收货成功");
            }).catch(this.doError);
          }
        });
      },
      /**
       * 删除订单
       */
      deleteOrder(){
        this.$Modal.confirm({
          title: '确认删除',
          content: '确定要删除此订单吗？',
          loading: true,
          onOk: () => {
            service.deleteOrder(this.order.ID).then(() => {
              this.$store.commit('REMOVE_ONE_ORDER', {ID: this.order.ID}); //state 移除订单
              this.$Modal.remove();
              this.doSuccess("订单删除成功");
            }).catch(this.doError);
          }
        });
      },
      /**
       * 取消订单
       */
      cancleOrder(){
        this.$Modal.confirm({
          title: '确认取消订单',
          content: '确定要取消此订单吗？',
          loading: true,
          onOk: () => {
            service.deleteOrder(this.order.ID).then(() => {
              this.$store.commit('CANCLE_ONE_ORDER', {ID: this.order.ID}); //state 移除订单
              this.$Modal.remove();
              this.doSuccess("订单取消成功");
            }).catch(this.doError);
          }
        });
      },
      /**
       * 评价订单显示切换
       */
      commentOrder(){
        this.comment.display = !this.comment.display;
      },
      /**
       * 评价订单提交
       * @param name
       */
      commentSubmit(name){
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$store.dispatch('commentOrder', {
              ID: this.order.ID,
              desc: this.comment.desc,
              tag: this.comment.tag,
              star: this.comment.star
            }).then(() => {
              this.doSuccess('订单评价成功');
            }).catch(this.doError);
          } else {
            this.$Message.error('评论表单验证失败!');
          }
        })
      },
      /**
       * 查看物流
       */
      openShipping(){
        this.shipping.display = !this.shipping.display;
        if (this.$store.state.goods.shippingDetailMap.has(this.order.shipping_num)) {
          this.shipping.data = this.$store.state.goods.shippingDetailMap.get(this.order.shipping_num);
          this.shipping.loading = false;
        } else {
          this.$store.dispatch('initShippingDetail', {shippingId:this.order.shipping_num}).then(() => { //TODO
            this.shipping.loading = false;
            this.shipping.data = this.$store.state.goods.shippingDetailMap.get(this.order.shipping_num);
          }).catch(this.doError)
        }
      }
    },
    data(){
      return {
        comment: {
          display: false,
          star: 5,
          tag: [],
          desc: '',
          rule: {
            star: [
              {required: true, message: '请评分'},
            ],
            tag: [
              {required: true, type: 'array', min: 1, message: '至少选择一个标签', trigger: 'change'},
            ],
            desc: [
              {required: true, message: '请输入评语', trigger: 'blur'},
              {type: 'string', min: 10, message: '评价不能少于10字', trigger: 'blur'},
              {max: 50, message: '介绍不能多于50字', trigger: 'blur'}
            ]
          }
        },
        shipping: {
          display: false,
          loading: true,
          data: []  //物流数据
        },
        bc: ['bc0', 'bc1', 'bc2', 'bc3', 'bc4'],
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
    padding: 20px 15px;
  }

  .comment {
    border: 1px solid rgba(255, 153, 0, 0.5);
    padding: 15px;
    border-radius: 30px;
  }

  .shipping {
    padding: 15px;
    position: relative;
  }

  .label {
    cursor: pointer;
  }

  .label:hover {
    text-decoration: underline;
    color: rgba(255, 153, 0, 1);
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
