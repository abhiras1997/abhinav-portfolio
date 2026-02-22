"use client";

import { useEffect, useMemo, useState } from "react";
import { supabase } from "@/lib/supabase";

const STATUS_OPTIONS = ["New", "Contacted", "Won", "Lost"];

export default function AdminPage() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const [q, setQ] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const [selected, setSelected] = useState(null);
  const [updatingId, setUpdatingId] = useState(null);
  const [deletingId, setDeletingId] = useState(null);

  const [lastUpdated, setLastUpdated] = useState(null);

  useEffect(() => {
    fetchLeads();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function fetchLeads() {
    setLoading(leads.length === 0);
    setRefreshing(leads.length > 0);

    const { data, error } = await supabase
      .from("leads")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error(error);
    } else {
      setLeads(data || []);
      setLastUpdated(new Date());
    }

    setLoading(false);
    setRefreshing(false);
  }

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    return leads.filter((l) => {
      const matchesQuery =
        !query ||
        `${l.name ?? ""} ${l.email ?? ""} ${l.company ?? ""} ${l.website ?? ""} ${l.phone ?? ""}`
          .toLowerCase()
          .includes(query);

      const matchesStatus =
        statusFilter === "All" ||
        (l.status ?? "New") === statusFilter;

      return matchesQuery && matchesStatus;
    });
  }, [leads, q, statusFilter]);

  async function updateLead(id, patch) {
    setUpdatingId(id);
    const { data, error } = await supabase
      .from("leads")
      .update(patch)
      .eq("id", id)
      .select("*")
      .single();

    if (error) {
      console.error(error);
      alert(error.message || "Update failed");
      setUpdatingId(null);
      return;
    }

    setLeads((prev) => prev.map((l) => (l.id === id ? data : l)));
    setSelected((prev) => (prev && prev.id === id ? data : prev));
    setUpdatingId(null);
  }

  async function deleteLead(id) {
    const ok = window.confirm("Delete this lead? This cannot be undone.");
    if (!ok) return;

    setDeletingId(id);
    const { error } = await supabase.from("leads").delete().eq("id", id);

    if (error) {
      console.error(error);
      alert(error.message || "Delete failed");
      setDeletingId(null);
      return;
    }

    setLeads((prev) => prev.filter((l) => l.id !== id));
    setSelected((prev) => (prev && prev.id === id ? null : prev));
    setDeletingId(null);
  }

  return (
    <div className="min-h-screen bg-[#070A12] text-white">
      <div className="mx-auto max-w-6xl px-6 py-10">
        {/* Header */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-3xl font-semibold">Leads Dashboard</h1>
            <p className="mt-1 text-sm text-white/60">
              {lastUpdated
                ? `Last updated: ${lastUpdated.toLocaleString()}`
                : "—"}
            </p>
          </div>

          <div className="flex gap-2">
            <button
              onClick={fetchLeads}
              className="rounded-xl border border-white/20 px-4 py-2 text-sm text-white/90 hover:border-white/40"
            >
              {refreshing ? "Refreshing…" : "Refresh"}
            </button>
          </div>
        </div>

        {/* Controls */}
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search name, email, company, website, phone…"
            className="w-full sm:max-w-md rounded-xl border border-white/10 bg-black/30 px-4 py-2 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/25"
          />

          <div className="flex gap-2">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="rounded-xl border border-white/10 bg-black/30 px-3 py-2 text-sm text-white outline-none focus:border-white/25"
            >
              <option value="All">All statuses</option>
              {STATUS_OPTIONS.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>

            <span className="self-center text-sm text-white/60">
              {filtered.length} lead{filtered.length === 1 ? "" : "s"}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="mt-6 grid gap-6 items-startlg:grid-cols-[1fr_360px]">
          {/* Table */}
          <div className="rounded-2xl border border-white/10">
            {loading ? (
              <div className="p-6 text-white/70">Loading leads...</div>
            ) : filtered.length === 0 ? (
              <div className="p-6 text-white/70">No leads found.</div>
            ) : (
              <table className="w-full text-sm">
                <thead className="bg-white/5">
                  <tr className="text-left">
                    <th className="px-4 py-3">Name</th>
                    <th className="px-4 py-3">Email</th>
                    <th className="px-4 py-3">Company</th>
                    <th className="px-4 py-3">Status</th>
                    <th className="px-4 py-3">Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {filtered.map((lead) => {
                    const status = lead.status ?? "New";
                    const isBusy = updatingId === lead.id || deletingId === lead.id;

                    return (
                      <tr
                        key={lead.id}
                        className={[
                          "border-t border-white/10 hover:bg-white/5",
                          selected?.id === lead.id ? "bg-white/[0.04]" : "",
                        ].join(" ")}
                        onClick={() => setSelected(lead)}
                        style={{ cursor: "pointer" }}
                      >
                        <td className="px-4 py-3">{lead.name}</td>
                        <td className="px-4 py-3">{lead.email}</td>
                        <td className="px-4 py-3">{lead.company || "—"}</td>

                        <td className="px-4 py-3" onClick={(e) => e.stopPropagation()}>
                          <select
                            value={status}
                            disabled={isBusy}
                            onChange={(e) =>
                              updateLead(lead.id, { status: e.target.value })
                            }
                            className="rounded-lg border border-white/10 bg-black/30 px-2 py-1 text-xs text-white outline-none focus:border-white/25"
                          >
                            {STATUS_OPTIONS.map((s) => (
                              <option key={s} value={s}>
                                {s}
                              </option>
                            ))}
                          </select>
                        </td>

                        <td className="px-4 py-3" onClick={(e) => e.stopPropagation()}>
                          <div className="flex gap-2">
                            <button
                              disabled={isBusy || status === "Contacted"}
                              onClick={() => updateLead(lead.id, { status: "Contacted" })}
                              className="rounded-lg border border-white/15 px-2 py-1 text-xs hover:border-white/30 disabled:opacity-40"
                              title="Mark as contacted"
                            >
                              Contacted
                            </button>

                            <button
                              disabled={isBusy}
                              onClick={() => deleteLead(lead.id)}
                              className="rounded-lg border border-red-400/30 px-2 py-1 text-xs text-red-200 hover:border-red-400/60 disabled:opacity-40"
                              title="Delete lead"
                            >
                              {deletingId === lead.id ? "Deleting…" : "Delete"}
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </div>

          {/* Details panel */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            {!selected ? (
              <div className="text-white/70">
                Click a lead to see details.
              </div>
            ) : (
              <LeadDetails
                lead={selected}
                busy={updatingId === selected.id || deletingId === selected.id}
                onClose={() => setSelected(null)}
                onUpdate={(patch) => updateLead(selected.id, patch)}
                onDelete={() => deleteLead(selected.id)}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function LeadDetails({ lead, busy, onClose, onUpdate, onDelete }) {
  const status = lead.status ?? "New";

  return (
    <div>
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-lg font-semibold">{lead.name}</p>
          <p className="text-sm text-white/70">{lead.email}</p>
        </div>

        <button
          onClick={onClose}
          className="rounded-xl border border-white/20 px-3 py-1 text-sm hover:border-white/40"
        >
          Close
        </button>
      </div>

      <div className="mt-4 space-y-2 text-sm">
        <KV label="Company" value={lead.company || "—"} />

        <KV
          label="Website"
          value={
            lead.website ? (
              <a
                className="underline hover:text-white"
                href={lead.website}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                {lead.website}
              </a>
            ) : (
              "—"
            )
          }
        />

        <KV
          label="Phone"
          value={`${lead.country_code ?? ""} ${lead.phone ?? ""}`.trim() || "—"}
        />

        <KV label="Budget" value={lead.budget || "—"} />

        <div className="pt-2">
          <p className="text-xs font-semibold text-white/60">STATUS</p>
          <select
            value={status}
            disabled={busy}
            onChange={(e) => onUpdate({ status: e.target.value })}
            className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-3 py-2 text-sm text-white outline-none focus:border-white/25"
          >
            {STATUS_OPTIONS.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        <div className="pt-2">
          <p className="text-xs font-semibold text-white/60">NOTES</p>
          <textarea
            defaultValue={lead.notes || ""}
            disabled={busy}
            placeholder="Add internal notes (not visible to user)…"
            className="mt-2 w-full min-h-[110px] resize-none rounded-xl border border-white/10 bg-black/30 px-3 py-2 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/25"
            onBlur={(e) => {
              const notes = e.target.value.trim();
              onUpdate({ notes: notes || null });
            }}
          />
          <p className="mt-2 text-xs text-white/45">
            Tip: notes save on blur (when you click away).
          </p>
        </div>

        <div className="pt-2">
          <p className="text-xs text-white/50">
            Created: {new Date(lead.created_at).toLocaleString()}
          </p>
        </div>

        <div className="mt-4 flex gap-2">
          <button
            disabled={busy || status === "Contacted"}
            onClick={() => onUpdate({ status: "Contacted" })}
            className="flex-1 rounded-xl border border-white/20 px-4 py-2 text-sm hover:border-white/40 disabled:opacity-40"
          >
            Mark Contacted
          </button>

          <button
            disabled={busy}
            onClick={onDelete}
            className="rounded-xl border border-red-400/30 px-4 py-2 text-sm text-red-200 hover:border-red-400/60 disabled:opacity-40"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

function KV({ label, value }) {
  return (
    <div>
      <p className="text-xs font-semibold text-white/60">{label}</p>
      <div className="mt-1 text-white/85">{value}</div>
    </div>
  );
}
