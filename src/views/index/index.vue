<template>
  <div class="home">
    <div>
      <router-link to="/">home</router-link>
    </div>

    <div>
      <router-link to="/virtualScroll">virtualScroll [item项高度固定的情况] </router-link>
    </div>

    <div>
      <!-- <router-link to="/demo">demo</router-link> -->
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: "home",
};
</script>
<style scoped>
/* .router-link-exact-active.router-link-active {
  color: tomato;
} */
</style>
