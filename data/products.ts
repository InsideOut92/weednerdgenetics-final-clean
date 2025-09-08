// data/products.ts
export type Product = {
  id: string;          // eindeutiger identifier, wird in URLs genutzt
  name: string;
  category: "Indica" | "Sativa" | "Hybrid" | "Autoflower";
  price: number;
  description: string;
  image: string;       // Pfad in public/images/products/...
  featured?: boolean;  // true => wird in Featured-Sektion gezeigt
};

export const products: Product[] = [
  { id: "galactic-kush", name: "Galactic Kush", category: "Indica", price: 39.99, description: "Potent indica with heavy resin and relaxing effects.", image: "/images/product1.jpg", featured: true },
  { id: "portal-og", name: "Portal OG", category: "Hybrid", price: 44.99, description: "Balanced hybrid with citrus notes.", image: "/images/product1.jpg", featured: true },
  { id: "mortys-kush", name: "Morty’s Kush", category: "Indica", price: 49.99, description: "Heavy sedative indica with fruity undertones.", image: "/images/product1.jpg", featured: false },
  { id: "rick-runtz", name: "Rick Runtz", category: "Hybrid", price: 59.99, description: "Sweet candy-like flavor and balanced effects.", image: "/images/product1.jpg", featured: true },
  { id: "portal-pineapple", name: "Portal Pineapple", category: "Sativa", price: 54.99, description: "Tropical sativa with uplifting energy.", image: "/images/product1.jpg", featured: false },

  { id: "dimension-dream", name: "Dimension Dream", category: "Hybrid", price: 64.99, description: "Euphoric hybrid with berry & vanilla notes.", image: "/images/product1.jpg", featured: true },
  { id: "pickle-rick-haze", name: "Pickle Rick Haze", category: "Sativa", price: 53.5, description: "Classic haze with a spicy herbal twist.", image: "/images/product1.jpg", featured: false },
  { id: "schwifty-skunk", name: "Schwifty Skunk", category: "Hybrid", price: 39.0, description: "Oldschool skunk genetics; social and pungent.", image: "/images/product1.jpg", featured: false },
  { id: "plumbus-punch", name: "Plumbus Punch", category: "Indica", price: 49.0, description: "Fruity hybrid, couch-lock for evenings.", image: "/images/product1.jpg", featured: false },
  { id: "council-cookies", name: "Council Cookies", category: "Hybrid", price: 59.0, description: "Dessert-like sweetness with balanced high.", image: "/images/product1.jpg", featured: true },

  { id: "nebula-berry", name: "Nebula Berry", category: "Sativa", price: 47.0, description: "Bright berry aroma, creative uplift.", image: "/images/product1.jpg", featured: false },
  { id: "astro-lemon", name: "Astro Lemon", category: "Sativa", price: 46.0, description: "Sharp citrus notes, energetic sativa.", image: "/images/product1.jpg", featured: false },
  { id: "cosmic-cookie", name: "Cosmic Cookie", category: "Indica", price: 41.0, description: "Cozy indica with sweet cookie aroma.", image: "/images/product1.jpg", featured: true },
  { id: "galaxy-diesel", name: "Galaxy Diesel", category: "Hybrid", price: 50.0, description: "Fuel-forward aroma, uplifting yet mellow.", image: "/images/product1.jpg", featured: false },
  { id: "quantum-kush", name: "Quantum Kush", category: "Indica", price: 58.0, description: "Dense buds and heavy relaxation.", image: "/images/product1.jpg", featured: false },

  { id: "orbit-og", name: "Orbit OG", category: "Hybrid", price: 52.5, description: "Smooth hybrid, floral and pine.", image: "/images/product1.jpg", featured: false },
  { id: "stardust-sour", name: "Stardust Sour", category: "Sativa", price: 56.0, description: "Sharp sour aroma with a clear head-high.", image: "/images/product1.jpg", featured: true },
  { id: "eclipse-haze", name: "Eclipse Haze", category: "Sativa", price: 48.0, description: "Long-lasting cerebral haze.", image: "/images/product1.jpg", featured: false },
  { id: "zenith-zk", name: "Zenith ZK", category: "Autoflower", price: 35.0, description: "Easy autoflower, compact plants.", image: "/images/product1.jpg", featured: false },
  { id: "opal-berry", name: "Opal Berry", category: "Indica", price: 42.5, description: "Soft fruity indica for chill evenings.", image: "/images/product1.jpg", featured: true }
];
