<template>
  <Row class="container">
    <Col span="3">
    <img class='img' :src="img" alt="image">
    </Col>
    <Col span="7" style="padding: 10px;">
    {{title}}
    </Col>
    <Col span="10" style="padding: 10px;">
    <p>{{shippingTitle}}</p>
    <p class="detail">{{shippingTime}} <strong @click="detail(shippingId)">查看物流明细</strong></p>
    </Col>
    <Col span="4" style="text-align: center">
    <Button type="success" @click="confirmReceive">确认收货</Button>
    </Col>
    <!--查看物流模态框-->
    <Modal
      v-model="modalShipping.display"
      title="物流信息详情"
      width="300"
    >
      <Spin size="large" fix v-if="modalShipping.load"></Spin> <!-- 加载动画-->
      <Timeline v-if="!modalShipping.load">
        <Timeline-item v-for="v in shipping" :key="v.id">
          <p class="time">{{v.time}}</p>
          <p class="content">{{v.content}}</p>
        </Timeline-item>
      </Timeline>
      <div slot="footer">
      </div>
    </Modal>
  </Row>
</template>
<script>
  export default{
    data(){
      return {
        modalShipping: {
          display: false,
          load: true
        },
        confirm: {
          display: false
        }
      }
    },
    props: {
      shippingId: {
        type: Number
      },
      img: {
        type: String
      },
      title: {
        type: String
      },
      shippingTitle: {
        type: String
      },
      shippingTime: {
        type: String
      }
    },
    computed: {
      shipping(){
        return this.$store.state.goods.shippingDetailMap.get(this.shippingId);
      }
    },
    methods: {
      confirmReceive(){ //确认收货
        this.$Modal.confirm({
          title: '确认收货',
          content: '<p>确定收到货了吗？</p>',
          loading: true,
          onOk: () => {
            this.$store.dispatch("confirmReceive", {shippingId: this.shippingId}).then(() => {
              this.$Modal.remove();
              this.$Message.info('确认收货成功');
            }).catch((err) => {
              this.$Modal.remove();
              this.$Notice.error({
                title: '错误',
                desc: err
              });
            })
          }
        });
      },
      detail(shippingId){
        this.modalShipping.display = true;
        if (this.$store.state.goods.shippingDetailMap.has(shippingId)) {
          this.modalShipping.load = false;
        } else {
          this.$store.dispatch('initShippingDetail', {shippingId}).then(() => {
            this.modalShipping.load = false;
          }).catch((err) => {
            this.$Notice.error({
              title: '错误',
              desc: err
            });
          })
        }
      }
    }
  }
</script>

<style scoped>
  .container {
    font-size: 12px;
  }

  .img {
    width: 80px;
    height: 80px;
  }

  .detail {
    margin-top: 30px;
  }

  .detail strong {
    cursor: pointer;
  }
</style>
