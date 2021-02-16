<template>
  <div class="grid">
    <transition-group name="list" appear>
      <slot />
    </transition-group>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    dogType: {
      type: String,
      default: "random"
    }
  },
  setup(props, context) {
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

.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all 1s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
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
