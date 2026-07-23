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
    cardPrice: 400,
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
            price: 400
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
            price: 500
          }
        ]
      }
    ]
  },
  {
    code: "BPG#002",
    name: "STR JESUS",
    cardPrice: 499,
    description: "customized str jesus style design, dtf printed t shirts...\n#simbu #str #silambarasan",
    fits: [
      {
        fitName: "Oversized",
        subtitle: "240 GSM",
        images: [
          "images/1.jpg",
          "images/2.jpg"
        ],
        fixedNote: "",
        colours: [
          "Red"
        ],
        sizeChartImage: "images/11.jpg",
        sizeChartColumns: [],
        sizeChartRows: [],
        priceTable: [
          {
            label: "All Sizes",
            price: 499
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

// ============================================================
// WHATSAPP ORDERING
// Set your number ONCE here — it's used for the "Place Order"
// buttons AND every WhatsApp icon/footer link/floating button
// across the site (they all read from this single value).
// Format: country code + number, no +, no spaces, no dashes.
// Example: India number 98765 43210 -> "919876543210"
// ============================================================
const WHATSAPP_CONFIG = {
  phoneNumber: "91YOURNUMBER"
};

// Builds the WhatsApp link for a specific design + fit, with the
// order details already typed into the message box.
function buildWhatsAppOrderLink(design, fit, price) {
  const message =
    `Hi! I'd like to order:

Design: ${design.code} - ${design.name}
Fit: ${fit.fitName} (${fit.subtitle})
Price: From ₹${price}

Please share the next steps to confirm my order.`;

  return `https://wa.me/${WHATSAPP_CONFIG.phoneNumber}?text=${encodeURIComponent(message)}`;
}

// Wires up every generic WhatsApp link on the page (nav icon, footer
// link, floating button) to the same phone number above. Call this
// once after the page loads.
function initWhatsAppLinks() {
  document.querySelectorAll('.wa-link').forEach(el => {
    el.href = `https://wa.me/${WHATSAPP_CONFIG.phoneNumber}`;
  });
}