import { useState } from "react";
import { getFavorites, saveFavorites } from "../assets/favorites";

const Favorites = () => {
  const [favorites, setFavorites] = useState(getFavorites);
  const [selectedMeal, setSelectedMeal] = useState(null);

  const removeFavorite = (id) => {
    const updated = favorites.filter((m) => m.idMeal !== id);
    if (saveFavorites(updated)) {
      setFavorites(updated);
      if (selectedMeal?.idMeal === id) setSelectedMeal(null);
    }
  };

  const ingredients = selectedMeal
    ? Array.from({ length: 20 }, (_, index) => {
        const ingredient = selectedMeal[`strIngredient${index + 1}`]?.trim();
        const measure = selectedMeal[`strMeasure${index + 1}`]?.trim();
        return ingredient ? { ingredient, measure } : null;
      }).filter(Boolean)
    : [];

  return (
    <div className="px-6 py-8">
      {selectedMeal ? (
        <section>
          <button
            type="button"
            onClick={() => setSelectedMeal(null)}
            className="mb-5 rounded border px-4 py-2 hover:bg-gray-100"
          >
            Back to favorites
          </button>
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <img
                src={selectedMeal.strMealThumb}
                alt={selectedMeal.strMeal}
                className="w-full rounded-lg object-cover"
              />
              <h1 className="mt-4 text-3xl font-bold">{selectedMeal.strMeal}</h1>
              <p className="mt-2 text-gray-600">
                {[selectedMeal.strCategory, selectedMeal.strArea]
                  .filter(Boolean)
                  .join(" · ")}
              </p>
              <button
                type="button"
                onClick={() => removeFavorite(selectedMeal.idMeal)}
                className="mt-4 rounded-lg border border-red-300 px-4 py-2 text-red-600 hover:bg-red-50"
              >
                Remove from favorites
              </button>
              <div className="mt-4 flex flex-wrap gap-4">
                {selectedMeal.strSource && (
                  <a
                    href={selectedMeal.strSource}
                    target="_blank"
                    rel="noreferrer"
                    className="text-orange-600 underline"
                  >
                    Recipe source
                  </a>
                )}
                {selectedMeal.strYoutube && (
                  <a
                    href={selectedMeal.strYoutube}
                    target="_blank"
                    rel="noreferrer"
                    className="text-orange-600 underline"
                  >
                    Watch video
                  </a>
                )}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold">Ingredients</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                {ingredients.map(({ ingredient, measure }) => (
                  <li key={ingredient}>
                    {[measure, ingredient].filter(Boolean).join(" ")}
                  </li>
                ))}
              </ul>
              <h2 className="mt-8 text-2xl font-bold">Instructions</h2>
              <p className="mt-3 whitespace-pre-line leading-7 text-gray-700">
                {selectedMeal.strInstructions}
              </p>
            </div>
          </div>
        </section>
      ) : (
        <>
          <h1 className="mb-6 text-3xl font-bold">Your Favorites</h1>
          {favorites.length === 0 ? (
            <div className="rounded-xl bg-orange-50 p-8 text-center">
              <p className="text-xl font-semibold">No favorite recipes yet</p>
              <p className="mt-2 text-gray-600">
                Search for a recipe and choose “Add to favorites” to save it here.
              </p>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {favorites.map((meal) => (
                <article
                  key={meal.idMeal}
                  className="overflow-hidden rounded-lg border shadow"
                >
                  <button
                    type="button"
                    onClick={() => setSelectedMeal(meal)}
                    className="block w-full text-left"
                  >
                    <img
                      src={meal.strMealThumb}
                      alt={meal.strMeal}
                      className="h-40 w-full object-cover"
                    />
                    <div className="p-4">
                      <h2 className="font-semibold">{meal.strMeal}</h2>
                      <p className="mt-1 text-sm text-gray-600">
                        {[meal.strCategory, meal.strArea]
                          .filter(Boolean)
                          .join(" · ")}
                      </p>
                      <span className="mt-3 inline-block text-sm text-orange-600">
                        View recipe
                      </span>
                    </div>
                  </button>
                  <div className="px-4 pb-4">
                    <button
                      type="button"
                      onClick={() => removeFavorite(meal.idMeal)}
                      className="text-sm text-red-500 hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Favorites;