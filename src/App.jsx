import { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import FeaturedCarousel from "./components/FeaturedCarousel";
import RecommendationGrid from "./components/RecommendationGrid";

function App() {
  const [filters, setFilters] = useState({ query: "", diet: "" });

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-rose-50 to-amber-50">
      <Header />

      <main className="max-w-6xl mx-auto px-4 py-8 space-y-8">
        <section className="text-center space-y-3">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Discover your next favorite meal
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Search by craving, ingredients, or dietary needs. We’ll surface tasty
            options instantly.
          </p>
        </section>

        <FeaturedCarousel />

        <section className="mt-6">
          <SearchBar onSearch={(f) => setFilters(f)} />
        </section>

        <section className="mt-4">
          <h3 className="text-lg font-semibold mb-3 text-slate-800">Top picks</h3>
          <RecommendationGrid filters={filters} />
        </section>
      </main>

      <footer className="border-t border-slate-200 py-6 text-center text-sm text-slate-500">
        Crafted with care • FlavorFind © {new Date().getFullYear()}
      </footer>
    </div>
  );
}

export default App;
