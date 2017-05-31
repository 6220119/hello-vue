<template>
  <div id="app">

    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>

  </div>
</template>

<script>
  export default {
    name: 'app',
  };
</script>

<style lang="scss">

  @import "~bulma";

  .fade-enter-active, .fade-leave-active {
    transition: opacity .2s;
  }

  .fade-enter, .fade-leave-active {
    opacity: 0;
  }

</style>
