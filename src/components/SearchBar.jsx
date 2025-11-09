import { useState } from "react";
import { Search } from "lucide-react";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");
  const [diet, setDiet] = useState("");

  const submit = (e) => {
    e.preventDefault();
    onSearch({ query, diet });
  };

  return (
    <form onSubmit={submit} className="w-full flex flex-col sm:flex-row gap-3">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search dishes, cuisines, or ingredients..."
          className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white/80"
        />
      </div>
      <select
        value={diet}
        onChange={(e) => setDiet(e.target.value)}
        className="sm:w-48 w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/80 focus:outline-none focus:ring-2 focus:ring-orange-500"
      >
        <option value="">Any diet</option>
        <option value="vegetarian">Vegetarian</option>
        <option value="vegan">Vegan</option>
        <option value="gluten-free">Gluten-free</option>
        <option value="keto">Keto</option>
      </select>
      <button
        type="submit"
        className="px-5 py-3 rounded-xl bg-gradient-to-tr from-orange-500 to-rose-500 text-white font-medium shadow hover:opacity-95"
      >
        Find Foods
      </button>
    </form>
  );
}
