import { createStore } from "vuex";
import axios from "axios";
import { saveToStorage, getStorage, deleteFromStorage } from "./localStorage";

export default createStore({
  state: {
    renderedArray: [],
    favoritesArray: [],
    breedsArray: []
  },
  mutations: {
    initStore: state => {
      state.favoritesArray = getStorage();
    },
    addDogs: (state, dogsArrayToAdd) => {
      state.renderedArray = state.renderedArray.concat(dogsArrayToAdd);
    },
    setBreeds: (state, fetchedBreeds) => {
      state.breedsArray = fetchedBreeds;
    },
    clearRenderedArray: state => {
      state.renderedArray = [];
    },
    addTofavorites: (state, { dogObject, index }) => {
      dogObject.isFavorite = true;
      state.favoritesArray.push(dogObject);
      saveToStorage(dogObject);
      state.renderedArray[index].isFavorite = true;
    },
    removeFromFavorites: (state, { dogObjectToDelete, index }) => {
      state.favoritesArray = state.favoritesArray.filter(
        dogObject => dogObject.url !== dogObjectToDelete.url
      );
      deleteFromStorage(dogObjectToDelete);
      state.renderedArray[index].isFavorite = false;
    },
    renderFavorites: state => {
      state.renderedArray = state.favoritesArray;
    }
  },
  actions: {
    async fetchDogs(context, dogType) {
      // Creates an object out of fetched data and checks if the photo is already liked
      const wrapEmptyObject = arr => {
        const outputArr = [];
        arr.forEach(url => {
          outputArr.push({
            url,
            isFavorite: context.state.favoritesArray.includes(url)
          });
        });
        return outputArr;
      };

      try {
        let fetchDogsURL;
        if (dogType === "random") {
          fetchDogsURL = "https://dog.ceo/api/breeds/image/random/20";
        } else {
          fetchDogsURL = `https://dog.ceo/api/breed/${dogType}/images/random/20`;
        }
        const { data } = await axios.get(fetchDogsURL);
        console.log(data);
        context.commit("addDogs", wrapEmptyObject(data.message));
      } catch (error) {
        console.error("error fetching the data", error);
      }
    },

    async fetchBreeds(context) {
      try {
        const breedsURL = "https://dog.ceo/api/breeds/list/all";
        const { data } = await axios.get(breedsURL);
        // const capitalized = Object.keys(data.message).map(
        //   breed => breed[0].toUpperCase() + breed.substring(1)
        // );
        context.commit("setBreeds", Object.keys(data.message));
      } catch (error) {
        console.error("error fetching the data", error);
      }
    }

    // handleLikeClick(context, dogObject) {
    //   state.renderedArray[index].isFavorite = !state.renderedArray[index]
    //     .isFavorite;

    //   if (state.renderedArray[index].isFavorite) {
    //   } else {
    //   }
    //   saveToStorage(state.renderedArray[index]);
    // }
  },
  modules: {}
});
