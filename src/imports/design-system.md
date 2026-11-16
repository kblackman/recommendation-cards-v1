# FP Design System

> Source: [FP Design System – Figma](https://www.figma.com/design/gXqJmgkRL7ykr2Z3PNtBTd/FP-Design-System)

---

## Components

### Button

The primary interactive element. Supports 11 variant types across 4 sizes and 5 interaction states.


| Property | Values                                                                                                                                                |
| -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| Variant  | `primary`, `secondary`, `outline`, `ghost`, `link`, `destructive`, `link-destructive`, `icon-primary`, `icon-secondary`, `icon-outline`, `icon-ghost` |
| Size     | `extra-small`, `small`, `medium*` (default), `large`                                                                                                  |
| State    | `default`, `hover`, `focus`, `disabled`, `pressed`                                                                                                    |


- `icon-*` variants render as square icon-only buttons (no label).
- `link` and `link-destructive` render with no background fill — text only.
- `medium*` is the default size.

### Alert Banner

Full-width alert displayed at the top of a page or section.


| Property | Values                                |
| -------- | ------------------------------------- |
| Type     | `Standard`, `With description`        |
| Status   | `Error`, `Warning`, `Success`, `Info` |


### Alert Inline

Contextual alert rendered inline within content.


| Property | Values                                |
| -------- | ------------------------------------- |
| Type     | `Standard`, `Text`                    |
| Status   | `Error`, `Warning`, `Success`, `Info` |


### Toast

Ephemeral notification that appears temporarily.


| Property | Values                                |
| -------- | ------------------------------------- |
| Status   | `Error`, `Warning`, `Success`, `Info` |


### Background Progress

Progress indicator for background operations.


| Property | Values                        |
| -------- | ----------------------------- |
| Status   | `Loading`, `Success`, `Error` |


### Badge

Labeling element for categorization and status.


| Property   | Values                                                 |
| ---------- | ------------------------------------------------------ |
| Color      | `Light Gray`, `Gray`, `Blue`, `Green`, `Yellow`, `Red` |
| Appearance | `Soft`, `Outline`, `Filled`                            |
| Shape      | `Pill`, `Rectangular`                                  |
| Size       | `LG`, `SM`                                             |


#### Badge Text Color Tokens

| Badge Color | Text Token         |
| ----------- | ------------------ |
| Light Gray  | `Neutral/gray-500` |
| Gray        | `Neutral/gray-700` |
| Blue        | `Blue/blue-600`    |
| Green       | `Green/green-800`  |
| Yellow      | `Yellow/yellow-800`|
| Red         | `Red/red-700`      |


### Tag

Interactive label with selection and error states.


| Property | Values                                                        |
| -------- | ------------------------------------------------------------- |
| Size     | `MD`, `SM`                                                    |
| State    | `Enabled`, `Error`, `Disabled`, `Hover`, `Pressed`, `Focused` |


### Chip

Compact selection element.


| Property | Values                                                           |
| -------- | ---------------------------------------------------------------- |
| State    | `Enabled`, `Disabled`, `Focused`, `Hover`, `Pressed`, `Selected` |


### User Avatar

User representation with optional color mode support.


| Property | Values                                                           |
| -------- | ---------------------------------------------------------------- |
| Color    | `Light`, `Dark`                                                  |
| Size     | `LG`, `MD`, `SM`, `XS`                                           |
| State    | `Enabled`, `Disabled`, `Hover`, `Pressed`, `Focused`, `Selected` |


### Status

Status indicator dot.


| Property | Values                                          |
| -------- | ----------------------------------------------- |
| Status   | `Error`, `In progress`, `Connected`, `Disabled` |


### Numbered Badge

Numeric count indicator.


| Property | Values        |
| -------- | ------------- |
| Color    | `Red`, `Gray` |


### Tab

Individual tab element.


| Property | Values                                               |
| -------- | ---------------------------------------------------- |
| Size     | `Large`, `Small`                                     |
| Selected | `True`, `False`                                      |
| State    | `Enabled`, `Disabled`, `Hover`, `Pressed`, `Focused` |


### Tab Group

Container for multiple Tab components.


| Property | Values           |
| -------- | ---------------- |
| Size     | `Large`, `Small` |


### Segmented Control

Toggle between mutually exclusive options.


| Property | Values                                                           |
| -------- | ---------------------------------------------------------------- |
| Type     | `Icon`, `Text`                                                   |
| State    | `Enabled`, `Hover`, `Pressed`, `Selected`, `Focused`, `Disabled` |


### Checkbox

Multi-select form control with tri-state support.


| Property | Values                                               |
| -------- | ---------------------------------------------------- |
| Selected | `Unselected`, `Indeterminate`, `Selected`            |
| State    | `Enabled`, `Hover`, `Pressed`, `Focused`, `Disabled` |


### Radio Field

Single-select form control.


| Property | Values                                               |
| -------- | ---------------------------------------------------- |
| Selected | `True`, `False`                                      |
| State    | `Enabled`, `Hover`, `Pressed`, `Focused`, `Disabled` |


### Toggle Switch Field

Binary on/off control with configurable label position.


| Property        | Values                                               |
| --------------- | ---------------------------------------------------- |
| Selected        | `True`, `False`                                      |
| State           | `Enabled`, `Hover`, `Pressed`, `Focused`, `Disabled` |
| Toggle position | `Leading`, `Trailing`                                |


### Input Field

Text entry control.


| Property | Values                                                                                  |
| -------- | --------------------------------------------------------------------------------------- |
| Type     | `Text field`, `Text area`                                                               |
| State    | `Enabled`, `Disabled`, `Hover`, `Focused`, `Filling`, `Filled`, `Filled hover`, `Error` |


### Search

Search input with compact variant.


| Property | Values                                                                                  |
| -------- | --------------------------------------------------------------------------------------- |
| Size     | `Standard`, `Compact`                                                                   |
| State    | `Enabled`, `Disabled`, `Hover`, `Filled`, `Filled hover`, `Focused`, `Filling`, `Error` |


### Dropdown

Single-value selection control.


| Property | Values                                                                       |
| -------- | ---------------------------------------------------------------------------- |
| State    | `Enabled`, `Disabled`, `Hover`, `Focused`, `Filled`, `Filled hover`, `Error` |


### Combo Box

Searchable selection control supporting single and multi-select.


| Property | Values                                                                                  |
| -------- | --------------------------------------------------------------------------------------- |
| Type     | `Single select`, `Multiselect`                                                          |
| State    | `Enabled`, `Disabled`, `Hover`, `Focused`, `Filling`, `Filled`, `Filled hover`, `Error` |


### Tag Input

Text input that produces tags.


| Property | Values                                                                                  |
| -------- | --------------------------------------------------------------------------------------- |
| State    | `Enabled`, `Disabled`, `Hover`, `Focused`, `Filling`, `Filled`, `Filled hover`, `Error` |


### Filter

Filtering control element.


| Property | Values                                              |
| -------- | --------------------------------------------------- |
| Type     | `Standard`, `More`                                  |
| State    | `Enabled`, `Disabled`, `Hover`, `Focused`, `Filled` |


### Filter Bar

Container for filter controls.


| Property | Values                        |
| -------- | ----------------------------- |
| Type     | `Standard`, `Selections made` |


### Menu

Dropdown menu container.


| Property | Values                                                   |
| -------- | -------------------------------------------------------- |
| Type     | `Single select`, `Multi-select`, `Action`, `Double card` |


### Menu Item

Individual item within a Menu.


| Property | Values                                                           |
| -------- | ---------------------------------------------------------------- |
| Type     | `Single select`, `Multiselect`, `Switch`                         |
| State    | `Enabled`, `Disabled`, `Hover`, `Pressed`, `Selected`, `Focused` |


### Menu Search

Search field within a Menu.


| Property | Values                                                                         |
| -------- | ------------------------------------------------------------------------------ |
| State    | `Enabled`, `Hover`, `Focused`, `Filling`, `Filled`, `Filled hover`, `Disabled` |


### Tooltip

Hover-triggered contextual information.


| Property | Values                              |
| -------- | ----------------------------------- |
| Type     | `Info icon`, `Warning icon`, `Text` |
| State    | `Enabled`, `Disabled`, `Hover`      |


### Nav Item

Primary navigation entry.


| Property | Values                      |
| -------- | --------------------------- |
| Selected | `True`, `False`             |
| Dropdown | `True`, `False`             |
| State    | `Default`, `Hover`, `Focus` |


### Subnav Item

Secondary navigation entry.


| Property | Values                      |
| -------- | --------------------------- |
| Selected | `True`, `False`             |
| State    | `Default`, `Hover`, `Focus` |


### Nav Sidebar

Full navigation sidebar with page presets.


| Property | Values                                                                                           |
| -------- | ------------------------------------------------------------------------------------------------ |
| Page     | `Sources`, `Ad performance`, `Destinations`, `Events`, `Audiences`, `Forms`, `Video`, `Settings` |


### Top Bar

Application header bar.


| Property | Values    |
| -------- | --------- |
| Button   | `Default` |


### Button Row

Row container for grouped button actions.


| Property | Values                                               |
| -------- | ---------------------------------------------------- |
| State    | `Default`, `Hover`, `Pressed`, `Focused`, `Disabled` |


### Column Cells

Table body cell with multiple content type presets.


| Property  | Values                                                                                                                                                                                                                                                                                                    |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Content   | `Text`, `Text with destination`, `Name with avatar`, `Wrapped text`, `Wrapped text with destination`, `Blank`, `Checkbox`, `Toggle switch`, `Destinations`, `User avatar stack`, `Status`, `Chip`, `Action button`, `Overflow button`, `Icon button`, `Number`, `Percent change`, `Date and time`, `Tree` |
| State     | `Default`, `Disabled`, `Loading`, `Not expanded`, `Expanded`                                                                                                                                                                                                                                              |
| Alignment | `Left`                                                                                                                                                                                                                                                                                                    |


### Header Cells

Table header cell.


| Property  | Values                                                                     |
| --------- | -------------------------------------------------------------------------- |
| Type      | `Default`, `Sort unselected`, `Sort ascending`, `Sort descending`, `Blank` |
| Tooltip   | `True`, `False`                                                            |
| Alignment | `Left`, `Right`                                                            |
| State     | `Default`, `Loading`                                                       |


### Timeline

Event or date entry in a timeline.


| Property | Values          |
| -------- | --------------- |
| Type     | `Event`, `Date` |


### % Change

Metric change indicator.


| Property | Values                              |
| -------- | ----------------------------------- |
| % Change | `Increase`, `Decrease`, `No Change` |
| Color    | `Green`, `Red`, `Grey`              |
| Size     | `Default`, `Small`                  |


### Catalog Card

Integration catalog entry.


| Property | Values                                           |
| -------- | ------------------------------------------------ |
| Type     | `Default`, `Request integration`, `Upgrade plan` |
| State    | `Default`, `Loading`                             |


---

## Typography Tokens

> Font family: **Roboto** across all styles.

### Display


| Token            | Weight       | Size | Line Height |
| ---------------- | ------------ | ---- | ----------- |
| `display/xsmall` | Medium (500) | 24px | 32px        |
| `display/small`  | Medium (500) | 32px | 40px        |
| `display/medium` | Medium (500) | 40px | 48px        |
| `display/large`  | Medium (500) | 48px | 56px        |


### Heading


| Token             | Weight         | Size | Line Height |
| ----------------- | -------------- | ---- | ----------- |
| `heading/xsmall`  | SemiBold (600) | 14px | 20px        |
| `heading/small`   | SemiBold (600) | 16px | 24px        |
| `heading/medium`  | SemiBold (600) | 18px | 24px        |
| `heading/large`   | SemiBold (600) | 20px | 28px        |
| `heading/xlarge`  | SemiBold (600) | 24px | 32px        |
| `heading/xxlarge` | SemiBold (600) | 28px | 36px        |


### Label


| Token          | Weight       | Size | Line Height |
| -------------- | ------------ | ---- | ----------- |
| `label/xsmall` | Medium (500) | 12px | 16px        |
| `label/small`  | Medium (500) | 14px | 16px        |
| `label/medium` | Medium (500) | 16px | 20px        |
| `label/large`  | Medium (500) | 18px | 24px        |


### Paragraph


| Token              | Weight        | Size | Line Height |
| ------------------ | ------------- | ---- | ----------- |
| `paragraph/xsmall` | Regular (400) | 12px | 20px        |
| `paragraph/small`  | Regular (400) | 14px | 20px        |
| `paragraph/medium` | Regular (400) | 16px | 24px        |
| `paragraph/large`  | Regular (400) | 18px | 28px        |


### Eyebrow

All-caps style with letter spacing for section labels and overlines.


| Token            | Weight       | Size | Line Height | Letter Spacing | Text Case |
| ---------------- | ------------ | ---- | ----------- | -------------- | --------- |
| `Eyebrow/Small`  | Medium (500) | 11px | 16px        | 1.3px          | UPPERCASE |
| `Eyebrow/Medium` | Medium (500) | 12px | 16px        | 1.3px          | UPPERCASE |
| `Eyebrow/Large`  | Medium (500) | 14px | 20px        | 1.3px          | UPPERCASE |


---

## Border Radius Tokens

> Collection: **Border Radius** (8 tokens, aliases into the Tokens collection)


| Token                | Value |
| -------------------- | ----- |
| `Border Radius/xs`   | 2px   |
| `Border Radius/s`    | 4px   |
| `Border Radius/md`   | 6px   |
| `Border Radius/lg`   | 8px   |
| `Border Radius/xl`   | 10px  |
| `Border Radius/2xl`  | 12px  |
| `Border Radius/3xl`  | 16px  |
| `Border Radius/Pill` | 50px  |


---

## Color Tokens

### Primitive Palette

> Collection: **Colors - Primitive** (72 tokens, single mode)

#### Neutral


| Token              | Hex       |
| ------------------ | --------- |
| `Neutral/black`    | `#000000` |
| `Neutral/gray-900` | `#13161a` |
| `Neutral/gray-800` | `#1e2125` |
| `Neutral/gray-700` | `#2c3238` |
| `Neutral/gray-600` | `#3d444c` |
| `Neutral/gray-500` | `#5d6875` |
| `Neutral/gray-400` | `#a3acb7` |
| `Neutral/gray-300` | `#c9ced4` |
| `Neutral/gray-200` | `#dde0e4` |
| `Neutral/gray-100` | `#f1f3f4` |
| `Neutral/gray-50`  | `#f4f6f8` |
| `Neutral/white`    | `#ffffff` |


#### Blue


| Token            | Hex       |
| ---------------- | --------- |
| `Blue/blue-900`  | `#0d1126` |
| `Blue/blue-800`  | `#192048` |
| `Blue/blue-700`  | `#26316e` |
| `Blue/blue-600`  | `#324090` |
| `Blue/blue-500`* | `#3f51b5` |
| `Blue/blue-400`  | `#6473c9` |
| `Blue/blue-300`  | `#8d99d8` |
| `Blue/blue-200`  | `#b7bee6` |
| `Blue/blue-100`  | `#e1e4f4` |
| `Blue/blue-50`   | `#f4f5fb` |


> `blue-500*` is the primary brand color.

#### Teal


| Token           | Hex       |
| --------------- | --------- |
| `Teal/teal-900` | `#0c3229` |
| `Teal/teal-800` | `#186756` |
| `Teal/teal-700` | `#249980` |
| `Teal/teal-600` | `#2fcba9` |
| `Teal/teal-500` | `#61dabf` |
| `Teal/teal-400` | `#7fe1cc` |
| `Teal/teal-300` | `#a0e9d9` |
| `Teal/teal-200` | `#c1f1e6` |
| `Teal/teal-100` | `#def7f2` |
| `Teal/teal-50`  | `#eefbf8` |


#### Green


| Token             | Hex       |
| ----------------- | --------- |
| `Green/green-900` | `#052e16` |
| `Green/green-800` | `#14532d` |
| `Green/green-700` | `#15803d` |
| `Green/green-600` | `#16a34a` |
| `Green/green-500` | `#22c55e` |
| `Green/green-400` | `#4ade80` |
| `Green/green-300` | `#86efac` |
| `Green/green-200` | `#bbf7d0` |
| `Green/green-100` | `#dcfce7` |
| `Green/green-50`  | `#f0fdf4` |


#### Yellow


| Token               | Hex       |
| ------------------- | --------- |
| `Yellow/yellow-900` | `#382a00` |
| `Yellow/yellow-800` | `#705400` |
| `Yellow/yellow-700` | `#a37a00` |
| `Yellow/yellow-600` | `#dba400` |
| `Yellow/yellow-500` | `#f5b800` |
| `Yellow/yellow-400` | `#ffcd38` |
| `Yellow/yellow-300` | `#ffde7a` |
| `Yellow/yellow-200` | `#ffeeba` |
| `Yellow/yellow-100` | `#fff5d6` |
| `Yellow/yellow-50`  | `#fff9e5` |


#### Red


| Token         | Hex       |
| ------------- | --------- |
| `Red/red-900` | `#2e0505` |
| `Red/red-800` | `#5d090b` |
| `Red/red-700` | `#900f11` |
| `Red/red-600` | `#be1316` |
| `Red/red-500` | `#e81c1f` |
| `Red/red-400` | `#ee5658` |
| `Red/red-300` | `#f27d7f` |
| `Red/red-200` | `#f7acad` |
| `Red/red-100` | `#fcdfdf` |
| `Red/red-50`  | `#fef6f6` |


#### Purple


| Token                | Hex       |
| -------------------- | --------- |
| `Purple/purple-900`  | `#1d1150` |
| `Purple/purple-800`  | `#2e1a7e` |
| `Purple/purple-700*` | `#5a2eb4` |
| `Purple/purple-600`  | `#6b3fbf` |
| `Purple/purple-500`  | `#7e58c9` |
| `Purple/purple-400`  | `#9676d4` |
| `Purple/purple-300`  | `#ae96de` |
| `Purple/purple-200`  | `#c9b8e9` |
| `Purple/purple-100`  | `#e3daf4` |
| `Purple/purple-50`   | `#f2eef9` |


> `purple-700*` is the interactive-selected color.

---

### Semantic Tokens

> Collection: **Colors - Semantic** (87 tokens, Light + Dark modes)
>
> Semantic tokens alias primitive tokens. Always use semantic tokens in UI code — they automatically resolve for Light and Dark mode.

#### Text


| Token                                | Light              | Dark               |
| ------------------------------------ | ------------------ | ------------------ |
| `text/textDefault`                   | `Neutral/gray-800` | `Neutral/gray-100` |
| `text/textHighEmphasis`              | `Neutral/gray-800` | `Neutral/white`    |
| `text/textSubtle`                    | `Neutral/gray-500` | `Neutral/gray-400` |
| `text/textDefaultInverse`            | `Neutral/white`    | `Neutral/gray-800` |
| `text/textError`                     | `Red/red-600`      | `Red/red-400`      |
| `text/textAction/textActionSelected` | `Blue/blue-500`*   | `Blue/blue-500*`   |
| `text/textAction/textActionHover`    | `Blue/blue-600`    | `Blue/blue-400`    |
| `text/textAction/textActionPressed`  | `Blue/blue-700`    | `Blue/blue-500*`   |


#### Surface


| Token                         | Light              | Dark               |
| ----------------------------- | ------------------ | ------------------ |
| `surface/surface-interactive` | `Neutral/gray-100` | `Neutral/gray-700` |
| `surface/surface-disabled`    | `Neutral/gray-100` | `Neutral/gray-700` |
| `surface/surface-hover`       | `Neutral/gray-100` | `Neutral/gray-700` |
| `surface/surface-minimal`     | `Neutral/gray-50`  | `Neutral/gray-800` |
| `surface/surface-selected`    | `Blue/blue-50`     | `Blue/blue-900`    |
| `surface/surface-subtle`      | `Blue/blue-100`    | `Blue/blue-800`    |
| `surface/surface-inverse`     | `Neutral/gray-800` | `Neutral/white`    |


#### Border & Divider


| Token                     | Light              | Dark               |
| ------------------------- | ------------------ | ------------------ |
| `border/borderDefault`    | `Neutral/gray-300` | `Neutral/gray-600` |
| `border/borderSubtle`     | `Neutral/gray-200` | `Neutral/gray-700` |
| `border/borderError`      | `Red/red-500`      | `Red/red-400`      |
| `border/focus-ring`       | `Blue/blue-300`    | `Blue/blue-400`    |
| `divider/divider-default` | `Neutral/gray-200` | `Neutral/gray-700` |
| `divider/divider-bold`    | `Neutral/gray-300` | `Neutral/gray-600` |


#### Icon


| Token                   | Light              | Dark               |
| ----------------------- | ------------------ | ------------------ |
| `icon/icon-default*`    | `Neutral/gray-500` | `Neutral/gray-400` |
| `icon/icon-minimal`     | `Neutral/gray-400` | `Neutral/gray-500` |
| `icon/icon-white`       | `Neutral/white`    | `Neutral/white`    |
| `icon/icon-destructive` | `Red/red-600`      | `Red/red-400`      |


#### Navigation


| Token                | Light              | Dark               |
| -------------------- | ------------------ | ------------------ |
| `nav/nav-background` | `Neutral/gray-800` | `Neutral/gray-800` |
| `nav/nav-hover`      | `Neutral/gray-700` | `Neutral/gray-700` |
| `nav/nav-selected`   | `Neutral/gray-700` | `Neutral/gray-700` |
| `nav/nav-focus`      | `Neutral/gray-600` | `Neutral/gray-600` |


#### Background & Status


| Token                  | Light                | Dark                 |
| ---------------------- | -------------------- | -------------------- |
| `background`           | `Neutral/gray-50`    | `Neutral/gray-800`   |
| `status-warning`       | `Yellow/yellow-500`  | `Yellow/yellow-400`  |
| `interactive-selected` | `Purple/purple-700*` | `Purple/purple-700*` |


#### Button Tokens

Each button variant has a dedicated set of semantic tokens for fill, foreground, and (where applicable) border across interaction states.

##### Primary


| Token                         | Light            | Dark             |
| ----------------------------- | ---------------- | ---------------- |
| `button/primary/fill/default` | `Blue/blue-500*` | `Blue/blue-400`  |
| `button/primary/fill/hover`   | `Blue/blue-600`  | `Blue/blue-300`  |
| `button/primary/fill/pressed` | `Blue/blue-700`  | `Blue/blue-500*` |
| `button/primary/foreground`   | `Neutral/white`  | `Neutral/white`  |


##### Secondary


| Token                           | Light              | Dark               |
| ------------------------------- | ------------------ | ------------------ |
| `button/secondary/fill/default` | `Neutral/gray-100` | `Neutral/gray-700` |
| `button/secondary/fill/hover`   | `Neutral/gray-200` | `Neutral/gray-600` |
| `button/secondary/fill/pressed` | `Neutral/gray-300` | `Neutral/gray-800` |
| `button/secondary/foreground`   | `Neutral/gray-800` | `Neutral/gray-100` |


##### Outline


| Token                           | Light              | Dark               |
| ------------------------------- | ------------------ | ------------------ |
| `button/outline/fill/default`   | `Neutral/white`    | `Neutral/gray-800` |
| `button/outline/fill/hover`     | `Neutral/gray-100` | `Neutral/gray-700` |
| `button/outline/fill/pressed`   | `Neutral/gray-300` | `Neutral/gray-900` |
| `button/outline/border/default` | `Neutral/gray-300` | `Neutral/gray-600` |
| `button/outline/border/hover`   | `Neutral/gray-300` | `Neutral/gray-500` |
| `button/outline/border/pressed` | `Neutral/gray-300` | `Neutral/gray-600` |
| `button/outline/foreground`     | `Neutral/gray-800` | `Neutral/gray-100` |


##### Ghost


| Token                       | Light              | Dark               |
| --------------------------- | ------------------ | ------------------ |
| `button/ghost/fill/hover`   | `Neutral/gray-100` | `Neutral/gray-700` |
| `button/ghost/fill/pressed` | `Neutral/gray-300` | `Neutral/gray-600` |
| `button/ghost/foreground`   | `Neutral/gray-800` | `Neutral/gray-100` |


> Ghost has no default fill — it is transparent in default state.

##### Destructive


| Token                             | Light           | Dark            |
| --------------------------------- | --------------- | --------------- |
| `button/destructive/fill/default` | `Red/red-600`   | `Red/red-500`   |
| `button/destructive/fill/hover`   | `Red/red-700`   | `Red/red-400`   |
| `button/destructive/fill/pressed` | `Red/red-800`   | `Red/red-600`   |
| `button/destructive/foreground`   | `Neutral/white` | `Neutral/white` |


##### Icon Primary


| Token                              | Light            | Dark             |
| ---------------------------------- | ---------------- | ---------------- |
| `button/icon-primary/fill/default` | `Blue/blue-500*` | `Blue/blue-400`  |
| `button/icon-primary/fill/hover`   | `Blue/blue-600`  | `Blue/blue-300`  |
| `button/icon-primary/fill/pressed` | `Blue/blue-700`  | `Blue/blue-500*` |
| `button/icon-primary/foreground`   | `Neutral/white`  | `Neutral/white`  |


##### Icon Secondary


| Token                                | Light              | Dark               |
| ------------------------------------ | ------------------ | ------------------ |
| `button/icon-secondary/fill/default` | `Neutral/gray-100` | `Neutral/gray-700` |
| `button/icon-secondary/fill/hover`   | `Neutral/gray-200` | `Neutral/gray-600` |
| `button/icon-secondary/fill/pressed` | `Neutral/gray-300` | `Neutral/gray-800` |
| `button/icon-secondary/foreground`   | `Neutral/gray-800` | `Neutral/gray-100` |


##### Icon Outline


| Token                                | Light              | Dark               |
| ------------------------------------ | ------------------ | ------------------ |
| `button/icon-outline/fill/default`   | `Neutral/white`    | `Neutral/gray-800` |
| `button/icon-outline/fill/hover`     | `Neutral/gray-100` | `Neutral/gray-700` |
| `button/icon-outline/fill/pressed`   | `Neutral/gray-300` | `Neutral/gray-900` |
| `button/icon-outline/border/default` | `Neutral/gray-300` | `Neutral/gray-600` |
| `button/icon-outline/border/hover`   | `Neutral/gray-300` | `Neutral/gray-500` |
| `button/icon-outline/border/pressed` | `Neutral/gray-300` | `Neutral/gray-600` |
| `button/icon-outline/foreground`     | `Neutral/gray-800` | `Neutral/gray-100` |


##### Icon Ghost


| Token                            | Light              | Dark               |
| -------------------------------- | ------------------ | ------------------ |
| `button/icon-ghost/fill/hover`   | `Neutral/gray-100` | `Neutral/gray-700` |
| `button/icon-ghost/fill/pressed` | `Neutral/gray-300` | `Neutral/gray-600` |
| `button/icon-ghost/foreground`   | `Neutral/gray-800` | `Neutral/gray-100` |


> Icon Ghost has no default fill — transparent in default state.

