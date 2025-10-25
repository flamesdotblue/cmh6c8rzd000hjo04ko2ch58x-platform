import MaidCard from "./MaidCard";
import { Search } from "lucide-react";

export default function MaidList({ maids, total, query }) {
  if (!maids?.length) {
    return (
      <div className="mx-auto max-w-3xl">
        <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center">
          <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
            <Search className="h-5 w-5" />
          </div>
          <h3 className="text-base font-semibold text-slate-900">No maids found in this area</h3>
          <p className="mt-1 text-sm text-slate-600">
            {query ? (
              <>We couldn't find profiles matching "{query}". Try a nearby locality or pincode.</>
            ) : (
              <>Try searching by locality name, area, city, or pincode.</>
            )}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="mb-1 flex items-center justify-between text-sm text-slate-600">
        <span>
          Showing <span className="font-medium text-slate-900">{maids.length}</span> of {total} profiles
          {query ? (
            <>
              , filtered by <span className="font-medium text-slate-900">"{query}"</span>
            </>
          ) : null}
        </span>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {maids.map((m) => (
          <MaidCard key={m.id} maid={m} />
        ))}
      </div>
    </div>
  );
}
