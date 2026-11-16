# FP Design System — Agent Instructions

## Before You Generate Any UI

1. **Read `design-system.md`** in this project root. It is the single source of truth for all available components, variant properties, and color tokens.
2. **Do not create new components** if a matching one already exists in the design system. Check first.
3. **Do not hardcode hex color values.** Always use semantic color tokens so Light and Dark modes resolve automatically.

## Components

Use components by their exact name and variant properties as documented in `design-system.md`. Examples:

- `Button` with `Variant="primary"`, `Size="medium"`, `State="default"`
- `Badge` with `Color="Blue"`, `Appearance="Soft"`, `Shape="Pill"`, `Size="SM"`
- `Input field` with `Type="Text field"`, `State="Enabled"`

Do not invent variant values that are not listed. Default values (marked `*`) can be omitted.

## Icons

Always use **Lucide** icons (`lucide-react` or equivalent Lucide package for the target framework). Do not use icons from other libraries (Heroicons, Font Awesome, Material Icons, etc.) unless explicitly requested.

## Color Tokens

- **Semantic tokens** (e.g., `text/textDefault`, `button/primary/fill/default`, `surface/surface-interactive`) are required. They automatically map to the correct Light/Dark mode value.
- **Primitive tokens** (e.g., `Blue/blue-500`, `Neutral/gray-800`) should only be used when no semantic token exists for the use case.
- **Raw hex values** are never acceptable in generated code.

## Design System Source

- **Figma file**: [FP Design System](https://www.figma.com/design/gXqJmgkRL7ykr2Z3PNtBTd/FP-Design-System)
- **Components page**: node `57-7031`
- Ignore anything labeled "legacy" or "deprecated".
