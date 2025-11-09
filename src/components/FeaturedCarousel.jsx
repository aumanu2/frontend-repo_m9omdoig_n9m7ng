import { useEffect, useState } from "react";

const FEATURED = [
  {
    title: "Street Tacos",
    image:
      "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Sushi Night",
    image:
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Sweet Treats",
    image:
      "https://images.unsplash.com/photo-1514511547113-bff0f2f45921?q=80&w=1600&auto=format&fit=crop",
  },
];

export default function FeaturedCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % FEATURED.length);
    }, 3000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-slate-200">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {FEATURED.map((f) => (
          <div key={f.title} className="min-w-full aspect-[16/6] relative">
            <img
              src={f.image}
              alt={f.title}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-semibold drop-shadow">{f.title}</h3>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-3 right-3 flex gap-1">
        {FEATURED.map((_, i) => (
          <button
            key={i}
            aria-label={`Slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-2 w-2 rounded-full ${
              i === index ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
