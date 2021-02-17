<template>
  <Header />
  <main>
    <router-view />
  </main>
</template>

<script>
import Header from "@/components/Layout/Header.vue";
import { useStore } from "vuex";
export default {
  components: {
    Header
  },
  setup() {
    const store = useStore();
    store.commit("initStore");
  }
};
</script>

<style lang="scss">
@import "@/assets/styles/_reset.scss";
</style>
