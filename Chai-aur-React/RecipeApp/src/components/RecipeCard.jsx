export default function RecipeCard({ recipe }) {
  return (
    <div className="rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition">
      <img
        src={recipe.img}
        alt={recipe.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="font-semibold text-xl mb-2">{recipe.title}</h3>
        <p className="text-sm text-gray-600">{recipe.time}</p>
      </div>
    </div>
  );
}
