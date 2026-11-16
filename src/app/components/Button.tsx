/**
 * Button — FP Design System
 *
 * Variants (from design-system.md):
 *   primary, secondary, outline, ghost, link, destructive,
 *   link-destructive, icon-primary, icon-secondary, icon-outline, icon-ghost
 *
 * Sizes: extra-small, small (sm alias), medium (md alias)*, large (lg alias)
 *
 * "danger" kept as a backward-compatible alias for "destructive".
 * All color tokens sourced from design-system.md Color Tokens section.
 */

import React from "react";

type Variant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "link"
  | "destructive"
  | "link-destructive"
  | "icon-primary"
  | "icon-secondary"
  | "icon-outline"
  | "icon-ghost"
  | "danger"; // alias → destructive

type Size = "extra-small" | "small" | "medium" | "large" | "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  loading?: boolean;
  children: React.ReactNode;
}

// ── Alias normalisation ───────────────────────────────────────────────────────

type CoreVariant = Exclude<Variant, "danger">;
type CoreSize = "extra-small" | "small" | "medium" | "large";

function resolveVariant(v: Variant): CoreVariant {
  return v === "danger" ? "destructive" : v;
}

function resolveSize(s: Size): CoreSize {
  if (s === "sm") return "small";
  if (s === "md") return "medium";
  if (s === "lg") return "large";
  return s as CoreSize;
}

// ── Background fills ──────────────────────────────────────────────────────────
// Tokens: button/<variant>/fill/<state> from design-system.md

const BG_DEFAULT: Record<CoreVariant, string> = {
  "primary":          "#3f51b5", // Blue/blue-500
  "secondary":        "#f1f3f4", // Neutral/gray-100
  "outline":          "#ffffff", // Neutral/white
  "ghost":            "transparent",
  "link":             "transparent",
  "destructive":      "#be1316", // Red/red-600
  "link-destructive": "transparent",
  "icon-primary":     "#3f51b5",
  "icon-secondary":   "#f1f3f4",
  "icon-outline":     "#ffffff",
  "icon-ghost":       "transparent",
};

const BG_HOVER: Record<CoreVariant, string> = {
  "primary":          "#324090", // Blue/blue-600
  "secondary":        "#dde0e4", // Neutral/gray-200
  "outline":          "#f1f3f4", // Neutral/gray-100
  "ghost":            "#f1f3f4",
  "link":             "transparent",
  "destructive":      "#900f11", // Red/red-700
  "link-destructive": "transparent",
  "icon-primary":     "#324090",
  "icon-secondary":   "#dde0e4",
  "icon-outline":     "#f1f3f4",
  "icon-ghost":       "#f1f3f4",
};

const BG_PRESSED: Record<CoreVariant, string> = {
  "primary":          "#26316e", // Blue/blue-700
  "secondary":        "#c9ced4", // Neutral/gray-300
  "outline":          "#c9ced4",
  "ghost":            "#c9ced4",
  "link":             "transparent",
  "destructive":      "#5d090b", // Red/red-800
  "link-destructive": "transparent",
  "icon-primary":     "#26316e",
  "icon-secondary":   "#c9ced4",
  "icon-outline":     "#c9ced4",
  "icon-ghost":       "#c9ced4",
};

// ── Foreground / text color ───────────────────────────────────────────────────
// link variants change color per state; all others are static

function getFgColor(v: CoreVariant, hovered: boolean, pressed: boolean): string {
  if (v === "link") {
    if (pressed) return "#26316e"; // Blue/blue-700
    if (hovered) return "#324090"; // Blue/blue-600
    return "#3f51b5";              // Blue/blue-500
  }
  if (v === "link-destructive") {
    if (pressed) return "#5d090b"; // Red/red-800
    if (hovered) return "#900f11"; // Red/red-700
    return "#be1316";              // Red/red-600
  }
  const lightText = ["primary", "destructive", "icon-primary"];
  return lightText.includes(v) ? "#ffffff" : "#1e2125"; // white or Neutral/gray-800
}

// ── Borders ───────────────────────────────────────────────────────────────────

function getBorder(v: CoreVariant): string {
  if (v === "outline" || v === "icon-outline") return "1px solid #c9ced4"; // Neutral/gray-300
  return "none";
}

// ── Sizes ─────────────────────────────────────────────────────────────────────

const SIZE_STYLES: Record<CoreSize, React.CSSProperties> = {
  "extra-small": { height: 24, padding: "0 10px", fontSize: 11, gap: 4 },
  "small":       { height: 32, padding: "0 16px", fontSize: 12, gap: 6 },
  "medium":      { height: 40, padding: "0 20px", fontSize: 14, gap: 6 },
  "large":       { height: 48, padding: "0 24px", fontSize: 16, gap: 8 },
};

const ICON_SIZE_STYLES: Record<CoreSize, React.CSSProperties> = {
  "extra-small": { width: 24, height: 24, padding: 0 },
  "small":       { width: 32, height: 32, padding: 0 },
  "medium":      { width: 40, height: 40, padding: 0 },
  "large":       { width: 48, height: 48, padding: 0 },
};

// ── Component ─────────────────────────────────────────────────────────────────

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button({
  variant = "primary",
  size = "medium",
  loading = false,
  disabled,
  children,
  style,
  onMouseEnter,
  onMouseLeave,
  onMouseDown,
  onMouseUp,
  onFocus,
  onBlur,
  ...props
}, ref) {
  const [hovered, setHovered] = React.useState(false);
  const [pressed, setPressed] = React.useState(false);
  const [focused, setFocused] = React.useState(false);

  const v = resolveVariant(variant);
  const s = resolveSize(size);
  const isDisabled = disabled || loading;
  const isIcon = v.startsWith("icon-");
  const isLink = v === "link" || v === "link-destructive";

  const bg = isDisabled
    ? BG_DEFAULT[v]
    : pressed ? BG_PRESSED[v]
    : hovered ? BG_HOVER[v]
    : BG_DEFAULT[v];

  const color = getFgColor(v, !isDisabled && hovered, !isDisabled && pressed);
  const sizeStyle = isIcon ? ICON_SIZE_STYLES[s] : SIZE_STYLES[s];
  const hasShadow = (v === "primary" || v === "destructive") && !pressed && !isDisabled;

  const computedStyle: React.CSSProperties = {
    display:        "inline-flex",
    alignItems:     "center",
    justifyContent: "center",
    borderRadius:   6,
    whiteSpace:     "nowrap",
    userSelect:     "none",
    cursor:         isDisabled ? "not-allowed" : "pointer",
    fontFamily:     "'Roboto', sans-serif",
    fontWeight:     500,
    color,
    background:     bg,
    opacity:        isDisabled ? 0.5 : 1,
    boxShadow:      hasShadow ? "0px 1px 2px rgba(0,0,0,0.06)" : "none",
    border:         getBorder(v),
    textDecoration: isLink && hovered ? "underline" : "none",
    outline:        focused && !isDisabled ? `2px solid #8d99d8` : "none",
    outlineOffset:  2,
    transition:     "background 0.1s ease, color 0.1s ease, box-shadow 0.1s ease, opacity 0.1s ease",
    ...sizeStyle,
    ...style,
  };

  return (
    <button
      {...props}
      ref={ref}
      disabled={isDisabled}
      style={computedStyle}
      onMouseEnter={(e) => { setHovered(true);  onMouseEnter?.(e); }}
      onMouseLeave={(e) => { setHovered(false); setPressed(false); onMouseLeave?.(e); }}
      onMouseDown={(e)  => { setPressed(true);  onMouseDown?.(e); }}
      onMouseUp={(e)    => { setPressed(false); onMouseUp?.(e); }}
      onFocus={(e)      => { setFocused(true);  onFocus?.(e); }}
      onBlur={(e)       => { setFocused(false); onBlur?.(e); }}
    >
      {loading ? <Spinner /> : children}
    </button>
  );
});

function Spinner() {
  return (
    <svg
      width="14" height="14" viewBox="0 0 14 14" fill="none"
      style={{ animation: "fp-btn-spin 0.8s linear infinite", flexShrink: 0 }}
    >
      <style>{`@keyframes fp-btn-spin { to { transform: rotate(360deg); } }`}</style>
      <circle cx="7" cy="7" r="5" stroke="currentColor" strokeOpacity="0.35" strokeWidth="2" />
      <path d="M7 2a5 5 0 0 1 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
