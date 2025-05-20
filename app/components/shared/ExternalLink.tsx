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

// Type for the linkProps object that may include buttonProps
type LinkPropsWithButtonProps = {
  href: string;
  target: string;
  rel: string;
  "aria-label"?: string | undefined;
  buttonProps?: Omit<RetroButtonProps, "children" | "onClick"> | undefined;
  [key: string]: unknown; // For other HTMLAnchorElement attributes
};

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
  const linkProps: LinkPropsWithButtonProps = {
    ...restProps, // Spread additional props first so specific props take precedence
    href,
    target: target ?? "_blank", // Use provided target or default to _blank
    rel: rel ?? "noopener noreferrer", // Use provided rel or default to noopener noreferrer
    ...(ariaLabel && { "aria-label": ariaLabel }),
  };

  if (variant === "button") {
    const { buttonProps } = props as ButtonLinkProps;
    
    // Add buttonProps to linkProps if we're in button variant
    if (buttonProps) {
      linkProps.buttonProps = buttonProps;
    }
    
    // Remove buttonProps from linkProps to avoid React DOM attribute warnings
    // Using proper typing instead of 'any'
    // eslint-disable-next-line @typescript-eslint/no-unused-vars -- Intentionally extracting buttonProps to remove from linkProps
    const { buttonProps: unusedButtonProps, ...cleanLinkProps } = linkProps;

    return (
      <a {...cleanLinkProps} className={className}>
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
