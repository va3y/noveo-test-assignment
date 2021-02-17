<template>
  <div v-if="showError">
    <div>
      Couldn't load dogs from the Dog API ;(
    </div>
    <div>Try to refresh the page in a couple of minutes</div>
  </div>
</template>
<script>
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  setup() {
    const store = useStore();
    return {
      showError: computed(() => store.state.errorFetchingData)
    };
  }
};
</script>
