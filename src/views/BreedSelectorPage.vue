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
      <EndOfBreed v-if="showPlaceholder" />
    </InfiniteScroll>
  </div>
</template>

<script>
import InfiniteScroll from "@/components/InfiniteScroll";
import DogCard from "@/components/DogCard/DogCard";
import EndOfBreed from "@/components/Layout/EndOfBreed.vue";
import BreedSelector from "@/components/Layout/BreedSelector";

import { useStore } from "vuex";
import { computed, watch, ref } from "vue";
export default {
  components: {
    InfiniteScroll,
    DogCard,
    BreedSelector,
    EndOfBreed
  },
  setup() {
    const store = useStore();
    const showPlaceholder = ref(false);
    const currSelectedBreed = computed(() => store.state.selectedBreed);
    const refreshDogsArray = newBreed => {
      showPlaceholder.value = false;
      store.commit("clearRenderedArray");
      store.dispatch("fetchDogs", newBreed);
    };
    refreshDogsArray("random");
    watch(currSelectedBreed, newBreed => refreshDogsArray(newBreed));

    const renderedArray = computed(() => store.state.renderedArray);

    const checkIfEnd = newArray => {
      if (newArray.length < 20 && newArray.length != 0) {
        showPlaceholder.value = true;
      }
    };
    watch(renderedArray, checkIfEnd);

    const loadMoreDogs = () => {
      if (showPlaceholder.value === true) return;
      store.dispatch("fetchDogs", currSelectedBreed.value);
    };

    return {
      renderedArray,
      loadMoreDogs,
      showPlaceholder
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
