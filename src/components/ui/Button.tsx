"use client";

import Link from "next/link";
import { type ButtonHTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

interface SharedProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
}

type ButtonOnlyProps = SharedProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> & {
    href?: undefined;
  };

type LinkOnlyProps = SharedProps & {
  href: string;
  target?: string;
  rel?: string;
};

type Props = ButtonOnlyProps | LinkOnlyProps;

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-brand-cyan text-white hover:bg-brand-cyan-light shadow-sm hover:shadow-md border border-transparent",
  secondary:
    "bg-brand-blue text-white hover:bg-brand-blue-mid shadow-sm hover:shadow-md border border-transparent",
  outline:
    "bg-transparent text-brand-cyan border border-brand-cyan hover:bg-brand-cyan hover:text-white",
  ghost:
    "bg-transparent text-brand-navy hover:bg-neutral-100 border border-transparent",
};

const sizeStyles: Record<Size, string> = {
  sm: "px-4 py-2 text-sm rounded-lg gap-1.5",
  md: "px-6 py-3 text-sm rounded-xl gap-2",
  lg: "px-8 py-4 text-base rounded-xl gap-2.5",
};

const base =
  "inline-flex items-center justify-center font-semibold tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

export function Button(props: Props) {
  const { variant = "primary", size = "md", className, children } = props;
  const classes = cn(base, variantStyles[variant], sizeStyles[size], className);

  if (props.href !== undefined) {
    const { href, target, rel } = props as LinkOnlyProps;
    return (
      <Link href={href} className={classes} target={target} rel={rel}>
        {children}
      </Link>
    );
  }

  const { href: _href, variant: _v, size: _s, className: _c, children: _ch, ...rest } =
    props as ButtonOnlyProps & { href?: undefined };

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
