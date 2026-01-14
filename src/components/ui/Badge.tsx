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
          ? "bg-neutral-100 text-neutral-700"
          : "border border-neutral-300 text-neutral-600",
        className
      )}
    >
      {children}
    </span>
  );
}
