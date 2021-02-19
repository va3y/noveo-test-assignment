<template>
  <ErrorCard />
  <div class="grid">
    <slot />
  </div>
</template>

<script>
import ErrorCard from "@/components/Layout/ErrorCard";
import { debounce } from "lodash";

export default {
  components: { ErrorCard },
  props: {
    dogType: {
      type: String,
      default: "random"
    }
  },
  emits: ["loadMore"],
  setup(_, context) {
    const scrollListener = () => {
      let windowBottom;
      windowBottom =
        window.innerHeight + window.pageYOffset >=
        document.body.offsetHeight - 2;
      if (windowBottom) {
        context.emit("loadMore");
      }
    };
    const debouncedListener = debounce(scrollListener, 200); //200 worked the best
    window.addEventListener("scroll", debouncedListener);
  }
};
</script>

<style lang="scss" scoped>
.grid {
  margin: auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: calc(100vw / 4 - 32.5px);
  gap: 30px;
  margin: 30px;
  margin-bottom: 200px;
}

@media screen and (max-width: 738px) {
  .grid {
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: calc(100vw / 2 - 35px);
  }
}
</style>
