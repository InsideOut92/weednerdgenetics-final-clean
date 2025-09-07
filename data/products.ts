// data/products.ts
export type Product = {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  image: string;
};

export const products: Product[] = [
  {
    id: "galactic-kush",
    name: "Galactic Kush",
    category: "Indica",
    description: "A cosmic indica strain with relaxing effects and deep green buds.",
    price: 39.99,
    image: "/images/product1.jpg",
  },
  {
    id: "portal-og",
    name: "Portal OG",
    category: "Hybrid",
    description: "A powerful hybrid strain inspired by interdimensional adventures.",
    price: 44.99,
    image: "/images/product1.jpg",
  },
  // 🟢 Dummy Produkte (IDs anpassen!)
  ...Array.from({ length: 20 }).map((_, i) => ({
    id: `strain-${i + 1}`,
    name: `Strain ${i + 1}`,
    category: i % 2 === 0 ? "Indica" : "Sativa",
    description: "Placeholder description for this strain.",
    price: 29.99 + i,
    image: "/images/product1.jpg",
  })),
];
