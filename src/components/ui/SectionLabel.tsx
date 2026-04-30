import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-light border border-line",
        className
      )}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
      <span className="text-xs font-semibold tracking-widest uppercase text-primary">
        {children}
      </span>
    </div>
  );
}
