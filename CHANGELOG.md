# Terra version notes

Versions below retrospectively name the five existing website snapshots. The commit IDs are the original saved history; their commit messages have not been rewritten. Dates use America/New_York.

## 0.8.1 — Canvas-aligned design choices · 2026-10-30

- Match the desktop/tablet left choices panel to the actual central canvas height using a resize observer, replacing its viewport-based height cap. Keep the step heading and scroll guidance visible while choices/checks scroll in one region, without a second nested material-list scrollbar.
- Rename Hardscape to Paving & structures, clarify the ground filter and explain which surfaces change when selecting a finish. Keep phone controls in normal document flow.
- Validation: Chrome at 1440, 1024 and 768 px measured zero-pixel difference between panel and canvas bottom; 390 px remains a full-height stacked layout. Material filtering/selection and scrolling to the last checklist were verified; no horizontal overflow or page errors. Reviewed desktop screenshot and repeated the Taste audit with the existing documented title allowance.

## 0.8.0 — Regional budget and usable design tools · 2026-10-30

- Five-digit ZIP entry automatically resolves location and recalculates regional labor estimates. Bundled 2025 BLS/O*NET wage snapshots cover 50 states and DC; editable worker-hours, contractor factor, site factor and ZIP-scoped hourly overrides expose the assumptions. No live retailer price feed is connected.
- Split the budget into supply, installed bundles, possible labor, other recorded costs and a combined reserve. ZIP-matched quotes override sample allowances; installed quotes suppress matching labor. Whole-project labor replaces modeled labor, with overlap checks for installed bundles. Unknown scopes remain visibly unpriced.
- Fixed the service-type dropdown binding; added readable service buttons, visible finish/cancel drawing controls, full-library entry buttons and a filterable list of placed plants, objects, ground, services and lights.
- Delete/Backspace removes selected objects, beds, paths, utility routes or light strands. Typing fields and dialogs are protected; undo/redo restores edits.
- Added Garden / Technical presentation modes, a plan/material/plant/cost board, standalone SVG presentation download and print/save-PDF layout. Presentation rendering preserves saved technical layer choices.
- Validation: cost formulas, state differences, ZIP quote isolation, installed-quote handling, custom/stale hours, DIY and specialist gaps; full previous atelier browser regression; live ZIP lookup for New York and Florida; keyboard/input protection, service drawing, plant list, presentation SVG XML and preserved layers; phone layouts and no browser page errors.
- Limits: regional employee wages are annual state-level benchmarks, not ZIP-level contractor offers. The default 2× factor and task hours are editable Terra assumptions. Specialist work and missing supplies require quotes. Presentation is illustrative, not photorealistic.

## 0.7.0 — Garden atelier, build sequence and care · 2026-10-30

- Installed and applied Taste Skill (`design-taste-frontend`, tasteskill v2) from Leonxlnx/taste-skill. Chose its framed-sheet builder direction, seed 744250936, retaining Terra’s palette, artistic brand fonts and original garden illustrations.
- Reworked Studio into nine freely accessible stages: Survey, Design, Foundations, Services, Hardscape, Planting, Furnish, Lighting and Care. Existing saved six-stage projects migrate without discarding their design or quotes.
- Added a dressmaker-inspired material room with 207 design choices: 74 planting concepts, 64 ground finishes, 51 built/furniture/water elements and 18 lights. Search, category filters, a saved shelf, current-plan preview and click-to-place/apply all work. The three overhead light-strand tools remain separate.
- Added a base-approach record, drainage-review state, foundation notes and conceptual build-up diagram; 27 user-reviewed planning checks across the nine phases; and custom care tasks with routine, review date, completion and removal. These are saved and included in project exports. No notification service is scheduled.
- Kept utilities independently visible and editable. Services and lighting have separate stages, and manual layer changes no longer change the selected workflow stage.
- Repaired invalid font-face declarations from the prior polish so the bundled Cormorant fonts actually load; increased plan-label readability and refined the editor’s responsive frame.
- Validation: syntax for four scripts; all 143 object symbols and 64 surface textures; legacy/new save validation and migration; geometry, quantity exclusion, quotes, utility routes and night-light regressions. Browser tests covered all nine stages, foundation records/checks, water-route creation, planting-bed tool, care tasks, search, favorites, placement, finish changes, live preview, save/reload and phone layouts, with no page errors.
- Taste audit: baseline 3 reported failures; final 0 with one documented tool false-positive allowance (`no-title`: the inspector selects the hidden homepage h1 instead of the visible studio h1). The browser confirms exactly one visible Studio title. Three design warnings are recorded in `.taste-skill/review.md`.
- Limits: assets are conceptual design choices and illustrative supply allowances, not verified inventory or locally suitable species. Foundation and service records do not calculate construction specifications. Local installed costs remain quote-required. Story/game progression is intentionally deferred.

## 0.6.0 — Hallmark design polish · 2026-10-30

- Applied Hallmark 2.0.0 from Nutlope/hallmark, keeping Terra’s requested terracotta, garden greens, artistic fonts, original illustration and four-page structure.
- Replaced repetitive slogans and mixed italic headings with direct garden-planning copy. Removed redundant eyebrow labels, decorative badges and flourishes; retained a directional icon on navigation cards.
- Improved interface type size, sentence-case labels, control states, focus contrast, form edges, mobile readability and capped page widths. Extracted shared CSS palette, font and spacing tokens.
- Preserved all three design layers, utility editing, plant/material libraries, lighting, costs, save/export behavior and deployment audience.
- Validation: JavaScript syntax; existing layer/geometry/quote regression checks; Hallmark desktop/mobile rendering for all four routes; retained 5/5 links, 45/45 fields and 7/7 script hooks. A separate visual review’s link-affordance finding was fixed.
- The requested brand palette and illustrated garden diagrams are retained as documented Hallmark exceptions. Existing concept-model limitations remain unchanged.

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
