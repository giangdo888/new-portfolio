import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "outline";
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 text-xs font-medium rounded-full transition-colors",
        variant === "default"
          ? "bg-primary/10 text-foreground"
          : "border border-border-strong text-foreground-muted",
        className
      )}
    >
      {children}
    </span>
  );
}
