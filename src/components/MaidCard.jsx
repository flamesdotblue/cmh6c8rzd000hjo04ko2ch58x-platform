import { MapPin, Star, Phone, Shield, Clock } from "lucide-react";

export default function MaidCard({ maid }) {
  return (
    <div className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">
      <div className="flex items-start gap-4">
        <img
          src={maid.photo}
          alt={maid.name}
          className="h-16 w-16 rounded-xl object-cover ring-1 ring-slate-200"
        />
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <h3 className="text-base font-semibold text-slate-900">{maid.name}</h3>
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-700 ring-1 ring-inset ring-emerald-200">
              <Shield className="h-3.5 w-3.5" />
              Verified
            </span>
          </div>
          <div className="mt-1 flex flex-wrap items-center gap-3 text-sm text-slate-600">
            <div className="inline-flex items-center gap-1.5">
              <Star className="h-4 w-4 text-amber-500" />
              <span className="font-medium text-slate-800">{maid.rating.toFixed(1)}</span>
              <span className="text-slate-400">({maid.reviews} reviews)</span>
            </div>
            <div className="inline-flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-indigo-600" />
              {maid.experience} yrs exp
            </div>
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {maid.services.map((s) => (
              <span
                key={s}
                className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700"
              >
                {s}
              </span>
            ))}
          </div>
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
            <div className="inline-flex items-center gap-1.5 text-sm text-slate-600">
              <MapPin className="h-4 w-4 text-rose-500" />
              <span className="truncate">
                {maid.area}, {maid.city} {maid.pincode}
              </span>
            </div>
            <div className="text-sm text-slate-500">Availability: <span className="font-medium text-slate-700">{maid.availability}</span></div>
          </div>
        </div>
      </div>
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <div className="text-xs text-slate-500">Languages: {maid.languages.join(", ")}</div>
        <a
          href={`tel:${maid.phone}`}
          className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-200"
        >
          <Phone className="h-4 w-4" /> Contact
        </a>
      </div>
    </div>
  );
}
