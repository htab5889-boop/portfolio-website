---
name: Cinematic Pro Precision
colors:
  surface: '#131316'
  surface-dim: '#131316'
  surface-bright: '#39393c'
  surface-container-lowest: '#0e0e11'
  surface-container-low: '#1c1b1e'
  surface-container: '#201f22'
  surface-container-high: '#2a2a2d'
  surface-container-highest: '#353438'
  on-surface: '#e5e1e5'
  on-surface-variant: '#c0c7d5'
  inverse-surface: '#e5e1e5'
  inverse-on-surface: '#313033'
  outline: '#8a919e'
  outline-variant: '#404753'
  surface-tint: '#a3c9ff'
  primary: '#a3c9ff'
  on-primary: '#00315c'
  primary-container: '#2997ff'
  on-primary-container: '#002e57'
  inverse-primary: '#0060aa'
  secondary: '#c0c1ff'
  on-secondary: '#1000a9'
  secondary-container: '#3131c0'
  on-secondary-container: '#b0b2ff'
  tertiary: '#c6c6c8'
  on-tertiary: '#2f3132'
  tertiary-container: '#949597'
  on-tertiary-container: '#2c2e2f'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d3e3ff'
  primary-fixed-dim: '#a3c9ff'
  on-primary-fixed: '#001c39'
  on-primary-fixed-variant: '#004882'
  secondary-fixed: '#e1e0ff'
  secondary-fixed-dim: '#c0c1ff'
  on-secondary-fixed: '#07006c'
  on-secondary-fixed-variant: '#2f2ebe'
  tertiary-fixed: '#e2e2e4'
  tertiary-fixed-dim: '#c6c6c8'
  on-tertiary-fixed: '#1a1c1d'
  on-tertiary-fixed-variant: '#454749'
  background: '#131316'
  on-background: '#e5e1e5'
  surface-variant: '#353438'
typography:
  display-hero:
    fontFamily: Inter
    fontSize: 80px
    fontWeight: '600'
    lineHeight: 84px
    letterSpacing: -0.04em
  display-hero-mobile:
    fontFamily: Inter
    fontSize: 44px
    fontWeight: '600'
    lineHeight: 48px
    letterSpacing: -0.03em
  headline-xl:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 52px
    letterSpacing: -0.03em
  headline-xl-mobile:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.025em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '500'
    lineHeight: 38px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 30px
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '500'
    lineHeight: 26px
    letterSpacing: -0.01em
  body-xl:
    fontFamily: Inter
    fontSize: 19px
    fontWeight: '400'
    lineHeight: 30px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: -0.005em
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  label-code:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
    letterSpacing: 0.04em
  label-caps:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.08em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.01em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  space-2xs: 0.25rem
  space-xs: 0.5rem
  space-sm: 0.75rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
  space-2xl: 3rem
  space-3xl: 4.5rem
  space-4xl: 6rem
  space-5xl: 9rem
  container-max: 1360px
  gutter-desktop: 2rem
  gutter-mobile: 1rem
---

## Brand & Style

This design system channels an uncompromising, cinematic precision tailored for an industry-leading DaVinci Resolve specialist and high-end colorist. It pairs Apple's Pro-tier industrial restraint with the atmospheric depth of a high-end film mastering suite.

### Design Principles
- **Luminance Mastery:** Interfaces are treated like calibrated reference displays. True blacks anchor the canvas, allowing moving imagery and grading passes to command complete focus.
- **Micro-Precision Glass & Optics:** UI layers operate as optical glass filters—employing multi-layered backdrop blur, refined specular rims, and subtle chromatic depth.
- **Architectural Breathing Room:** Immense whitespace (blacksurface isolation) gives showreels, side-by-side scopes, and stills room to breathe without UI clutter.
- **Fluid Kinematics:** Transitions mimic camera physics and optical exposure shifts using measured cubic-bezier timings (`cubic-bezier(0.16, 1, 0.3, 1)`).

### Target Audience & Emotional Impact
Aimed at commercial directors, film production houses, visual effects supervisors, and luxury brand commissioners. The interface evokes clinical competence, luxury, deliberate confidence, and mastery of light and color science.

## Colors

The palette is tuned around studio-grade DCI-P3 / Rec.709 reference environments: deep, infinite space blacks, non-distracting titanium slates, and surgical spectral accents.

### Palette Architecture
- **Canvas Base (Space Black):** `#050507` provides true black zero-lux backdrop isolation.
- **Titanium Tiers:**
  - `surface-01`: `#0d0e12` (Recessed canvas / background wells)
  - `surface-02`: `#121316` (Primary glass panels & workspace cards)
  - `surface-03`: `#1c1d22` (Floating toolbars, hover targets, modal caps)
  - `surface-specular`: `rgba(255, 255, 255, 0.08)` (1px precision boundary hairpins)
- **Spectral Accents:**
  - **DaVinci Resolve Blue (`#2997ff`):** Primary highlight for active nodes, primary CTAs, playback playheads, and selection indicators.
  - **Electric Indigo (`#6366f1`):** Secondary glow accent, grading node branches, and optical aura gradients.
- **Typography & Neutrals:**
  - **Clinical White (`#f5f5f7`):** Primary readable text, master project titles, key data readouts.
  - **Muted Titanium (`#86868b`):** Metadata, timecode stems, LUT tags, non-selected tabs.
  - **Deep Slate (`#3a3a3c`):** Scrims, disabled UI states, timeline subdivisions.

### Glow & Gradient Mechanics
Accent lighting is never flat. Glows leverage soft radial dispersion (`radial-gradient(circle at center, rgba(41, 151, 255, 0.15) 0%, transparent 70%)`) to emulate anamorphic lens flares and glowing OLED reference displays.

## Typography

The typographic system relies on **Inter** with calibrated tight negative tracking for high-end digital precision, paired with **JetBrains Mono** for technical color metrics, node indices, timecodes, and camera color science metadata.

### Typographic Hierarchy
- **Editorial Pro Statements:** `display-hero` and `headline-xl` feature tight negative letter tracking (`-0.03em` to `-0.04em`) to recreate Apple’s cinematic product title treatment.
- **Narrative Body:** Set in `body-xl` and `body-lg` using light-on-dark contrast balances that prevent optical halation (avoiding 100% stark white body text on pure black; text is rendered in `#e5e5ea` and `#86868b`).
- **Technical Metadata:** `label-code` handles frame rates (`23.976 fps`), raw codecs (`ARRIRAW Open Gate 4.5K`), color spaces (`ACEScc AP1`), and node tree annotations with monospaced structure.

## Layout & Spacing

The layout is grounded in a 12-column dynamic grid bounded by a `1360px` maximum viewport container, anchoring large-format 16:9 and 2.39:1 anamorphic media framing.

### Structural Rhythm
- **Macro Spacing:** Major portfolio sections are separated by expansive pauses (`space-4xl` to `space-5xl`), letting colorist reels deliver maximum impact without vertical visual collision.
- **Component Micro-Grid:** Built around 4px and 8px rhythmic steps for surgical panel and scrubber alignment.

### Responsive Reflow Rules
- **Desktop (1025px - 1440px+):** 12 columns with 32px gutters and 64px outer margins. Supports side-by-side interactive split-screen (Log vs. Rec.709 vs. Final Grade) with full-fidelity vector scopes.
- **Tablet (768px - 1024px):** 8 columns with 24px gutters and 32px margins. Node trees collapse to horizontal swipe lanes; video comparison viewports default to interactive touch wipes.
- **Mobile (320px - 767px):** 4 columns with 16px gutters and 16px margins. Full bleed widescreen media cards with floating bottom navigation and touch-optimized scrubber handles.

## Elevation & Depth

Visual depth is achieved through optical filtration, translucent layering, and surface reflectivity rather than heavy opaque drop shadows.

### Glass & Atmosphere Mechanics
- **Ground Floor (Base Canvas):** `#050507` at zero elevation.
- **Level 1 (Docked Containers & Grid Cards):** Surface `#121316` at 65% opacity combined with `backdrop-filter: blur(24px) saturate(180%)`. Border: 1px solid `rgba(255, 255, 255, 0.08)`.
- **Level 2 (Interactive Floating Bars & Scrubber Heads):** Surface `#1c1d22` at 80% opacity with `backdrop-filter: blur(36px)`. Border: 1px solid `rgba(255, 255, 255, 0.14)`. Ambient shadow: `0 20px 40px -15px rgba(0, 0, 0, 0.7)`.
- **Level 3 (Modal Showcases & Fullscreen Grade Previews):** Surface `#1c1d22` at 92% opacity with `backdrop-filter: blur(48px)`. Border: 1px solid `rgba(255, 255, 255, 0.2)`. Soft DaVinci accent halo: `0 0 50px -10px rgba(41, 151, 255, 0.15)`.

### Border Light Rules
Every card surface features an internal directional highlight (top border edge has `rgba(255, 255, 255, 0.12)`, falling off to `rgba(255, 255, 255, 0.02)` at the bottom edge) replicating machined titanium and beveled glass.

## Shapes

The shape vocabulary mirrors contemporary Apple hardware and professional cinema gear—smooth squircle curves (`roundedness: 2`, where cards sit at `1rem` [16px] and hero viewports scale up to `1.5rem` [24px]).

### Geometry Specifications
- **Master Showcase Cards:** `rounded-xl` (24px) for 4K video viewports, before/after compare windows, and featured case reels.
- **Floating Controls & Toolbars:** `rounded-lg` (16px) for persistent HUD overlays, transport bars, and filter strips.
- **Interactive Controls & Meta Badges:** `rounded-md` (8px) for buttons, LUT pills, aspect ratio tags, and input boxes.
- **Scrubber Nodes & Playheads:** Full circular geometry (`9999px`) for touch scrubbers, color picker swatches, and node handles.

## Components

### Buttons & Interactive Triggers
- **Primary Action (Cinema Blue):** Solid `#2997ff` background with `#050507` bold typography, subtle specular inset top line (`rgba(255, 255, 255, 0.4)`), and hover lift with soft electric blur (`box-shadow: 0 8px 24px -6px rgba(41, 151, 255, 0.4)`).
- **Secondary Glass Action:** Frosted titanium container (`#1c1d22` at 60% opacity, `backdrop-filter: blur(20px)`), 1px perimeter border `rgba(255, 255, 255, 0.08)`, text `#f5f5f7`. Hover state raises border luminosity to `rgba(255, 255, 255, 0.25)` and background to `#25262c`.
- **Text / Minimalist Action:** `#86868b` with continuous arrow glyph transition (`→`), animating to `#2997ff` on hover with a 4px horizontal translation.

### Before/After Split-Screen Grading Slider
- **Viewport Frame:** `rounded-xl` (24px) container with 1px border `rgba(255, 255, 255, 0.1)`. Houses synchronized dual-layer video or 4K ProRes frame grabs.
- **Divider Line:** 1.5px vertical line in `#f5f5f7` with a vertical 24px circular glass thumb featuring dual directional arrows (`◂ ▸`).
- **HUD Indicator Chips:** Bottom-left shows `LOG / RAW`, bottom-right shows `REC.709 / FINAL GRADE` rendered in `label-code` within `rgba(5, 5, 7, 0.7)` micro-frosted badges.

### Showcase Project Cards
- **Structure:** 16:9 or 2.39:1 widescreen video viewport encased in a subtle `#121316` chassis.
- **Idle State:** Autoplays muted looped video preview; top-right hosts a subtle project category pill (`Commercial`, `Feature Film`, `Music Video`).
- **Hover State:** Smooth scale transformation (`scale: 1.015`) using `cubic-bezier(0.16, 1, 0.3, 1)`, boundary border illumination shifting from `rgba(255, 255, 255, 0.08)` to `#2997ff` (30% alpha), and metadata exposure revealing camera package, color science, and director credits.

### Chips & Technical Badges
- **Technical Tag:** Background `rgba(255, 255, 255, 0.04)`, border `rgba(255, 255, 255, 0.08)`, typography `label-code` in `#86868b`.
- **Active Filter Chip:** Background `rgba(41, 151, 255, 0.12)`, border `rgba(41, 151, 255, 0.4)`, typography `label-code` in `#2997ff`.

### Form Fields & Inquiries
- **Input Fields:** Recessed `#090a0d` background, 1px border `rgba(255, 255, 255, 0.08)`, text `#f5f5f7`, placeholder `#48484a`.
- **Focus State:** 1px ring transition to `#2997ff` with an ambient glow (`box-shadow: 0 0 0 3px rgba(41, 151, 255, 0.15)`).

### DaVinci Node Tree Showcase Component
- **Node Matrix:** Interactive visual network map connecting serial, parallel, and layer nodes.
- **Node Item:** `#121316` glass block with color-coded label headers (e.g., *01 Exposure Balance*, *02 CST / Log-to-Rec709*, *03 Skin Tone Isolation*, *04 Film Grain Matrix*). Active node links draw glowing SVG vectors in `#2997ff`.