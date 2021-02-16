<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/breed-selector">Breed Selector</router-link> |
    <router-link to="/favorites">
      Favorites❤️({{ getFavoritesCount }})
    </router-link>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  setup() {
    const store = useStore();
    return {
      getFavoritesCount: computed(() => store.state.favoritesArray.length)
    };
  }
};
</script>

<style lang="scss" scoped></style>
