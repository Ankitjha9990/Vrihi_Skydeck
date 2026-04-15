# Design System Document: Editorial Sophistication

## 1. Overview & Creative North Star: "The Midnight Horizon"
This design system is built to evoke the transition from dusk to deep evening. The "Creative North Star" is **The Midnight Horizon**—an approach that prioritizes expansive negative space, atmospheric depth, and the shimmering quality of city lights against a dark sky. 

We are moving away from the "boxy" nature of standard web layouts. Instead, we embrace **Intentional Asymmetry** and **Tonal Immersion**. By utilizing oversized serif typography and overlapping imagery, we create a digital experience that feels like a high-end lifestyle editorial rather than a functional utility. The UI should feel "airy," allowing the high-quality photography of gourmet dining and cityscapes to breathe.

---

## 2. Colors: Depth & Luminescence
Our palette is rooted in the `surface` (#131313), representing the obsidian night, punctuated by the `primary` gold (#f2ca50) which acts as our candlelight.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders to section content. Traditional "dividers" are a sign of lazy architecture. Boundaries must be defined through:
- **Background Color Shifts:** A `surface-container-low` (#1c1b1b) section sitting on a `surface` background.
- **Negative Space:** Using large gutters to imply separation.

### Surface Hierarchy & Nesting
Treat the UI as physical layers. Each layer deeper should feel more "nested" or "elevated."
- **Base Layer:** `surface` (#131313)
- **Content Cards:** `surface-container-low` (#1c1b1b) or `surface-container` (#201f1f).
- **Interactive Modals:** `surface-container-high` (#2a2a2a).

### The "Glass & Gradient" Rule
To mimic the reflection of glass railings on a rooftop:
- **Glassmorphism:** Use `surface_variant` (#353534) at 40% opacity with a `24px` backdrop-blur for floating navigation or overlay cards.
- **Signature Textures:** Apply a subtle linear gradient from `primary` (#f2ca50) to `primary_container` (#d4af37) on CTAs. This creates a "metallic luster" rather than a flat plastic feel.

---

## 3. Typography: The Editorial Voice
We use a high-contrast pairing to balance heritage with modernity.

- **Display & Headlines (Noto Serif):** This is our "Voice of Authority." Use `display-lg` (3.5rem) with tightened letter-spacing (-0.02em) for hero sections. Headlines should often be center-aligned or offset to the left to break the grid.
- **Body & Labels (Manrope):** This is our "Voice of Precision." Manrope provides a clean, geometric contrast to the serif. Keep `body-lg` (1rem) for descriptions to ensure a premium feel; smaller text is reserved strictly for functional labels.
- **Hierarchy Tip:** Use `on_surface_variant` (#d0c5af) for body text to reduce harsh contrast against the dark background, reserving the pure `on_surface` (#e5e2e1) for headlines.

---

## 4. Elevation & Depth: Tonal Layering
Traditional shadows have no place here. We build depth through light and atmospheric perspective.

- **The Layering Principle:** Place a `surface-container-lowest` (#0e0e0e) card inside a `surface-container` (#201f1f) section. The slight "sink" creates a natural pocket for information without a single line being drawn.
- **Ambient Shadows:** For floating elements (e.g., a booking modal), use an ultra-diffused shadow: `box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5)`. The color should never be pure black; it should feel like a concentrated version of the background.
- **The "Ghost Border" Fallback:** If accessibility requires a stroke, use the `outline_variant` (#4d4635) at 15% opacity. This creates a "whisper" of an edge that disappears into the ambiance.

---

## 5. Components: Functional Elegance

### Buttons
- **Primary:** Gradient fill (`primary` to `primary_container`), `on_primary` text, `DEFAULT` roundedness (0.25rem). The sharp corners feel more architectural than rounded pills.
- **Secondary:** Transparent background with a `ghost border`. Text in `primary`.
- **States:** On hover, the `primary` button should subtly expand its shadow, never change its fill color abruptly.

### Cards & Lists
- **Prohibition:** No divider lines. Use `surface-container-low` background shifts to separate list items.
- **Image Integration:** Images should use `lg` (0.5rem) roundedness and often bleed over the edges of their containers to create an asymmetrical, "uncontained" look.

### Reservation Inputs
- **Inputs:** Use the `surface_container_highest` (#353534) background. No bottom border. Instead, use a subtle `primary` accent on the left edge only when the field is focused.
- **Typography:** Placeholder text must be in `on_surface_variant` to maintain the moody vibe.

### Signature Component: The "Skyline Scroller"
A horizontal carousel for menu items where the background of each item is a semi-transparent `surface_bright` (#3a3939) glass pane, allowing the rooftop imagery to peek through the component.

---

## 6. Do's and Don'ts

### Do:
- **Do** use "Negative Space" as a primary design element. If a section feels crowded, double the padding.
- **Do** use `tertiary` (#ecc99a) for subtle highlights in photography captions or small labels. It adds a "champagne" warmth.
- **Do** use high-quality, desaturated imagery with high contrast to match the dark UI.

### Don't:
- **Don't** use 100% white (#FFFFFF). It will "bloom" uncomfortably on a dark background. Use `on_surface` (#e5e2e1).
- **Don't** use `full` (9999px) roundedness for anything other than utility chips. Rounded pills feel too "tech-startup" and lose the "fine-dining" edge.
- **Don't** use standard "Drop Shadows" on text. If text is unreadable over an image, use a `surface-dim` gradient overlay on the image.

---

## 7. Spacing Scale
Spacing must be generous. Our "Standard" unit is **24px**.
- **Section Gaps:** Use 120px to 160px.
- **Inner Padding:** Use 32px to 48px.
- **The "Breathe" Rule:** Every major headline must have at least 80px of vertical clearance to maintain the high-end editorial feel.
