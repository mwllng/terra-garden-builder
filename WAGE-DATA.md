# Regional labor data and assumptions

Terra bundles 2025 BLS Occupational Employment and Wage Statistics distributed through O*NET OnLine, retrieved October 30, 2026. Data: US national values and all 50 states plus DC; hourly 25th, median and 75th percentiles for:

- [Landscaping and Groundskeeping Workers, 37-3011.00](https://www.onetonline.org/link/localwages/37-3011.00)
- [Construction Laborers, 47-2061.00](https://www.onetonline.org/link/localwages/47-2061.00)

Attribution: U.S. Department of Labor, Employment and Training Administration, O*NET OnLine; underlying wage data from BLS OEWS. O*NET wage pages state [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Terra selects and reformats the public data into `dist/wages.js`; this is an adaptation, not an endorsement.

To reproduce, download the CSV linked by each occupation's state wage page. Example: https://www.onetonline.org/link/localwagestable/37-3011.00/LocalWages_37-3011.00_NY.csv?fmt=csv&st=NY . Use the United States row for the national fallback and the named state row for each state (not subsequent metro rows). Select Hourly QL (25%), Median (50%) and QU (75%). Substitute the second occupation and each state's two-letter code. Official release tables: https://www.bls.gov/oes/tables.htm .

## What the estimate means

ZIP location lookup uses Zippopotam.us to resolve city/state. It selects the matching state snapshot, not a ZIP-specific wage survey. Without a resolved state, the UI explicitly shows the US fallback. Material prices remain illustrative allowances unless replaced with user-entered matching ZIP quotes. No live retailer feed or inventory API is connected.

Employee wages are not contractor billing rates. Terra's default 2× multiplier is its own editable allowance for overhead and margin, not a statistic published by BLS. The range uses the 25th–75th employee wage percentiles times that multiplier. An entered hourly rate applies only to its recorded ZIP. Worker-hour templates and the editable site factor are planning assumptions, not measured productivity or a crew schedule: pavers/stone/concrete .14 h/sq ft; gravel .04; decking .16; green surfaces .025; per tree 2 h, shrub .6 h, edible plant .8 h, other plant .35 h, furniture placement .25 h. These assume basic placement/installation only and exclude specialist work or site remediation.

Lighting, utility, structural and water-feature installation remain quote/input-required. Custom hours are tied to the current quantity signature and require review when quantities change. DIY removes modeled labor charges while retaining unknown specialist scopes. Installed quotes suppress the matching labor estimate. A whole-project labor quote replaces computed labor; overlapping installed bundles are rejected or flagged and excluded after import. Unknown costs are excluded from the displayed incomplete range, never silently priced at zero. Reserve applies to known supply/quotes plus modeled labor. All project assumptions are exported; the presentation includes source attribution metadata.
