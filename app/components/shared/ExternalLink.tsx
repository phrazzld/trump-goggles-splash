import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import RetroButton, { RetroButtonProps } from "./RetroButton";
import { ExternalLink as ExternalLinkIcon } from "lucide-react";

export type LinkVariant = "button" | "text";

interface BaseExternalLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
}

interface TextLinkProps extends BaseExternalLinkProps {
  variant?: "text";
}

interface ButtonLinkProps extends BaseExternalLinkProps {
  variant: "button";
  buttonProps?: Omit<RetroButtonProps, "children" | "onClick">;
}

export type ExternalLinkProps = TextLinkProps | ButtonLinkProps;

export default function ExternalLink(props: ExternalLinkProps) {
  const { href, children, className, ariaLabel, variant = "text" } = props;

  // Security attributes for all external links
  const linkProps = {
    href,
    target: "_blank",
    rel: "noopener noreferrer",
    ...(ariaLabel && { "aria-label": ariaLabel }),
  };

  if (variant === "button") {
    const { buttonProps } = props as ButtonLinkProps;

    return (
      <a {...linkProps} className={className}>
        <RetroButton {...buttonProps}>{children}</RetroButton>
      </a>
    );
  }

  // Text variant
  return (
    <a
      {...linkProps}
      className={cn(
        "text-retro-blue underline hover:text-retro-red transition-colors inline-flex items-center gap-1",
        className,
      )}
    >
      {children}
      <ExternalLinkIcon 
        size={16} 
        className="inline" 
        aria-hidden="true"
      />
      <span className="sr-only">(opens in new tab)</span>
    </a>
  );
}
