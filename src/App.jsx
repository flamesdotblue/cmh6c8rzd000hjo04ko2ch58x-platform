import { useMemo, useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import MaidList from "./components/MaidList";
import { maids as allMaids } from "./data/maids";

export default function App() {
  const [query, setQuery] = useState("");

  const filteredMaids = useMemo(() => {
    if (!query.trim()) return allMaids;
    const q = query.trim().toLowerCase();
    return allMaids.filter((m) => {
      const areaMatch = [m.area, m.city, m.pincode, ...(m.localities || [])]
        .filter(Boolean)
        .some((v) => String(v).toLowerCase().includes(q));
      return areaMatch;
    });
  }, [query]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-800">
      <Header />
      <main className="mx-auto max-w-6xl px-4 pb-20">
        <div className="sticky top-0 z-10 -mx-4 mb-6 border-b border-slate-200/70 bg-white/70 px-4 py-4 backdrop-blur supports-[backdrop-filter]:bg-white/50">
          <SearchBar value={query} onSearch={setQuery} />
        </div>

        <MaidList maids={filteredMaids} total={allMaids.length} query={query} />
      </main>
    </div>
  );
}
