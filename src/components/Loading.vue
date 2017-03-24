<template>
  <Row class="container " :class="{hide:ishide}">
    <Col class="demo-spin-col" span="24" style="border: none">
    <Spin fix class="bg">
      <Icon type="load-c" size=18 class="demo-spin-icon-load"></Icon>
      <div>{{word}}</div>
    </Spin>
    </Col>
  </Row>
</template>

<style scoped>
  .hide {
    display: none;
  }

  .container {
    position: absolute;
    top: -20px;
    left: 0;
    width: 100%;
  }

  .bg {
    background-color: rgba(0, 0, 0, 0);
  }

  .demo-spin-icon-load {
    animation: ani-demo-spin 1s linear infinite;
  }

  @keyframes ani-demo-spin {
    from {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(180deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .demo-spin-col {
    height: 100px;
    position: relative;
    border: 1px solid #eee;
  }
</style>

<script>
  export default {
    props: {
      word: {
        type: String,
        default: "Loading"
      },
      ishide: {
        type: Boolean,
        default: false
      }
    }
  }
</script>
