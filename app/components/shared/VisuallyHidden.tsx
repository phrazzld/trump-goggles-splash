import { ReactNode } from "react";

interface VisuallyHiddenProps {
  children: ReactNode;
}

export default function VisuallyHidden({ children }: VisuallyHiddenProps) {
  return <span className="sr-only">{children}</span>;
}