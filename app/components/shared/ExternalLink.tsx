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
  variant?: LinkVariant;
}

// Extend BaseExternalLinkProps to include all HTML anchor attributes except those already handled
// Note: ariaLabel is a prop we handle separately and convert to aria-label for the DOM
type BaseProps = BaseExternalLinkProps & Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  keyof BaseExternalLinkProps | 'aria-label'
>;

// ReactHTMLAttributes already includes data-* attributes through index signatures,
// but to be explicit and for better documentation, we'll define common testing props
interface DataTestProps {
  'data-testid'?: string;
  'data-test'?: string;
  'data-cy'?: string;
  'data-e2e'?: string;
}

interface TextLinkProps extends BaseProps, DataTestProps {
  variant?: "text";
}

interface ButtonLinkProps extends BaseProps, DataTestProps {
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
    // Using type assertion for ButtonLinkProps to get proper typing for buttonProps
    const typedProps = props as ButtonLinkProps;
    const {
      href: currentHref,
      children: currentChildren,
      className: currentClassName,
      ariaLabel: currentAriaLabel,
      target: currentTarget,
      rel: currentRel,
      buttonProps, // Specific to ButtonLinkProps
      // Omit already destructured props and those we handle separately
      ...anchorRestProps // These are the actual passthrough props for the <a> tag
    } = typedProps;
    
    // Construct finalAnchorProps for the <a> tag
    const finalAnchorProps = {
      ...anchorRestProps,
      href: currentHref,
      target: currentTarget ?? "_blank",
      rel: currentRel ?? "noopener noreferrer",
      ...(currentAriaLabel && { "aria-label": currentAriaLabel }),
      className: cn(
        'inline-flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-retro-blue focus-visible:ring-offset-2 focus-visible:ring-offset-retro-cream', 
        currentClassName
      )
    };

    return (
      <a {...finalAnchorProps}>
        <RetroButton {...buttonProps}>{currentChildren}</RetroButton>
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
