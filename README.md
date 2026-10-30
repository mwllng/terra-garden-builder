# Terra — Garden Studio, version 2

Four responsive pages: homepage, six-step garden studio, materials pricing, and illustrated perspective visualization.

## Features

- Width/depth, irregular boundaries, draggable vertices and individual straight/curved corners.
- Soil polygons, visual materials and object catalog, exact object position, size and rotation.
- Planned utility routes; existing unverified route notes.
- Backyard photo reference and soil overlays; images stay in this device's IndexedDB.
- Night/day, light halos and seasonal color palettes.
- Undo/redo, local autosave, editable project JSON, SVG layout/perspective exports, image prompts.
- Quantity-based example costs, target budget, reserve and phased checklist.

## Limits

Live photorealistic AI, local quotes, retailer catalogs, climate matching and accounts are not connected. The perspective is an illustrated SVG. Photos are manually aligned references, not measured surveys. Lighting and seasons are visual studies.

## Validation

Syntax checks and geometry tests cover rectangle/rounded areas, L-shapes, overlapping soil union, self-crossing polygon rejection, quantities and item costs. Browser checks cover dimension changes, material replacement, plant addition, soil polygon drawing, night/season changes and saved-project recovery. Mobile homepage/studio/visualization were checked at 390 px without horizontal overflow. Full photo-upload verification was interrupted by the browser tool at file selection.

## Artwork and fonts

Cormorant Garamond and DM Sans are bundled locally with licenses in dist/assets. The original hero is at dist/assets/garden-story.png. It was created with built-in imagegen. User reference pictures are not embedded in the website.

Final artwork prompt:

Use case: illustration-story. Create an original premium editorial illustration for a Mediterranean garden design website called Terra. No text, no letters, no logo. Very wide landscape composition 3:2. A small warm Southern European walled courtyard, rusty terracotta patio, winding pale gravel path, circular outdoor table with cream striped parasol, olive trees and cypress, ornate gigantic wildflowers and charming dense botanical borders in the foreground. Off-white stucco arch with a view of sage green hills. Hand-drawn ink contours, fine etched lines, gouache and colored pencil on visibly grainy ivory paper, whimsical sophisticated European botanical storybook feeling, subtle surreal scale. Main colors deep forest and olive green, burnt terracotta red, cream, butter yellow, touches of lavender. Sunset warm light, dreamlike but useful as garden inspiration. Unoccupied garden, no human characters. Intricate plant silhouettes with asymmetry, no flat generic vector illustration, no 3D plastic, no gradients, no watermark.

## Ground library update

The ground library now has 19 finishes across 6 categories: brick/pavers, natural stone, gravel/pebbles, decking, green surfaces, and concrete/stepping stones. Category browsing does not change the selected material. Each finish has its own SVG texture and sample rate; selection updates the measured budget, perspective and exported layouts. Existing terracotta, gravel and lawn projects remain compatible. Verified category filtering, deck selection, budget changes, all 19 rates and unique textures, and mobile width at 390 px.

## Complete garden-planning expansion — 30 October 2026

The studio now has 45 placeable elements (20 planting options, 21 built/furnishing/water elements, 4 lights) alongside 19 ground finishes. Planting is organized into trees, shrubs, flowers, groundcovers, grasses/sedges and edible beds. Construction choices include brick/stone walls, platforms, screens, pergolas, steps, counters, built-in BBQ islands, sink and oven stations, pools, ponds and fountains. Product availability and plant suitability are not claimed to be verified.

Paths have editable materials, widths and waypoints. Surface quantities are sampled at 120 × 120 resolution, clipped to the boundary, and assigned once: occupied built footprints, then newest paths, then soil, then base ground. Paths and built footprints therefore do not duplicate the base-ground quantity. This is a flat concept model, not a site survey.

Service notes cover electric, water, gas, drainage, irrigation, data and unknown services. They have independent visibility and proposed/existing-unverified/source-recorded status. A source reference is required before a line can be recorded as existing with a source. There are no trench depths, connection instructions or gas/electrical construction specifications.

ZIP lookup uses the documented public Zippopotam.us / GeoNames API to resolve city/state. It is not a price or climate service. Live local retailer, labour and contractor pricing are not connected. Users can record quotes with ZIP, date, supplier/reference, source link, total amount and included scope. Quotes apply only to the same ZIP and matching quantities; changed quantities are marked for review. Demo allowances, quote-required lines and recorded quotes are visibly separated. Unknown prices remain null rather than zero. A sample quote used in local QA is clearly labelled as fictitious and is not deployed as catalog data.

References:
- ZIP lookup: https://docs.zippopotam.us/docs/getting-started/
- Purple coneflower: https://plants.ces.ncsu.edu/plants/echinacea-purpurea/
- Smooth hydrangea: https://plants.ces.ncsu.edu/plants/hydrangea-arborescens/
- Pennsylvania sedge: https://plants.ces.ncsu.edu/plants/carex-pensylvanica/
- Creeping thyme: https://plants.ces.ncsu.edu/plants/thymus-serpyllum/
- Pool barrier guidance: https://www.cpsc.gov/safety-education/safety-guides/pools-and-spas/safety-barrier-guidelines-home-pools
- Utility locating: https://www.enbridge.com/projects-and-infrastructure/public-awareness/safe-digging-and-damage-prevention/call-811

Validation: syntax checks; 45 non-empty catalog icons; path and pool surface exclusion; unknown pool prices; ZIP quote isolation; quote invalidation on changed size; service route length; source-required service records; and old-project migration. Browser verified pool placement, category filtering, ZIP 10001 → New York City/NY, quote recording, walkway creation, utility choices, perspective rendering and 390 px studio/budget sizing.
