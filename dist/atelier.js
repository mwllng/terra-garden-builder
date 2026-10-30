'use strict';
const ATELIER_ASSETS={
  "echinaceaWhite": {
    "name": "White coneflower concept",
    "type": "plant",
    "group": "flowers",
    "art": "daisy",
    "w": 2,
    "h": 2,
    "price": 18,
    "bloom": "#efe4ce",
    "foliage": "#738563"
  },
  "rudbeckia": {
    "name": "Golden coneflower concept",
    "type": "plant",
    "group": "flowers",
    "art": "daisy",
    "w": 2,
    "h": 2,
    "price": 18,
    "bloom": "#d1ad45",
    "foliage": "#8d9c72"
  },
  "cosmos": {
    "name": "Rose cosmos patch concept",
    "type": "plant",
    "group": "flowers",
    "art": "daisy",
    "w": 3,
    "h": 2,
    "price": 18,
    "bloom": "#cf9caf",
    "foliage": "#6c886d"
  },
  "poppy": {
    "name": "Papaver border concept",
    "type": "plant",
    "group": "flowers",
    "art": "daisy",
    "w": 2,
    "h": 2,
    "price": 18,
    "bloom": "#c16e50",
    "foliage": "#91a584"
  },
  "verbena": {
    "name": "Verbena drift concept",
    "type": "plant",
    "group": "flowers",
    "art": "allium",
    "w": 3,
    "h": 2,
    "price": 18,
    "bloom": "#9d8eaf",
    "foliage": "#738563"
  },
  "agapanthus": {
    "name": "Agapanthus clump concept",
    "type": "plant",
    "group": "flowers",
    "art": "allium",
    "w": 3,
    "h": 3,
    "price": 18,
    "bloom": "#8e9eb7",
    "foliage": "#8d9c72"
  },
  "foxglove": {
    "name": "Foxglove spires concept",
    "type": "plant",
    "group": "flowers",
    "art": "iris",
    "w": 2,
    "h": 2,
    "price": 18,
    "bloom": "#caadb7",
    "foliage": "#6c886d"
  },
  "hollyhock": {
    "name": "Hollyhock border concept",
    "type": "plant",
    "group": "flowers",
    "art": "iris",
    "w": 3,
    "h": 2,
    "price": 18,
    "bloom": "#d4a390",
    "foliage": "#91a584"
  },
  "anemone": {
    "name": "Japanese anemone concept",
    "type": "plant",
    "group": "flowers",
    "art": "daisy",
    "w": 3,
    "h": 3,
    "price": 18,
    "bloom": "#e3cbd0",
    "foliage": "#738563"
  },
  "hellebores": {
    "name": "Hellebore clump concept",
    "type": "plant",
    "group": "flowers",
    "art": "iris",
    "w": 2,
    "h": 2,
    "price": 18,
    "bloom": "#b4bd9e",
    "foliage": "#8d9c72"
  },
  "geum": {
    "name": "Apricot geum concept",
    "type": "plant",
    "group": "flowers",
    "art": "daisy",
    "w": 2,
    "h": 2,
    "price": 18,
    "bloom": "#d8a276",
    "foliage": "#6c886d"
  },
  "achillea": {
    "name": "Yarrow drift concept",
    "type": "plant",
    "group": "flowers",
    "art": "allium",
    "w": 3,
    "h": 2,
    "price": 18,
    "bloom": "#d6bd7b",
    "foliage": "#91a584"
  },
  "euphorbia": {
    "name": "Euphorbia mound concept",
    "type": "plant",
    "group": "shrubs",
    "art": "leaf",
    "w": 3,
    "h": 3,
    "price": 28,
    "bloom": "#b1be78",
    "foliage": "#738563"
  },
  "hebe": {
    "name": "Hebe shrub concept",
    "type": "plant",
    "group": "shrubs",
    "art": "hedge",
    "w": 3,
    "h": 3,
    "price": 28,
    "bloom": "#9d8db1",
    "foliage": "#8d9c72"
  },
  "daphne": {
    "name": "Daphne concept concept",
    "type": "plant",
    "group": "shrubs",
    "art": "blossom",
    "w": 4,
    "h": 4,
    "price": 28,
    "bloom": "#e5c9d4",
    "foliage": "#6c886d"
  },
  "osmanthus": {
    "name": "Osmanthus concept concept",
    "type": "plant",
    "group": "shrubs",
    "art": "hedge",
    "w": 5,
    "h": 4,
    "price": 28,
    "bloom": "#ede2b6",
    "foliage": "#91a584"
  },
  "myrtle": {
    "name": "Myrtle shrub concept",
    "type": "plant",
    "group": "shrubs",
    "art": "blossom",
    "w": 4,
    "h": 4,
    "price": 28,
    "bloom": "#efe7d5",
    "foliage": "#738563"
  },
  "arbutus": {
    "name": "Strawberry tree concept",
    "type": "plant",
    "group": "trees",
    "art": "fruit",
    "w": 8,
    "h": 8,
    "price": 160,
    "bloom": "#ba7858",
    "foliage": "#8d9c72"
  },
  "amelanchier": {
    "name": "Serviceberry tree concept",
    "type": "plant",
    "group": "trees",
    "art": "blossom",
    "w": 9,
    "h": 9,
    "price": 160,
    "bloom": "#e7e2d2",
    "foliage": "#6c886d"
  },
  "magnolia": {
    "name": "Small magnolia concept",
    "type": "plant",
    "group": "trees",
    "art": "blossom",
    "w": 10,
    "h": 10,
    "price": 160,
    "bloom": "#e9d1c8",
    "foliage": "#91a584"
  },
  "hornbeam": {
    "name": "Clipped hornbeam concept",
    "type": "plant",
    "group": "trees",
    "art": "tree",
    "w": 7,
    "h": 5,
    "price": 160,
    "bloom": "#97a26e",
    "foliage": "#738563"
  },
  "pomegranate": {
    "name": "Pomegranate concept concept",
    "type": "plant",
    "group": "trees",
    "art": "fruit",
    "w": 7,
    "h": 7,
    "price": 160,
    "bloom": "#b9674a",
    "foliage": "#8d9c72"
  },
  "liriope": {
    "name": "Liriope edge concept",
    "type": "plant",
    "group": "grasses",
    "art": "grass",
    "w": 2,
    "h": 2,
    "price": 18,
    "bloom": "#a096b5",
    "foliage": "#6c886d"
  },
  "bluefescue": {
    "name": "Blue fescue tuft concept",
    "type": "plant",
    "group": "grasses",
    "art": "grass",
    "w": 1.5,
    "h": 1.5,
    "price": 18,
    "bloom": "#91a9a1",
    "foliage": "#91a584"
  },
  "hakonechloa": {
    "name": "Hakone grass concept",
    "type": "plant",
    "group": "grasses",
    "art": "grass",
    "w": 2,
    "h": 2,
    "price": 18,
    "bloom": "#c1be7f",
    "foliage": "#738563"
  },
  "deschampsia": {
    "name": "Tufted hair grass concept",
    "type": "plant",
    "group": "grasses",
    "art": "plume",
    "w": 3,
    "h": 3,
    "price": 18,
    "bloom": "#d4c29a",
    "foliage": "#8d9c72"
  },
  "strawberry": {
    "name": "Strawberry patch concept",
    "type": "plant",
    "group": "edible",
    "art": "ground",
    "w": 3,
    "h": 2,
    "price": 18,
    "bloom": "#d1b1a3",
    "foliage": "#6c886d"
  },
  "sagebed": {
    "name": "Sage herb clump concept",
    "type": "plant",
    "group": "edible",
    "art": "leaf",
    "w": 2,
    "h": 2,
    "price": 18,
    "bloom": "#aaa2b9",
    "foliage": "#91a584"
  },
  "mintpot": {
    "name": "Mint container concept",
    "type": "plant",
    "group": "edible",
    "art": "herbbed",
    "w": 2,
    "h": 2,
    "price": 18,
    "bloom": "#a8b58b",
    "foliage": "#738563"
  },
  "oregano": {
    "name": "Oregano patch concept",
    "type": "plant",
    "group": "edible",
    "art": "ground",
    "w": 2,
    "h": 2,
    "price": 18,
    "bloom": "#c3b1bd",
    "foliage": "#8d9c72"
  },
  "wickerchair": {
    "name": "Woven lounge chair",
    "type": "furniture",
    "group": "furniture",
    "art": "chair",
    "w": 3,
    "h": 3,
    "price": 180,
    "occupies": false,
    "height": 1
  },
  "teakchair": {
    "name": "Timber dining chair",
    "type": "furniture",
    "group": "furniture",
    "art": "chair",
    "w": 2,
    "h": 2,
    "price": 130,
    "occupies": false,
    "height": 1
  },
  "sectionalsofa": {
    "name": "Corner lounge envelope",
    "type": "furniture",
    "group": "furniture",
    "art": "sofa",
    "w": 9,
    "h": 6,
    "price": 950,
    "occupies": false,
    "height": 1
  },
  "daybed": {
    "name": "Garden daybed",
    "type": "furniture",
    "group": "furniture",
    "art": "lounger",
    "w": 6,
    "h": 6,
    "price": 720,
    "occupies": false,
    "height": 1
  },
  "picnictable": {
    "name": "Picnic table",
    "type": "furniture",
    "group": "furniture",
    "art": "dining",
    "w": 7,
    "h": 5,
    "price": 420,
    "occupies": false,
    "height": 1
  },
  "coffeetable": {
    "name": "Low coffee table",
    "type": "furniture",
    "group": "furniture",
    "art": "dining",
    "w": 3,
    "h": 2,
    "price": 145,
    "occupies": false,
    "height": 1
  },
  "potcluster": {
    "name": "Terracotta pot trio",
    "type": "furniture",
    "group": "furniture",
    "art": "planter",
    "w": 4,
    "h": 3,
    "price": 125,
    "occupies": false,
    "height": 1
  },
  "urn": {
    "name": "Large garden urn",
    "type": "furniture",
    "group": "furniture",
    "art": "planter",
    "w": 3,
    "h": 3,
    "price": 180,
    "occupies": false,
    "height": 1
  },
  "waterbutt": {
    "name": "Rainwater barrel envelope",
    "type": "water",
    "group": "water",
    "art": "cabinet",
    "w": 3,
    "h": 3,
    "price": null,
    "occupies": true,
    "height": 3
  },
  "rill": {
    "name": "Linear water rill",
    "type": "water",
    "group": "water",
    "art": "pond",
    "w": 10,
    "h": 2,
    "price": null,
    "occupies": true,
    "height": 1
  },
  "reflectingpool": {
    "name": "Reflecting pool",
    "type": "water",
    "group": "water",
    "art": "pool",
    "w": 8,
    "h": 4,
    "price": null,
    "occupies": true,
    "height": 1
  },
  "wildlifepond": {
    "name": "Wildlife pond envelope",
    "type": "water",
    "group": "water",
    "art": "pond",
    "w": 8,
    "h": 6,
    "price": null,
    "occupies": true,
    "height": 1
  },
  "coldframe": {
    "name": "Cold frame",
    "type": "structure",
    "group": "structure",
    "art": "platform",
    "w": 4,
    "h": 3,
    "price": null,
    "occupies": true,
    "height": 1
  },
  "greenhouse": {
    "name": "Small greenhouse envelope",
    "type": "structure",
    "group": "structure",
    "art": "pergola",
    "w": 8,
    "h": 6,
    "price": null,
    "occupies": true,
    "height": 1
  },
  "pottingbench": {
    "name": "Potting bench",
    "type": "furniture",
    "group": "furniture",
    "art": "counter",
    "w": 5,
    "h": 2,
    "price": 240,
    "occupies": true,
    "height": 3
  },
  "bikestore": {
    "name": "Bicycle store envelope",
    "type": "structure",
    "group": "structure",
    "art": "cabinet",
    "w": 7,
    "h": 3,
    "price": null,
    "occupies": true,
    "height": 3
  },
  "curvedseat": {
    "name": "Curved bench envelope",
    "type": "furniture",
    "group": "furniture",
    "art": "sofa",
    "w": 7,
    "h": 3,
    "price": 430,
    "occupies": false,
    "height": 1
  },
  "limescreen": {
    "name": "Limewash privacy wall",
    "type": "structure",
    "group": "structure",
    "art": "wall",
    "w": 10,
    "h": 1,
    "price": null,
    "occupies": true,
    "height": 3
  },
  "wovenfence": {
    "name": "Woven willow screen",
    "type": "structure",
    "group": "structure",
    "art": "fence",
    "w": 6,
    "h": 0.5,
    "price": null,
    "occupies": true,
    "height": 1
  },
  "barcounter": {
    "name": "Outdoor bar counter",
    "type": "kitchen",
    "group": "kitchen",
    "art": "counter",
    "w": 8,
    "h": 2.5,
    "price": null,
    "occupies": true,
    "height": 3
  },
  "mushroomlight": {
    "name": "Mushroom path lamp",
    "type": "light",
    "art": "bollard",
    "price": 65,
    "w": 0.6,
    "h": 0.6
  },
  "steplight": {
    "name": "Stair-riser light",
    "type": "light",
    "art": "decklight",
    "price": 40,
    "w": 0.6,
    "h": 0.6
  },
  "recesseduplight": {
    "name": "Recessed ground uplight",
    "type": "light",
    "art": "spotlight",
    "price": 70,
    "w": 0.6,
    "h": 0.6
  },
  "wallwasher": {
    "name": "Wall-wash light",
    "type": "light",
    "art": "walllight",
    "price": 85,
    "w": 0.6,
    "h": 0.6
  },
  "tablelamp": {
    "name": "Rechargeable table lamp",
    "type": "light",
    "art": "pendant",
    "price": 60,
    "w": 0.6,
    "h": 0.6
  },
  "copperlantern": {
    "name": "Copper lantern concept",
    "type": "light",
    "art": "lantern",
    "price": 95,
    "w": 1,
    "h": 1
  },
  "stakeglobe": {
    "name": "Globe stake light",
    "type": "light",
    "art": "pendant",
    "price": 45,
    "w": 0.6,
    "h": 0.6
  },
  "pergolapendant": {
    "name": "Pergola pendant",
    "type": "light",
    "art": "pendant",
    "price": 120,
    "w": 0.6,
    "h": 0.6
  }
};
const ATELIER_FINISHES={
  "brickBasket": {
    "name": "Basketweave brick",
    "category": "pavers",
    "texture": "basket",
    "base": "#ad674f",
    "line": "#e2c29d",
    "rate": 9,
    "fill": "url(#extra-brickBasket)",
    "look": "Basketweave brick concept finish. Match product, slip performance, drainage and local supply before ordering."
  },
  "brickLinear": {
    "name": "Long-format clay",
    "category": "pavers",
    "texture": "linear",
    "base": "#bc7d61",
    "line": "#dfba98",
    "rate": 10,
    "fill": "url(#extra-brickLinear)",
    "look": "Long-format clay concept finish. Match product, slip performance, drainage and local supply before ordering."
  },
  "brickOlive": {
    "name": "Olive-toned brick",
    "category": "pavers",
    "texture": "brick",
    "base": "#8c9474",
    "line": "#d1c9ac",
    "rate": 8,
    "fill": "url(#extra-brickOlive)",
    "look": "Olive-toned brick concept finish. Match product, slip performance, drainage and local supply before ordering."
  },
  "brickRose": {
    "name": "Rose clay paver",
    "category": "pavers",
    "texture": "brick",
    "base": "#c79684",
    "line": "#ebd5bd",
    "rate": 9,
    "fill": "url(#extra-brickRose)",
    "look": "Rose clay paver concept finish. Match product, slip performance, drainage and local supply before ordering."
  },
  "octagon": {
    "name": "Octagon and dot tile",
    "category": "pavers",
    "texture": "octagon",
    "base": "#d8d0b9",
    "line": "#a07a5f",
    "rate": 16,
    "fill": "url(#extra-octagon)",
    "look": "Octagon and dot tile concept finish. Match product, slip performance, drainage and local supply before ordering."
  },
  "checker": {
    "name": "Olive and ivory checker",
    "category": "pavers",
    "texture": "checker",
    "base": "#cfcbb3",
    "line": "#6c8065",
    "rate": 14,
    "fill": "url(#extra-checker)",
    "look": "Olive and ivory checker concept finish. Match product, slip performance, drainage and local supply before ordering."
  },
  "fanbrick": {
    "name": "Courtyard fan paver",
    "category": "pavers",
    "texture": "fan",
    "base": "#b98365",
    "line": "#e3c6a6",
    "rate": 13,
    "fill": "url(#extra-fanbrick)",
    "look": "Courtyard fan paver concept finish. Match product, slip performance, drainage and local supply before ordering."
  },
  "bluestone": {
    "name": "Blue-grey flagstone",
    "category": "stone",
    "texture": "stone",
    "base": "#9faeb0",
    "line": "#d3d7c9",
    "rate": 15,
    "fill": "url(#extra-bluestone)",
    "look": "Blue-grey flagstone concept finish. Match product, slip performance, drainage and local supply before ordering."
  },
  "yorkstone": {
    "name": "Honey Yorkstone concept",
    "category": "stone",
    "texture": "stone",
    "base": "#c8b583",
    "line": "#e1d2aa",
    "rate": 17,
    "fill": "url(#extra-yorkstone)",
    "look": "Honey Yorkstone concept concept finish. Match product, slip performance, drainage and local supply before ordering."
  },
  "porphyry": {
    "name": "Porphyry sett",
    "category": "stone",
    "texture": "cobble",
    "base": "#a08b83",
    "line": "#c7b4a3",
    "rate": 14,
    "fill": "url(#extra-porphyry)",
    "look": "Porphyry sett concept finish. Match product, slip performance, drainage and local supply before ordering."
  },
  "porcelainIvory": {
    "name": "Ivory porcelain slab",
    "category": "stone",
    "texture": "large",
    "base": "#dfd9c8",
    "line": "#aeb3a3",
    "rate": 16,
    "fill": "url(#extra-porcelainIvory)",
    "look": "Ivory porcelain slab concept finish. Match product, slip performance, drainage and local supply before ordering."
  },
  "porcelainTaupe": {
    "name": "Taupe porcelain slab",
    "category": "stone",
    "texture": "large",
    "base": "#b4b09e",
    "line": "#d8d4be",
    "rate": 16,
    "fill": "url(#extra-porcelainTaupe)",
    "look": "Taupe porcelain slab concept finish. Match product, slip performance, drainage and local supply before ordering."
  },
  "stoneCrazy": {
    "name": "Irregular pale paving",
    "category": "stone",
    "texture": "crazy",
    "base": "#c9c6ae",
    "line": "#e5dfca",
    "rate": 13,
    "fill": "url(#extra-stoneCrazy)",
    "look": "Irregular pale paving concept finish. Match product, slip performance, drainage and local supply before ordering."
  },
  "limestoneTumbled": {
    "name": "Tumbled limestone",
    "category": "stone",
    "texture": "cobble",
    "base": "#d3c5a2",
    "line": "#a39e84",
    "rate": 14,
    "fill": "url(#extra-limestoneTumbled)",
    "look": "Tumbled limestone concept finish. Match product, slip performance, drainage and local supply before ordering."
  },
  "gravelHoney": {
    "name": "Honey flint gravel",
    "category": "gravel",
    "texture": "fine",
    "base": "#c8ad7e",
    "line": "#8e8064",
    "rate": 4,
    "fill": "url(#extra-gravelHoney)",
    "look": "Honey flint gravel concept finish. Match product, slip performance, drainage and local supply before ordering."
  },
  "gravelPink": {
    "name": "Rose quartz gravel",
    "category": "gravel",
    "texture": "fine",
    "base": "#d0afa1",
    "line": "#ead4c3",
    "rate": 5,
    "fill": "url(#extra-gravelPink)",
    "look": "Rose quartz gravel concept finish. Match product, slip performance, drainage and local supply before ordering."
  },
  "gravelBuff": {
    "name": "Buff limestone gravel",
    "category": "gravel",
    "texture": "fine",
    "base": "#c6c1a5",
    "line": "#969c83",
    "rate": 4,
    "fill": "url(#extra-gravelBuff)",
    "look": "Buff limestone gravel concept finish. Match product, slip performance, drainage and local supply before ordering."
  },
  "gravelBlue": {
    "name": "Blue slate chips",
    "category": "gravel",
    "texture": "mulch",
    "base": "#87979e",
    "line": "#b8c1b8",
    "rate": 5,
    "fill": "url(#extra-gravelBlue)",
    "look": "Blue slate chips concept finish. Match product, slip performance, drainage and local supply before ordering."
  },
  "gravelTerracotta": {
    "name": "Crushed terracotta",
    "category": "gravel",
    "texture": "fine",
    "base": "#b77759",
    "line": "#d7ae86",
    "rate": 4,
    "fill": "url(#extra-gravelTerracotta)",
    "look": "Crushed terracotta concept finish. Match product, slip performance, drainage and local supply before ordering."
  },
  "gravelRound": {
    "name": "Golden river shingle",
    "category": "gravel",
    "texture": "pebble",
    "base": "#b6a17c",
    "line": "#d8cbb0",
    "rate": 5,
    "fill": "url(#extra-gravelRound)",
    "look": "Golden river shingle concept finish. Match product, slip performance, drainage and local supply before ordering."
  },
  "deckWeathered": {
    "name": "Weathered timber",
    "category": "decking",
    "texture": "deck",
    "base": "#a4a497",
    "line": "#737e72",
    "rate": 14,
    "fill": "url(#extra-deckWeathered)",
    "look": "Weathered timber concept finish. Match product, slip performance, drainage and local supply before ordering."
  },
  "deckDark": {
    "name": "Dark timber deck",
    "category": "decking",
    "texture": "deck",
    "base": "#716c59",
    "line": "#aba58b",
    "rate": 16,
    "fill": "url(#extra-deckDark)",
    "look": "Dark timber deck concept finish. Match product, slip performance, drainage and local supply before ordering."
  },
  "deckPale": {
    "name": "Pale timber deck",
    "category": "decking",
    "texture": "deck",
    "base": "#d0bf97",
    "line": "#a08b67",
    "rate": 15,
    "fill": "url(#extra-deckPale)",
    "look": "Pale timber deck concept finish. Match product, slip performance, drainage and local supply before ordering."
  },
  "deckWide": {
    "name": "Wide cedar boards",
    "category": "decking",
    "texture": "wide",
    "base": "#bd9670",
    "line": "#785e45",
    "rate": 17,
    "fill": "url(#extra-deckWide)",
    "look": "Wide cedar boards concept finish. Match product, slip performance, drainage and local supply before ordering."
  },
  "deckHerringbone": {
    "name": "Herringbone deck",
    "category": "decking",
    "texture": "herring",
    "base": "#b69c76",
    "line": "#7c7057",
    "rate": 19,
    "fill": "url(#extra-deckHerringbone)",
    "look": "Herringbone deck concept finish. Match product, slip performance, drainage and local supply before ordering."
  },
  "deckCompositeSand": {
    "name": "Sand composite boards",
    "category": "decking",
    "texture": "deck",
    "base": "#c3bb9e",
    "line": "#99977f",
    "rate": 18,
    "fill": "url(#extra-deckCompositeSand)",
    "look": "Sand composite boards concept finish. Match product, slip performance, drainage and local supply before ordering."
  },
  "lawnMeadow": {
    "name": "Low meadow mix",
    "category": "green",
    "texture": "meadow",
    "base": "#9caa72",
    "line": "#d9d3a3",
    "rate": 2.5,
    "fill": "url(#extra-lawnMeadow)",
    "look": "Low meadow mix concept finish. Match product, slip performance, drainage and local supply before ordering."
  },
  "lawnFine": {
    "name": "Fine-leaf lawn concept",
    "category": "green",
    "texture": "lawn",
    "base": "#9bac7c",
    "line": "#718762",
    "rate": 2,
    "fill": "url(#extra-lawnFine)",
    "look": "Fine-leaf lawn concept concept finish. Match product, slip performance, drainage and local supply before ordering."
  },
  "lawnNative": {
    "name": "Native meadow concept",
    "category": "green",
    "texture": "meadow",
    "base": "#99a379",
    "line": "#c4b899",
    "rate": 3,
    "fill": "url(#extra-lawnNative)",
    "look": "Native meadow concept concept finish. Match product, slip performance, drainage and local supply before ordering."
  },
  "lawnClover": {
    "name": "Clover-rich lawn concept",
    "category": "green",
    "texture": "clover",
    "base": "#96aa79",
    "line": "#d9dfbb",
    "rate": 2,
    "fill": "url(#extra-lawnClover)",
    "look": "Clover-rich lawn concept concept finish. Match product, slip performance, drainage and local supply before ordering."
  },
  "mulchFine": {
    "name": "Fine compost mulch",
    "category": "green",
    "texture": "fine",
    "base": "#77634d",
    "line": "#ac9671",
    "rate": 2,
    "fill": "url(#extra-mulchFine)",
    "look": "Fine compost mulch concept finish. Match product, slip performance, drainage and local supply before ordering."
  },
  "mulchPine": {
    "name": "Pine bark mulch",
    "category": "green",
    "texture": "mulch",
    "base": "#937154",
    "line": "#c5a57d",
    "rate": 2.5,
    "fill": "url(#extra-mulchPine)",
    "look": "Pine bark mulch concept finish. Match product, slip performance, drainage and local supply before ordering."
  },
  "concreteBoard": {
    "name": "Board-marked concrete",
    "category": "concrete",
    "texture": "linear",
    "base": "#b8baaa",
    "line": "#8f9987",
    "rate": 12,
    "fill": "url(#extra-concreteBoard)",
    "look": "Board-marked concrete concept finish. Match product, slip performance, drainage and local supply before ordering."
  },
  "concretePads": {
    "name": "Offset concrete pads",
    "category": "concrete",
    "texture": "large",
    "base": "#c6c7b4",
    "line": "#8b9981",
    "rate": 10,
    "fill": "url(#extra-concretePads)",
    "look": "Offset concrete pads concept finish. Match product, slip performance, drainage and local supply before ordering."
  },
  "concreteBroom": {
    "name": "Broom-finish concrete",
    "category": "concrete",
    "texture": "linear",
    "base": "#c1bdaa",
    "line": "#9d9f8c",
    "rate": 9,
    "fill": "url(#extra-concreteBroom)",
    "look": "Broom-finish concrete concept finish. Match product, slip performance, drainage and local supply before ordering."
  }
};

const GARDEN_PHASES=[
{title:'Survey',group:'Plan',help:'Record the space you have.',view:'composite',checks:[['measure','Record the boundary and dimensions'],['existing','Mark what stays and known services'],['conditions','Record sunlight, soil and access']]},
{title:'Design',group:'Plan',help:'Try materials and pieces together.',view:'composite',checks:[['layout','Arrange the garden zones'],['circulation','Review paths and circulation'],['budget','Review the partial budget and missing quotes']]},
{title:'Foundations',group:'Prepare',help:'Plan the layers below the finish.',view:'ground',checks:[['levels','Review levels and drainage with the site team'],['base','Confirm the base for each surface and structure'],['access','Plan access, protection and waste removal']]},
{title:'Services',group:'Prepare',help:'Map underground routes before covering them.',view:'underground',checks:[['records','Obtain location records for existing services'],['routes','Review routes with the relevant trades'],['inspection','Record required inspections before covering']]},
{title:'Paving & structures',group:'Build',help:'Choose the main ground finish, draw paths, then add walls or water features.',view:'ground',checks:[['structure','Confirm walls, supports and installation details'],['paving','Confirm paving, edges and surface falls'],['water','Coordinate water features and drainage']]},
{title:'Planting',group:'Grow',help:'Compose trees, flowers, grasses and beds.',view:'above',checks:[['species','Confirm local species and mature spread'],['soil','Confirm soil preparation and planting conditions'],['establish','Agree an establishment and watering plan']]},
{title:'Furnish',group:'Arrange',help:'Make room for everyday life outside.',view:'above',checks:[['furniture','Confirm product sizes and circulation'],['kitchen','Coordinate cooking equipment and utility needs'],['delivery','Plan delivery, placement and weather protection']]},
{title:'Lighting',group:'Arrange',help:'Try fixtures and overhead light strands.',view:'above',checks:[['fixtures','Confirm outdoor ratings and fixture positions'],['circuits','Review circuits and supports with the installer'],['night','Review night appearance and glare on site']]},
{title:'Care',group:'Keep growing',help:'Give the garden an ongoing care plan.',view:'composite',checks:[['handover','Keep product, plant and installer records'],['routine','Create a local seasonal maintenance routine'],['review','Review the garden after establishment']]}
];
const BASE_OPTIONS={unspecified:'Not specified yet',aggregate:'Aggregate sub-base concept',permeable:'Permeable base concept',slab:'Engineered slab, details required',footings:'Structural footings, details required',existing:'Existing base, assessment required'};
let roomTab='plants',roomGroup='all',roomSearch='';
function upgradeAtelier(){if(S.workflowVersion!==2){S.step=[0,4,5,6,3,8][S.step]??0;S.workflowVersion=2}S.phaseChecks??={};S.baseSpec??={kind:'unspecified',drainage:'unresolved',notes:''};S.favorites??=[];S.careTasks??=[]}
function validAtelierData(v){return (v.workflowVersion==null||v.workflowVersion===2)&&(!v.phaseChecks||typeof v.phaseChecks==='object'&&!Array.isArray(v.phaseChecks)&&Object.keys(v.phaseChecks).length<=40&&Object.entries(v.phaseChecks).every(([k,b])=>GARDEN_PHASES.some(p=>p.checks.some(([id])=>id===k))&&typeof b==='boolean'))&&(!v.baseSpec||BASE_OPTIONS[v.baseSpec.kind]&&['unresolved','survey','reviewed'].includes(v.baseSpec.drainage)&&typeof v.baseSpec.notes==='string'&&v.baseSpec.notes.length<=1000)&&(!v.favorites||Array.isArray(v.favorites)&&v.favorites.length<=300&&v.favorites.every(k=>typeof k==='string'&&(k.startsWith('surface:')?MATERIALS[k.slice(8)]:CATALOG[k])) )&&(!v.careTasks||Array.isArray(v.careTasks)&&v.careTasks.length<=60&&v.careTasks.every(t=>typeof t.id==='string'&&typeof t.title==='string'&&t.title.length>0&&t.title.length<=100&&typeof t.cadence==='string'&&t.cadence.length<=80&&typeof t.done==='boolean'&&(!t.due||(/^\d{4}-\d{2}-\d{2}$/.test(t.due)&&!Number.isNaN(Date.parse(t.due))&&new Date(t.due).toISOString().slice(0,10)===t.due))))}
function atelierTexture(k,id){const m=ATELIER_FINISHES[k],t=m.texture;let d='';
if(['stone','large'].includes(t))d=`<path d="M0 0H72V54H0ZM36 0v54${t==='stone'?'M0 27h72':''}"/><path d="M7 9l17 2m22 28 18-3" opacity=".35"/>`;
else if(t==='brick')d='<path d="M0 0H72V54H0ZM0 18h72M0 36h72M18 0v18m36-18v18M36 18v18M18 36v18m36-18v18"/>';
else if(t==='checker')d='<path d="M0 0h36v27H0Zm36 27h36v27H36Z" fill="currentColor"/>';
else if(t==='basket')d='<path d="M0 0h36v27H0Zm36 0h36v27H36ZM0 27h36v27H0Zm36 0h36v27H36Z M0 9h36M0 18h36M48 0v27M60 0v27M12 27v27M24 27v27M36 36h36M36 45h36"/>';
else if(t==='herring')d='<path d="M0 0h36v18H0Zm36 0v36h18V0ZM0 18v36h18V18Zm18 18h36v18H18ZM54 18h18v36H54Z"/>';
else if(t==='octagon')d='<path d="m9 0 18 0 9 9v18l-9 9H9l-9-9V9Zm36 18h18l9 9v18l-9 9H45l-9-9V27Z"/><path d="m32 1 5 5-5 5-5-5m-27 32 5 5-5 5-5-5" fill="currentColor"/>';
else if(t==='fan')d='<path d="M0 27a36 27 0 0 1 72 0M0 54a36 27 0 0 1 72 0M0 27l12-20m24-7v27M60 7 48 27M0 54l12-20m24-7v27m24-20-12 20"/>';
else if(['deck','wide','linear'].includes(t)){const pitch=t==='wide'?27:t==='linear'?6:18;d=Array.from({length:Math.ceil(54/pitch)},(_,i)=>`<path d="M0 ${i*pitch}h72"/>`).join('')+(t==='linear'?'':'<path d="M24 0v18m24 0v18M24 36v18"/>')}
else if(t==='crazy'||t==='cobble')d='<path d="m1 1 23 2 5 18-20 6-8-10Zm27 2 42-2v23l-36-1ZM2 31l26-5 7 25-33 2Zm36-3 32 1v24l-31-3Z"/>';
else if(['lawn','meadow','clover'].includes(t)){d=Array.from({length:14},(_,i)=>`<path d="m${(i*19)%72} ${(i*13)%54} 2-5 2 5"/>`).join('');if(t==='meadow'||t==='clover')d+=Array.from({length:6},(_,i)=>`<circle cx="${(i*23+8)%72}" cy="${(i*11+5)%54}" r="${t==='clover'?3:1.8}" fill="currentColor"/>`).join('')}
else if(t==='mulch')d='<path d="m4 8 15 5m12 3 16-9m7 22 14 7M3 39l17-6m13 15 17-3m-29-24 14 4" stroke-width="3"/>';
else d=Array.from({length:24},(_,i)=>`<ellipse cx="${(i*19+5)%72}" cy="${(i*13+8)%54}" rx="${t==='pebble'?4:1.5}" ry="${t==='pebble'?3:1}"/>`).join('');
return `<pattern id="${id}" width="72" height="54" patternUnits="userSpaceOnUse"><rect width="72" height="54" fill="${m.base}"/><g color="${m.line}" stroke="${m.line}" stroke-width="1.2" fill="none">${d}</g></pattern>`}
function phaseChecklist(){const p=GARDEN_PHASES[S.step],done=p.checks.filter(([id])=>S.phaseChecks[id]).length;return `<details class="phase-checklist"><summary>Planning checks <span>${done} / ${p.checks.length} reviewed</span></summary>${p.checks.map(([id,label])=>`<label><input type="checkbox" data-phase-check="${id}" ${S.phaseChecks[id]?'checked':''}><span>${label}</span></label>`).join('')}<p class="note">Your review record, not an inspection or construction approval.</p></details>`}
function bindPhaseChecks(){$$('[data-phase-check]').forEach(e=>e.onchange=()=>change(()=>S.phaseChecks[e.dataset.phaseCheck]=e.checked,{controls:true}))}
function designControls(){return `<p class="atelier-intro">Build a palette for your own patch. Try a finish, place a tree, move a chair.</p><button class="btn" data-open-room="all">Open the material room</button><div class="design-recipe"><h3>On your canvas</h3><dl><div><dt>Ground</dt><dd>${esc(MATERIALS[S.material].name)}</dd></div><div><dt>Planting</dt><dd>${S.items.filter(i=>CATALOG[i.kind].type==='plant').length} symbols</dd></div><div><dt>Paths</dt><dd>${S.paths.length} routes</dd></div></dl></div><button class="text-btn" data-phase-go="4">Edit ground & paths</button><button class="text-btn" data-phase-go="5">Shape planting beds</button><p class="note">Every stage stays open. You can return to design while you plan the build.</p>`}
function foundationControls(){return `<p class="atelier-intro">Record the base concept before specifying the finish.</p><label class="field">Base approach<select id="base-kind">${Object.entries(BASE_OPTIONS).map(([k,n])=>`<option value="${k}" ${S.baseSpec.kind===k?'selected':''}>${n}</option>`).join('')}</select></label><label class="field">Levels & drainage review<select id="base-drainage"><option value="unresolved">Not reviewed</option><option value="survey">Survey / assessment requested</option><option value="reviewed">Reviewed with the site team</option></select></label><label class="field">Site team / foundation notes<textarea id="base-notes" maxlength="1000" rows="4" placeholder="Record product references, constraints and the work to quote">${esc(S.baseSpec.notes)}</textarea></label><div class="ground-section" aria-label="Concept surface build-up diagram"><span>Selected finish</span><strong>${esc(MATERIALS[S.material].name)}</strong><span>Bedding / support, specify locally</span><span>${esc(BASE_OPTIONS[S.baseSpec.kind])}</span><span>Existing ground, assessment required</span></div><p class="note">Concept sequence only. No depth, loading, drainage fall or installation specification is calculated. Base works and installation remain quote-required.</p><button class="text-btn" data-phase-go="3">Coordinate underground services</button>`}
function bindFoundation(){if(!$('#base-kind'))return;$('#base-drainage').value=S.baseSpec.drainage;$('#base-kind').onchange=e=>change(()=>S.baseSpec.kind=e.target.value,{controls:true});$('#base-drainage').onchange=e=>change(()=>S.baseSpec.drainage=e.target.value);$('#base-notes').onchange=e=>change(()=>S.baseSpec.notes=e.target.value)}
function careControls(){return `<p class="atelier-intro">Keep a care list that fits your garden and local seasons.</p><div class="care-summary">${S.careTasks.filter(t=>t.done).length} of ${S.careTasks.length} tasks checked</div><div class="care-tasks">${S.careTasks.map(t=>`<div class="care-task"><label><input type="checkbox" data-care-done="${esc(t.id)}" ${t.done?'checked':''}><span>${esc(t.title)}<small>${esc(t.cadence||'Routine to set')}${t.due?' | '+esc(t.due):''}</small></span></label><button class="text-btn" data-care-delete="${esc(t.id)}" aria-label="Remove ${esc(t.title)}">Remove</button></div>`).join('')||'<p class="note care-empty">No care tasks yet. Start with a planting check, surface review or seasonal reminder.</p>'}</div><form id="care-form"><label class="field">Care task<input id="care-title" maxlength="100" required placeholder="Check new planting"></label><label class="field">Routine / season<input id="care-cadence" maxlength="80" placeholder="Set with your local nursery"></label><label class="field">Next review date<input id="care-due" type="date"></label><button class="outline-btn" type="submit">Add care task</button></form><p class="note">Saved with this garden on your device. Dates are a personal plan; no notifications are scheduled.</p><button class="text-btn" id="download-project">Download your garden record</button>`}
function bindCare(){if(!$('#care-form'))return;$('#care-form').onsubmit=e=>{e.preventDefault();const title=$('#care-title').value.trim(),cadence=$('#care-cadence').value.trim(),due=$('#care-due').value;if(!title||S.careTasks.length>=60)return;change(()=>S.careTasks.push({id:uid(),title,cadence,due,done:false}),{controls:true})};$$('[data-care-done]').forEach(e=>e.onchange=()=>change(()=>S.careTasks.find(t=>t.id===e.dataset.careDone).done=e.checked,{controls:true}));$$('[data-care-delete]').forEach(e=>e.onclick=()=>change(()=>S.careTasks=S.careTasks.filter(t=>t.id!==e.dataset.careDelete),{controls:true}));$('#download-project').onclick=exportProject}
function renderControls(){if([0,3,4,5,6,7].includes(S.step))renderBaseControls();else $('#step-controls').innerHTML=S.step===1?designControls():S.step===2?foundationControls():careControls();$('#phase-checklist').innerHTML=phaseChecklist();bindPhaseChecks();bindFoundation();bindCare();$$('[data-phase-go]').forEach(b=>b.onclick=()=>setStep(+b.dataset.phaseGo));$$('[data-open-room]').forEach(b=>b.onclick=()=>openMaterialRoom(b.dataset.openRoom));if(S.step===4){const b=document.createElement('button');b.className='text-btn';b.textContent='Add walls, decks & water features';b.onclick=()=>openMaterialRoom('build');$('#step-controls').prepend(b)}if(S.step===5){const box=document.createElement('div');box.className='planting-bed-tools';box.innerHTML='<button class="outline-btn" id="plant-draw-soil">Draw a planting bed</button>'+(tool==='soil'&&draft.length?'<button class="outline-btn" id="finish-draw">Finish planting bed</button><button class="text-btn" id="cancel-draw">Cancel drawing</button>':'');$('#step-controls').prepend(box);$('#plant-draw-soil').onclick=()=>{ensureLayer('ground');tool='soil';selection=null;draft=[];renderAll(true)};bindDrawButtons()}}
function materialEntries(){return Object.entries(MATERIALS).map(([k,m])=>({key:'surface:'+k,name:m.name,category:m.category,type:'surface',price:m.rate}))}
function roomEntries(){const all=[...Object.entries(CATALOG).map(([k,c])=>({key:k,...c})),...materialEntries()];const t=roomTab;return all.filter(c=>t==='all'||t==='favorites'&&S.favorites.includes(c.key)||t==='surfaces'&&c.type==='surface'||t==='plants'&&c.type==='plant'||t==='lights'&&c.type==='light'||t==='build'&&c.type!=='surface'&&c.type!=='plant'&&c.type!=='light'&&c.type!=='furniture'||t==='living'&&c.type==='furniture')}
function roomMatches(){const needle=roomSearch.trim().toLowerCase();return roomEntries().filter(c=>(roomGroup==='all'||(c.category||c.group||c.type)===roomGroup)&&(!needle||(c.name+' '+(c.group||c.category||'')+' '+c.type).toLowerCase().includes(needle)))}
function roomCards(){const choices=roomMatches();return choices.length?choices.map(c=>{const mat=c.type==='surface',pinned=S.favorites.includes(c.key),placed=mat?S.material===c.key.slice(8):S.items.some(i=>i.kind===c.key);return `<article class="room-piece ${placed?'on-plan':''}"><button class="room-add" data-room-add="${c.key}" aria-label="${mat?'Use surface':'Add'} ${esc(c.name)}">${mat?materialSwatch(c.key.slice(8),'wardrobe'):catalogThumb(c.key)}<span>${esc(c.name.replace(/ concept$/,''))}</span><small>${mat?rateLabel(c.price)+'/sq ft sample':c.price===null?'Quote required':money(c.price)+' sample supply'}</small></button><button class="favorite-toggle" data-favorite="${c.key}" aria-pressed="${pinned}" aria-label="${pinned?'Unsave':'Save'} ${esc(c.name)}">${pinned?'Saved':'Save'}</button>${placed?'<span class="on-plan-label">On your plan</span>':''}</article>`}).join(''):`<div class="room-empty"><h3>${roomTab==='favorites'?'Your saved shelf is empty':'No matching pieces'}</h3><p>${roomTab==='favorites'?'Save pieces from any category to build your own palette.':'Try another name, category or a shorter search.'}</p><button class="text-btn" id="room-reset">Browse all pieces</button></div>`}
function renderRoom(){const names={all:'Everything',plants:'Plants',surfaces:'Surfaces',build:'Build & water',living:'Furniture & pots',lights:'Lights',favorites:'Saved'},entries=roomEntries(),groups=[...new Set(entries.map(c=>c.category||c.group||c.type))],total=Object.keys(CATALOG).length+Object.keys(MATERIALS).length;$('#room-tabs').innerHTML=Object.entries(names).map(([k,n])=>`<button data-room-tab="${k}" class="${roomTab===k?'active':''}" aria-pressed="${roomTab===k}">${n}</button>`).join('');$('#room-group').innerHTML='<option value="all">All categories</option>'+groups.map(g=>`<option value="${g}" ${roomGroup===g?'selected':''}>${esc(MATERIAL_CATEGORIES[g]||PLANT_GROUPS[g]||BUILD_GROUPS[g]||g)}</option>`).join('');$('#room-search').value=roomSearch;$('#room-total').textContent=total+' design choices';updateRoomResults();$$('[data-room-tab]').forEach(b=>b.onclick=()=>{roomTab=b.dataset.roomTab;roomGroup='all';renderRoom()});$('#room-group').onchange=e=>{roomGroup=e.target.value;updateRoomResults()};$('#room-search').oninput=e=>{roomSearch=e.target.value;updateRoomResults()}}
function updateRoomResults(){$('#room-results').innerHTML=roomCards();$('#room-count').textContent=roomMatches().length+' matching choices';$$('[data-room-add]').forEach(b=>b.onclick=()=>{const key=b.dataset.roomAdd;if(key.startsWith('surface:')){change(()=>{S.material=key.slice(8);ensureLayer('ground')},{controls:true});$('#room-status').textContent=MATERIALS[S.material].name+' applied to the base ground.'}else{if(!placeGardenPiece(key))return;$('#room-status').textContent=CATALOG[key].name+' added. Close the room to position it.'}updateRoomResults();updateRoomPreview()});$$('[data-favorite]').forEach(b=>b.onclick=()=>{const k=b.dataset.favorite;change(()=>S.favorites=S.favorites.includes(k)?S.favorites.filter(x=>x!==k):[...S.favorites,k]);updateRoomResults()});if($('#room-reset'))$('#room-reset').onclick=()=>{roomTab='all';roomGroup='all';roomSearch='';renderRoom()}}
function placeGardenPiece(k){if(!CATALOG[k]||S.items.length>=150){notify('This plan supports up to 150 placed objects.');return false}change(()=>{ensureLayer('above');const c=CATALOG[k],obj={id:uid(),kind:k,x:.5+(S.items.length%3-1)*.08,y:.5,w:c.w,h:c.h,angle:0};if(c.height)obj.height=c.height;S.items.push(obj);selection={type:'item',id:obj.id};tool='select'});return true}
function updateRoomPreview(){const svg=$('#garden').outerHTML;$('#room-preview').src='data:image/svg+xml;charset=utf-8,'+encodeURIComponent(svg.replace('<svg ','<svg xmlns="http://www.w3.org/2000/svg" '));$('#room-plan-summary').textContent=S.items.length+' pieces placed | '+MATERIALS[S.material].name}
function openMaterialRoom(tab){roomTab=tab||'all';roomGroup='all';roomSearch='';renderRoom();updateRoomPreview();$('#material-room').showModal();$('#room-search').focus()}
Object.assign(ATELIER_ASSETS,{
crocus:{name:'Crocus drift concept',type:'plant',group:'flowers',art:'iris',w:2,h:2,price:18,bloom:'#a296b5',foliage:'#81916c'},
snowdrop:{name:'Snowdrop drift concept',type:'plant',group:'flowers',art:'iris',w:2,h:2,price:20,bloom:'#ece7d8',foliage:'#778d70'},
erigeron:{name:'Erigeron edging concept',type:'plant',group:'groundcover',art:'daisy',w:2,h:1.5,price:16,bloom:'#e7d9cd',foliage:'#92a074'}
});
