import { cn } from "@/lib/cn";

type StatGridProps = { stats: { value: string; label: string }[]; size?: "md" | "lg" };

export function StatGrid({ stats, size = "md" }: StatGridProps) {
  return (
    <dl className="grid grid-cols-2 gap-4">
      {stats.map((stat) => (
        <div key={stat.label} className="flex flex-col rounded-2xl border border-border p-5">
          <dt className="text-small text-subtle">{stat.label}</dt>
          <dd className={cn("order-first font-semibold text-lime", size === "lg" ? "text-h2" : "text-h3")}>
            {stat.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
