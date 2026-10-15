import { useState } from "react";
import CustomHooks from "../assets/CustomHooks";

const Categories = () => {
  const category = [
    "All",
    "Breakfast",
    "Lunch",
    "Dinner",
    "Dessert",
  ];

  const [selectedCategory, setSelectedCategory] = useState("Breakfast");

  const url =
    selectedCategory === "All"
      ? "https://dummyjson.com/recipes"
      : `https://dummyjson.com/recipes/meal-type/${selectedCategory}`;

  const { data, loading, error } = CustomHooks(url);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center">
        Recipe Categories
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-8">
        {category.map((item) => (
          <button
            key={item}
            onClick={() => setSelectedCategory(item)}
            className="p-5 rounded-xl border hover:bg-orange-500 hover:text-white"
          >
            {item}
          </button>
        ))}
      </div>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {data?.recipes?.map((recipe) => (
          <div key={recipe.id} className="border rounded-xl p-4">
            <img
              src={recipe.image}
              alt={recipe.name}
              className="w-full rounded-lg"
            />

            <h2 className="font-bold text-xl mt-3">
              {recipe.name}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories