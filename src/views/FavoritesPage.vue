<template>
  <FavoritesPlaceholder v-if="favoritesArray.length === 0" />
  <InfiniteScroll dog-type="favorites">
    <DogCard
      v-for="(dog, index) in renderedArray"
      class="dog-card"
      :key="index"
      :dogObject="dog"
      :index="index"
      :favorite-only="true"
  /></InfiniteScroll>
</template>

<script>
import InfiniteScroll from "../components/InfiniteScroll";
import DogCard from "../components/DogCard/DogCard";
import FavoritesPlaceholder from "../components/Layout/FavoritesPlaceholder";
import { useStore } from "vuex";
import { computed, ref } from "vue";

export default {
  components: { InfiniteScroll, DogCard, FavoritesPlaceholder },
  setup() {
    const store = useStore();
    store.commit("renderFavorites");
    const removeCard = ref(true);
    return {
      renderedArray: computed(() => store.state.renderedArray),
      favoritesArray: computed(() => store.state.favoritesArray),

      removeCard
    };
  }
};
</script>

<style lang="scss" scoped>
.hidden {
  display: none;
}
</style>
