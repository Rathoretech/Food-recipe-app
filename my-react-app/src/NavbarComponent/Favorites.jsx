import { useState } from "react";

const Favorites = () => {
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );

  const removeFavorite = (id) => {
    const updated = favorites.filter((m) => m.idMeal !== id);
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  return (
    <div className="px-6 py-8">
      <h1 className="text-3xl font-bold mb-6">Your Favorites</h1>
      {favorites.length === 0 ? (
        <p className="text-gray-500">No favorite recipes yet.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {favorites.map((meal) => (
            <div key={meal.idMeal} className="border rounded-lg shadow overflow-hidden">
              <img src={meal.strMealThumb} alt={meal.strMeal} className="h-40 w-full object-cover" />
              <div className="p-4">
                <h2 className="font-semibold">{meal.strMeal}</h2>
                <button
                  onClick={() => removeFavorite(meal.idMeal)}
                  className="mt-3 text-red-500 text-sm"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;