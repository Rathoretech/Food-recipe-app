import React, { useState } from 'react';
import CustomHooks from '../assets/CustomHooks';

const Home = () => {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const [category,setCategory] =useState("all")

  const { loading, error, data } = CustomHooks(
    query ? `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
    : null
  );

  
  const handleSearch = (e) => {
    if (e.key === "Enter") {
      setQuery(search);
    }
  };

const categories=[
"All",
"Breakfast",
"Lunch",
"Dinner",
"Dessert",
"Snacks",
"Drinks"





]





  return (
    <div>
      {/* Hero Section */}
      <div className="relative">
        <img
          src="/food-bg.jpeg"
          alt="Recipe"
          className="w-full object-cover rounded"
          style={{ height: "350px" }}
        />

        <h1 className="absolute top-1/2 left-170 -translate-x-1/2 -translate-y-1/2 text-4xl font-bold text-black pb-40 ml-40">
          Find Your Perfect Recipe
        </h1>

        <p className="absolute top-1/2 left-170 -translate-x-1/2 -translate-y-1/2 text-md text-black pb-20 ml-40">
          Discover delicious recipes from around the world
        </p>

        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleSearch}
          placeholder="Search recipes..."
          className="absolute top-1/2 left-170 -translate-x-1/2 -translate-y-1/2 mt-16 w-80 h-12 px-5 border rounded outline-none ml-40"
        />
      </div>


      {/* Results */}

<h1 className="text-3xl mt-3 ml-4 font-bold"> Popular Recipes</h1>

      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {!loading && query  && data?.meals === null && (<p className="text-center text-xl text-gray-500 mt-200 "> No recipe found for "{query}"</p>)}



        {data?.meals?.map((meal) => (

       



          <div key={meal.idMeal} className="border rounded-lg overflow-hidden shadow">
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="w-full h-48 object-cover"
            />
            <h2 className="p-3 font-semibold text-lg">{meal.strMeal}</h2>
            <p className="text-xl   mb-4 ml-7" style={{color:"#726953"}}> {meal.strArea}</p>

<div className="flex items-center gap-1 m ml-6 text-xl">
        <span className="text-yellow-500 text-2xl">★</span>
        <span className=" font-medium text-xl">4.{Math.floor(Math.random() * 9) + 1}</span>
      </div>




          </div>
          
        ))}
      </div>
    </div>
  );
};

export default Home
