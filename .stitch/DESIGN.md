# Design System: Vrihi-Skydeck
**Project ID:** 9990170848848567733

## 1. Visual Theme & Atmosphere
Obsidian-dark, atmospheric, and editorial — evoking the premium transition from dusk to deep evening on a rooftop in Patna. The mood is "The Midnight Horizon": expansive negative space, the shimmer of candlelight gold against an obsidian night sky, and the textural depth of a luxury magazine layout. Every element should feel architectural and intentional — an invitation, not a utility.

## 2. Color Palette & Roles

| Descriptive Name | Hex | Functional Role |
|---|---|---|
| Obsidian Night | `#131313` | Primary page background — the void of the night sky |
| Midnight Hollow | `#0e0e0e` | Deepest layer cards — creates natural sink/pocket |
| Charcoal Lift | `#1c1b1b` | Section backgrounds — wraps content areas |
| Smoked Glass | `#201f1f` | Card containers — second layer of depth |
| Frosted Railing | `#2a2a2a` | Interactive modals, elevated containers |
| Glass Pane | `#353534` | Highest floating elements — tooltips, sticky nav |
| Gilded Candlelight | `#f2ca50` | Primary gold — all CTAs, active states, brand accent |
| Aged Amber | `#d4af37` | CTA gradient end — gives metallic luster to buttons |
| Champagne Warmth | `#ecc99a` | Tertiary — photography captions, small labels |
| Parchment White | `#e5e2e1` | Headline text — not pure white, avoids bloom |
| Warm Linen | `#d0c5af` | Body text — muted for atmospheric depth |
| Ghost Edge | `#4d4635` | Subtle borders at 15% opacity only |
| Stone Outline | `#99907c` | Secondary outline elements |

## 3. Typography Rules
- **Headlines & Display: Noto Serif** — The "Voice of Authority." Large, tightened letter-spacing (-0.02em). Used for hero titles (3.5rem+), section headings, and editorial statements. Often center-aligned or boldly offset left.
- **Body & Labels: Manrope** — The "Voice of Precision." Clean, geometric, high-legibility sans-serif. Used for all descriptions (1rem), functional labels, and navigation items.
- **Hierarchy:** Headlines in Parchment White (`#e5e2e1`); body copy in Warm Linen (`#d0c5af`); small category labels in Champagne Warmth (`#ecc99a`) in ALL-CAPS with 0.1rem letter-spacing.

## 4. Component Stylings
- **Primary Buttons:** Linear gradient fill from Gilded Candlelight (`#f2ca50`) to Aged Amber (`#d4af37`) at 135°. Sharp architectural corners (4px radius). Text in deep brown `#3c2f00`. On hover: subtle box-shadow glow using primary at 25% opacity.
- **Secondary Buttons:** Transparent background. Ghost border using `#4d4635` at 40% opacity. Text in `#f2ca50`. On hover: background fills to `#1c1b1b`.
- **Cards/Containers:** Rounded corners (4px). Background in Charcoal Lift (`#1c1b1b`) or Smoked Glass (`#201f1f`). NO divider lines — separation achieved through background color shifts and generous vertical padding (48px+).
- **Navigation Bar:** Glassmorphism — Glass Pane (`#353534`) at 40% opacity, `backdrop-filter: blur(24px)`. Logo in Noto Serif gold. Nav links in Manrope. "Book a Table" CTA in primary gradient.
- **Inputs/Forms:** Background in Glass Pane (`#353534`). No bottom border by default. On focus: left-edge accent in Gilded Candlelight (`#f2ca50`). Placeholder text in Warm Linen (`#d0c5af`).
- **Skyline Scroller:** Horizontal carousel. Each item pane is semi-transparent Glass Pane (`#3a3939`) with backdrop-blur, letting rooftop imagery peek through.

## 5. Layout Principles
- **Spacing is luxury:** Section gaps 120px–160px. Inner padding 32px–48px. Hero headlines need 80px vertical clearance minimum.
- **No border lines:** Boundaries defined ONLY through background color shifts or negative space. Zero 1px dividers.
- **Intentional Asymmetry:** Break the grid — images bleeding over containers, offset headlines, overlapping photo and text columns.
- **Image Treatment:** Use `surface-dim` gradient overlay on the bottom 30% of hero images. Food/ambiance images use 8px (0.5rem) roundness and may bleed outside their containers for editorial drama.
- **Standard unit:** 24px. All spacing is a multiple of this.

## 6. Design System Notes for Stitch Generation
```
DESIGN SYSTEM (REQUIRED):
- Platform: Web, Desktop-first (also mobile responsive)
- Theme: Dark editorial, atmospheric Midnight Horizon
- Background: Obsidian Night (#131313)
- Surface Cards: Charcoal Lift (#1c1b1b), Smoked Glass (#201f1f)
- Primary Accent: Gilded Candlelight (#f2ca50) → Aged Amber (#d4af37) gradient for CTAs
- Text Primary: Parchment White (#e5e2e1) for headlines
- Text Secondary: Warm Linen (#d0c5af) for body
- Text Accent: Champagne Warmth (#ecc99a) for labels
- Headline Font: Noto Serif, tightened letter-spacing, editorial weight
- Body Font: Manrope, clean geometric sans-serif
- Roundness: Architectural 4px (never pill-shaped full-rounded)
- Buttons: Gradient gold primary, ghost secondary
- Nav: Glassmorphic sticky bar, blur(24px), semi-transparent
- Elevation: Tonal layering only — no drop shadows
- Ghost Borders: outline_variant (#4d4635) at 15% opacity only
- No divider lines. No pure white (#FFFFFF)
```
