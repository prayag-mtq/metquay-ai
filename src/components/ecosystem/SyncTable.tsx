import type { SyncRow } from "@/content/pages/ecosystem";

export function SyncTable({ caption, rows }: { caption: string; rows: SyncRow[] }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card">
      <table className="w-full text-left text-small">
        <caption className="sr-only">{caption}</caption>
        <thead className="bg-white/[0.03] text-xs font-semibold tracking-wide text-subtle uppercase">
          <tr>
            <th scope="col" className="px-5 py-3">
              What syncs
            </th>
            <th scope="col" className="px-5 py-3">
              Direction
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {rows.map((row) => (
            <tr key={row.what}>
              <td className="px-5 py-4 font-semibold text-text">{row.what}</td>
              <td className="px-5 py-4 text-lime">{row.direction}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
