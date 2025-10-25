import { useEffect, useRef, useState } from "react";
import { MapPin, Search, Filter } from "lucide-react";

export default function SearchBar({ value, onSearch }) {
  const [input, setInput] = useState(value || "");
  const timerRef = useRef(null);

  useEffect(() => {
    setInput(value || "");
  }, [value]);

  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      onSearch?.(input);
    }, 300);
    return () => clearTimeout(timerRef.current);
  }, [input, onSearch]);

  return (
    <div className="w-full">
      <div className="mx-auto max-w-4xl">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
              <Search className="h-5 w-5" />
            </div>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Search by area, locality, city or pincode (e.g., Andheri West, 560001)"
              className="w-full rounded-xl border border-slate-300 bg-white/90 py-3 pl-10 pr-12 text-sm text-slate-900 placeholder-slate-400 shadow-sm outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
            />
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-slate-400">
              <MapPin className="h-5 w-5" />
            </div>
          </div>
          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-indigo-100"
            onClick={() => setInput("")}
            aria-label="Clear search"
          >
            <Filter className="h-4 w-4" />
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}
