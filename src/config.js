// ============================================================================
// SALON CONFIG — everything specific to THIS business lives here.
//
// To reuse this whole site for a different grooming salon: change the values
// in this file (and swap the files in /public/assets), then update the two
// SEO tags at the top of index.html. You should not need to touch any file
// inside src/components/ or src/utils/.
// ============================================================================

export const salon = {
  name: "The Darling Pooch",
  shortName: "Darling Pooch",

  // Used in the hero heading as: "Pet grooming {highlight} {city}"
  heroKicker: "Pet grooming",
  heroHighlight: "in",
  heroCity: "Menifee",

  tagline: "Dogs & cats · Menifee, CA",

  description:
    "We are a new Grooming Service Local to Menifee Ca. Please give us a try for all of your Pet Grooming needs! Whether you just need a nail trim or a full-service luxury spa treatment for your pet give us a call anytime!",

  // E.164 format — used for tel: / sms: links.
  phone: "+19516397952",
  phoneDisplay: "(951) 639-7952",


  email: "", // leave blank to hide the "send by email" fallback link

  address: {
    line1: "23510 La Bertha Ln",
    city: "Menifee",
    state: "CA",
    zip: "92587",
  },

  // Google Maps embed + link query. Kept separate from the address object
  // so you can hand-tune the query string without reformatting the address.
  mapsQuery: "23510 La Bertha Ln, Menifee, CA 92587",

  // 0 = Sunday ... 6 = Saturday, matching Date#getDay().
  hours: [
    { day: "Sunday", open: null, close: null },
    { day: "Monday", open: "8:00 am", close: "6:00 pm" },
    { day: "Tuesday", open: "8:00 am", close: "6:00 pm" },
    { day: "Wednesday", open: "8:00 am", close: "6:00 pm" },
    { day: "Thursday", open: "8:00 am", close: "6:00 pm" },
    { day: "Friday", open: "8:00 am", close: "6:00 pm" },
    { day: "Saturday", open: "8:00 am", close: "6:00 pm" },
  ],
  hoursSummary: "Mon–Sat, 8am–6pm",

  // Toggle to show/hide "from $X" price labels next to each service.
  showPrices: false,

  services: {
    dog: [
      { name: "Full service grooming", price: 85 },
      { name: "Bathing and blow dry", price: 45 },
      { name: "Nail trimming", price: 15 },
      { name: "Ear cleaning", price: 10 },
      { name: "Teeth brushing", price: 10 },
      { name: "Anal gland expression", price: 15 },
      { name: "Flea and tick treatment", price: 20 },
    ],
    cat: [
      { name: "Cat grooming", price: 70 },
      { name: "Cat bathing", price: 55 },
      { name: "Cat nail trimming", price: 15 },
      { name: "Cat ear cleaning", price: 10 },
    ],
  },

  // [label, sublabel] pairs shown as size-picker buttons in the booking form.
  sizes: {
    dog: [
      ["Small", "under 20 lb"],
      ["Medium", "20–50 lb"],
      ["Large", "50–90 lb"],
      ["XL", "90+ lb"],
    ],
    cat: [
      ["Small", "under 8 lb"],
      ["Medium", "8–12 lb"],
      ["Large", "12+ lb"],
    ],
  },

  gallery: [
    { src: "/assets/p5.webp", alt: "Groomed doodle sitting by the pool" },
    { src: "/assets/p1.webp", alt: "Bernedoodle on the grooming table" },
    { src: "/assets/p3.webp", alt: "Bichon after a fresh cut" },
  ],

  reviews: [
    {
      name: "Chef Marie",
      when: "3 years ago",
      text: "Sooooo happy with Candi!! She did such an awesome job with Sophie (Bichon). She’s so good with animals! This is the best groom she’s ever had!!!",
    },
    {
      name: "Morgan Kuehl",
      when: "a year ago",
      text: "Candie did such a great job on our two pups! She is so patient with Emma and Ollie and takes her time with attention to detail. My favorite part is she sends us lots of update photos of our babies on how they are doing during their bath. I highly recommend The Darling Pooch!",
    },
    {
      name: "Jimmy T.",
      when: "a year ago",
      text: "Candie did a great job with our almost one year old Bernedoodle. Her pricing was reasonable and she was very patient in working with our hyper personality pet.",
    },
    {
      name: "Debra Leigh Turner",
      when: "2 years ago",
      text: "Candie is an incredible groomer. Maisie was so comfortable with her. I loved how Candie stayed in touch with me through out Maisies grooming by text, sending cute video clips. Candie is a sweetheart, she cares very much about your fur babies experience. I highly recommend her !!",
    },
    {
      name: "Cathy Plaza",
      when: "3 weeks ago",
      text: "Candy did an amazing job on our maltipoo and left him looking great. We will definitely be returning customers!!",
    },
    {
      name: "Alexis Watson",
      when: "2 years ago",
      text: "We love bringing our huskies to Candie! She is SO good with them (huskies can be a lot of work due to their personalities but also their coats). She does an incredible job and is so sweet!",
    },
    {
      name: "Laryess Murillo",
      when: "a year ago",
      text: "Ive been taking my dog to the darling pooch weekly and im so happy how candie makes peli look so beautiful. Candie is great I definitely won't be looking for a new groomer anytime soon.",
    },
    {
      name: "Amanda Pesavento",
      when: "2 years ago",
      text: "Candie is amazing. She responds promptly and always leaves my Marley leaving happier and prettier than when I dropped her off. Highly recommend!",
    },
  ],

  // Applied at runtime as CSS custom properties (see src/main.jsx), so this
  // object is the ONE place that defines the site's color palette.
  colors: {
    bg: "#FAF6EF",
    surface: "#FFFFFF",
    surfaceAlt: "#F3EDE3",
    ink: "#1D1B18",
    inkSoft: "#4F4A43",
    inkMute: "#6B655C",
    border: "rgba(29,27,24,.1)",
    borderStrong: "rgba(29,27,24,.18)",
    accent: "#EFA73C",
    accentHover: "#F3B657",
    // Darkened slightly from the source design's #C98323 / #B06F14 so text
    // set in these colors clears WCAG AA contrast against the cream/white
    // backgrounds they sit on (large hero text needs 3:1, the small eyebrow
    // labels need 4.5:1) — same hue, just a touch deeper.
    accentStrong: "#B8741A",
    accentDeep: "#9A5F0E",
    accentLabel: "#8A5A10",
    highlight: "#FDF1DC",
    selection: "#F4D49B",
    onDark: "#FAF6EF",
    error: "#B3261E",
    openDot: "#3E9B5A",
    closedDot: "#C9A27A",
  },

  fonts: {
    display: "'Josefin Sans', sans-serif",
    body: "'Jost', system-ui, sans-serif",
    googleFontsHref:
      "https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;600&family=Jost:wght@400;500;600&display=swap",
  },
};
