<template>
  <div>
    <h2>On this page you can select a specific breed of a dog 🐶</h2>
    <select v-model="selectedBreed"
      ><option value="random" selected>Random</option>
      <option v-for="(breed, index) in breedsArray" :key="index">{{
        breed
      }}</option></select
    >

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
import InfiniteScroll from "../components/InfiniteScroll";
import DogCard from "../components/DogCard/DogCard";
import { useStore } from "vuex";
import { computed, ref, watch } from "vue";
export default {
  components: {
    InfiniteScroll,
    DogCard
  },
  setup() {
    const store = useStore();
    store.dispatch("fetchBreeds");
    const breedsArray = computed(() => store.state.breedsArray);
    const selectedBreed = ref("random");
    const refreshDogsArray = () => {
      console.log(selectedBreed.value);
      store.commit("clearRenderedArray");
      store.dispatch("fetchDogs", selectedBreed.value);
    };
    refreshDogsArray();

    watch(selectedBreed, refreshDogsArray);
    store.dispatch("fetchDogs", "random");

    const loadMoreDogs = () => {
      store.dispatch("fetchDogs", selectedBreed.value);
    };
    return {
      renderedArray: computed(() => store.state.renderedArray),
      loadMoreDogs,
      breedsArray,
      selectedBreed
    };
  }
};
</script>

<style lang="scss" scoped>
h2 {
  margin: auto;
  max-width: 400px;
}
</style>
