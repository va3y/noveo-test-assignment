<template>
  <ErrorCard />
  <div class="grid">
    <slot />
  </div>
</template>

<script>
import ErrorCard from "@/components/Layout/ErrorCard";

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
    let windowBottom;
    window.onscroll = () => {
      windowBottom =
        document.documentElement.scrollTop + window.innerHeight ===
        document.documentElement.offsetHeight;
      if (windowBottom) {
        context.emit("loadMore");
      }
    };

    return {};
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
  padding: 20px;
  margin-bottom: 200px;
}

@media screen and (max-width: 738px) {
  .grid {
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: calc(100vw / 2 - 35px);
  }
}

.grid {
  * {
    img {
      max-width: 400px;
      max-height: 400px;
      height: auto;
      width: auto;
    }
  }
}
</style>
