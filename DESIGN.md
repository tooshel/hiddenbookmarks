---
name: The Hidden Bookmarks
description: A mass-market romance paperback in a browser, with raspberry cover stock, gold foil, an aubergine step-back interior, and marigold for anything you can act on.
colors:
  raspberry: "#b3144f"
  raspberry-deep: "#870b3a"
  foil: "#f0c46a"
  foil-text: "#f8d58a"
  foil-deep: "#a77a25"
  marigold: "#ffc93c"
  marigold-hi: "#ffd96e"
  aubergine: "#2a0e2b"
  aubergine-2: "#3b1541"
  ink: "#1c0a1d"
  blush: "#fff0f5"
  blush-2: "#ffd0df"
  mauve: "#e9b3c8"
typography:
  display:
    fontFamily: "Ballet, Snell Roundhand, cursive"
    fontSize: "clamp(3.6rem, 8.6vw, 8.6rem)"
    fontWeight: 400
    lineHeight: 0.86
    fontVariation: "\"opsz\" 16"
  script-accent:
    fontFamily: "Ballet, Snell Roundhand, cursive"
    fontSize: "0.78em-1.3em of the parent heading"
    fontWeight: 400
    lineHeight: 0.9
    letterSpacing: "0"
  headline:
    fontFamily: "Literata, Georgia, serif"
    fontSize: "clamp(2.3rem, 5vw, 4.4rem)"
    fontWeight: 900
    lineHeight: 1
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Literata, Georgia, serif"
    fontSize: "clamp(1.55rem, 2.3vw, 2.15rem)"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.01em"
  tagline:
    fontFamily: "Literata, Georgia, serif"
    fontSize: "clamp(1.15rem, 1.7vw, 1.5rem)"
    fontWeight: 400
    lineHeight: 1.4
  quote:
    fontFamily: "Literata, Georgia, serif"
    fontSize: "clamp(1.1rem, 1.4vw, 1.25rem)"
    fontWeight: 500
    lineHeight: 1.45
  body:
    fontFamily: "Literata, Georgia, serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Archivo, Arial Narrow, sans-serif"
    fontSize: "0.8rem"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "0.14em"
    fontVariation: "\"wdth\" 80"
  button:
    fontFamily: "Archivo, Arial Narrow, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 760
    lineHeight: 1
    letterSpacing: "0.08em"
    fontVariation: "\"wdth\" 88"
rounded:
  print: "3px"
  pill: "999px"
  arch: "9999px 9999px 0 0"
  round: "50%"
spacing:
  inset: "clamp(10px, 1.4vw, 22px)"
  pad: "clamp(22px, 4vw, 64px)"
  gutter: "clamp(16px, 5vw, 80px)"
  section: "clamp(80px, 10vw, 150px)"
  column-gap: "clamp(40px, 6vw, 100px)"
components:
  button-primary:
    backgroundColor: "{colors.marigold}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "1.05em 1.6em"
  button-primary-hover:
    backgroundColor: "{colors.marigold-hi}"
    textColor: "{colors.ink}"
  button-small:
    backgroundColor: "{colors.marigold}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0.85em 1.2em"
  button-big:
    backgroundColor: "{colors.marigold}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "1.1em 1.6em"
  link-action:
    textColor: "{colors.marigold}"
    typography: "{typography.label}"
  link-quiet:
    textColor: "{colors.blush}"
  link-quiet-hover:
    textColor: "{colors.marigold}"
  chip-trope:
    textColor: "{colors.blush-2}"
    rounded: "{rounded.pill}"
    padding: "6px 10px"
  chip-trope-big:
    textColor: "{colors.blush-2}"
    rounded: "{rounded.pill}"
    padding: "9px 15px"
  ribbon-tag:
    backgroundColor: "{colors.foil}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    padding: "6px 20px 6px 14px"
  nav-bar:
    backgroundColor: "{colors.aubergine}"
    padding: "10px {spacing.gutter}"
  spine-footer:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.mauve}"
---

# Design System: The Hidden Bookmarks

## Overview

**Creative North Star: "The Step-Back Paperback"**

The system is a mass-market romance paperback rendered in CSS. A drenched raspberry cover carries gold foil type and rules. Behind it sits an aubergine step-back interior, the second illustration a reader finds when they open the front cover. Sections alternate between those two stocks, raspberry and aubergine, so the page reads as cover, inside, cover, inside, and ends on a dark ink spine with a barcode. Foil is the material and marigold is the instruction. Text is pink-white, never cream.

Type works at paperback scale. A flourished Ballet script in foil carries the name and the romantic accents. Literata Black sets the heavy headings you would find on a back cover. Condensed Archivo caps handle the spine and sticker labels. Ornament comes from print-production devices, not decorative filler: an inset double foil frame, an arched die-cut window with a beveled edge, a starburst sticker flash, a publisher roundel, a ribbon price-tag, bookmark-shaped bullets, and a barcode. Depth is soft and physical, like paper lifting off paper.

The signature is the hinge. The cover is a die-cut front that swings open on its left spine as you scroll, and the book fan behind the window grows into the interior. With reduced motion, no JS, or no mask support, the cover just sits above the interior and a static copy of the fan fills the window.

**Key Characteristics:**
- Two alternating paper stocks: raspberry cover field and aubergine interior, closed by an ink spine.
- Gold foil for script, rules, frames and bevels. Marigold only for actions.
- Ballet script, Literata Black and condensed Archivo caps, each with a fixed job.
- Print-production ornaments (frame, arch window, sticker flash, roundel, ribbon tag, barcode), all drawn in CSS or inline SVG.
- Soft, diffuse drop shadows under printed matter. No hard offsets.
- Small hand-placed tilts (about 1.5deg on covers, -11deg on the flash) that make it feel like a physical book.

## Colors

A saturated romance-paperback palette: hot raspberry and deep aubergine stocks, warm gold foil, and one loud marigold kept for actions.

### Primary
- **Raspberry Cover Stock** (raspberry): the cover field for the hero, the services section and the contact section. It always carries the grain overlay (an SVG fractal-noise layer, multiply blend, 0.32 opacity). It is also the browser theme color.
- **Deep Raspberry** (raspberry-deep): the shadow line around the die-cut window's bevel. It is never used as a fill.

### Secondary
- **Gold Foil** (foil): script headings, section rules, the cover frame, the window bevel, the portrait ring, the spine's top rule, checklist bookmarks, the ribbon tag and small labels on aubergine. On raspberry it measures 4.09:1, so there it is used only for large script and non-text marks.
- **Foil Text** (foil-text): a lighter foil for small text on raspberry, such as the cover's service line. It measures 4.75:1, which passes AA.
- **Burnished Foil** (foil-deep): the scrollbar thumb. It is a chrome detail, not a content color.

### Tertiary
- **Marigold** (marigold): the action color. Use it for button fills, the sticker flash, action-link text, quiet-link hover, the focus ring and the selection highlight.
- **Marigold Light** (marigold-hi): the button hover fill only.

### Neutral
- **Aubergine Interior** (aubergine): the page background, the interior stock (latest, about), the sticky bar, and the inside of the window behind the cover.
- **Aubergine Glow** (aubergine-2): the light centre of the interior's radial gradient (70% 40%), which makes it feel lit from inside the book.
- **Spine Ink** (ink): the footer spine, the scrollbar track, and text on marigold or foil fills (12.3:1 on marigold).
- **Blush Paper** (blush): primary text on every stock. This is pink-white, never cream.
- **Petal** (blush-2): secondary text on raspberry, trope chips and the cover's diamond separators.
- **Mauve** (mauve): secondary text on aubergine and ink (bylines, blurbs, notes, footer fine print).

### Named Rules
**The Marigold Law.** Marigold appears only on things you can act on, plus the browser's own interaction affordances (focus ring, text selection). If a marigold element cannot be clicked, tabbed to or selected, it is a bug.

**The Foil Is Material Rule.** Foil is a printed finish: script, rules, frames, bevels, labels. It can sit under a quiet link as its underline, but the link turns marigold on hover. Foil never fills a button.

**The Small Foil Rule.** For foil text under about 1.2rem on raspberry, use foil-text, not foil.

## Typography

**Display Font:** Ballet (with Snell Roundhand, cursive)
**Body Font:** Literata (with Georgia, serif)
**Label Font:** Archivo (with Arial Narrow, sans-serif), condensed via `font-stretch`

**Character:** A formal copperplate script set against a heavy, warm book serif, the same pairing a romance cover uses for the title and the back-cover hook. Narrow Archivo caps are the production layer: spine text, stickers, tags.

### Hierarchy
- **Display** (Ballet 400, clamp(3.6rem, 8.6vw, 8.6rem), line-height 0.86, opsz pinned at 16): the cover title only, in foil with a soft raspberry-dark text shadow. "The" is set at 0.5em on its own line. On mobile it is clamp(3.2rem, 15.5vw, 4.6rem).
- **Script Accent** (Ballet 400, 0.78em to 1.3em of the parent heading, line-height 0.9 to 1.1): foil words set into Literata headings ("The" latest six, "Send me" your book, the vow's "No AI, ever."), plus the wordmark in the bar (1.75rem) and on the spine (2.1rem). Optical size follows the auto setting.
- **Headline** (Literata 900, clamp(2.3rem, 5vw, 4.4rem), line-height 1, -0.02em, balanced, max 17ch): section titles. Larger variants of the same voice: interior title clamp(2.6rem, 6vw, 5.6rem)/0.95, contact title clamp(3rem, 7.4vw, 6rem)/0.95 at -0.03em, vow clamp(2rem, 5.2vw, 4.4rem)/1.05.
- **Title** (Literata 800, clamp(1.55rem, 2.3vw, 2.15rem), line-height 1.05, -0.01em): book titles and service headings (service headings run up to 2.3rem).
- **Tagline / Quote** (Literata italic 400 to 500, 1.1 to 1.5rem, line-height 1.4 to 1.45): the cover tagline (max 30ch), review pull-quotes in blush under a 3.6rem foil Literata Black opening quote mark, and bylines in mauve.
- **Body** (Literata 400, 1.0625rem, line-height 1.6, optical sizing auto): measure 46ch to 66ch. Ledes step up to 1.2 to 1.45rem.
- **Label** (Archivo 700 to 800, 0.76 to 0.85rem, uppercase, 0.12 to 0.2em tracking, font-stretch 78 to 86%): the service line, ribbon tags, sub-heads, action links, the opener, series names.
- **Button** (Archivo 760, 0.95rem, uppercase, 0.08em, font-stretch 88%): pill buttons. The big email button switches to sentence case, 0.02em, stretch 95%.

### Named Rules
**The Three Voices Rule.** Script is for names and romantic asides, the serif is for anything you read, and condensed caps are for production labels. A voice never takes another voice's job.

**The Script Never Stands Alone Rule.** Outside the cover title and the wordmarks, Ballet only appears as a lead-in fused to a Literata heading. It never sets a whole sentence.

## Layout

The page is a vertical run of full-bleed sections in alternating stock. Sections pad with the section scale (clamp(80px, 10vw, 150px)) vertically and the gutter (clamp(16px, 5vw, 80px)) horizontally. There is no fixed max-width container. Measure is held by `ch` limits on text and by asymmetric two-column grids.

- **Cover:** fills 100svh. It is inset by `inset` inside the raspberry, then framed and padded by `pad`. The grid splits copy and window 1.28fr / 0.82fr with a gap of clamp(24px, 4vw, 72px). The window stretches to the full frame height.
- **Interior:** 1fr / 1.2fr copy and fan. In hinge mode it adopts the cover's exact grid so the fan starts aligned with the window.
- **Shelf (latest):** two columns with a 40 to 100px column gap and 64 to 120px row gap. Even books drop by clamp(0px, 9vw, 140px) to stagger the shelf. Each book is a 0.78fr art / 1.22fr text grid.
- **Services blurbs, about, contact:** two-column grids (about is portrait | copy, contact is 1.05fr / 0.95fr).
- **Spine:** barcode | wordmark | links, with fine print spanning the full row.

Responsive: at 1100px the shelf goes to one column (max 760px) and the stagger is removed. At 860px everything stacks, and the arch window drops under the cover copy (min 260px, or 180px in the grid row). At 560px `pad` becomes 20px and each book stacks art over text (art max 300px).

## Elevation & Depth

Depth is physical and soft: printed matter lifting off paper, and paper stocks seen through a die-cut. There are three layers. The **stock** carries grain and a radial interior glow. **Printed objects** (cover graphics, the portrait, the sticker, buttons) cast long, low-opacity drop shadows tinted toward aubergine-black. **Foil bevels** are drawn as stacked inset spread rings, not blurs. The hinge adds a dynamic cast shadow and darkens the cover by up to 45% as it swings.

### Shadow Vocabulary
- **Print lift** (`box-shadow: 0 18px 30px -12px rgba(8, 0, 10, .75), 0 2px 6px rgba(8, 0, 10, .4)`): fan cards. On hover this becomes `0 30px 40px -16px rgba(8,0,10,.85)` while the card lifts 9% and scales to 1.04.
- **Shelf lift** (`box-shadow: 0 22px 34px -16px rgba(8, 0, 10, .8)`): book art on the shelf.
- **Button lift** (`box-shadow: 0 12px 24px -12px rgba(28, 0, 14, .7), 0 2px 0 rgba(255, 255, 255, .35) inset`): pills. The inset line is a top gloss, not an offset. On hover the outer shadow becomes `0 18px 30px -14px` at 0.8.
- **Foil bevel** (`box-shadow: inset 0 0 0 6px <stock>, inset 0 0 0 7px rgba(240, 196, 106, .55)`): the double-rule frame, used on the cover frame, the arch window and the portrait ring (outer rings there).
- **Sticker drop** (`filter: drop-shadow(0 8px 12px rgba(50, 0, 20, .45))`): the starburst flash, which follows its silhouette.
- **Title glow** (`text-shadow: 0 6px 22px rgba(70, 0, 25, .5)`): the cover script only.
- **Bar drop** (`box-shadow: 0 10px 24px -14px rgba(0, 0, 0, .7)`): the sticky bar.

### Named Rules
**The Soft Paper Rule.** Every shadow is blurred, negatively spread and dark-tinted. A zero-blur offset shadow does not exist in this world.

**The Bevel Is Rings Rule.** Foil edges are drawn with 0-blur inset spread rings (stock-colored gap, then a translucent foil hairline), never with a gradient or blur.

## Shapes

The form language is print production. Rectangles are nearly sharp (book graphics and portraits use 3px, like trimmed card stock). Pills (999px) are reserved for buttons and trope chips. The one large curve is the die-cut arch (9999px 9999px 0 0), a tall window rounded only at the top. Round shapes are the portrait (50%, with a 3px foil ring and two outer bevel rings) and the publisher roundel. Clip-path silhouettes come from book ephemera: the ribbon tag has a notched V tail (8px), the checklist bullets are bookmarks (11x16px with a 72% notch), and the service-line separators are 0.42em diamonds. The sticker flash is a 48-point starburst. Rules are 1px foil on blurbs, 2px on the cover frame, 3px on the spine top and 6px on the arch. Covers sit at a slight tilt (-1.6deg odd, 1.4deg even) and straighten on hover.

## Components

### Buttons
Glossy marigold pills that feel like a sticker you can press.
- **Shape:** full pill (999px).
- **Primary:** marigold fill, ink text, condensed uppercase Archivo 760, padding 1.05em 1.6em, trailing arrow icon with a 0.6em gap, button-lift shadow.
- **Hover / Focus / Active:** fill goes to marigold-hi, the button lifts 2px and the shadow deepens, all over 0.35s on the ease-out curve (cubic-bezier(.16, 1, .3, 1)). The arrow slides 3px right. Focus uses a blush outline instead of the global marigold ring, because a marigold ring disappears against the fill. Active returns the button to rest.
- **Small:** 0.78rem, padding 0.85em 1.2em, used in the sticky bar.
- **Big:** clamp(0.9rem, 1.6vw, 1.1rem), sentence case, stretch 95%, leading mail icon. Used for the email address, so the address reads as written.

### Links
- **Action link:** marigold condensed caps (0.8 to 0.85rem, 0.14em) with no underline at rest. It underlines on hover (offset 0.35em) and the arrow nudges 3px. Used for "See the post" and the interior cue.
- **Quiet link:** blush Archivo 600 with a 1px foil underline offset 0.3em. Both color and underline turn marigold on hover. Used for secondary actions next to a button (Instagram).
- **Footer links:** blush caps at 0.14em that turn marigold on hover.

### Chips
- **Trope chip:** a 1px translucent foil border (rgba(240,196,106,.5)), pill radius, Archivo 600 at 0.8rem with stretch 86%, petal text, padding 6px 10px. The large variant is 0.92rem with padding 9px 15px. These are labels, not filters, so they have no states and no marigold.

### Cards / Containers
- **Book entry:** no box. A tilted 3px-radius cover graphic with shelf-lift shadow, a foil ribbon tag naming the work type (pinned -10px left, 14px from the bottom), then title, mauve italic byline with a foil caps series line, an optional pull-quote, a blurb (max 58ch), trope chips and an action link.
- **Service blurb:** no box. A 1px foil top rule with 22px above the heading, a Literata 800 heading, body at max 46ch, and a petal "Recently" line at 0.95rem.

### Navigation
- **Sticky bar:** hidden above the viewport until the stage has scrolled past (bottom < 60px), then it slides in over 0.45s on the ease-out curve. It is aubergine with a translucent foil bottom hairline and bar drop shadow, with the foil script wordmark on the left and a small marigold button on the right. Its links are removed from the tab order while it is hidden.
- **Opener:** a ghost button at the bottom of the cover ("Open the cover") in blush condensed caps with 0.2em tracking. Its down-arrow nudges every 2.4s, and the text turns marigold on hover. It only appears in hinge mode and smooth-scrolls to the open state.

### Sticker Flash
A marigold 48-point starburst rotated -11deg, with ink condensed caps running around a ring path ("NOW BOOKING") and a Literata 900 centre ("ARCs & ALCs"). It is a link to contact, so it obeys the Marigold Law. On hover it straightens to -4deg and scales to 1.05.

### Publisher Roundel
A foil-stroked double circle with ring text and a bookmark ribbon at its centre, at 0.9 opacity, pinned bottom-left of the cover frame. It is decorative (aria-hidden).

### Die-Cut Window and Fan (signature)
The arch window is a 6px foil border with a raspberry-deep and translucent-foil bevel, with aubergine behind it. Inside sits the **fan**: six portrait (4:5) cover graphics positioned by a per-card spread value `--t` (-0.5 to 0.5) and arc value `--a`. Each card is translated along the spread, dropped along the arc and rotated `t × 28deg` around a pivot at 50% 85%, all sized in container-query units.
- **Static variant:** a decorative, aria-hidden copy of the fan that fills the window when the hinge is off (reduced motion, no JS, no mask support, or a viewport under 560 x 340). Cards are min(52cqw, 60cqh) wide with an 84cqw spread. It is hidden in hinge mode.
- **Live fan:** the linked fan in the interior. Hover or focus lifts a card 9%, scales it to 1.04, deepens its shadow and raises it to the top.
- **Hinge:** the cover is masked with an SVG hole cut exactly to the window's inner box. It rotates `p × -104deg` about its left edge in a 2400px perspective (origin 0% 50%) while it dims to 55% brightness. The stage is 195svh tall with a sticky 100svh frame. While the cover swings, the fan interpolates from the window rect to its open rect (right 57% on wide screens, full width under the heading on narrow ones) and its cards grow and spread. Interior copy fades in from -40px. Tabbing into the interior while the cover is shut jumps straight to the open state.

### Spine Footer
An ink band with a 3px foil top rule, a blush barcode (118 x 44px), a foil script wordmark, blush caps links and mauve fine print.

## Do's and Don'ts

### Do:
- **Do** alternate raspberry and aubergine stocks section by section, and end on the ink spine.
- **Do** put marigold on every primary action (pill buttons, action links, the flash, hover states), and only there.
- **Do** use foil-text (#f8d58a) for small foil text on raspberry. Keep foil (#f0c46a) on raspberry for large script and non-text marks.
- **Do** set script lead-ins inside Literata headings at 0.78em to 1.3em with letter-spacing reset to 0.
- **Do** condense Archivo caps with font-stretch (78 to 88%) and track them open (0.08 to 0.2em).
- **Do** draw foil edges as stacked inset spread rings and cast blurred, negatively spread, aubergine-tinted shadows under printed objects.
- **Do** give every scroll-driven effect a static fallback that works on its own, as the static fan does for the hinge.
- **Do** honor reduced motion: no hinge, no transitions, no nudge animation.

### Don't:
- **Don't** use cream or ivory for text or backgrounds. Text is blush (#fff0f5).
- **Don't** use marigold for decoration, dividers, tags or headings that cannot be acted on.
- **Don't** fill a button with foil or make a foil-only element look clickable.
- **Don't** use zero-blur offset shadows or flat sticker-style drop blocks.
- **Don't** round rectangles beyond 3px. Pills are for buttons and chips only, and the arch is the only large curve.
- **Don't** set body copy or full sentences in Ballet.
- **Don't** use icon fonts or glyph icons. Icons are 2px-stroke inline SVG at 1.15em that inherit currentColor.
