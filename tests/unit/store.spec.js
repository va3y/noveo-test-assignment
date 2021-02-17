import store from "@/store";

describe("Vuex store", () => {
  test("addDogs mutation", () => {
    store.commit("addDogs", "testDog");
    expect(store.state.renderedArray.length).toBe(1);
  });

  test("loading 20 random dogs with a fetchDogs action", async () => {
    await store.dispatch("fetchDogs", "random");
    expect(store.state.renderedArray.length).toBe(21);
  });

  test("loading breeds with fetchBreeds action", async () => {
    await store.dispatch("fetchBreeds");
    expect(store.state.breedsArray.length).toBeGreaterThan(0);
  });
});
