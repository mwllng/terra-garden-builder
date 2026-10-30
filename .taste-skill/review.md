# Terra Taste Skill review

## Direction and inventory

App screen, not a marketing-page redesign. Chosen from the dealt builder styles: framed-sheet, seed 744250936. Its quiet frame fits long editing sessions better than the alternative ledger. No redraw. Keep palette/type because the user explicitly requests terracotta, garden greens, artistic fonts and illustrated Mediterranean garden material.

Inventory: one owner-created project; dimensions and curved/straight boundary; three drawing layers; ground/soil/path geometry; positioned plant and garden symbols; seven utility types; three light-strand types; sample allowances and ZIP-specific recorded quotes; original artwork; local project persistence; custom personal care records. Counts and totals are computed from the actual catalog and plan.

Question: what belongs in my garden, and what do I need to plan next?
Face: a green-grey frame around the actual editable garden; Cormorant is retained for the wordmark, homepage and material-room title, with DM for dense controls.
Signature: the material room turns Terra’s pieces and surfaces into a saved, searchable garden wardrobe, with a live current-plan preview.

## Checks and measurements

The skill was installed from Leonxlnx/taste-skill, skills/taste-skill, as design-taste-frontend. Source lint for atelier.js/atelier.css: 0 FAIL, 0 WARN.

Before/after browser inspection ran at 1440, 768 and 390 px. Baseline: 3 reported FAIL, 5 WARN. Final: 0 FAIL with the single allowance below, 3 WARN. All widths and desktop/mobile material-room captures were visually reviewed. Fonts now load instead of falling back, and default garden labels render at 12 px rather than 9 px.

Allowance: no-title is a false positive for this hash-routed app. The tool’s app probe calls document.querySelector('h1'), which finds the hidden homepage title first. A separate browser check confirms one visible h1, Garden atelier, at 24 px on the phone; screenshots show the title. Hidden route headings were not removed to satisfy the tool.

Warnings considered:
- colour-sprawl: the coloured area is the user’s actual ground/plant design data, not decorative app chrome; preserving material colours is the task.
- tiny-text ratio: primary form text is 13 px (16 px inputs on phones); 11–12 px is reserved for phase sublines, measurements, captions and sample-rate text. The absolute below-11 px failure was fixed.
- ragged-row: the controls and inspector are independently scrolling tools next to the canvas, not peer metric cards. Forcing their bottom edges together would add empty panels; their top edges and sheet frame align.

## Behavior and data verification

Syntax for atelier.js, layers.js, planning.js and app.js passed. VM checks cover 207 choices, all 143 symbols in plan/perspective, all 64 textures, all six legacy phase mappings, migration idempotence, valid phase records, service isolation, favorites, base notes, care records, malformed date rejection, filtering and placement. Existing geometry/quantity, ZIP quote isolation/invalidation, source-required utility records, light strands and save migration regressions pass.

Browser checks: all nine phase controls; base selection and note persistence; planning-check toggle; an isolated editable water route; planting-bed drawing mode; adding/checking a custom dated care task; material search and saved shelf; adding a piece; replacing a finish; live palette preview; saving and reloading all new records; overhead strand/night preview; phone dialog and direct utility action. No browser page errors. Synthetic QA data was not committed or deployed as saved project data.

## Visual critique

The largest object is the working garden, not a greeting or vanity figures. The material room has a separate search/filter area, large peer-asset thumbnails and a current-plan preview; its phone version becomes a two-column bottom sheet. Nine phase tabs express construction planning without locking people out of design. On a phone the canvas remains above the detailed editing controls. The compact comparison labels are the weakest part of the first screen, but their type is legible and controls remain available.

The user-pinned artwork and diagram content are retained; no stock photographs, new external asset licences or fabricated claims were added. Sample rates and species/product concepts are explicitly labelled and still need local confirmation. The foundation build-up is explanatory only, not an excavation/installation section. Story progression, real product inventory, real engineering specifications and notifications are not implemented.

## v0.8 regional cost and selection update

Preserved the framed-sheet app direction. New experience.js/experience.css/wages.js source lint: 0 FAIL, 0 WARN. Real-browser Studio inspection at 1440/768/390: 0 FAIL with the same no-title false-positive allowance and 3 existing warnings. Colored garden geometry conveys materials/data; canvas and side inspector have intentionally different heights; dense secondary notes retain smaller type. New action labels and cost fields remain readable, with explicit unknown-cost states. Reviewed desktop/mobile Studio and the budget/presentation outputs. Browser checks confirm live ZIP resolution and state-driven labor changes, selection deletion with typing protection, service selection, full plant list access, SVG validity and mobile width. Final presentation capture finishes entrance animations before screenshot; a transition-frame screenshot was replaced.

## v0.8.1 panel alignment

Retained the existing app direction. The left sheet follows the measured canvas height rather than viewport height; a fixed heading and scroll hint frame one scroll region. Material choices no longer nest their own scrollbar. Browser measurements confirm aligned bottoms at 1440/1024/768 and natural stacking at 390; filtering, selection and the last checklist remain reachable. Reviewed the updated desktop screenshot.
