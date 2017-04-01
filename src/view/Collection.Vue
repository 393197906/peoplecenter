<template>
  <div>
    <SubTitle word1="我的收藏" word2="My Collection"></SubTitle>
    <div class="container">
      <Spin size="large" fix v-if="loading"></Spin>
      <Row v-if="!loading">
        <Col span="6" class="card-container" v-for="v in collection" :key='v.goodsId'>
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
          <Page :total="collectionCount" :page-size="this.$const.pageSize" @on-change="page"></Page>
        </div>
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
    methods: {
      page(pnum){
        console.log(pnum);
        this.loading = true;
        this.$store.dispatch('initCollection',{pnum,psize:this.$const.pageSize}).then(() => {
          this.loading = false;
        }).catch(this.doError)
      }
    },
    computed: {
      collection(){
        return this.$store.state.userInfo.collection;
      },
      collectionCount(){
        return this.$store.state.userInfo.collectionCount;
      }
    },
    created(){
      if (this.$store.state.userInfo.collection) {
        this.loading = false;
      } else {
        this.$store.dispatch('initCollection',{pnum:1,psize:this.$const.pageSize}).then(() => {
          this.loading = false;
        }).catch(this.doError)
      }
    }

  }
</script>
<style scoped>
  .container{
    position: relative;
  }
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
