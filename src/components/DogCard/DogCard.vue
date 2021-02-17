<template>
  <div
    class="dog-card"
    :class="{ hidden: favoriteOnly && !dogObject.isFavorite }"
    @click="handleLikeClick()"
    data-test="dog-card"
  >
    <LikeIcon class="heart" :class="{ liked: dogObject.isFavorite }" />
    <img :src="dogObject.url" data-test="dog-card-image" />
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
          // an error img fallback :)
          url:
            "https://farm8.staticflickr.com/7172/6508022985_b22200ced0_z.jpg",
          isFavorite: false
        };
      }
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
@keyframes slideInFromLeft {
  0% {
    transform: translatey(20px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  transition: all 2s;
  animation: 1s ease-out 0s 1 slideInFromLeft;
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
