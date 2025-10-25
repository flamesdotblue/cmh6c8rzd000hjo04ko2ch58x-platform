import { Home, Sparkles } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white/80 border-b border-slate-200/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto max-w-6xl px-4 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-indigo-600 text-white p-2 rounded-lg shadow-sm">
            <Home className="h-5 w-5" />
          </div>
          <div>
            <h1 className="text-xl font-semibold tracking-tight text-slate-900">HelperHub</h1>
            <p className="text-sm text-slate-500">Find trusted maids by your area</p>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-2 text-indigo-600">
          <Sparkles className="h-4 w-4" />
          <span className="text-sm font-medium">Verified profiles</span>
        </div>
      </div>
    </header>
  );
}
