<template>
  <header>
    <router-link to="/">
      <h1>Vue.js Dogs</h1>
    </router-link>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        |
        <li>
          <router-link to="/breed-selector">Breed Selector</router-link>
        </li>
        |
        <li>
          <router-link to="/favorites">
            ❤️Favorites ({{ getFavoritesCount }})
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  setup() {
    const store = useStore();
    return {
      getFavoritesCount: computed(() => store.state.favoritesArray.length)
    };
  }
};
</script>

<style lang="scss" scoped>
header {
  height: $header-height;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: $primary;
  padding: 0 5%;
}

h1 {
  font-family: $logo-font;
  font-size: 2rem;
}

nav {
  width: 60%;
  max-width: 600px;
}

li a {
  margin: 0 4%;
  text-decoration: none;
}

li:hover,
.router-link-exact-active {
  font-weight: 1000;
}

ul {
  display: flex;
  justify-content: space-between;
  white-space: nowrap;
  align-items: center;
  align-content: center;
  line-height: 100%;
}

@media screen and (max-width: 500px) {
  h1 {
    display: none;
  }
  nav {
    width: 100%;
  }
}
</style>
