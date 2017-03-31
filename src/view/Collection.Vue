<template>
  <div class="container">
    <SubTitle word1="我的收藏" word2="My Collection"></SubTitle>
    <Spin size="large" fix v-if="loading"></Spin>
    <Row v-if="!loading">
      <Col span="6" class="card-container"  v-for="v in collection" :key='v.goodsId'>
      <CollCard
        :goodsId="v.goodsId"
        :goodsImg="v.goodsImg"
        :goodsTitle="v.goodsTitle"
        :goodsPrice="v.goodsPrice"
        :goodsNum="v.goodsNum" :height="220"></CollCard>
      </Col>
    </Row>
    <div class="page-container">
      <div>
        <Page :total="100"></Page>
      </div>
    </div>
  </div>
</template>
<script>
  import SubTitle from '@/components/SubTitle';
  import CollCard from '@/components/order/CollCard';
  export default{
    components: {SubTitle, CollCard},
    data(){
      return {
        loading: true
      }
    },
    computed:{
      collection(){
          return this.$store.state.userInfo.collection;
      }
    },
    created(){
      if (this.$store.state.userInfo.collection) {
        this.loading = false;
      } else {
        this.$store.dispatch('initCollection').then(() => {
          this.loading = false;
        }).catch(this.doError)
      }
    }

  }
</script>
<style scoped>
  .card-container {
    padding: 5px;
  }

  .page-container {
    margin-top: 20px;
  }

  .page-container div {
    float: right;
  }
</style>
