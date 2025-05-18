import { ReactNode, createElement } from "react";
import { cn } from "@/lib/utils";

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

interface SectionHeadingProps {
  level: HeadingLevel;
  children: ReactNode;
  className?: string;
}

export default function SectionHeading({
  level,
  children,
  className,
}: SectionHeadingProps) {
  const tag = `h${level}`;

  const defaultClasses = cn("text-retro-blue text-shadow-vintage", className);

  return createElement(tag, { className: defaultClasses }, children);
}
