import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20",
        className
      )}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan shrink-0" />
      <span className="text-xs font-semibold tracking-widest uppercase text-brand-cyan">
        {children}
      </span>
    </div>
  );
}
