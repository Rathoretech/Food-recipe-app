import React, { useState } from 'react';
import CustomHooks from '../assets/CustomHooks';
import { getFavorites, saveFavorites } from '../assets/favorites';

const Home = () => {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [favorites, setFavorites] = useState(getFavorites);

  const { loading, error, data } = CustomHooks(
    query ? `https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(query)}`
    : null
  );

  
  const handleSearch = (e) => {
    if (e.key === "Enter") {
      setQuery(search);
      setSelectedMeal(null);
    }
  };

  const ingredients = selectedMeal
    ? Array.from({ length: 20 }, (_, index) => {
        const ingredient = selectedMeal[`strIngredient${index + 1}`]?.trim();
        const measure = selectedMeal[`strMeasure${index + 1}`]?.trim();

        return ingredient ? { ingredient, measure } : null;
      }).filter(Boolean)
    : [];

  const isFavorite = selectedMeal
    ? favorites.some((meal) => meal.idMeal === selectedMeal.idMeal)
    : false;

  const toggleFavorite = () => {
    if (!selectedMeal) return;

    const updatedFavorites = isFavorite
      ? favorites.filter((meal) => meal.idMeal !== selectedMeal.idMeal)
      : [...favorites, selectedMeal];

    if (saveFavorites(updatedFavorites)) {
      setFavorites(updatedFavorites);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="relative">
        <img
          src="/food-bg.jpeg"
          alt="Recipe"
          className="h-[350px] w-full rounded object-cover"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <h1 className="text-3xl font-bold text-black sm:text-4xl">
            Find Your Perfect Recipe
          </h1>

          <p className="mt-3 text-base text-black sm:text-lg">
            Discover delicious recipes from around the world
          </p>

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleSearch}
            placeholder="Search recipes..."
            aria-label="Search recipes"
            className="mt-6 h-12 w-70 max-w-md rounded border bg-white px-5 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
          />
        </div>
      </div>


      {/* Results */}

      {selectedMeal ? (
        <section className="p-6">
          <button
            type="button"
            onClick={() => setSelectedMeal(null)}
            className="mb-5 rounded border px-4 py-2 hover:bg-gray-100"
          >
            Back to recipes
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
                onClick={toggleFavorite}
                aria-pressed={isFavorite}
                className={`mt-4 rounded-lg px-4 py-2 font-medium ${
                  isFavorite
                    ? "bg-orange-100 text-orange-800"
                    : "bg-orange-500 text-white hover:bg-orange-600"
                }`}
              >
                {isFavorite ? "★ Saved to favorites" : "☆ Add to favorites"}
              </button>
              {selectedMeal.strTags && (
                <p className="mt-2 text-gray-600">Tags: {selectedMeal.strTags}</p>
              )}
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
          <h1 className="ml-4 mt-3 text-3xl font-bold">Popular Recipes</h1>

          <div className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {loading && <p>Loading...</p>}
            {error && <p className="text-red-500">{error}</p>}
            {!loading && query && data?.meals === null && (
              <p className="mt-8 text-center text-xl text-gray-500">
                No recipe found for "{query}"
              </p>
            )}

            {data?.meals?.map((meal) => (
              <div
                role="button"
                tabIndex={0}
                key={meal.idMeal}
                onClick={() => setSelectedMeal(meal)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setSelectedMeal(meal);
                  }
                }}
                className="overflow-hidden rounded-lg border text-left shadow transition-shadow hover:shadow-lg"
              >
                <img
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                  className="h-48 w-full object-cover"
                />
                <h2 className="p-3 text-lg font-semibold">{meal.strMeal}</h2>
                <p className="mb-4 ml-7 text-xl" style={{ color: "#726953" }}>
                  {meal.strArea}
                </p>
                <div className="ml-6 flex items-center gap-1 text-xl">
                  <span className="text-2xl text-yellow-500">★</span>
                  <span className="text-xl font-medium">
                    4.{Math.floor(Math.random() * 9) + 1}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Home
