import { useMemo } from "react";
import { Star, MapPin } from "lucide-react";

const SAMPLE_DISHES = [
  { id: 1, name: "Spicy Dan Dan Noodles", cuisine: "Chinese", diet: "Any", spice: 4, rating: 4.7, place: "Sichuan Alley", image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop" },
  { id: 2, name: "Margherita Pizza", cuisine: "Italian", diet: "Vegetarian", spice: 0, rating: 4.6, place: "Napoli Pizzeria", image: "https://images.unsplash.com/photo-1548365328-8b849ce5fdd4?q=80&w=1200&auto=format&fit=crop" },
  { id: 3, name: "Vegan Buddha Bowl", cuisine: "Mediterranean", diet: "Vegan", spice: 1, rating: 4.5, place: "Green Leaf", image: "https://images.unsplash.com/photo-1547496502-affa22d38842?q=80&w=1200&auto=format&fit=crop" },
  { id: 4, name: "Chicken Biryani", cuisine: "Indian", diet: "Any", spice: 3, rating: 4.8, place: "Biryani House", image: "https://images.unsplash.com/photo-1633945274405-2f1b9b9dd45b?q=80&w=1200&auto=format&fit=crop" },
  { id: 5, name: "Tacos al Pastor", cuisine: "Mexican", diet: "Any", spice: 2, rating: 4.6, place: "El Rancho", image: "https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?q=80&w=1200&auto=format&fit=crop" },
  { id: 6, name: "Salmon Nigiri", cuisine: "Japanese", diet: "Any", spice: 0, rating: 4.9, place: "Sushi Go", image: "https://images.unsplash.com/photo-1547936782-6d8d78c80f3b?q=80&w=1200&auto=format&fit=crop" },
];

export default function Recommendations({ query, prefs }) {
  const results = useMemo(() => {
    const q = (query || "").toLowerCase().trim();
    return SAMPLE_DISHES.filter((d) => {
      const matchesQuery = !q || d.name.toLowerCase().includes(q) || d.cuisine.toLowerCase().includes(q) || d.place.toLowerCase().includes(q);
      const matchesDiet = !prefs?.diet || prefs.diet === "Any" || d.diet === prefs.diet;
      const matchesSpice = typeof prefs?.spice !== "number" || d.spice <= prefs.spice + 1; // be flexible
      const matchesCuisine = !prefs?.cuisines?.length || prefs.cuisines.includes(d.cuisine);
      return matchesQuery && matchesDiet && matchesSpice && matchesCuisine;
    }).sort((a,b) => b.rating - a.rating);
  }, [query, prefs]);

  return (
    <section id="recommendations" className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <div className="flex items-end justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-900">Top Picks For You</h2>
        <span className="text-sm text-gray-500">{results.length} results</span>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {results.map((d) => (
          <article key={d.id} className="group bg-white/80 backdrop-blur rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="relative">
              <img src={d.image} alt={d.name} className="h-44 w-full object-cover transition-transform group-hover:scale-[1.02]" loading="lazy"/>
              <div className="absolute top-2 right-2 bg-white/90 backdrop-blur px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1 text-gray-800 shadow">
                <Star size={14} className="text-yellow-500 fill-yellow-400"/> {d.rating}
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-900 leading-tight">{d.name}</h3>
              <div className="mt-1 text-sm text-gray-600">{d.cuisine} • {d.diet}</div>
              <div className="mt-2 text-sm text-gray-500 flex items-center gap-1"><MapPin size={14}/> {d.place}</div>
              <button className="mt-4 w-full h-10 rounded-xl border border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50 transition">
                Save to favorites
              </button>
            </div>
          </article>
        ))}
      </div>

      {results.length === 0 && (
        <div className="text-center py-20 text-gray-600 bg-white/60 border border-dashed border-gray-200 rounded-2xl">
          No matches yet. Try changing your search or preferences.
        </div>
      )}
    </section>
  );
}
