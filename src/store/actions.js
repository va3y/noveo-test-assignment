import axios from "axios";

export default {
  async fetchDogs(context, dogType) {
    // Creates a dog object out of fetched data and checks if the photo is already liked
    const wrapEmptyObject = arr => {
      return arr.map(url => {
        return {
          url,
          isFavorite: context.state.favoritesArray.includes(url)
        };
      });
    };

    try {
      let fetchDogsURL;
      if (dogType === "random") {
        fetchDogsURL = "https://dog.ceo/api/breeds/image/random/20";
      } else {
        fetchDogsURL = `https://dog.ceo/api/breed/${dogType}/images/random/20`;
      }
      const { data } = await axios.get(fetchDogsURL);
      context.commit("addDogs", wrapEmptyObject(data.message));
    } catch (error) {
      console.error("error fetching the data", error);
      context.commit("showError");
    }
  },

  async fetchBreeds(context) {
    try {
      const breedsURL = "https://dog.ceo/api/breeds/list/all";
      const { data } = await axios.get(breedsURL);
      context.commit("setBreeds", Object.keys(data.message));
    } catch (error) {
      console.error("error fetching the data", error);
      context.commit("showError");
    }
  }
};
