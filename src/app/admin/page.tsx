"use client";

import { useState, useEffect } from "react";

type Lead = {
  id: number;
  name: string;
  email: string;
  message: string;
  source: string;
  created_at: string;
};

export default function AdminPage() {
  const [pwd,    setPwd]    = useState("");
  const [auth,   setAuth]   = useState(false);
  const [leads,  setLeads]  = useState<Lead[]>([]);
  const [loading,setLoading]= useState(false);
  const [error,  setError]  = useState("");
  const [filter, setFilter] = useState("all");

  async function login(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    const res = await fetch(`/api/leads?pwd=${encodeURIComponent(pwd)}`);
    if (res.ok) {
      const data = await res.json();
      setLeads(data.leads || []);
      setAuth(true);
    } else {
      setError("Mot de passe incorrect.");
    }
    setLoading(false);
  }

  async function refresh() {
    setLoading(true);
    const res = await fetch(`/api/leads?pwd=${encodeURIComponent(pwd)}`);
    if (res.ok) {
      const data = await res.json();
      setLeads(data.leads || []);
    }
    setLoading(false);
  }

  const filtered = filter === "all" ? leads : leads.filter(l => l.source === filter);
  const sources  = ["all", ...Array.from(new Set(leads.map(l => l.source)))];

  if (!auth) return (
    <div className="min-h-screen bg-[#F7F5F0] flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl border border-[#E2DFD8] p-8 w-full max-w-sm shadow-lg">
        <div className="flex items-center gap-2 mb-8">
          <div className="w-8 h-8 bg-[#004225] rounded-lg flex items-center justify-center">
            <span className="text-[#C9A96E] font-black text-sm">E</span>
          </div>
          <p className="font-black text-[#004225] text-sm tracking-widest uppercase">EFFL Admin</p>
        </div>
        <form onSubmit={login} className="space-y-4">
          <input
            type="password" value={pwd} onChange={e => setPwd(e.target.value)}
            placeholder="Mot de passe admin" required autoFocus
            className="w-full border border-[#E2DFD8] rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#004225]/30"
          />
          {error && <p className="text-red-500 text-xs">{error}</p>}
          <button type="submit" disabled={loading}
            className="w-full bg-[#004225] text-white py-3 rounded-xl font-semibold text-sm hover:bg-[#003520] transition-colors disabled:opacity-60">
            {loading ? "..." : "Connexion"}
          </button>
        </form>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#F7F5F0] px-4 py-10">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#004225] rounded-lg flex items-center justify-center">
              <span className="text-[#C9A96E] font-black text-sm">E</span>
            </div>
            <div>
              <p className="font-black text-[#004225] text-sm uppercase tracking-widest">EFFL Admin</p>
              <p className="text-xs text-[#6B6960]">{leads.length} lead{leads.length!==1?"s":""} total</p>
            </div>
          </div>
          <button onClick={refresh} disabled={loading}
            className="text-xs font-semibold text-[#004225] border border-[#004225]/30 px-4 py-2 rounded-lg hover:bg-[#004225]/5 transition-colors disabled:opacity-50">
            {loading ? "..." : "↻ Actualiser"}
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {[
            { label:"Total leads",    val: leads.length },
            { label:"Whitebook",      val: leads.filter(l=>l.source==="whitebook").length },
            { label:"Contact direct", val: leads.filter(l=>l.source==="contact").length },
          ].map(({label,val}) => (
            <div key={label} className="bg-white rounded-xl border border-[#E2DFD8] p-5">
              <p className="text-3xl font-black text-[#004225]">{val}</p>
              <p className="text-xs text-[#6B6960] mt-1">{label}</p>
            </div>
          ))}
        </div>

        {/* Filter */}
        <div className="flex gap-2 mb-5">
          {sources.map(s => (
            <button key={s} onClick={() => setFilter(s)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-colors ${
                filter===s ? "bg-[#004225] text-white" : "bg-white border border-[#E2DFD8] text-[#6B6960] hover:text-[#004225]"
              }`}>
              {s === "all" ? "Tous" : s}
            </button>
          ))}
        </div>

        {/* Table */}
        <div className="bg-white rounded-2xl border border-[#E2DFD8] overflow-hidden">
          {filtered.length === 0 ? (
            <div className="py-16 text-center text-[#6B6960] text-sm">
              Aucun lead pour l'instant.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#E2DFD8] bg-[#F7F5F0]">
                    <th className="text-left px-6 py-3 text-xs font-bold text-[#6B6960] uppercase tracking-wide">Date</th>
                    <th className="text-left px-6 py-3 text-xs font-bold text-[#6B6960] uppercase tracking-wide">Nom</th>
                    <th className="text-left px-6 py-3 text-xs font-bold text-[#6B6960] uppercase tracking-wide">Email</th>
                    <th className="text-left px-6 py-3 text-xs font-bold text-[#6B6960] uppercase tracking-wide">Source</th>
                    <th className="text-left px-6 py-3 text-xs font-bold text-[#6B6960] uppercase tracking-wide">Message</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((lead, i) => (
                    <tr key={lead.id ?? i} className="border-b border-[#E2DFD8] last:border-0 hover:bg-[#F7F5F0] transition-colors">
                      <td className="px-6 py-4 text-xs text-[#6B6960] whitespace-nowrap">
                        {new Date(lead.created_at).toLocaleDateString("fr-FR", { day:"2-digit", month:"short", hour:"2-digit", minute:"2-digit" })}
                      </td>
                      <td className="px-6 py-4 font-medium text-[#111]">{lead.name || "—"}</td>
                      <td className="px-6 py-4">
                        <a href={`mailto:${lead.email}`} className="text-[#004225] hover:underline">{lead.email}</a>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide ${
                          lead.source==="whitebook"
                            ? "bg-[#C9A96E]/20 text-[#A07840]"
                            : "bg-[#004225]/10 text-[#004225]"
                        }`}>{lead.source}</span>
                      </td>
                      <td className="px-6 py-4 text-xs text-[#6B6960] max-w-xs truncate">{lead.message || "—"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        <p className="text-center text-xs text-[#6B6960]/40 mt-8">
          EFFL Admin · myeffl.com · Données stockées dans Supabase
        </p>
      </div>
    </div>
  );
}
