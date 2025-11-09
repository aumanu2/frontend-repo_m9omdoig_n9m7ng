import { Search } from "lucide-react";

export default function Hero({ onSearch }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const query = (form.get("query") || "").toString();
    onSearch?.(query);
  };

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-rose-50 to-amber-50" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
              Find your next favorite meal
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Tell us what you're craving and we'll recommend dishes and places you'll love.
            </p>
            <form onSubmit={handleSubmit} className="mt-8 flex gap-3">
              <div className="flex-1 relative">
                <input
                  name="query"
                  type="text"
                  placeholder="e.g., spicy noodles, vegan burgers, sushi near me"
                  className="w-full h-12 rounded-xl border border-gray-200 bg-white/90 backdrop-blur px-4 pr-12 text-gray-900 placeholder:text-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500/40"
                />
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              </div>
              <button type="submit" className="h-12 px-5 rounded-xl bg-gradient-to-br from-orange-500 to-pink-500 text-white font-medium shadow hover:shadow-md transition-shadow">
                Search
              </button>
            </form>
            <p className="mt-3 text-sm text-gray-500">Popular: Ramen • Biryani • Tacos • Salad Bowls</p>
          </div>
          <div className="md:block hidden">
            <img
              src="https://images.unsplash.com/photo-1543339308-43f2a70b0755?q=80&w=1600&auto=format&fit=crop"
              alt="Food collage"
              className="w-full h-[360px] object-cover rounded-2xl shadow-lg"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
