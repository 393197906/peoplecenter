<template>
  <div class="container">
    <SubTitle word1="我的收藏" word2="My Collection"></SubTitle>
    <Row>
      <Col span="6" class="card-container">
      <CollCard></CollCard>
      </Col>
      <Col span="6" class="card-container">
      <CollCard></CollCard>
      </Col>
      <Col span="6" class="card-container">
      <CollCard></CollCard>
      </Col>
      <Col span="6" class="card-container">
      <CollCard></CollCard>
      </Col>
      <Col span="6" class="card-container">
      <CollCard></CollCard>
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
      components:{SubTitle,CollCard}
  }
</script>
<style scoped>
.card-container{
  padding: 5px;
}
.page-container{
  margin-top: 20px;
}
.page-container div{
  float: right;
}
</style>
