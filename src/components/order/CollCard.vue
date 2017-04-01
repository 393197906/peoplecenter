<template>
  <div class="container" @mouseover="hover=true" @mouseleave="hover=false">
    <div class="img-container" :style="{height:`${height}px`}">
      <img :src="goodsImg" alt="goods">
    </div>
    <div class="content">
      <p>¥{{goodsPrice}} <span style="color:#fb9f33"> * {{goodsNum}}</span></p>
      <p>{{goodsTitle}}</p>
      <row class="action" :class="{adiplay:hover}">
        <Col span="11">
        <Button type="error" size="small" long @click="addShopcar">购物车</Button>
        </Col>
        <Col span="2">
        &nbsp;
        </Col>
        <Col span="11">
        <Button type="primary" size="small" long @click="removeColl">移出收藏</Button>
        </Col>
      </row>
    </div>
  </div>
</template>
<script>
  export  default{
    methods: {
      /**
       * 移出收藏夹
       */
      removeColl(){
        this.$Modal.confirm({
          title: '确认移除',
          content: '确定要移出收藏夹吗？',
          loading: true,
          onOk: () => {
            this.$store.dispatch('removeCollection', {goodsId: this.goodsId}).then(() => {
              this.$Modal.remove();
              this.doSuccess("移出成功");
            }).catch(this.doError);
          }
        })
      },
      /**
       * 加入购物车
       */
      addShopcar(){
        this.$store.dispatch('addShopcar', {goodsId: this.goodsId}).then(() => {
          this.$Modal.remove();
          this.doSuccess("加入购物车成功");
        }).catch(this.doError);
      }
    },
    props: {
      goodsId: {
        type: Number
      },
      goodsImg: {
        type: String
      },
      goodsTitle: {
        type: String
      }
      , goodsPrice: {
        type: Number
      }
      , goodsNum: {
        type: Number
      },
      height: {
        type: Number,
        default: 150
      }
    },
    data(){
      return {
        hover: false
      }
    }

  }
</script>
<style scoped>
  .container {
    border: 1px solid #e3e8ee;
    border-radius: 2px;
  }

  .container:hover {
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
  }

  .img-container {
    height: 160px;
  }

  .img-container img {
    width: 100%;
    height: 100%;
  }

  .content {
    padding: 10px;
    font-size: 12px;
  }

  .content > * {
    margin-top: 10px;
  }

  .content p:first-child {
    color: #f40;
  }

  .content p:last-child {
    margin-top: 3px;
    line-height: 18px;
  }

  .action {
    text-align: center;
    display: none;
  }

  .adiplay {
    display: block;
  }


</style>
