const products = [
  {
    name: "Midnight Chrome Oversized Tee",
    price: 1499,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800",
images: [
  "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800",
  "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=800",
  "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800",
  "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=800",
],
    category: "T-Shirt",
    stock: 40,
    description:
      "Oversized heavyweight tee with a clean streetwear silhouette made for everyday Gen-Z fits.",
    mood: "Casual",
    brand: "AuraWear",
    rating: 4.8,
    numReviews: 186,
  },

  {
    name: "After Dark Baggy Cargo",
    price: 2299,
    image:
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800",
    category: "Pants",
    stock: 32,
    description:
      "Relaxed-fit cargo pants with utility pockets and a statement streetwear look.",
    mood: "Travel",
    brand: "AuraWear",
    rating: 4.9,
    numReviews: 142,
  },

  {
    name: "Tokyo Drift Bomber",
    price: 3999,
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800",
    category: "Jacket",
    stock: 18,
    description:
      "Statement bomber jacket designed to elevate oversized streetwear fits.",
    mood: "Party",
    brand: "AuraWear",
    rating: 4.9,
    numReviews: 219,
  },

  {
    name: "Cloud Nine Co-ord Set",
    price: 2799,
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800",
    category: "Co-ord",
    stock: 24,
    description:
      "Minimal relaxed co-ord set combining comfort with an effortlessly aesthetic look.",
    mood: "Casual",
    brand: "AuraWear",
    rating: 4.8,
    numReviews: 96,
  },

  {
    name: "Shadow Wide-Leg Denim",
    price: 2499,
    image:
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800",
    category: "Jeans",
    stock: 35,
    description:
      "Wide-leg denim with a relaxed silhouette made for modern streetwear styling.",
    mood: "Casual",
    brand: "AuraWear",
    rating: 4.7,
    numReviews: 128,
  },

  {
    name: "Y2K Aura Crop Top",
    price: 1199,
    image:
      "https://images.unsplash.com/photo-1564257577054-3e6c8b5c7f47?w=800",
    category: "Top",
    stock: 45,
    description:
      "Y2K-inspired fitted crop top with a bold silhouette for party and date-night fits.",
    mood: "Date",
    brand: "AuraWear",
    rating: 4.8,
    numReviews: 174,
  },

  {
    name: "Street Rebel Varsity",
    price: 3499,
    image:
      "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=800",
    category: "Jacket",
    stock: 20,
    description:
      "Retro-inspired varsity jacket with a modern oversized streetwear fit.",
    mood: "Party",
    brand: "AuraWear",
    rating: 4.9,
    numReviews: 203,
  },

  {
    name: "Neon Rush Sneakers",
    price: 3299,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800",
    category: "Shoes",
    stock: 22,
    description:
      "Chunky everyday sneakers designed to add energy to your streetwear fits.",
    mood: "Gym",
    brand: "AuraWear",
    rating: 4.8,
    numReviews: 267,
  },

  {
    name: "Urban Ghost Hoodie",
    price: 2499,
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800",
    category: "Hoodie",
    stock: 30,
    description:
      "Oversized fleece hoodie with a relaxed silhouette and premium everyday comfort.",
    mood: "Casual",
    brand: "AuraWear",
    rating: 4.9,
    numReviews: 231,
  },

  {
    name: "Chrome Street Hoodie",
    price: 2699,
    image:
      "https://images.unsplash.com/photo-1509942774463-acf339cf87d5?w=800",
    category: "Hoodie",
    stock: 28,
    description:
      "Statement oversized hoodie inspired by late-night city streetwear.",
    mood: "Party",
    brand: "AuraWear",
    rating: 4.8,
    numReviews: 156,
  },

  {
    name: "Midnight Flare Pants",
    price: 1999,
    image:
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800",
    category: "Pants",
    stock: 26,
    description:
      "Relaxed flare pants designed for a sleek Y2K-inspired silhouette.",
    mood: "Date",
    brand: "AuraWear",
    rating: 4.7,
    numReviews: 83,
  },

  {
    name: "Downtown Denim Jacket",
    price: 2999,
    image:
      "https://images.unsplash.com/photo-1523205565295-f8e91625443b?w=800",
    category: "Jacket",
    stock: 21,
    description:
      "Classic denim jacket redesigned with an oversized contemporary fit.",
    mood: "Travel",
    brand: "AuraWear",
    rating: 4.8,
    numReviews: 119,
  },

  {
    name: "Aura Ribbed Top",
    price: 999,
    image:
      "https://images.unsplash.com/photo-1551489186-cf8726f514f8?w=800",
    category: "Top",
    stock: 50,
    description:
      "Minimal ribbed top that works perfectly with cargos, denim and layered fits.",
    mood: "Casual",
    brand: "AuraWear",
    rating: 4.7,
    numReviews: 74,
  },

  {
    name: "Electric Blue Street Tee",
    price: 1399,
    image:
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800",
    category: "T-Shirt",
    stock: 42,
    description:
      "Relaxed graphic-inspired tee with a bold urban aesthetic.",
    mood: "Party",
    brand: "AuraWear",
    rating: 4.8,
    numReviews: 112,
  },

  {
    name: "Off-Duty Oversized Shirt",
    price: 1899,
    image:
      "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=800",
    category: "Shirt",
    stock: 33,
    description:
      "Relaxed oversized shirt designed for effortless everyday layering.",
    mood: "Travel",
    brand: "AuraWear",
    rating: 4.8,
    numReviews: 91,
  },

  {
    name: "Noir Mini Dress",
    price: 2199,
    image:
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800",
    category: "Dress",
    stock: 25,
    description:
      "Sleek minimal mini dress designed for a bold night-out look.",
    mood: "Party",
    brand: "AuraWear",
    rating: 4.9,
    numReviews: 134,
  },

  {
    name: "City Lights Dress",
    price: 2399,
    image:
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800",
    category: "Dress",
    stock: 19,
    description:
      "Elegant statement dress blending contemporary styling with a night-out aesthetic.",
    mood: "Date",
    brand: "AuraWear",
    rating: 4.8,
    numReviews: 102,
  },

  {
    name: "Cloud Runner Sneakers",
    price: 3599,
    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800",
    category: "Shoes",
    stock: 24,
    description:
      "Clean everyday sneakers with a chunky modern silhouette.",
    mood: "Casual",
    brand: "AuraWear",
    rating: 4.8,
    numReviews: 188,
  },

  {
    name: "Aura Street Cap",
    price: 799,
    image:
      "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=800",
    category: "Accessories",
    stock: 60,
    description:
      "Minimal streetwear cap designed to finish your everyday AuraWear fit.",
    mood: "Travel",
    brand: "AuraWear",
    rating: 4.7,
    numReviews: 67,
  },

  {
    name: "Night Rider Crossbody",
    price: 1499,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800",
    category: "Accessories",
    stock: 35,
    description:
      "Compact crossbody bag built for city days, concerts and late-night adventures.",
    mood: "Travel",
    brand: "AuraWear",
    rating: 4.8,
    numReviews: 88,
  },
];

// Add gallery images to every product
products.forEach((product) => {
  if (!product.images || product.images.length === 0) {
    product.images = [
      product.image,
      product.image,
      product.image,
      product.image,
    ];
  }
});

module.exports = products;