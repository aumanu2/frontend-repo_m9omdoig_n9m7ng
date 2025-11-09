import { useState } from "react";
import { Flame, Salad, Beef, Vegan, IceCream2 } from "lucide-react";

const CUISINES = ["Italian", "Indian", "Chinese", "Mexican", "Thai", "Japanese", "American", "Mediterranean"];

export default function Preferences({ onUpdate }) {
  const [spice, setSpice] = useState(2);
  const [diet, setDiet] = useState("Any");
  const [cuisines, setCuisines] = useState(["Indian", "Mexican"]);

  const toggleCuisine = (c) => {
    setCuisines((prev) => {
      const next = prev.includes(c) ? prev.filter((x) => x !== c) : [...prev, c];
      onUpdate?.({ spice, diet, cuisines: next });
      return next;
    });
  };

  const handleDiet = (d) => {
    setDiet(d);
    onUpdate?.({ spice, diet: d, cuisines });
  };

  const handleSpice = (s) => {
    setSpice(s);
    onUpdate?.({ spice: s, diet, cuisines });
  };

  return (
    <section id="preferences" className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <div className="bg-white/80 backdrop-blur rounded-2xl border border-gray-100 shadow-sm p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900">Your Preferences</h2>
          <span className="text-sm text-gray-500">Tuned recommendations</span>
        </div>

        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {/* Spice level */}
          <div>
            <div className="flex items-center gap-2 text-gray-800 font-medium mb-3"><Flame className="text-orange-500" size={18}/>Spice Level</div>
            <div className="flex items-center gap-2">
              {[0,1,2,3,4].map((i) => (
                <button key={i} onClick={() => handleSpice(i)} className={`h-10 w-10 rounded-full grid place-items-center border ${spice>=i?"bg-orange-500 text-white border-orange-500":"border-gray-200 text-gray-500"}`}>
                  {i}
                </button>
              ))}
            </div>
          </div>

          {/* Diet */}
          <div>
            <div className="flex items-center gap-2 text-gray-800 font-medium mb-3"><Salad className="text-emerald-500" size={18}/>Diet</div>
            <div className="flex flex-wrap gap-2">
              {["Any","Vegetarian","Vegan","Keto","Halal"].map((d) => (
                <button key={d} onClick={() => handleDiet(d)} className={`px-3 py-2 rounded-xl border text-sm ${diet===d?"bg-emerald-500 text-white border-emerald-500":"border-gray-200 text-gray-700"}`}>{d}</button>
              ))}
            </div>
          </div>

          {/* Cuisines */}
          <div>
            <div className="flex items-center gap-2 text-gray-800 font-medium mb-3"><Beef className="text-pink-500" size={18}/>Cuisines</div>
            <div className="flex flex-wrap gap-2">
              {CUISINES.map((c) => (
                <button key={c} onClick={() => toggleCuisine(c)} className={`px-3 py-2 rounded-xl border text-sm ${cuisines.includes(c)?"bg-pink-500 text-white border-pink-500":"border-gray-200 text-gray-700"}`}>{c}</button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-4 text-sm text-gray-500 flex items-center gap-2"><IceCream2 size={16}/> We use these to tailor suggestions.</div>
      </div>
    </section>
  );
}
