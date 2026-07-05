// ============================================================
// BLACKPEARL GENZ — PRODUCT DATA
// Each entry below is a DESIGN (e.g. "BPG#001"). A design can be
// offered in one or more FITS (Oversized, Round Neck, etc), each
// fit having its OWN photos, colours, size chart and price.
//
// TO ADD A NEW DESIGN: use admin.html — fill the form, it generates
// the exact code block to paste in below (in the DESIGNS array).
// ============================================================

const DESIGNS = [
  {
    code: "BPG#001",
    name: "THALAPATHY BLASTU",
    cardPrice: 450,
    description: "Thalapathy blastu design is fully customized design by blackpearl genz...",
    fits: [
      {
        fitName: "RoundNeck",
        subtitle: "180 GSM Normal fit",
        images: [
          "images/5.png",
          "images/6.png",
          "images/7.png",
          "images/8.png"
        ],
        fixedNote: "Fixed 180 GSM only",
        colours: [
          "Black",
          "White",
          "Blue",
          "Green",
          "Pink",
          "Yellow",
          "Red"
        ],
        sizeChartImage: "images/12.png",
        sizeChartColumns: [],
        sizeChartRows: [],
        priceTable: [
          {
            label: "All Sizes",
            price: 450
          }
        ]
      },
      {
        fitName: "Oversized",
        subtitle: "240 GSM French Terry",
        images: [
          "images/1.png",
          "images/2.png",
          "images/3.png",
          "images/4.png"
        ],
        fixedNote: "Fixed 240 GSM only",
        colours: [
          "Black",
          "White"
        ],
        sizeChartImage: "images/11.png",
        sizeChartColumns: [],
        sizeChartRows: [],
        priceTable: [
          {
            label: "All Sizes",
            price: 550
          }
        ]
      }
    ]
  },
  // Add your next design here — use admin.html to generate this block.
];

// Lowest price across every fit of a design — used on the home page card.
function getPriceFrom(design) {
  let min = Infinity;
  design.fits.forEach(fit => {
    fit.priceTable.forEach(row => { if (row.price < min) min = row.price; });
  });
  return min;
}

// Lowest price for each individual fit — e.g. [{fitName:"Oversized", price:190}, ...]
function getPricePerFit(design) {
  return design.fits.map(fit => {
    let min = Infinity;
    fit.priceTable.forEach(row => { if (row.price < min) min = row.price; });
    return { fitName: fit.fitName, price: min };
  });
}

// The Google Form used for ALL designs.
const ORDER_FORM = {
  baseUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfVRAgWSyeaqYhDvi5yVwqxlhTd7oHrn374qremdWnPwPgyag/viewform?usp=dialog",
  // Replace with the entry.XXXXXXXXX id from YOUR form's "T-shirt model
  // name" question. Find it via the form's ⋮ menu -> "Get pre-filled link".
  entryIds: {
    modelName: "BPG#001"
  }
};

// Builds a pre-filled Google Form link with "DESIGN CODE - FIT NAME"
// already typed into the model name field.
function buildOrderLink(design, fitName) {
  const params = new URLSearchParams();
  params.set(ORDER_FORM.entryIds.modelName, `${design.code} - ${fitName}`);
  return `${ORDER_FORM.baseUrl}?${params.toString()}`;
}