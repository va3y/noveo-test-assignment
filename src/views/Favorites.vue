<template>
  <div>
    <InfiniteScroll dog-type="favorites">
      <DogCard
        v-for="(dog, index) in favouriteDogsArray"
        class="dog-card"
        @toggle-like="handleLikeClick(index)"
        :key="index"
        :dogObject="dog"
        :index="index"
    /></InfiniteScroll>
  </div>
</template>

<script>
import InfiniteScroll from "../components/InfiniteScroll";
import DogCard from "../components/DogCard/DogCard";
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  components: { InfiniteScroll, DogCard },
  setup() {
    const store = useStore();
    store.commit("renderFavorites");
    const handleLikeClick = index => {
      store.commit("removeFromFavourites", index);
    };
    return {
      favouriteDogsArray: computed(() => store.state.renderedArray),
      handleLikeClick
    };
  }
};
</script>

<style lang="scss" scoped></style>
