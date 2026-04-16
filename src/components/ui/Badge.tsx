import { cn } from "@/lib/utils";

type Variant = "default" | "cyan" | "blue" | "navy" | "green" | "amber";

interface BadgeProps {
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
}

const variants: Record<Variant, string> = {
  default: "bg-neutral-100 text-neutral-700",
  cyan:    "bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20",
  blue:    "bg-brand-blue/10 text-brand-blue border border-brand-blue/20",
  navy:    "bg-brand-navy/10 text-brand-navy border border-brand-navy/20",
  green:   "bg-emerald-50 text-emerald-700 border border-emerald-200",
  amber:   "bg-amber-50 text-amber-700 border border-amber-200",
};

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold tracking-wide",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
