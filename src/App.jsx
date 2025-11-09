import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Preferences from "./components/Preferences";
import Recommendations from "./components/Recommendations";
import Footer from "./components/Footer";

function App() {
  const [query, setQuery] = useState("");
  const [prefs, setPrefs] = useState({ spice: 2, diet: "Any", cuisines: ["Indian", "Mexican"] });

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-rose-50 to-amber-50 text-gray-900">
      <Header />
      <Hero onSearch={(q) => setQuery(q)} />
      <Preferences onUpdate={(p) => setPrefs(p)} />
      <Recommendations query={query} prefs={prefs} />
      <Footer />
    </div>
  );
}

export default App;
