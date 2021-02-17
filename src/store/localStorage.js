const saveToStorage = dogObject => {
  const savedDogs = JSON.parse(localStorage.getItem("savedDogs"));
  if (savedDogs !== null) {
    savedDogs.push(dogObject);
  }
  localStorage.setItem("savedDogs", JSON.stringify(savedDogs));
};

const initStorage = () => {
  if (localStorage.getItem("savedDogs") === null) {
    localStorage.setItem("savedDogs", "[]");
  }
};

const getStorage = () => {
  initStorage();
  return JSON.parse(localStorage.getItem("savedDogs"));
};

const deleteFromStorage = dogObjectToDelete => {
  const currLocalStorage = getStorage();
  localStorage.setItem(
    "savedDogs",
    JSON.stringify(
      currLocalStorage.filter(dogObj => dogObj.url !== dogObjectToDelete.url)
    )
  );
};

export { saveToStorage, getStorage, deleteFromStorage };
