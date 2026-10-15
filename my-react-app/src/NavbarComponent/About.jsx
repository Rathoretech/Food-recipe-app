const About = () => {
  return (
    <div className="px-6 py-10 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">
        About Recipe<span className="text-red-500">Hub</span>
      </h1>

      <p className="text-gray-700 mb-4">
        RecipeHub helps you discover delicious recipes from around the world.
        Search by name, browse categories, and save your favorites.
      </p>

      <h2 className="text-xl font-semibold mb-2">Features</h2>
      <ul className="list-disc ml-6 text-gray-700 mb-6">
        <li>Search recipes by name</li>
        <li>Browse by category</li>
        <li>Save your favorite recipes</li>
      </ul>

      <h2 className="text-xl font-semibold mb-2">Data Source</h2>
      <p className="text-gray-700 mb-6">
        Recipes are provided by the free TheMealDB API.
      </p>

      <p className="text-gray-500">Built with React and Tailwind CSS.</p>
    </div>
  );
};

export default About
