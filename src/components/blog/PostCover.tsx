import { cn } from "@/lib/cn";

const accents = ["#7b68ee", "#8cff2e", "#38bdf8", "#f59e0b", "#f472b6"];

const accentFor = (category: string) =>
  accents[[...category].reduce((sum, char) => sum + char.charCodeAt(0), 0) % accents.length];

export function PostCover({ category, className }: { category: string; className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn("relative aspect-video overflow-hidden bg-surface", className)}
      style={{ "--accent": accentFor(category) } as React.CSSProperties}
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:28px_28px]" />
      <div className="absolute -top-1/3 -right-1/4 size-[85%] rounded-full bg-(--accent) opacity-25 blur-3xl" />
      <div className="relative flex h-full flex-col justify-end p-6">
        <span className="mb-3 h-1 w-10 rounded-full bg-(--accent)" />
        <span className="text-h3 font-semibold tracking-tight text-text">{category}</span>
      </div>
    </div>
  );
}
