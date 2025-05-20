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
  target?: string;
  rel?: string;
}

// Extend BaseExternalLinkProps to include all HTML anchor attributes
type BaseProps = BaseExternalLinkProps & Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  keyof BaseExternalLinkProps
>;

interface TextLinkProps extends BaseProps {
  variant?: "text";
}

interface ButtonLinkProps extends BaseProps {
  variant: "button";
  buttonProps?: Omit<RetroButtonProps, "children" | "onClick">;
}

export type ExternalLinkProps = TextLinkProps | ButtonLinkProps;

export default function ExternalLink(props: ExternalLinkProps) {
  const { 
    href, 
    children, 
    className, 
    ariaLabel, 
    target, 
    rel,
    variant = "text",
    ...restProps 
  } = props;

  // Security attributes for all external links with ability to override
  const linkProps = {
    ...restProps, // Spread additional props first so specific props take precedence
    href,
    target: target ?? "_blank", // Use provided target or default to _blank
    rel: rel ?? "noopener noreferrer", // Use provided rel or default to noopener noreferrer
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
