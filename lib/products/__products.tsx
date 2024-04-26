"use server";

import { Product } from "@/custom";

export const products: Product[] = [
  {
    id: "001",
    name: "men's classic oxford shoes",
    img: "/products/product-001.webp",
    description: [
      "classic oxford shoes for men, perfect for formal occasions.",
      "made with genuine leather and durable sole.",
    ],
    categories: ["formal shoes", "men's shoes"],
    colors: ["black", "brown", "blue"],
    price: { original: "89.99", sale: null },
    relatedProducts: ["002", "003", "004", "005"],
    rating: 4,
    inStock: 76,
  },
  {
    id: "002",
    name: "women's casual sneakers",
    img: "/products/product-002.webp",
    description: [
      "comfortable and stylish sneakers for women.",
      "perfect for casual outings and daily wear.",
    ],
    categories: ["sneakers", "women's shoes"],
    colors: ["white", "grey", "pink"],
    price: { original: "69.99", sale: "49.99" },
    relatedProducts: ["001", "006", "007", "008"],
    rating: 5,
    inStock: 2,
  },
  {
    id: "003",
    name: "men's leather loafers",
    img: "/products/product-003.webp",
    description: [
      "classic leather loafers for men, suitable for both casual and formal wear.",
      "soft and comfortable with a slip-on design.",
    ],
    categories: ["loafers", "men's shoes"],
    colors: ["brown", "black"],
    price: { original: "79.99", sale: null },
    relatedProducts: ["001", "004", "009", "010"],
    rating: 4,
    inStock: 28,
  },
  {
    id: "004",
    name: "women's high heel pumps",
    img: "/products/product-004.webp",
    description: [
      "elegant high heel pumps for women, perfect for formal events.",
      "made with premium materials for durability and style.",
    ],
    categories: ["heels", "women's shoes"],
    colors: ["black", "red"],
    price: { original: "99.99", sale: null },
    relatedProducts: ["001", "003", "011", "012"],
    rating: 3,
    inStock: 48,
  },
  {
    id: "005",
    name: "men's athletic running shoes",
    img: "/products/product-005.webp",
    description: [
      "lightweight and breathable running shoes for men.",
      "designed for optimal performance and comfort.",
    ],
    categories: ["athletic shoes", "men's shoes"],
    colors: ["blue", "black", "grey"],
    price: { original: "79.99", sale: null },
    relatedProducts: ["001", "013", "014", "015"],
    rating: 4,
    inStock: 50,
  },
  {
    id: "006",
    name: "women's ankle boots",
    img: "/products/product-006.webp",
    description: [
      "stylish ankle boots for women, perfect for fall and winter.",
      "made with faux leather and a sturdy heel.",
    ],
    categories: ["boots", "women's shoes"],
    colors: ["brown", "black", "taupe"],
    price: { original: "59.99", sale: "39.99" },
    relatedProducts: ["002", "016", "017", "018"],
    rating: 5,
    inStock: 4,
  },
  {
    id: "007",
    name: "men's suede chelsea boots",
    img: "/products/product-007.webp",
    description: [
      "trendy suede chelsea boots for men, suitable for any occasion.",
      "elastic side panels for easy slip-on and off.",
    ],
    categories: ["boots", "men's shoes"],
    colors: ["tan", "black", "navy"],
    price: { original: "89.99", sale: null },
    relatedProducts: ["002", "019", "020", "021"],
    rating: 5,
    inStock: 78,
  },
  {
    id: "008",
    name: "women's ballet flats",
    img: "/products/product-008.webp",
    description: [
      "classic ballet flats for women, versatile and comfortable.",
      "available in various colors to match any outfit.",
    ],
    categories: ["flats", "women's shoes"],
    colors: ["black", "beige", "navy"],
    price: { original: "49.99", sale: null },
    relatedProducts: ["002", "022", "023", "024"],
    rating: 4,
    inStock: 57,
  },
  {
    id: "009",
    name: "men's slip-on sneakers",
    img: "/products/product-009.webp",
    description: [
      "casual slip-on sneakers for men, easy to wear and stylish.",
      "lightweight construction with a cushioned insole.",
    ],
    categories: ["sneakers", "men's shoes"],
    colors: ["white", "black", "grey"],
    price: { original: "59.99", sale: null },
    relatedProducts: ["003", "025", "026", "027"],
    rating: 3,
    inStock: 84,
  },
  {
    id: "010",
    name: "women's platform sandals",
    img: "/products/product-010.webp",
    description: [
      "fashionable platform sandals for women, perfect for summer.",
      "adjustable ankle strap for a secure fit.",
    ],
    categories: ["sandals", "women's shoes"],
    colors: ["black", "brown", "white"],
    price: { original: "69.99", sale: null },
    relatedProducts: ["003", "028", "029", "030"],
    rating: 4,
    inStock: 85,
  },
  {
    id: "011",
    name: "men's leather dress shoes",
    img: "/products/product-011.webp",
    description: [
      "classic leather dress shoes for men, essential for formal occasions.",
      "elegant design with a polished finish.",
    ],
    categories: ["men's shoes"],
    colors: ["black", "brown"],
    price: { original: "109.99", sale: "89.99" },
    relatedProducts: ["004", "031", "032", "033"],
    rating: 4,
    inStock: 42,
  },
  {
    id: "012",
    name: "women's wedge sandals",
    img: "/products/product-012.webp",
    description: [
      "comfortable wedge sandals for women, perfect for all-day wear.",
      "stylish design with a cushioned footbed.",
    ],
    categories: ["sandals", "women's shoes"],
    colors: ["tan", "black", "red"],
    price: { original: "79.99", sale: "49.99" },
    relatedProducts: ["004", "034", "035", "036"],
    rating: 5,
    inStock: 14,
  },
  {
    id: "013",
    name: "men's hiking boots",
    img: "/products/product-013.webp",
    description: [
      "durable hiking boots for men, ideal for outdoor adventures.",
      "waterproof construction with sturdy traction.",
    ],
    categories: ["boots", "men's shoes"],
    colors: ["brown", "black", "green"],
    price: { original: "129.99", sale: "79.99" },
    relatedProducts: ["005", "037", "038", "039"],
    rating: 2,
    inStock: 120,
  },
  {
    id: "014",
    name: "women's running sneakers",
    img: "/products/product-014.webp",
    description: [
      "performance running sneakers for women, designed for speed and comfort.",
      "breathable mesh upper with cushioned midsole.",
    ],
    categories: ["athletic shoes", "women's shoes"],
    colors: ["black", "pink", "blue"],
    price: { original: "89.99", sale: null },
    relatedProducts: ["005", "040", "041", "042"],
    rating: 5,
    inStock: 41,
  },
  {
    id: "015",
    name: "men's casual loafers",
    img: "/products/product-015.webp",
    description: [
      "stylish and comfortable loafers for men, suitable for any occasion.",
      "easy slip-on design with a cushioned insole.",
    ],
    categories: ["loafers", "men's shoes"],
    colors: ["black", "brown", "navy"],
    price: { original: "69.99", sale: null },
    relatedProducts: ["005", "043", "044", "045"],
    rating: 5,
    inStock: 54,
  },
  {
    id: "016",
    name: "women's knee-high boots",
    img: "/products/product-016.webp",
    description: [
      "chic knee-high boots for women, perfect for the colder seasons.",
      "side zipper closure and block heel for stability.",
    ],
    categories: ["boots", "women's shoes"],
    colors: ["black", "brown", "taupe"],
    price: { original: "89.99", sale: "69.99" },
    relatedProducts: ["006", "046", "047", "048"],
    rating: 4,
    inStock: 38,
  },
  {
    id: "017",
    name: "men's leather chukka boots",
    img: "/products/product-017.webp",
    description: [
      "versatile leather chukka boots for men, suitable for any occasion.",
      "lace-up closure with a cushioned footbed.",
    ],
    categories: ["boots", "men's shoes"],
    colors: ["brown", "black", "navy"],
    price: { original: "99.99", sale: null },
    relatedProducts: ["006", "049", "050", "051"],
    rating: 4,
    inStock: 25,
  },
  {
    id: "018",
    name: "women's espadrille wedges",
    img: "/products/product-018.webp",
    description: [
      "stylish espadrille wedges for women, perfect for summer outings.",
      "rope-wrapped wedge heel with a comfortable footbed.",
    ],
    categories: ["sandals", "women's shoes"],
    colors: ["black", "beige", "navy"],
    price: { original: "59.99", sale: null },
    relatedProducts: ["006", "052", "053", "054"],
    rating: 5,
    inStock: 28,
  },
  {
    id: "019",
    name: "men's suede desert boots",
    img: "/products/product-019.webp",
    description: [
      "classic suede desert boots for men, perfect for casual wear.",
      "lace-up closure with a durable rubber sole.",
    ],
    categories: ["boots", "men's shoes"],
    colors: ["tan", "brown", "navy"],
    price: { original: "79.99", sale: null },
    relatedProducts: ["007", "055", "056", "057"],
    rating: 4,
    inStock: 13,
  },
  {
    id: "020",
    name: "women's combat boots",
    img: "/products/product-020.webp",
    description: [
      "edgy combat boots for women, perfect for adding a touch of rebellion to any outfit.",
      "lace-up closure with a chunky sole.",
    ],
    categories: ["boots", "women's shoes"],
    colors: ["black", "brown", "taupe"],
    price: { original: "99.99", sale: "79.99" },
    relatedProducts: ["007", "058", "059", "060"],
    rating: 2,
    inStock: 75,
  },
  {
    id: "021",
    name: "men's leather derby shoes",
    img: "/products/product-021.webp",
    description: [
      "classic leather derby shoes for men, suitable for formal occasions.",
      "lace-up closure with a polished finish.",
    ],
    categories: ["formal shoes", "men's shoes"],
    colors: ["black", "brown", "taupe"],
    price: { original: "109.99", sale: null },
    relatedProducts: ["007", "061", "062", "063"],
    rating: 5,
    inStock: 35,
  },
  {
    id: "022",
    name: "women's mule flats",
    img: "/products/product-022.webp",
    description: [
      "stylish mule flats for women, easy to slip on for everyday wear.",
      "available in various colors to match any outfit.",
    ],
    categories: ["flats", "women's shoes"],
    colors: ["black", "beige", "grey"],
    price: { original: "39.99", sale: "29.99" },
    relatedProducts: ["008", "064", "065", "066"],
    rating: 2,
    inStock: 12,
  },
  {
    id: "023",
    name: "men's canvas slip-on shoes",
    img: "/products/product-023.webp",
    description: [
      "casual canvas slip-on shoes for men, perfect for summer.",
      "elastic side panels for easy on and off.",
    ],
    categories: ["sneakers", "men's shoes"],
    colors: ["white", "black", "grey"],
    price: { original: "49.99", sale: null },
    relatedProducts: ["008", "067", "068", "069"],
    rating: 3,
    inStock: 54,
  },
  {
    id: "024",
    name: "women's pointed toe flats",
    img: "/products/product-024.webp",
    description: [
      "chic pointed toe flats for women, versatile and comfortable.",
      "available in various colors to match any outfit.",
    ],
    categories: ["flats", "women's shoes"],
    colors: ["black", "beige", "navy"],
    price: { original: "44.99", sale: null },
    relatedProducts: ["008", "070", "071", "072"],
    rating: 4,
    inStock: 16,
  },
  {
    id: "025",
    name: "men's leather boat shoes",
    img: "/products/product-025.webp",
    description: [
      "classic leather boat shoes for men, perfect for casual summer wear.",
      "lace-up closure with a non-marking rubber sole.",
    ],
    categories: ["loafers", "men's shoes"],
    colors: ["brown", "navy", "tan"],
    price: { original: "69.99", sale: null },
    relatedProducts: ["009", "073", "074", "075"],
    rating: 4,
    inStock: 28,
  },
  {
    id: "026",
    name: "women's slip-on sneakers",
    img: "/products/product-026.webp",
    description: [
      "casual slip-on sneakers for women, easy to wear and versatile.",
      "available in various colors to match any outfit.",
    ],
    categories: ["sneakers", "women's shoes"],
    colors: ["black", "white", "grey"],
    price: { original: "54.99", sale: null },
    relatedProducts: ["009", "076", "077", "078"],
    rating: 4,
    inStock: 98,
  },
  {
    id: "027",
    name: "men's leather driving shoes",
    img: "/products/product-027.webp",
    description: [
      "stylish leather driving shoes for men, perfect for casual outings.",
      "slip-on design with a cushioned insole.",
    ],
    categories: ["loafers", "men's shoes"],
    colors: ["brown", "black", "navy"],
    price: { original: "59.99", sale: null },
    relatedProducts: ["009", "079", "080", "081"],
    rating: 4,
    inStock: 120,
  },
  {
    id: "028",
    name: "women's platform espadrilles",
    img: "/products/product-028.webp",
    description: [
      "stylish platform espadrilles for women, perfect for summer outings.",
      "adjustable ankle strap for a secure fit.",
    ],
    categories: ["sandals", "women's shoes"],
    colors: ["black", "beige", "navy"],
    price: { original: "64.99", sale: null },
    relatedProducts: ["010", "082", "083", "084"],
    rating: 3,
    inStock: 12,
  },
  {
    id: "029",
    name: "men's slide sandals",
    img: "/products/product-029.webp",
    description: [
      "casual slide sandals for men, easy to slip on for warm-weather wear.",
      "textured footbed for added comfort.",
    ],
    categories: ["sandals", "men's shoes"],
    colors: ["black", "navy", "grey"],
    price: { original: "29.99", sale: "19.99" },
    relatedProducts: ["010", "085", "086", "087"],
    rating: 5,
    inStock: 4,
  },
  {
    id: "030",
    name: "women's slingback sandals",
    img: "/products/product-030.webp",
    description: [
      "chic slingback sandals for women, perfect for summer occasions.",
      "adjustable buckle closure for a custom fit.",
    ],
    categories: ["sandals", "women's shoes"],
    colors: ["black", "brown", "taupe"],
    price: { original: "49.99", sale: null },
    relatedProducts: ["010", "088", "089", "090"],
    rating: 3,
    inStock: 12,
  },
  {
    id: "031",
    name: "men's monk strap shoes",
    img: "/products/product-031.webp",
    description: [
      "sophisticated monk strap shoes for men, perfect for formal occasions.",
      "buckle closure with a polished finish.",
    ],
    categories: ["formal shoes", "men's shoes"],
    colors: ["beige", "navy"],
    price: { original: "119.99", sale: null },
    relatedProducts: ["011", "091", "092", "093"],
    rating: 1,
    inStock: 56,
  },
  {
    id: "032",
    name: "women's block heel sandals",
    img: "/products/product-032.webp",
    description: [
      "fashionable block heel sandals for women, perfect for dressy occasions.",
      "adjustable ankle strap for a secure fit.",
    ],
    categories: ["sandals", "women's shoes"],
    colors: ["black", "beige", "red"],
    price: { original: "74.99", sale: null },
    relatedProducts: ["011", "094", "095", "096"],
    rating: 0,
    inStock: 80,
  },
  {
    id: "033",
    name: "men's wingtip brogues",
    img: "/products/product-033.webp",
    description: [
      "classic wingtip brogues for men, essential for formal events.",
      "perforated detailing with a lace-up closure.",
    ],
    categories: ["formal shoes", "men's shoes"],
    colors: ["beige", "camel", "silver"],
    price: { original: "129.99", sale: null },
    relatedProducts: ["011", "097", "098", "099"],
    rating: 5,
    inStock: 0,
  },
  {
    id: "034",
    name: "women's heeled mules",
    img: "/products/product-034.webp",
    description: [
      "chic heeled mules for women, perfect for adding a touch of elegance to any outfit.",
      "slip-on design with a block heel.",
    ],
    categories: ["heels", "women's shoes"],
    colors: ["black", "beige", "red"],
    price: { original: "69.99", sale: null },
    relatedProducts: ["012", "100", "101", "102"],
    rating: 3,
    inStock: 68,
  },
  {
    id: "035",
    name: "men's suede loafers",
    img: "/products/product-035.webp",
    description: [
      "stylish suede loafers for men, perfect for casual wear.",
      "slip-on design with a cushioned insole.",
    ],
    categories: ["loafers", "men's shoes"],
    colors: ["tan", "navy", "grey"],
    price: { original: "79.99", sale: null },
    relatedProducts: ["012", "103", "104", "105"],
    rating: 4,
    inStock: 69,
  },
  {
    id: "036",
    name: "women's strappy sandals",
    img: "/products/product-036.webp",
    description: [
      "chic strappy sandals for women, perfect for warm-weather wear.",
      "adjustable ankle strap for a custom fit.",
    ],
    categories: ["sandals", "women's shoes"],
    colors: ["black", "tan", "taupe"],
    price: { original: "59.99", sale: null },
    relatedProducts: ["012", "106", "107", "108"],
    rating: 5,
    inStock: 0,
  },
  {
    id: "037",
    name: "men's trail running shoes",
    img: "/products/product-037.webp",
    description: [
      "rugged trail running shoes for men, designed for off-road adventures.",
      "durable construction with reliable traction.",
    ],
    categories: ["athletic shoes", "men's shoes"],
    colors: ["black", "green", "blue"],
    price: { original: "99.99", sale: null },
    relatedProducts: ["013", "109", "110", "111"],
    rating: 4,
    inStock: 56,
  },
  {
    id: "038",
    name: "women's wedge sneakers",
    img: "/products/product-038.webp",
    description: [
      "stylish wedge sneakers for women, perfect for adding height without sacrificing comfort.",
      "lace-up closure with a cushioned footbed.",
    ],
    categories: ["sneakers", "women's shoes"],
    colors: ["black", "white", "grey"],
    price: { original: "89.99", sale: null },
    relatedProducts: ["013", "112", "113", "114"],
    rating: 4,
    inStock: 35,
  },
  {
    id: "039",
    name: "men's waterproof hiking boots",
    img: "/products/product-039.webp",
    description: [
      "waterproof hiking boots for men, designed to keep your feet dry on wet trails.",
      "tough and durable construction with a cushioned midsole.",
    ],
    categories: ["boots", "men's shoes"],
    colors: ["brown", "black", "grey"],
    price: { original: "149.99", sale: null },
    relatedProducts: ["013", "115", "116", "117"],
    rating: 5,
    inStock: 2,
  },
  {
    id: "040",
    name: "women's slip-on running shoes",
    img: "/products/product-040.webp",
    description: [
      "comfortable slip-on running shoes for women, perfect for daily workouts.",
      "breathable mesh upper with a cushioned midsole.",
    ],
    categories: ["athletic shoes", "women's shoes"],
    colors: ["black", "grey", "pink"],
    price: { original: "79.99", sale: null },
    relatedProducts: ["014", "118", "119", "120"],
    rating: 2,
    inStock: 35,
  },
  {
    id: "041",
    name: "men's mesh athletic sneakers",
    img: "/products/product-041.webp",
    description: [
      "breathable mesh athletic sneakers for men, ideal for running and gym workouts.",
      "cushioned insole with a lightweight design.",
    ],
    categories: ["athletic shoes", "men's shoes"],
    colors: ["black", "blue", "grey"],
    price: { original: "64.99", sale: null },
    relatedProducts: ["014", "121", "122", "123"],
    rating: 0,
    inStock: 120,
  },
  {
    id: "042",
    name: "women's trail running shoes",
    img: "/products/product-042.webp",
    description: [
      "trail running shoes for women, designed for off-road adventures.",
      "reliable traction with a cushioned midsole.",
    ],
    categories: ["athletic shoes", "women's shoes"],
    colors: ["black", "purple", "blue"],
    price: { original: "99.99", sale: null },
    relatedProducts: ["014", "124", "125", "126"],
    rating: 4,
    inStock: 13,
  },
  {
    id: "043",
    name: "men's suede driving shoes",
    img: "/products/product-043.webp",
    description: [
      "stylish suede driving shoes for men, perfect for casual wear.",
      "slip-on design with a cushioned insole.",
    ],
    categories: ["loafers", "men's shoes"],
    colors: ["brown", "navy", "grey"],
    price: { original: "79.99", sale: null },
    relatedProducts: ["015", "127", "128", "129"],
    rating: 5,
    inStock: 34,
  },
  {
    id: "044",
    name: "women's faux leather loafers",
    img: "/products/product-044.webp",
    description: [
      "chic faux leather loafers for women, perfect for everyday wear.",
      "easy slip-on design with a comfortable footbed.",
    ],
    categories: ["loafers", "women's shoes"],
    colors: ["black", "beige", "navy"],
    price: { original: "49.99", sale: null },
    relatedProducts: ["015", "130", "131", "132"],
    rating: 2,
    inStock: 65,
  },
  {
    id: "045",
    name: "men's canvas sneakers",
    img: "/products/product-045.webp",
    description: [
      "classic canvas sneakers for men, perfect for casual outings.",
      "lace-up closure with a cushioned insole.",
    ],
    categories: ["sneakers", "men's shoes"],
    colors: ["white", "black", "navy"],
    price: { original: "39.99", sale: null },
    relatedProducts: ["015", "133", "134", "135"],
    rating: 1,
    inStock: 23,
  },
  {
    id: "046",
    name: "women's over-the-knee boots",
    img: "/products/product-046.webp",
    description: [
      "sleek over-the-knee boots for women, perfect for making a statement.",
      "side zipper closure with a chunky heel.",
    ],
    categories: ["boots", "women's shoes"],
    colors: ["black", "brown", "taupe"],
    price: { original: "99.99", sale: "79.99" },
    relatedProducts: ["016", "136", "137", "138"],
    rating: 0,
    inStock: 2,
  },
  {
    id: "047",
    name: "men's leather hiking boots",
    img: "/products/product-047.webp",
    description: [
      "durable leather hiking boots for men, designed for rugged terrain.",
      "waterproof construction with reliable traction.",
    ],
    categories: ["boots", "men's shoes"],
    colors: ["brown", "black", "green"],
    price: { original: "139.99", sale: null },
    relatedProducts: ["016", "139", "140", "141"],
    rating: 5,
    inStock: 60,
  },
  {
    id: "048",
    name: "women's lace-up combat boots",
    img: "/products/product-048.webp",
    description: [
      "edgy lace-up combat boots for women, perfect for adding a rebellious touch to any outfit.",
      "chunky sole with a lace-up closure.",
    ],
    categories: ["boots", "women's shoes"],
    colors: ["black", "brown", "taupe"],
    price: { original: "109.99", sale: null },
    relatedProducts: ["016", "142", "143", "144"],
    rating: 4,
    inStock: 2,
  },
  {
    id: "049",
    name: "men's leather Chelsea boots",
    img: "/products/product-049.webp",
    description: [
      "sleek leather Chelsea boots for men, perfect for any occasion.",
      "elastic side panels for easy slip-on and off.",
    ],
    categories: ["boots", "men's shoes"],
    colors: ["black", "brown", "taupe"],
    price: { original: "99.99", sale: null },
    relatedProducts: ["017", "145", "146", "147"],
    rating: 4,
    inStock: 86,
  },
  {
    id: "050",
    name: "women's western ankle boots",
    img: "/products/product-050.webp",
    description: [
      "stylish western ankle boots for women, perfect for adding a touch of country charm to any outfit.",
      "side zipper closure with a stacked heel.",
    ],
    categories: ["boots", "women's shoes"],
    colors: ["black", "brown", "taupe"],
    price: { original: "79.99", sale: "59.99" },
    relatedProducts: ["017", "148", "149", "150"],
    rating: 4,
    inStock: 98,
  },
];
