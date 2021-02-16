<template>
  <div
    class="dog-card"
    :class="{ hidden: favoriteOnly && !dogObject.isFavorite }"
    @click="handleLikeClick()"
  >
    <LikeIcon class="heart" :class="{ liked: dogObject.isFavorite }" />
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
    },
    favoriteOnly: {
      type: Boolean,
      default: false
    }
  },
  components: {
    LikeIcon
  },
  setup(props, context) {
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
      context.emit("cardClicked");
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

.dog-card:hover .heart {
  display: block;
}

.hidden {
  display: none;
}

.heart {
  display: none;
}

.liked {
  display: block;
  transition: all 2s;
  animation-duration: 0.6s;
  animation-name: pop;
}

@keyframes pop {
  from,
  to {
    transform: scale(1);
  }
  50% {
    transform: scale(1.3);
  }
}
</style>
