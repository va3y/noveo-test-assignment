<template>
  <div>
    <div>
      Show me some
      <select v-model="selectedBreed"
        ><option value="random" selected>random</option>
        <option v-for="(breed, index) in breedsArray" :key="index">{{
          breed
        }}</option></select
      >dogs
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed, ref, watch } from "vue";
export default {
  setup() {
    const store = useStore();
    store.dispatch("fetchBreeds");
    const breedsArray = computed(() => store.state.breedsArray);
    const selectedBreed = ref("random");
    watch(selectedBreed, () => {
      console.log(selectedBreed.value);
      store.commit("setSelectedBreed", selectedBreed.value);
    });

    return {
      breedsArray,
      selectedBreed
    };
  }
};
</script>

<style lang="scss" scoped>
option {
  text-transform: uppercase;
}
select {
  text-align-last: left;
}
</style>
