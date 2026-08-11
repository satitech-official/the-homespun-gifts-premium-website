export type Product = {
  id: string;
  name: string;
  category: string;
  occasion: string[];
  price: number;
  oldPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  images: string[];
  badge?: "Bestseller" | "New" | "Limited Edition" | "Personalizable";
  description: string;
  short: string;
  customizable: boolean;
  tags: string[];
};

export type Occasion = {
  id: string;
  title: string;
  description: string;
  image: string;
  count: number;
  shape: "tall" | "wide" | "square" | "arch";
  tint: string;
};

export type Testimonial = {
  name: string;
  occasion: string;
  rating: number;
  review: string;
  avatar: string;
  gift: string;
};

export const PRODUCTS: Product[] = [
  {
    id: "luxury-chocolate-hamper",
    name: "Luxury Chocolate Hamper",
    category: "Hampers",
    occasion: ["Anniversary", "Love", "Festive"],
    price: 2499,
    oldPrice: 2999,
    rating: 4.9,
    reviews: 218,
    image: "https://images.pexels.com/photos/18434553/pexels-photo-18434553.jpeg?auto=compress&cs=tinysrgb&w=1400",
    images: ["https://images.pexels.com/photos/18434553/pexels-photo-18434553.jpeg?auto=compress&cs=tinysrgb&w=1400", "https://images.pexels.com/photos/10819195/pexels-photo-10819195.jpeg?auto=compress&cs=tinysrgb&w=1400"],
    badge: "Bestseller",
    description: "A decadent assortment of artisan Belgian truffles, hand-rolled pralines and gourmet cocoa bars, wrapped in our signature champagne-gold box with a satin ribbon and a personalized note.",
    short: "Artisan truffles & cocoa bars in champagne-gold box",
    customizable: true,
    tags: ["chocolate", "luxury", "anniversary"],
  },
  {
    id: "personalized-memory-box",
    name: "Personalized Memory Box",
    category: "Memory",
    occasion: ["Birthday", "Anniversary", "Love"],
    price: 1899,
    rating: 5,
    reviews: 142,
    image: "https://images.pexels.com/photos/21956560/pexels-photo-21956560.jpeg?auto=compress&cs=tinysrgb&w=1400",
    images: ["https://images.pexels.com/photos/21956560/pexels-photo-21956560.jpeg?auto=compress&cs=tinysrgb&w=1400", "https://images.pexels.com/photos/10819195/pexels-photo-10819195.jpeg?auto=compress&cs=tinysrgb&w=1400"],
    badge: "Personalizable",
    description: "A hand-bound memory box filled with your photos, handwritten notes, pressed flowers and little surprises — crafted to relive your favorite moments forever.",
    short: "Hand-bound memory box with your photos & notes",
    customizable: true,
    tags: ["memory", "scrapbook", "personalized"],
  },
  {
    id: "snack-bouquet",
    name: "Snack Bouquet Deluxe",
    category: "Bouquets",
    occasion: ["Birthday", "Friendship"],
    price: 1299,
    oldPrice: 1499,
    rating: 4.8,
    reviews: 301,
    image: "https://images.pexels.com/photos/17878238/pexels-photo-17878238.jpeg?auto=compress&cs=tinysrgb&w=1400",
    images: ["https://images.pexels.com/photos/17878238/pexels-photo-17878238.jpeg?auto=compress&cs=tinysrgb&w=1400"],
    badge: "New",
    description: "A colorful bouquet of chips, cookies, chocolates and candies — wrapped like flowers and guaranteed to make them smile.",
    short: "A playful bouquet of their favorite snacks",
    customizable: true,
    tags: ["snacks", "fun", "birthday"],
  },
  {
    id: "baby-welcome-basket",
    name: "Baby Welcome Basket",
    category: "Baby",
    occasion: ["Baby"],
    price: 2299,
    rating: 4.9,
    reviews: 94,
    image: "https://images.pexels.com/photos/426905/pexels-photo-426905.jpeg?auto=compress&cs=tinysrgb&w=1400",
    images: ["https://images.pexels.com/photos/426905/pexels-photo-426905.jpeg?auto=compress&cs=tinysrgb&w=1400"],
    badge: "Personalizable",
    description: "Soft plush toys, cozy booties, a keepsake storybook and a personalized name-frame — a warm welcome for the newest member of the family.",
    short: "Plush toys, booties & a personalized name frame",
    customizable: true,
    tags: ["baby", "welcome", "newborn"],
  },
  {
    id: "couple-scrapbook",
    name: "Couple's Scrapbook",
    category: "Memory",
    occasion: ["Anniversary", "Love"],
    price: 1599,
    rating: 4.9,
    reviews: 176,
    image: "https://images.pexels.com/photos/7754232/pexels-photo-7754232.jpeg?auto=compress&cs=tinysrgb&w=1400",
    images: ["https://images.pexels.com/photos/7754232/pexels-photo-7754232.jpeg?auto=compress&cs=tinysrgb&w=1400", "https://images.pexels.com/photos/21956560/pexels-photo-21956560.jpeg?auto=compress&cs=tinysrgb&w=1400"],
    badge: "Bestseller",
    description: "A 20-page handcrafted scrapbook telling your love story — with pockets for polaroids, pressed petals and a letter sealed with wax.",
    short: "20-page handcrafted scrapbook of your love story",
    customizable: true,
    tags: ["couple", "scrapbook", "romantic"],
  },
  {
    id: "birthday-surprise-box",
    name: "Birthday Surprise Box",
    category: "Hampers",
    occasion: ["Birthday"],
    price: 1799,
    oldPrice: 2199,
    rating: 4.8,
    reviews: 412,
    image: "https://images.pexels.com/photos/28769885/pexels-photo-28769885.jpeg?auto=compress&cs=tinysrgb&w=1400",
    images: ["https://images.pexels.com/photos/28769885/pexels-photo-28769885.jpeg?auto=compress&cs=tinysrgb&w=1400"],
    badge: "Bestseller",
    description: "A colorful box bursting with chocolate truffles, a handwritten card, candles, confetti and a tiny keepsake — everything needed to make their day magical.",
    short: "A colorful box bursting with chocolate & confetti",
    customizable: true,
    tags: ["birthday", "surprise", "colorful"],
  },
  {
    id: "self-care-hamper",
    name: "Self-Care Hamper",
    category: "Hampers",
    occasion: ["Birthday", "Festive", "Corporate"],
    price: 1999,
    rating: 4.9,
    reviews: 203,
    image: "https://images.pexels.com/photos/34586911/pexels-photo-34586911.jpeg?auto=compress&cs=tinysrgb&w=1400",
    images: ["https://images.pexels.com/photos/34586911/pexels-photo-34586911.jpeg?auto=compress&cs=tinysrgb&w=1400"],
    badge: "Limited Edition",
    description: "Lavender bath salts, a soy candle, silk eye mask and essential oils — a spa evening, beautifully wrapped.",
    short: "Lavender salts, candle & silk eye mask",
    customizable: true,
    tags: ["self-care", "spa", "relaxing"],
  },
  {
    id: "premium-wedding-hamper",
    name: "Premium Wedding Hamper",
    category: "Hampers",
    occasion: ["Wedding"],
    price: 4499,
    rating: 5,
    reviews: 87,
    image: "https://images.pexels.com/photos/4397883/pexels-photo-4397883.jpeg?auto=compress&cs=tinysrgb&w=1200",
    images: ["https://images.pexels.com/photos/4397883/pexels-photo-4397883.jpeg?auto=compress&cs=tinysrgb&w=1200", "https://images.pexels.com/photos/10819195/pexels-photo-10819195.jpeg?auto=compress&cs=tinysrgb&w=1400"],
    badge: "Limited Edition",
    description: "A keepsake wedding hamper with a champagne bottle, crystal coupes, ivory roses, a gold-foil frame and a handwritten blessings scroll.",
    short: "Champagne, crystal coupes & ivory roses",
    customizable: true,
    tags: ["wedding", "luxury", "champagne"],
  },
  {
    id: "hero-signature",
    name: "Signature Rose Hamper",
    category: "Hampers",
    occasion: ["Love", "Anniversary"],
    price: 2799,
    oldPrice: 3199,
    rating: 4.9,
    reviews: 156,
    image: "https://images.pexels.com/photos/10819195/pexels-photo-10819195.jpeg?auto=compress&cs=tinysrgb&w=1400",
    images: ["https://images.pexels.com/photos/10819195/pexels-photo-10819195.jpeg?auto=compress&cs=tinysrgb&w=1400"],
    badge: "Personalizable",
    description: "Our signature rose hamper — a curated edit of pearls, cocoa, perfume and keepsakes, finished with a wax-sealed love letter.",
    short: "Pearls, cocoa & perfume in a rose-tinted keepsake",
    customizable: true,
    tags: ["signature", "rose", "luxury"],
  },
  {
    id: "festive-diwali-box",
    name: "Festive Mithai Box",
    category: "Hampers",
    occasion: ["Festive"],
    price: 1499,
    rating: 4.7,
    reviews: 318,
    image: "https://images.pexels.com/photos/5725882/pexels-photo-5725882.jpeg?auto=compress&cs=tinysrgb&w=1200",
    images: ["https://images.pexels.com/photos/5725882/pexels-photo-5725882.jpeg?auto=compress&cs=tinysrgb&w=1200"],
    badge: "Personalizable",
    description: "Artisan mithai, dry fruits and diyas in a hand-painted box — a festive gift that feels like home.",
    short: "Artisan mithai & dry fruits in a hand-painted box",
    customizable: true,
    tags: ["festive", "diwali", "traditional"],
  },
  {
    id: "corporate-delight",
    name: "Corporate Delight Hamper",
    category: "Hampers",
    occasion: ["Corporate"],
    price: 2199,
    rating: 4.8,
    reviews: 124,
    image: "https://images.pexels.com/photos/4397883/pexels-photo-4397883.jpeg?auto=compress&cs=tinysrgb&w=1200",
    images: ["https://images.pexels.com/photos/4397883/pexels-photo-4397883.jpeg?auto=compress&cs=tinysrgb&w=1200"],
    badge: "New",
    description: "A refined hamper for colleagues — premium coffee, dark chocolate, a leather notebook and a brass pen, embossed with their initials.",
    short: "Coffee, chocolate & a leather notebook",
    customizable: true,
    tags: ["corporate", "executive", "gifting"],
  },
  {
    id: "friendship-polaroids",
    name: "Friendship Polaroid Chest",
    category: "Memory",
    occasion: ["Friendship", "Birthday"],
    price: 1099,
    rating: 4.9,
    reviews: 287,
    image: "https://images.pexels.com/photos/5725887/pexels-photo-5725887.jpeg?auto=compress&cs=tinysrgb&w=1200",
    images: ["https://images.pexels.com/photos/5725887/pexels-photo-5725887.jpeg?auto=compress&cs=tinysrgb&w=1200"],
    badge: "Personalizable",
    description: "A little wooden chest of polaroids, inside-joke notes and a friendship bracelet — a pocket-sized museum of your friendship.",
    short: "Polaroids & inside-joke notes in a wooden chest",
    customizable: true,
    tags: ["friendship", "polaroid", "nostalgic"],
  },
];

export const OCCASIONS: Occasion[] = [
  {
    id: "birthday",
    title: "Birthday",
    description: "Colorful surprises & joyful memories",
    image: "https://images.pexels.com/photos/28769885/pexels-photo-28769885.jpeg?auto=compress&cs=tinysrgb&w=1400",
    count: 48,
    shape: "tall",
    tint: "bg-[#F6C9CF]",
  },
  {
    id: "anniversary",
    title: "Anniversary",
    description: "Celebrate every year of forever",
    image: "https://images.pexels.com/photos/7754232/pexels-photo-7754232.jpeg?auto=compress&cs=tinysrgb&w=1400",
    count: 32,
    shape: "wide",
    tint: "bg-[#DCCDF5]",
  },
  {
    id: "wedding",
    title: "Wedding",
    description: "Heirloom gifts for the big day",
    image: "https://images.pexels.com/photos/4397883/pexels-photo-4397883.jpeg?auto=compress&cs=tinysrgb&w=1200",
    count: 26,
    shape: "square",
    tint: "bg-[#F4E4D4]",
  },
  {
    id: "baby",
    title: "Baby Welcome",
    description: "Soft, warm & little luxuries",
    image: "https://images.pexels.com/photos/426905/pexels-photo-426905.jpeg?auto=compress&cs=tinysrgb&w=1400",
    count: 21,
    shape: "arch",
    tint: "bg-[#B9E4D0]",
  },
  {
    id: "love",
    title: "Love & Couple",
    description: "Whisper sweet little surprises",
    image: "https://images.pexels.com/photos/21956560/pexels-photo-21956560.jpeg?auto=compress&cs=tinysrgb&w=1400",
    count: 37,
    shape: "tall",
    tint: "bg-[#EFA7B5]",
  },
  {
    id: "friendship",
    title: "Friendship",
    description: "Inside jokes, boxed beautifully",
    image: "https://images.pexels.com/photos/17878238/pexels-photo-17878238.jpeg?auto=compress&cs=tinysrgb&w=1400",
    count: 29,
    shape: "wide",
    tint: "bg-[#C7E8F6]",
  },
  {
    id: "corporate",
    title: "Corporate",
    description: "Refined gifting for teams & clients",
    image: "https://images.pexels.com/photos/4397883/pexels-photo-4397883.jpeg?auto=compress&cs=tinysrgb&w=1200",
    count: 18,
    shape: "square",
    tint: "bg-[#F4E4D4]",
  },
  {
    id: "festive",
    title: "Festivals",
    description: "Tradition meets thoughtful modernity",
    image: "https://images.pexels.com/photos/5725882/pexels-photo-5725882.jpeg?auto=compress&cs=tinysrgb&w=1200",
    count: 41,
    shape: "arch",
    tint: "bg-[#C8A96B]/30",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Aarohi Mehta",
    occasion: "Anniversary",
    rating: 5,
    review: "The scrapbook was more beautiful than I imagined. My husband literally cried when he opened it — every photo, every note felt so us.",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
    gift: "https://images.pexels.com/photos/21956560/pexels-photo-21956560.jpeg?auto=compress&cs=tinysrgb&w=1400",
  },
  {
    name: "Rohan & Priya",
    occasion: "Wedding",
    rating: 5,
    review: "Our guests couldn't stop talking about the wedding hampers. The packaging, the personal touch — everything felt like a work of art.",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
    gift: "https://images.pexels.com/photos/4397883/pexels-photo-4397883.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    name: "Kavya Sharma",
    occasion: "Birthday",
    rating: 5,
    review: "Ordered the birthday surprise box for my best friend. She said it was the most thoughtful gift she's ever received. Thank you, Homespun!",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
    gift: "https://images.pexels.com/photos/28769885/pexels-photo-28769885.jpeg?auto=compress&cs=tinysrgb&w=1400",
  },
  {
    name: "Anjali Rao",
    occasion: "Baby Welcome",
    rating: 5,
    review: "The baby welcome basket was so beautifully curated. Soft, thoughtful and exactly what a new mom needs. We'll be ordering again!",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
    gift: "https://images.pexels.com/photos/426905/pexels-photo-426905.jpeg?auto=compress&cs=tinysrgb&w=1400",
  },
  {
    name: "Vikram Joshi",
    occasion: "Corporate",
    rating: 5,
    review: "We ordered 120 hampers for Diwali — every single one was flawless. The team at Homespun made corporate gifting feel personal again.",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
    gift: "https://images.pexels.com/photos/18434553/pexels-photo-18434553.jpeg?auto=compress&cs=tinysrgb&w=1400",
  },
];

export const GALLERY_IMAGES = [
  { src: "https://images.pexels.com/photos/10819195/pexels-photo-10819195.jpeg?auto=compress&cs=tinysrgb&w=1400", caption: "A little box of forever" },
  { src: "https://images.pexels.com/photos/21956560/pexels-photo-21956560.jpeg?auto=compress&cs=tinysrgb&w=1400", caption: "Memories, bound in love" },
  { src: "https://images.pexels.com/photos/28769885/pexels-photo-28769885.jpeg?auto=compress&cs=tinysrgb&w=1400", caption: "Confetti & cocoa" },
  { src: "https://images.pexels.com/photos/426905/pexels-photo-426905.jpeg?auto=compress&cs=tinysrgb&w=1400", caption: "Welcome, little one" },
  { src: "https://images.pexels.com/photos/7754232/pexels-photo-7754232.jpeg?auto=compress&cs=tinysrgb&w=1400", caption: "For the two of you" },
  { src: "https://images.pexels.com/photos/18434553/pexels-photo-18434553.jpeg?auto=compress&cs=tinysrgb&w=1400", caption: "Decadent cocoa dreams" },
  { src: "https://images.pexels.com/photos/17878238/pexels-photo-17878238.jpeg?auto=compress&cs=tinysrgb&w=1400", caption: "Snacks, but make it flowers" },
  { src: "https://images.pexels.com/photos/4397883/pexels-photo-4397883.jpeg?auto=compress&cs=tinysrgb&w=1200", caption: "Champagne & crystal" },
  { src: "https://images.pexels.com/photos/34586911/pexels-photo-34586911.jpeg?auto=compress&cs=tinysrgb&w=1400", caption: "A spa evening in a box" },
  { src: "https://images.pexels.com/photos/4271686/pexels-photo-4271686.jpeg?auto=compress&cs=tinysrgb&w=1000", caption: "Stacked with love" },
  { src: "https://images.pexels.com/photos/4464921/pexels-photo-4464921.jpeg?auto=compress&cs=tinysrgb&w=1000", caption: "Pastel dreams" },
  { src: "https://images.pexels.com/photos/16399983/pexels-photo-16399983.jpeg?auto=compress&cs=tinysrgb&w=1000", caption: "For you, with flowers" },
];

export const BUILDER_ITEMS = [
  { id: "chocolate", name: "Artisan Chocolate", price: 299, emoji: "🍫", cat: "Sweet" },
  { id: "coffee", name: "Single Origin Coffee", price: 349, emoji: "☕", cat: "Beverage" },
  { id: "candle", name: "Soy Candle", price: 399, emoji: "🕯️", cat: "Home" },
  { id: "skincare", name: "Face Mask Set", price: 449, emoji: "🧖", cat: "Self-care" },
  { id: "toy", name: "Plush Soft Toy", price: 499, emoji: "🧸", cat: "Cute" },
  { id: "flower", name: "Dried Flower Jar", price: 349, emoji: "🌸", cat: "Decor" },
  { id: "snack", name: "Cookie Jar", price: 299, emoji: "🍪", cat: "Sweet" },
  { id: "perfume", name: "Mini Perfume", price: 599, emoji: "🌺", cat: "Beauty" },
  { id: "frame", name: "Photo Frame", price: 399, emoji: "🖼️", cat: "Memory" },
  { id: "jewel", name: "Brass Pendant", price: 799, emoji: "💎", cat: "Jewelry" },
  { id: "card", name: "Handwritten Card", price: 149, emoji: "💌", cat: "Note" },
  { id: "decor", name: "Brass Diya", price: 249, emoji: "🪔", cat: "Decor" },
];

export const BUILDER_BOXES = [
  { id: "rose", name: "Rose Pink Box", price: 399, tint: "bg-[#F6C9CF]" },
  { id: "mint", name: "Mint Garden Box", price: 449, tint: "bg-[#B9E4D0]" },
  { id: "lav", name: "Lavender Dream", price: 449, tint: "bg-[#DCCDF5]" },
  { id: "gold", name: "Champagne Gold", price: 599, tint: "bg-[#F4E4D4]" },
];

export const BUDGET_TIERS = [
  { label: "Under ₹499", range: "Sweet little surprises", tint: "bg-[#F6C9CF]", emoji: "🎀" },
  { label: "Under ₹999", range: "Thoughtful & warm", tint: "bg-[#B9E4D0]", emoji: "🌿" },
  { label: "₹1000 – ₹1999", range: "Handcrafted with love", tint: "bg-[#DCCDF5]", emoji: "💌" },
  { label: "₹2000 – ₹3999", range: "Signature hampers", tint: "bg-[#F4E4D4]", emoji: "🎁" },
  { label: "₹4000+", range: "Luxury keepsakes", tint: "bg-[#5B315E] text-[#C8A96B]", emoji: "✨" },
];

export const STICKER_PHRASES = [
  "Made with love",
  "Handcrafted",
  "Personalized",
  "Wrapped in memories",
  "Just for you",
  "Forever yours",
];

export const MARQUEE_ITEMS = [
  "Birthday Gifts",
  "Anniversary Gifts",
  "Baby Welcome",
  "Wedding Gifts",
  "Surprise Hampers",
  "Custom Scrapbooks",
  "Corporate Gifts",
  "Festive Hampers",
];
