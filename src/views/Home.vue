<template>
  <InfiniteScroll @loadMore="loadMoreDogs">
    <DogCard
      v-for="(dog, index) in renderedDogsArray"
      class="dog-card"
      :key="index"
      :dogObject="dog"
      :index="index"
    />
  </InfiniteScroll>
</template>

<script>
import DogCard from "../components/DogCard/DogCard";
import InfiniteScroll from "../components/InfiniteScroll";
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  name: "Home",
  components: { InfiniteScroll, DogCard },
  setup() {
    const store = useStore();
    store.commit("clearRenderedArray");
    store.dispatch("fetchDogs", "random");

    const loadMoreDogs = () => {
      store.dispatch("fetchDogs", "random");
    };

    return {
      renderedDogsArray: computed(() => store.state.renderedArray),
      loadMoreDogs
    };
  }
};
</script>

<style lang="scss" scoped></style>
