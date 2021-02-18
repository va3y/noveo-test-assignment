<template>
  <Header />
  <main>
    <router-view />
  </main>
</template>

<script>
import Header from "@/components/Layout/Header.vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { watch } from "vue";
export default {
  components: {
    Header
  },
  setup() {
    const store = useStore();
    store.commit("initStore");

    const route = useRoute();

    watch(route, to => (document.title = to.meta.title));
  }
};
</script>

<style lang="scss">
@import "@/assets/styles/_reset.scss";
</style>
