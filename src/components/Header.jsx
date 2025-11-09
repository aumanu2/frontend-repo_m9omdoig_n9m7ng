import { ChefHat, Utensils } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-xl bg-gradient-to-br from-orange-500 to-pink-500 text-white shadow-sm">
            <ChefHat size={20} />
          </div>
          <span className="font-semibold text-gray-900 tracking-tight">Foodie Finder</span>
        </div>
        <div className="hidden sm:flex items-center gap-6 text-sm text-gray-600">
          <span className="flex items-center gap-2"><Utensils size={16}/>Discover</span>
          <a href="#recommendations" className="hover:text-gray-900">Top Picks</a>
          <a href="#preferences" className="hover:text-gray-900">Preferences</a>
        </div>
      </div>
    </header>
  );
}
