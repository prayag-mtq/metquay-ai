import { cn } from "@/lib/cn";

type FilterChipsProps = {
  label: string;
  options: readonly string[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
};

export function FilterChips({ label, options, value, onChange, className }: FilterChipsProps) {
  return (
    <div role="group" aria-label={label} className={cn("flex flex-wrap gap-2", className)}>
      {options.map((option) => (
        <button
          key={option}
          type="button"
          aria-pressed={value === option}
          onClick={() => onChange(option)}
          className={cn(
            "h-9 rounded-full border px-4 text-small font-semibold transition-colors",
            value === option
              ? "border-purple bg-purple-deep text-text"
              : "border-border-strong text-muted hover:border-text hover:text-text",
          )}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
