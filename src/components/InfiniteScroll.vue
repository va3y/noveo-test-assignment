<template>
  <div class="grid">
    <transition-group name="list">
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
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  padding: 20px;
  margin-bottom: 200px;
}
.dog-card {
  height: calc(100vw / 4);
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
</style>
