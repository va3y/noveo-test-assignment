import { saveToStorage, getStorage, deleteFromStorage } from "./localStorage";

export default {
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
  },
  setSelectedBreed: (state, newBreed) => {
    state.selectedBreed = newBreed;
  }
};
