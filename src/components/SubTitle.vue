<template>
  <div class="content">
    <strong>{{word1}}</strong> / {{word2}}
  </div>
</template>

<script>
  export default {
    props: ['word1', 'word2']
  }
</script>

<style scoped>
  .content {
    padding: 20px 10px;
    border-bottom: 1px solid #eeeeee;
  }
</style>
