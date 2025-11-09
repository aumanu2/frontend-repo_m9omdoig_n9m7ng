import { useMemo } from "react";

const SAMPLE_FOODS = [
  {
    id: 1,
    name: "Mediterranean Bowl",
    desc: "Quinoa, cherry tomatoes, feta, olives, lemon herb dressing",
    diet: ["vegetarian"],
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Spicy Ramen",
    desc: "Rich broth with chili oil, soft-boiled egg, scallions",
    diet: [],
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1574484284002-952d92456975?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Vegan Buddha Bowl",
    desc: "Roasted veggies, chickpeas, tahini drizzle",
    diet: ["vegan", "gluten-free"],
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Grilled Salmon",
    desc: "Garlic butter, asparagus, lemon",
    diet: ["keto", "gluten-free"],
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1400&auto=format&fit=crop",
  },
];

function FoodCard({ item }) {
  return (
    <div className="group bg-white/90 border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-video overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-semibold text-slate-900">{item.name}</h3>
          <span className="text-xs px-2 py-1 rounded-full bg-amber-100 text-amber-700 font-medium">
            {item.rating}★
          </span>
        </div>
        <p className="text-sm text-slate-600 mt-1">{item.desc}</p>
        <div className="flex flex-wrap gap-2 mt-3">
          {item.diet.length === 0 ? (
            <span className="text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-700">General</span>
          ) : (
            item.diet.map((d) => (
              <span
                key={d}
                className="text-xs px-2 py-1 rounded-full bg-emerald-100 text-emerald-700"
              >
                {d}
              </span>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default function RecommendationGrid({ filters }) {
  const list = useMemo(() => {
    const q = (filters.query || "").toLowerCase();
    const diet = filters.diet || "";
    return SAMPLE_FOODS.filter((f) => {
      const matchesQuery =
        f.name.toLowerCase().includes(q) || f.desc.toLowerCase().includes(q);
      const matchesDiet = diet ? f.diet.includes(diet) : true;
      return matchesQuery && matchesDiet;
    });
  }, [filters]);

  if (list.length === 0) {
    return (
      <div className="text-center text-slate-600 py-10">
        No matches yet. Try a broader search or different diet.
      </div>
    );
  }

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {list.map((item) => (
        <FoodCard key={item.id} item={item} />
      ))}
    </div>
  );
}
