import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import RetroButton, { RetroButtonProps } from "./RetroButton";

export type LinkVariant = "button" | "text";

interface BaseExternalLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
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
  const { href, children, className, variant = "text" } = props;

  // Security attributes for all external links
  const linkProps = {
    href,
    target: "_blank",
    rel: "noopener noreferrer",
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
        "text-retro-blue underline hover:text-retro-red transition-colors",
        className,
      )}
    >
      {children}
    </a>
  );
}
