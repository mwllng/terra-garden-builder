# Terra version notes

Versions below retrospectively name the five existing website snapshots. The commit IDs are the original saved history; their commit messages have not been rewritten. Dates use America/New_York.

## Version tracking — 2026-10-30

- Added these release notes and a durable project instruction to push future completed website updates and their notes to GitHub.
- Repository: https://github.com/mwllng/terra-garden-builder (private). The original five website snapshots are preserved in Git history.
- Validation: checked the existing five-commit history and tracked source files. No website behavior changed.

## 0.5.0 — Three-layer garden studio · 2026-10-30

Original commit: `8901720f6cc870d977cf3b6ca368eca56da2da74`

- Added independent Ground, Above ground, Underground and combined views, readable labels, zoom and current-layer SVG export.
- Made utility routes visible above objects in combined plans, with an isolated underground sheet, direct route creation and draggable endpoints.
- Added exploded perspective services, 44 planting concepts, 31 garden elements, 10 lights, 29 ground finishes, and editable festoon/fairy/LED strands with night effects.
- Fixed shared SVG resource collisions between drawings.
- Validation: syntax, catalog/texture coverage, layer isolation, route editing and persistence, string lighting, quantity/quote checks, mobile layout and underground SVG export.
- Limits: utility positions are user-entered concept records; the exploded view is not a burial-depth drawing. Catalog stock and local installed pricing are not connected.

## 0.4.0 — Complete garden planning · 2026-10-30

Original commit: `341c8f8440cade757d6f7b89904d3677b09a3c1c`

- Expanded to 45 elements, including planting, walls, platforms, BBQ/counter areas, pools, ponds and lighting.
- Added editable paths, utility route records, ZIP lookup and ZIP-specific user-entered quotes.
- Excluded path and built footprints from base-ground quantities and flagged quotes when quantities changed.
- Validation: geometry/quantity checks, catalog coverage, quote isolation, service lengths, migration, browser workflows and mobile sizing.
- Limits: ZIP lookup resolves location; it does not supply automatic local prices or plant suitability.

## 0.3.0 — Ground material library · 2026-10-30

Original commit: `6b11129b245f5a8fe0a23d670424f343d0ab230a`

- Added 19 finishes across six ground categories, distinct textures and illustrative rates.
- Synchronized material selection across budget, perspective and exports.
- Validation: filtering, selection, costs, unique textures and 390 px mobile width.

## 0.2.0 — Four-page design experience · 2026-10-29

Original commit: `dc62dac36daa42791c7e497a71c19f624e3dcf5f`

- Added Home, six-step Studio, Budget and Perspective pages with original garden artwork and bundled artistic fonts.
- Added adjustable straight/curved boundaries, soil areas, object placement, utility sketches, seasons, night view and project saving/export.
- Validation: syntax, geometry, basic browser design flows and mobile layouts.
- Limits: perspective is an illustrated SVG; live photorealistic AI is not connected. Full photo-upload testing was interrupted at file selection.

## 0.1.0 — First bloom · 2026-10-29

Original commit: `9cdbea05a7e2ece682f39ad03d5be6b8590e8ba5`

- Initial Terra garden-design demo with a terracotta/olive palette, three concepts, illustrative pricing, save, undo and export.
