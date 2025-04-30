const locations = [
    {
      name: "O'Plaine Park",
      address: "235 O'Plaine Rd, Gurnee, IL 60031",
      lat: 42.355775,
      lng: -87.913607,
      courts: "8 courts",
      type: "Outdoor",
    },
    {
      name: "Hunt Club Park",
      address: "900 Hunt Club Rd, Gurnee, IL 60031",
      lat: 42.371623,
      lng: -87.968339,
      courts: "2 courts",
      type: "Outdoor",
    },
    {
      name: "Christine Thompson Park",
      address: "551 Belle Plaine Ave",
      lat: 42.367919,
      lng: -87.889360,
      courts: "1 court",
      type: "Outdoor",
    },

    {
      name: "Viking Park",
      address: "4374 Old Grand Ave, Gurnee, IL 60031",
      lat: 42.373048,
      lng: -87.911385,
      courts: "2 courts",
      type: "Striped",
    },

    {
      name: "Betty Russell Park",
      address: "5300 Pinewood Rd, Gurnee, IL 60031",
      lat: 42.385252,
      lng: -87.933352,
      courts: "2 courts",
      type: "Striped",
    },

    {
      name: "FitNation",
      address: "1655 Nations Dr, Gurnee, IL 60031",
      lat: 42.3828857885987,
      lng:  -87.94149699306564,
      courts: '<a href="https://www.gurneeparkdistrict.com/fitnation/pickleball/" target="_blank">View details</a>',
      type: "Indoor",
    },

    {
      name: "Hunt Club Community Center",
      address: "920 Hunt Club Rd, Gurnee, IL 60031",
      lat: 42.373172018700984,
      lng: -87.96534346756854,
      courts: '<a href="https://www.gurneeparkdistrict.com/fitnation/pickleball/" target="_blank">View details</a>',
      type: "Indoor",
    },

    {
      name: "Wadsworth Park",
      address: "14418 W Wadsworth Rd, Wadsworth, IL 60083",
      lat: 42.428305495193484,
      lng: -87.91020778765544,
      courts: "1 court",
      type: "Striped",
    },

    {
      name: "Bevier Park",
      address: "2255 W Yorkhouse Rd, Waukegan, IL 60085",
      lat: 42.40919772892943,
      lng: -87.86366229625132,
      courts: "6 courts",
      type: "Outdoor",
    },

    {
      name: "Brick House Pickleball",
      address: "28457 Ballard Dr Unit H, Lake Forest, IL 60045",
      lat: 42.276954891446074,
      lng: -87.89992479099988,
      courts: '<a href="https://brickhousepb.com/" target="_blank">View details</a>',
      type: "Indoor",
    },

    {
      name: "Mallard Ridge Park",
      address: "1 Mallard Ridge Dr, Lindenhurst, IL 60046",
      lat: 42.41846579861239,
      lng: -88.04571150827489,
      courts: "2 courts",
      type: "Striped",
    },

    {
      name: "(UNDER CONSTRUCTION, ETA FALL 2025)",
      address: "38196 N Fairfield Rd, Lake Villa, IL 60046",
      lat: 42.41849898165535,
      lng: -88.10740295357584,
      courts: "6 courts",
      type: "Outdoor",
    },

    {
      name: "Warren Township Park",
      address: "17801 W Washington St, Gurnee, IL 60031",
      lat: 42.362505230400956,
      lng: -87.98296867603858,
      courts: "3 courts",
      type: "Outdoor",
    },

    {
      name: "Sedgewood Cove Park",
      address: "334 N Crooked Lake Ln, Lindenhurst, IL 60046",
      lat: 42.421821590172925,
      lng: -88.05659845963223,
      courts: "1 court",
      type: "Striped",
    },

    {
      name: "Lewis Park",
      address: "310 N Beck Rd, Lindenhurst, IL 60046",
      lat: 42.42120498527598,
      lng: -88.02384132109368,
      courts: "2 courts",
      type: "Striped",
    },

    {
      name: "Lindenhurst Community Center",
      address: "2200 W Grass Lake Rd, Lindenhurst, IL 60046",
      lat: 42.432337131593044,
      lng: -88.02922086982264,
      courts: '<a href="https://www.lindenhurstparks.org/facilities/gymnasium/" target="_blank">View details</a>',
      type: "Indoor",
    },

    {
      name: "Lake Villa Township Park",
      address: "37908 N Fairfield Rd, Lake Villa, IL 60046",
      lat: 42.41399139203569,
      lng: -88.10751130077035,
      courts: "2 courts",
      type: "Striped",
    },
    
    {
      name: "Whietwood Park",
      address: "35384 N Hickory Ln, Round Lake, IL 60073",
      lat: 42.37721218405527,
      lng: -88.11351897817973,
      courts: "1 court",
      type: "Outdoor",
    },

    {
      name: "Sherwood Park",
      address: "40 Kevin Ave, Lake Villa, IL 60046",
      lat: 42.410799084253696,
      lng: -88.08450213050723,
      courts: "1 court",
      type: "Striped",
    },

    {
      name: "Sports Center Park",
      address: "2004 Municipal Way, Round Lake Beach, IL 60073",
      lat: 42.385598567578114,
      lng: -88.0714265076384,
      courts: "2 courts",
      type: "Outdoor",
    },

    {
      name: "Centennial Park",
      address: "680 Anita Ave, Antioch, IL 60002",
      lat: 42.48404157025903,
      lng: -88.0872214167981,
      courts: "2 courts",
      type: "Striped",
    },

    {
      name: "Shiloh Park",
      address: "1619 27th St, Zion, IL 60099",
      lat: 42.44664191567836,
      lng: -87.83028246990628,
      courts: "4 courts",
      type: "Outdoor",
    },

    {
      name: "Sunrise Park",
      address: "175 N Drury Ln, Grayslake, IL 60030",
      lat: 42.373435281817095,
      lng: -88.03922812025485,
      courts: "2 courts",
      type: "Outdoor",
    },

    {
      name: "Meadowview Woods Park",
      address: "291 Lexington Ln, Grayslake, IL 60030",
      lat: 42.36292192194933,
      lng: -88.04960650677492,
      courts: "1 court",
      type: "Striped",
    },

    {
      name: "Alleghany Park",
      address: "31999 N Alleghany Rd, Grayslake, IL 60030",
      lat: 42.32545754066504,
      lng: -88.05202331020114,
      courts: "2 courts",
      type: "Striped",
    },

    {
      name: "Nicholas Dowden Park Park",
      address: "800 Crane Blvd, Libertyville, IL 60048",
      lat: 42.27699666659767,
      lng: -87.96813414766339,
      courts: "6 courts",
      type: "Outdoor",
    },

    {
      name: "Behm Park",
      address: "1 Behm Park Ln, Grayslake, IL 60030",
      lat: 42.30859932323674,
      lng: -88.06721964291941,
      courts: "3 courts",
      type: "Outdoor",
    },

    {
      name: "Central Park",
      address: "250 Library Ln, Grayslake, IL 60030",
      lat: 42.34851852033875,
      lng: -88.03585179054134,
      courts: "2 courts",
      type: "Outdoor",
    },

    {
      name: "Neal Park",
      address: "1310 New Castle Dr, Libertyville, IL 60048",
      lat: 42.30070977628342,
      lng: -87.97842003312073,
      courts: "4 courts",
      type: "Outdoor",
    },

    {
      name: "Serenity Park",
      address: "1561 S Candlestick Way, Waukegan, IL 60085",
      lat: 42.33155090559777,
      lng: -87.90637518957163,
      courts: "1 court",
      type: "Striped",
    },

    {
      name: "Rudd Farm Park",
      address: "1645 S Falcon Dr, Waukegan, IL 60085",
      lat: 42.32939505432882,
      lng: -87.91104617782325,
      courts: "1 court",
      type: "Striped",
    },

    {
      name: "Rose Park",
      address: "412 S Lewis Ave, Waukegan, IL 60085",
      lat: 42.3515759657449,
      lng: -87.85901381279491,
      courts: "2 courts",
      type: "Striped",
    },

  ];