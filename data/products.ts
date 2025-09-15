// data/products.ts
export type ProductVariant = {
  size: string;   // "1 Seed", "3 Seeds", ...
  price: number;
};

export type Product = {
  id: string;
  name: string;
  description: string;
  category: string;
  image: string;
  featured?: boolean;
  variants: ProductVariant[];  // NEU
};


export const products: Product[] = [
  {
    id: "galactic-kush",
    name: "Galactic Kush",
    category: "Indica",
    description: "Potent indica with heavy resin and relaxing effects.",
    image: "/images/product1.jpg",
    featured: true,
    variants: [
      { size: "1 Seed", price: 15 },
      { size: "3 Seeds", price: 39.99 },
      { size: "5 Seeds", price: 60 },
      { size: "10 Seeds", price: 110 },
    ],
  },
  {
    id: "portal-og",
    name: "Portal OG",
    category: "Hybrid",
    description: "Balanced hybrid with citrus notes.",
    image: "/images/product1.jpg",
    featured: true,
    variants: [
      { size: "1 Seed", price: 18 },
      { size: "3 Seeds", price: 44.99 },
      { size: "5 Seeds", price: 70 },
      { size: "10 Seeds", price: 130 },
    ],
  },
  {
    id: "mortys-kush",
    name: "Morty’s Kush",
    category: "Indica",
    description: "Heavy sedative indica with fruity undertones.",
    image: "/images/product1.jpg",
    featured: false,
    variants: [
      { size: "1 Seed", price: 19 },
      { size: "3 Seeds", price: 49.99 },
      { size: "5 Seeds", price: 75 },
      { size: "10 Seeds", price: 140 },
    ],
  },
  {
    id: "rick-runtz",
    name: "Rick Runtz",
    category: "Hybrid",
    description: "Sweet candy-like flavor and balanced effects.",
    image: "/images/product1.jpg",
    featured: true,
    variants: [
      { size: "1 Seed", price: 20 },
      { size: "3 Seeds", price: 59.99 },
      { size: "5 Seeds", price: 85 },
      { size: "10 Seeds", price: 160 },
    ],
  },
  {
    id: "portal-pineapple",
    name: "Portal Pineapple",
    category: "Sativa",
    description: "Tropical sativa with uplifting energy.",
    image: "/images/product1.jpg",
    featured: false,
    variants: [
      { size: "1 Seed", price: 18 },
      { size: "3 Seeds", price: 54.99 },
      { size: "5 Seeds", price: 80 },
      { size: "10 Seeds", price: 150 },
    ],
  },

  {
    id: "dimension-dream",
    name: "Dimension Dream",
    category: "Hybrid",
    description: "Euphoric hybrid with berry & vanilla notes.",
    image: "/images/product1.jpg",
    featured: true,
    variants: [
      { size: "1 Seed", price: 22 },
      { size: "3 Seeds", price: 64.99 },
      { size: "5 Seeds", price: 95 },
      { size: "10 Seeds", price: 180 },
    ],
  },
  {
    id: "pickle-rick-haze",
    name: "Pickle Rick Haze",
    category: "Sativa",
    description: "Classic haze with a spicy herbal twist.",
    image: "/images/product1.jpg",
    featured: false,
    variants: [
      { size: "1 Seed", price: 17 },
      { size: "3 Seeds", price: 53.5 },
      { size: "5 Seeds", price: 78 },
      { size: "10 Seeds", price: 145 },
    ],
  },
  {
    id: "schwifty-skunk",
    name: "Schwifty Skunk",
    category: "Hybrid",
    description: "Oldschool skunk genetics; social and pungent.",
    image: "/images/product1.jpg",
    featured: false,
    variants: [
      { size: "1 Seed", price: 14 },
      { size: "3 Seeds", price: 39.0 },
      { size: "5 Seeds", price: 60 },
      { size: "10 Seeds", price: 110 },
    ],
  },
  {
    id: "plumbus-punch",
    name: "Plumbus Punch",
    category: "Indica",
    description: "Fruity hybrid, couch-lock for evenings.",
    image: "/images/product1.jpg",
    featured: false,
    variants: [
      { size: "1 Seed", price: 16 },
      { size: "3 Seeds", price: 49.0 },
      { size: "5 Seeds", price: 72 },
      { size: "10 Seeds", price: 135 },
    ],
  },
  {
    id: "council-cookies",
    name: "Council Cookies",
    category: "Hybrid",
    description: "Dessert-like sweetness with balanced high.",
    image: "/images/product1.jpg",
    featured: true,
    variants: [
      { size: "1 Seed", price: 20 },
      { size: "3 Seeds", price: 59.0 },
      { size: "5 Seeds", price: 85 },
      { size: "10 Seeds", price: 160 },
    ],
  },

  {
    id: "nebula-berry",
    name: "Nebula Berry",
    category: "Sativa",
    description: "Bright berry aroma, creative uplift.",
    image: "/images/product1.jpg",
    featured: false,
    variants: [
      { size: "1 Seed", price: 16 },
      { size: "3 Seeds", price: 47.0 },
      { size: "5 Seeds", price: 70 },
      { size: "10 Seeds", price: 130 },
    ],
  },
  {
    id: "astro-lemon",
    name: "Astro Lemon",
    category: "Sativa",
    description: "Sharp citrus notes, energetic sativa.",
    image: "/images/product1.jpg",
    featured: false,
    variants: [
      { size: "1 Seed", price: 15 },
      { size: "3 Seeds", price: 46.0 },
      { size: "5 Seeds", price: 68 },
      { size: "10 Seeds", price: 125 },
    ],
  },
  {
    id: "cosmic-cookie",
    name: "Cosmic Cookie",
    category: "Indica",
    description: "Cozy indica with sweet cookie aroma.",
    image: "/images/product1.jpg",
    featured: true,
    variants: [
      { size: "1 Seed", price: 15 },
      { size: "3 Seeds", price: 41.0 },
      { size: "5 Seeds", price: 62 },
      { size: "10 Seeds", price: 115 },
    ],
  },
  {
    id: "galaxy-diesel",
    name: "Galaxy Diesel",
    category: "Hybrid",
    description: "Fuel-forward aroma, uplifting yet mellow.",
    image: "/images/product1.jpg",
    featured: false,
    variants: [
      { size: "1 Seed", price: 18 },
      { size: "3 Seeds", price: 50.0 },
      { size: "5 Seeds", price: 75 },
      { size: "10 Seeds", price: 140 },
    ],
  },
  {
    id: "quantum-kush",
    name: "Quantum Kush",
    category: "Indica",
    description: "Dense buds and heavy relaxation.",
    image: "/images/product1.jpg",
    featured: false,
    variants: [
      { size: "1 Seed", price: 20 },
      { size: "3 Seeds", price: 58.0 },
      { size: "5 Seeds", price: 82 },
      { size: "10 Seeds", price: 155 },
    ],
  },

  {
    id: "orbit-og",
    name: "Orbit OG",
    category: "Hybrid",
    description: "Smooth hybrid, floral and pine.",
    image: "/images/product1.jpg",
    featured: false,
    variants: [
      { size: "1 Seed", price: 17 },
      { size: "3 Seeds", price: 52.5 },
      { size: "5 Seeds", price: 78 },
      { size: "10 Seeds", price: 145 },
    ],
  },
  {
    id: "stardust-sour",
    name: "Stardust Sour",
    category: "Sativa",
    description: "Sharp sour aroma with a clear head-high.",
    image: "/images/product1.jpg",
    featured: true,
    variants: [
      { size: "1 Seed", price: 18 },
      { size: "3 Seeds", price: 56.0 },
      { size: "5 Seeds", price: 82 },
      { size: "10 Seeds", price: 150 },
    ],
  },
  {
    id: "eclipse-haze",
    name: "Eclipse Haze",
    category: "Sativa",
    description: "Long-lasting cerebral haze.",
    image: "/images/product1.jpg",
    featured: false,
    variants: [
      { size: "1 Seed", price: 16 },
      { size: "3 Seeds", price: 48.0 },
      { size: "5 Seeds", price: 70 },
      { size: "10 Seeds", price: 135 },
    ],
  },
  {
    id: "zenith-zk",
    name: "Zenith ZK",
    category: "Autoflower",
    description: "Easy autoflower, compact plants.",
    image: "/images/product1.jpg",
    featured: false,
    variants: [
      { size: "1 Seed", price: 12 },
      { size: "3 Seeds", price: 35.0 },
      { size: "5 Seeds", price: 52 },
      { size: "10 Seeds", price: 95 },
    ],
  },
  {
    id: "opal-berry",
    name: "Opal Berry",
    category: "Indica",
    description: "Soft fruity indica for chill evenings.",
    image: "/images/product1.jpg",
    featured: true,
    variants: [
      { size: "1 Seed", price: 15 },
      { size: "3 Seeds", price: 42.5 },
      { size: "5 Seeds", price: 65 },
      { size: "10 Seeds", price: 120 },
    ],
  },
];
