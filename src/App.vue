<template>
  <div id="app">

    <div class="header"></div>

    <router-view></router-view>

    <div class="content"></div>

    <div class="footer"></div>

  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style lang="scss">

@import "~bulma";

.header {
  height: 250px;
  background: #babcbc;
}

.content {
  height: 1500px;
}

.footer {
  height: 50px;
  background: #cfcfcf;
  position: fixed;
}

</style>
