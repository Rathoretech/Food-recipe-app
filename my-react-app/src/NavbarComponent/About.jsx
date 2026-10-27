import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="mx-auto max-w-5xl px-6 py-10">
      <section className="rounded-2xl bg-orange-50 px-6 py-12 text-center sm:px-12">
        <p className="font-semibold uppercase tracking-widest text-orange-600">
          Welcome to RecipeHub
        </p>
        <h1 className="mt-3 text-4xl font-bold">
          Good food starts with a little inspiration.
        </h1>
        <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-700">
          RecipeHub makes it easy to find your next meal, explore dishes from
          around the world, and keep the recipes you love close at hand.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Link
            to="/"
            className="rounded-lg bg-orange-500 px-5 py-3 font-semibold text-white hover:bg-orange-600"
          >
            Find a recipe
          </Link>
          <Link
            to="/categories"
            className="rounded-lg border border-orange-300 px-5 py-3 font-semibold text-orange-700 hover:bg-white"
          >
            Explore categories
          </Link>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold">A simple way to cook something great</h2>
        <div className="mt-5 grid gap-5 md:grid-cols-3">
          <article className="rounded-xl border p-5">
            <h3 className="text-lg font-semibold">Discover</h3>
            <p className="mt-2 leading-6 text-gray-600">
              Search for recipes by name and browse dishes across different
              cuisines and categories.
            </p>
          </article>
          <article className="rounded-xl border p-5">
            <h3 className="text-lg font-semibold">Cook with confidence</h3>
            <p className="mt-2 leading-6 text-gray-600">
              Open any recipe to see its ingredients, measurements, and
              step-by-step instructions.
            </p>
          </article>
          <article className="rounded-xl border p-5">
            <h3 className="text-lg font-semibold">Keep your favorites</h3>
            <p className="mt-2 leading-6 text-gray-600">
              Save recipes to your favorites so they are easy to find again on
              your next visit.
            </p>
            <Link to="/favorites" className="mt-3 inline-block text-orange-600 hover:underline">
              Go to favorites
            </Link>
          </article>
        </div>
      </section>

      <p className="mt-10 border-t pt-5 text-sm text-gray-500">
        Recipe information is provided by{" "}
        <a
          href="https://www.themealdb.com/"
          target="_blank"
          rel="noreferrer"
          className="text-orange-600 underline"
        >
          TheMealDB
        </a>
        . RecipeHub is built with React.
      </p>
    </div>
  );
};

export default About
