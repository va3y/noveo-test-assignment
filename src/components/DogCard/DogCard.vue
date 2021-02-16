<template>
  <div class="dog-card" @click="handleLikeClick()">
    <LikeIcon class="heart" :class="{ fillred: dogObject.isFavorite }" />
    <img :src="dogObject.url" />
  </div>
</template>

<script>
import { useStore } from "vuex";
import { toRefs } from "vue";
import LikeIcon from "./LikeIcon";

export default {
  props: {
    dogObject: {
      type: Object,
      default: () => {
        return {
          url:
            "https://farm8.staticflickr.com/7172/6508022985_b22200ced0_z.jpg",
          isFavorite: false
        };
      }
      // an error img fallback :)
    },
    index: {
      type: Number,
      default: 0
    }
  },
  components: {
    LikeIcon
  },
  setup(props) {
    const store = useStore();
    const { dogObject, index } = toRefs(props);
    const handleLikeClick = () => {
      if (dogObject.value.isFavorite) {
        store.commit("removeFromFavorites", {
          dogObjectToDelete: dogObject.value,
          index: index.value
        });
      } else {
        store.commit("addTofavorites", {
          dogObject: dogObject.value,
          index: index.value
        });
      }
    };
    return { handleLikeClick };
  }
};
</script>

<style lang="scss" scoped>
img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.heart {
  display: none;
}

.fillred {
  fill: red;
  display: block;
}

.dog-card:hover .heart {
  display: block;
}
</style>
