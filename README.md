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
