'use strict';
// Public BLS wage estimates supplied by O*NET OnLine, CC BY 4.0. See WAGE-DATA.md.
const REGIONAL_WAGES={
  "dataYear": 2025,
  "retrieved": "2026-10-30",
  "source": "BLS OEWS via O*NET OnLine, U.S. Department of Labor",
  "sourceUrl": "https://www.onetonline.org/link/localwages/37-3011.00",
  "constructionSourceUrl": "https://www.onetonline.org/link/localwages/47-2061.00",
  "license": "https://creativecommons.org/licenses/by/4.0/",
  "measure": "Hourly employee wage, 25th/median/75th percentiles; not contractor billing rates",
  "occupations": {
    "garden": "37-3011.00",
    "build": "47-2061.00"
  },
  "national": {
    "build": {
      "low": 18.57,
      "median": 22.66,
      "high": 28.72
    },
    "garden": {
      "low": 17.4,
      "median": 18.82,
      "high": 22.52
    }
  },
  "states": {
    "AK": {
      "name": "Alaska",
      "build": {
        "low": 22.3,
        "median": 27.91,
        "high": 33.63
      },
      "garden": {
        "low": 18.49,
        "median": 22.93,
        "high": 23.62
      }
    },
    "AL": {
      "name": "Alabama",
      "build": {
        "low": 14.41,
        "median": 17.74,
        "high": 21.75
      },
      "garden": {
        "low": 14.26,
        "median": 17.13,
        "high": 18.54
      }
    },
    "AR": {
      "name": "Arkansas",
      "garden": {
        "low": 14.49,
        "median": 17.2,
        "high": 18.76
      },
      "build": {
        "low": 16.63,
        "median": 18.09,
        "high": 21.31
      }
    },
    "AZ": {
      "name": "Arizona",
      "garden": {
        "low": 17.92,
        "median": 18.71,
        "high": 21.69
      },
      "build": {
        "low": 19.04,
        "median": 22.4,
        "high": 24.82
      }
    },
    "CA": {
      "name": "California",
      "garden": {
        "low": 18.47,
        "median": 21.9,
        "high": 24.27
      },
      "build": {
        "low": 23.15,
        "median": 28.98,
        "high": 37.75
      }
    },
    "CO": {
      "name": "Colorado",
      "build": {
        "low": 20.53,
        "median": 23.03,
        "high": 27.25
      },
      "garden": {
        "low": 19.2,
        "median": 22.0,
        "high": 23.5
      }
    },
    "CT": {
      "name": "Connecticut",
      "garden": {
        "low": 18.05,
        "median": 21.99,
        "high": 23.39
      },
      "build": {
        "low": 22.92,
        "median": 28.03,
        "high": 34.98
      }
    },
    "DC": {
      "name": "District of Columbia",
      "build": {
        "low": 20.8,
        "median": 24.05,
        "high": 28.41
      },
      "garden": {
        "low": 22.83,
        "median": 23.46,
        "high": 26.8
      }
    },
    "DE": {
      "name": "Delaware",
      "garden": {
        "low": 17.45,
        "median": 17.96,
        "high": 21.62
      },
      "build": {
        "low": 17.93,
        "median": 21.9,
        "high": 27.07
      }
    },
    "FL": {
      "name": "Florida",
      "garden": {
        "low": 17.03,
        "median": 17.84,
        "high": 20.99
      },
      "build": {
        "low": 17.83,
        "median": 21.17,
        "high": 23.06
      }
    },
    "GA": {
      "name": "Georgia",
      "build": {
        "low": 16.93,
        "median": 18.74,
        "high": 22.57
      },
      "garden": {
        "low": 16.52,
        "median": 18.25,
        "high": 21.33
      }
    },
    "HI": {
      "name": "Hawaii",
      "build": {
        "low": 25.13,
        "median": 37.07,
        "high": 42.19
      },
      "garden": {
        "low": 18.14,
        "median": 22.08,
        "high": 24.25
      }
    },
    "IA": {
      "name": "Iowa",
      "garden": {
        "low": 15.47,
        "median": 18.71,
        "high": 22.23
      },
      "build": {
        "low": 21.9,
        "median": 23.31,
        "high": 28.11
      }
    },
    "ID": {
      "name": "Idaho",
      "garden": {
        "low": 17.79,
        "median": 20.0,
        "high": 22.78
      },
      "build": {
        "low": 19.02,
        "median": 22.57,
        "high": 26.46
      }
    },
    "IL": {
      "name": "Illinois",
      "garden": {
        "low": 17.6,
        "median": 21.05,
        "high": 22.58
      },
      "build": {
        "low": 22.14,
        "median": 29.18,
        "high": 45.79
      }
    },
    "IN": {
      "name": "Indiana",
      "build": {
        "low": 21.28,
        "median": 24.07,
        "high": 29.92
      },
      "garden": {
        "low": 16.93,
        "median": 18.3,
        "high": 22.16
      }
    },
    "KS": {
      "name": "Kansas",
      "garden": {
        "low": 17.15,
        "median": 18.91,
        "high": 22.39
      },
      "build": {
        "low": 17.94,
        "median": 21.56,
        "high": 23.66
      }
    },
    "KY": {
      "name": "Kentucky",
      "garden": {
        "low": 15.02,
        "median": 17.63,
        "high": 21.31
      },
      "build": {
        "low": 18.13,
        "median": 21.98,
        "high": 24.06
      }
    },
    "LA": {
      "name": "Louisiana",
      "garden": {
        "low": 14.24,
        "median": 16.76,
        "high": 17.78
      },
      "build": {
        "low": 16.59,
        "median": 18.38,
        "high": 22.74
      }
    },
    "MA": {
      "name": "Massachusetts",
      "garden": {
        "low": 21.82,
        "median": 23.4,
        "high": 28.13
      },
      "build": {
        "low": 25.16,
        "median": 30.48,
        "high": 42.46
      }
    },
    "MD": {
      "name": "Maryland",
      "garden": {
        "low": 17.85,
        "median": 18.93,
        "high": 22.12
      },
      "build": {
        "low": 18.98,
        "median": 22.58,
        "high": 26.7
      }
    },
    "ME": {
      "name": "Maine",
      "build": {
        "low": 19.51,
        "median": 22.32,
        "high": 25.51
      },
      "garden": {
        "low": 18.3,
        "median": 22.1,
        "high": 23.25
      }
    },
    "MI": {
      "name": "Michigan",
      "garden": {
        "low": 17.18,
        "median": 18.33,
        "high": 22.25
      },
      "build": {
        "low": 21.52,
        "median": 23.84,
        "high": 29.68
      }
    },
    "MN": {
      "name": "Minnesota",
      "garden": {
        "low": 17.77,
        "median": 22.41,
        "high": 24.19
      },
      "build": {
        "low": 23.28,
        "median": 28.97,
        "high": 38.32
      }
    },
    "MO": {
      "name": "Missouri",
      "garden": {
        "low": 17.22,
        "median": 18.52,
        "high": 21.78
      },
      "build": {
        "low": 21.93,
        "median": 27.28,
        "high": 37.3
      }
    },
    "MS": {
      "name": "Mississippi",
      "garden": {
        "low": 13.54,
        "median": 15.21,
        "high": 17.99
      },
      "build": {
        "low": 16.25,
        "median": 18.13,
        "high": 22.01
      }
    },
    "MT": {
      "name": "Montana",
      "build": {
        "low": 20.8,
        "median": 23.96,
        "high": 28.24
      },
      "garden": {
        "low": 17.93,
        "median": 21.8,
        "high": 24.47
      }
    },
    "NC": {
      "name": "North Carolina",
      "build": {
        "low": 17.97,
        "median": 21.5,
        "high": 23.59
      },
      "garden": {
        "low": 17.23,
        "median": 18.22,
        "high": 21.4
      }
    },
    "ND": {
      "name": "North Dakota",
      "garden": {
        "low": 17.23,
        "median": 19.61,
        "high": 24.22
      },
      "build": {
        "low": 21.96,
        "median": 23.59,
        "high": 29.17
      }
    },
    "NE": {
      "name": "Nebraska",
      "build": {
        "low": 19.38,
        "median": 22.72,
        "high": 26.71
      },
      "garden": {
        "low": 17.61,
        "median": 18.82,
        "high": 22.84
      }
    },
    "NH": {
      "name": "New Hampshire",
      "garden": {
        "low": 18.39,
        "median": 21.58,
        "high": 24.27
      },
      "build": {
        "low": 21.61,
        "median": 24.03,
        "high": 28.32
      }
    },
    "NJ": {
      "name": "New Jersey",
      "build": {
        "low": 22.46,
        "median": 30.8,
        "high": 45.44
      },
      "garden": {
        "low": 17.78,
        "median": 19.88,
        "high": 22.75
      }
    },
    "NM": {
      "name": "New Mexico",
      "garden": {
        "low": 16.72,
        "median": 18.06,
        "high": 21.52
      },
      "build": {
        "low": 17.07,
        "median": 18.46,
        "high": 22.26
      }
    },
    "NV": {
      "name": "Nevada",
      "build": {
        "low": 20.22,
        "median": 23.55,
        "high": 31.12
      },
      "garden": {
        "low": 17.62,
        "median": 18.66,
        "high": 22.52
      }
    },
    "NY": {
      "name": "New York",
      "garden": {
        "low": 18.05,
        "median": 21.56,
        "high": 23.33
      },
      "build": {
        "low": 21.13,
        "median": 26.89,
        "high": 38.18
      }
    },
    "OH": {
      "name": "Ohio",
      "garden": {
        "low": 16.99,
        "median": 18.38,
        "high": 21.94
      },
      "build": {
        "low": 22.09,
        "median": 26.96,
        "high": 35.76
      }
    },
    "OK": {
      "name": "Oklahoma",
      "garden": {
        "low": 15.01,
        "median": 17.2,
        "high": 19.29
      },
      "build": {
        "low": 17.54,
        "median": 18.92,
        "high": 22.82
      }
    },
    "OR": {
      "name": "Oregon",
      "garden": {
        "low": 18.76,
        "median": 21.65,
        "high": 23.26
      },
      "build": {
        "low": 21.65,
        "median": 24.45,
        "high": 29.91
      }
    },
    "PA": {
      "name": "Pennsylvania",
      "garden": {
        "low": 17.26,
        "median": 18.99,
        "high": 22.4
      },
      "build": {
        "low": 21.69,
        "median": 23.75,
        "high": 29.72
      }
    },
    "RI": {
      "name": "Rhode Island",
      "build": {
        "low": 22.51,
        "median": 27.52,
        "high": 37.25
      },
      "garden": {
        "low": 19.0,
        "median": 21.51,
        "high": 22.36
      }
    },
    "SC": {
      "name": "South Carolina",
      "garden": {
        "low": 15.39,
        "median": 17.65,
        "high": 20.5
      },
      "build": {
        "low": 17.64,
        "median": 20.65,
        "high": 23.62
      }
    },
    "SD": {
      "name": "South Dakota",
      "garden": {
        "low": 14.76,
        "median": 17.01,
        "high": 18.87
      },
      "build": {
        "low": 18.42,
        "median": 21.98,
        "high": 23.14
      }
    },
    "TN": {
      "name": "Tennessee",
      "garden": {
        "low": 16.75,
        "median": 17.8,
        "high": 20.98
      },
      "build": {
        "low": 18.11,
        "median": 21.64,
        "high": 23.78
      }
    },
    "TX": {
      "name": "Texas",
      "build": {
        "low": 17.66,
        "median": 19.53,
        "high": 22.57
      },
      "garden": {
        "low": 15.68,
        "median": 17.66,
        "high": 19.84
      }
    },
    "UT": {
      "name": "Utah",
      "garden": {
        "low": 17.91,
        "median": 19.59,
        "high": 22.51
      },
      "build": {
        "low": 18.63,
        "median": 22.38,
        "high": 26.56
      }
    },
    "VA": {
      "name": "Virginia",
      "garden": {
        "low": 17.1,
        "median": 18.46,
        "high": 21.46
      },
      "build": {
        "low": 17.8,
        "median": 20.94,
        "high": 22.86
      }
    },
    "VT": {
      "name": "Vermont",
      "garden": {
        "low": 20.01,
        "median": 22.23,
        "high": 23.79
      },
      "build": {
        "low": 22.49,
        "median": 23.36,
        "high": 27.94
      }
    },
    "WA": {
      "name": "Washington",
      "garden": {
        "low": 20.68,
        "median": 22.57,
        "high": 27.12
      },
      "build": {
        "low": 22.56,
        "median": 27.75,
        "high": 34.69
      }
    },
    "WI": {
      "name": "Wisconsin",
      "garden": {
        "low": 17.35,
        "median": 19.82,
        "high": 22.81
      },
      "build": {
        "low": 22.14,
        "median": 26.97,
        "high": 34.68
      }
    },
    "WV": {
      "name": "West Virginia",
      "garden": {
        "low": 14.36,
        "median": 15.5,
        "high": 17.59
      },
      "build": {
        "low": 17.12,
        "median": 20.51,
        "high": 26.34
      }
    },
    "WY": {
      "name": "Wyoming",
      "build": {
        "low": 18.51,
        "median": 22.13,
        "high": 24.0
      },
      "garden": {
        "low": 15.19,
        "median": 18.42,
        "high": 21.89
      }
    }
  }
};
