export const getFavorites = () => {
  try {
    const storedFavorites = localStorage.getItem("favorites");
    if (!storedFavorites) return [];

    const favorites = JSON.parse(storedFavorites);
    if (!Array.isArray(favorites)) {
      throw new Error("Saved favorites must be a list.");
    }

    return favorites;
  } catch (error) {
    console.error("Unable to load saved recipes.", error);
    return [];
  }
};

export const saveFavorites = (favorites) => {
  try {
    localStorage.setItem("favorites", JSON.stringify(favorites));
    return true;
  } catch (error) {
    console.error("Unable to save recipes.", error);
    return false;
  }
};
