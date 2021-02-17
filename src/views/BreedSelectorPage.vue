<template>
  <div>
    <h2>On this page you can select a specific dog breed 🐶</h2>
    <BreedSelector />

    <InfiniteScroll @loadMore="loadMoreDogs">
      <DogCard
        v-for="(dog, index) in renderedArray"
        class="dog-card"
        :key="index"
        :dogObject="dog"
        :index="index"
      />
    </InfiniteScroll>
  </div>
</template>

<script>
import InfiniteScroll from "@/components/InfiniteScroll";
import DogCard from "@/components/DogCard/DogCard";
import BreedSelector from "@/components/Layout/BreedSelector";
import { useStore } from "vuex";
import { computed, watch } from "vue";
export default {
  components: {
    InfiniteScroll,
    DogCard,
    BreedSelector
  },
  setup() {
    const store = useStore();
    const currSelectedBreed = computed(() => store.state.selectedBreed);
    const refreshDogsArray = () => {
      store.commit("clearRenderedArray");
      store.dispatch("fetchDogs", currSelectedBreed.value);
    };
    refreshDogsArray();

    watch(currSelectedBreed, refreshDogsArray);

    const loadMoreDogs = () => {
      store.dispatch("fetchDogs", currSelectedBreed.value);
    };
    return {
      renderedArray: computed(() => store.state.renderedArray),
      loadMoreDogs
    };
  }
};
</script>

<style lang="scss" scoped>
h2 {
  margin: 20px auto;
  font-size: 30px;
  max-width: 330px;
}
</style>
