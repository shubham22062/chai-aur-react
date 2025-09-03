import Hero from "../components/Hero";
import RecipeCard from "../components/RecipeCard";

const recipes = [
  {
    title: "Avocado Toast",
    img: "https://i.pinimg.com/1200x/0a/c0/69/0ac069f17cd472aa91eb47b8bc9809b4.jpg",
    time: "10 min",
  },
  {
    title: "Berry Smoothie",
    img: "https://i.pinimg.com/736x/e2/64/15/e2641547b451cc873e845ed691af9096.jpg",
    time: "5 min",
  },
  {
    title: "Pasta Primavera",
    img: "https://i.pinimg.com/1200x/97/4c/91/974c911212456f8941899ec8f8268ada.jpg",
    time: "20 min",
  },
];

export default function Home() {
  return (
    <div className="bg-light min-h-screen">
      <Hero />
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Popular Recipes</h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {recipes.map((r) => (
            <RecipeCard key={r.title} recipe={r} />
          ))}
        </div>
      </section>
    </div>
  );
}
