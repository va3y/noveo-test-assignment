<template>
  <div>
    <div>
      Show me some
      <label>
        <select v-model="selectedBreed"
          ><option value="random" selected>Random</option>
          <option
            v-for="(breed, index) in breedsArray"
            :key="index"
            :value="breed"
            >{{ capitalize(breed) }}</option
          ></select
        ></label
      >
      dogs
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
      store.commit("setSelectedBreed", selectedBreed.value);
    });

    const capitalize = word => {
      return word[0].toUpperCase() + word.substring(1);
    };

    return {
      breedsArray,
      selectedBreed,
      capitalize
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
  padding: 0 10px;
  border: 2px $primary solid;
  outline: none;
  -moz-appearance: none;
  -webkit-appearance: none;
}

label:after {
  content: "v";
  font-size: 16px;
  color: $secondary;
  right: 20px;
  position: relative;
  pointer-events: none;
}
</style>
