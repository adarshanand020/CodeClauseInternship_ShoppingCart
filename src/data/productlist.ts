export const productListData = [
  {
    id: 1,
    name: "Apple",
    description:
      "Fresh and juicy apples, perfect for a healthy snack or a delicious dessert.",
    price: 100,
    image: "/apple.jpg",
    category: "Fruits",
    onsale: false,
    details: {
      nutrition: {
        calories: 95,
        fat: 0.3,
        carbs: 25,
        protein: 0.5,
      },
      origin: "India",
      season: "Year-round",
    },
  },
  {
    id: 2,
    name: "Banana",
    description:
      "Sweet and ripe bananas, ideal for smoothies, baking, or a quick snack.",
    price: 50,
    image: "/banana.jpg",
    category: "Fruits",
    onsale: true,
    details: {
      nutrition: {
        calories: 105,
        fat: 0.4,
        carbs: 27,
        protein: 1.3,
      },
      origin: "India",
      season: "Year-round",
    },
  },
  {
    id: 3,
    name: "Bread",
    description:
      "Freshly baked bread, perfect for sandwiches, toast, or as a side dish.",
    price: 30,
    image: "/bread.jpg",
    category: "Bakery",
    onsale: true,

    details: {
      nutrition: {
        calories: 80,
        fat: 1,
        carbs: 15,
        protein: 3,
      },
      origin: "India",
      season: "Year-round",
    },
  },
  {
    id: 4,
    name: "Milk",
    description:
      "Rich and creamy milk, great for drinking, baking, or making yogurt.",
    price: 40,
    image: "/milk.jpg",
    category: "Dairy",
    onsale: false,
    details: {
      origin: "India",
      season: "Year-round",
    },
  },
  {
    id: 5,
    name: "Eggs",
    description:
      "Farm-fresh eggs, perfect for breakfast, baking, or as a protein source.",
    price: 60,
    image: "/eggs.jpg",
    category: "Dairy",
    onsale: false,
    details: {
      nutrition: {
        calories: 70,
        fat: 5,
        carbs: 1,
        protein: 6,
      },
      origin: "India",
      season: "Year-round",
    },
  },
  {
    id: 6,
    name: "Chicken Breast",
    description:
      "Lean and tender chicken breast, great for grilling, roasting, or stir-frying.",
    price: 200,
    image: "/chicken_breast.jpg",
    category: "Meat",
    onsale: true,
    details: {
      nutrition: {
        calories: 165,
        fat: 3.6,
        carbs: 0,
        protein: 31,
      },
      origin: "India",
      season: "Year-round",
    },
  },
  {
    id: 7,
    name: "Beef Steak",
    description:
      "Juicy and flavorful beef steak, perfect for a special dinner or barbecue.",
    price: 300,
    image: "/beef_steak.jpg",
    category: "Meat",
    onsale: false,
    details: {
      nutrition: {
        calories: 250,
        fat: 15,
        carbs: 0,
        protein: 27,
      },
      origin: "India",
      season: "Year-round",
    },
  },
  {
    id: 8,
    name: "Rice",
    description:
      "High-quality rice, ideal for pilafs, risottos, or as a side dish.",
    price: 50,
    image: "/rice.jpg",
    category: "Grains",
    onsale: true,
    details: {
      nutrition: {
        calories: 200,
        fat: 0.5,
        carbs: 45,
        protein: 5,
      },
      origin: "India",
      season: "Year-round",
    },
  },
  {
    id: 9,
    name: "Pasta",
    description:
      "Delicious pasta, perfect for a quick and easy meal or a gourmet dinner.",
    price: 40,
    image: "/pasta.jpg",
    category: "Grains",
    onsale: false,
    details: {
      nutrition: {
        calories: 200,
        fat: 1,
        carbs: 40,
        protein: 7,
      },
      origin: "India",
      season: "Year-round",
      type: "Spaghetti",
      cooking_time: "10 minutes",
    },
  },
  {
    id: 10,
    name: "Tomato Sauce",
    description:
      "Rich and flavorful tomato sauce, great for pasta, pizza, or as a dipping sauce.",
    price: 30,
    image: "/tomato_sauce.jpg",
    category: "Canned",
    onsale: true,
    details: {
      origin: "India",
      season: "Year-round",

      ingredients: ["Tomatoes", "Onions", "Garlic", "Herbs", "Spices"],
      serving_size: "1/2 cup",
      servings_per_container: 6,
    },
  },
  {
    id: 11,
    name: "Olive Oil",
    description:
      "High-quality olive oil, perfect for cooking, salad dressings, or dipping bread.",
    price: 150,
    image: "/olive_oil.jpg",
    category: "Cooking",
    onsale: false,
    details: {
      origin: "India",
      season: "Year-round",
      type: "Extra Virgin",
      size: "500ml",
    },
  },
  {
    id: 12,
    name: "Cereal",
    description:
      "A delicious and nutritious breakfast option, perfect for busy mornings.",
    price: 100,
    image: "/cereal.jpg",
    category: "Breakfast",
    onsale: true,
    details: {
      nutrition: {
        calories: 120,
        fat: 1,
        carbs: 25,
        protein: 3,
      },
      origin: "India",
      season: "Year-round",
      type: "Oats",
      size: "500g",
    },
  },
  {
    id: 13,
    name: "Coffee",
    description:
      "Rich and aromatic coffee, great for starting your day or as an afternoon pick-me-up.",
    price: 200,
    image: "/coffee.jpg",
    category: "Beverages",
    onsale: false,
    details: {
      origin: "India",
      season: "Year-round",
      type: "Ground",
      roast: "Medium",
      size: "250g",
    },
  },
  {
    id: 14,
    name: "Tea",
    description:
      "A soothing and refreshing tea, perfect for relaxing or enjoying with friends.",
    price: 100,
    image: "/tea.jpg",
    category: "Beverages",
    onsale: true,
  },
  {
    id: 15,
    name: "Orange Juice",
    description:
      "Freshly squeezed orange juice, packed with vitamins and antioxidants.",
    price: 150,
    image: "/orange_juice.jpg",
    category: "Beverages",
    onsale: false,
  },
  {
    id: 16,
    name: "Yogurt",
    description:
      "Creamy and delicious yogurt, great for breakfast or as a snack.",
    price: 50,
    image: "/yogurt.jpg",
    category: "Dairy",
    onsale: true,
  },
  {
    id: 17,
    name: "Butter",
    description:
      "Rich and creamy butter, perfect for baking, cooking, or spreading on toast.",
    price: 70,
    image: "/butter.jpg",
    category: "Dairy",
    onsale: false,
  },
  {
    id: 18,
    name: "Cheese",
    description:
      "A selection of gourmet cheeses, perfect for entertaining or snacking.",
    price: 100,
    image: "/cheese.jpg",
    category: "Dairy",
    onsale: true,
  },
  {
    id: 19,
    name: "Frozen Pizza",
    description:
      "A delicious and convenient meal option, perfect for busy weeknights.",
    price: 200,
    image: "/frozen_pizza.jpg",
    category: "Frozen",
    onsale: false,
  },
  {
    id: 20,
    name: "Ice Cream",
    description:
      "Creamy and indulgent ice cream, great for dessert or a sweet treat.",
    price: 100,
    image: "/ice_cream.jpg",
    category: "Frozen",
    onsale: true,
  },
  {
    id: 21,
    name: "Shampoo",
    description:
      "A high-quality and effective shampoo, perfect for all hair types.",
    price: 150,
    image: "/shampoo.jpg",
    category: "Personal Care",
    onsale: false,
  },
  {
    id: 22,
    name: "Toothpaste",
    description:
      "A refreshing and minty toothpaste, great for maintaining oral hygiene.",
    price: 50,
    image: "/toothpaste.jpg",
    category: "Personal Care",
    onsale: true,
  },
  {
    id: 23,
    name: "Toilet Paper",
    description: "Soft and absorbent toilet paper, perfect for everyday use.",
    price: 100,
    image: "/toilet_paper.jpg",
    category: "Household",
    onsale: false,
  },
  {
    id: 24,
    name: "Soap",
    description:
      "A gentle and moisturizing soap, great for cleansing and refreshing the skin.",
    price: 50,
    image: "/soap.jpg",
    category: "Personal Care",
    onsale: true,
  },
  {
    id: 25,
    name: "Hand Sanitizer",
    description:
      "An essential item for on-the-go hygiene, perfect for travel or daily use.",
    price: 100,
    image: "/hand_sanitizer.jpg",
    category: "Personal Care",
    onsale: false,
  },
  {
    id: 26,
    name: "Shaving Cream",
    description:
      "A rich and creamy shaving cream, great for a smooth and comfortable shave.",
    price: 150,
    image: "/shaving_cream.jpg",
    category: "Personal Care",
    onsale: true,
  },
  {
    id: 27,
    name: "Body Lotion",
    description:
      "A nourishing and hydrating body lotion, perfect for soft and supple skin.",
    price: 100,
    image: "/body_lotion.jpg",
    category: "Personal Care",
    onsale: false,
  },
  {
    id: 28,
    name: "Deodorant",
    description:
      "A long-lasting and effective deodorant, great for all-day freshness.",
    price: 50,
    image: "/deodorant.jpg",
    category: "Personal Care",
    onsale: true,
  },
  {
    id: 29,
    name: "Facial Cleanser",
    description:
      "A gentle and clarifying facial cleanser, perfect for daily skincare routines.",
    price: 100,
    image: "/facial_cleanser.jpg",
    category: "Personal Care",
    onsale: false,
  },
  {
    id: 30,
    name: "Makeup Remover",
    description:
      "An effective and gentle makeup remover, great for removing all traces of makeup without irritation.",
    price: 150,
    image: "/makeup_remover.jpg",
    category: "Personal Care",
    onsale: true,
  },
  {
    id: 31,
    name: "Laundry Detergent",
    description:
      "A powerful and effective laundry detergent, perfect for all your washing needs.",
    price: 200,
    image: "/laundry_detergent.jpg",
    category: "Household",
    onsale: false,
  },
  {
    id: 32,
    name: "Dish Soap",
    description:
      "A tough and grease-fighting dish soap, great for sparkling clean dishes every time.",
    price: 50,
    image: "/dish_soap.jpg",
    category: "Household",
    onsale: true,
  },
  {
    id: 33,
    name: "Cleaning Wipes",
    description:
      "Convenient and effective cleaning wipes, perfect for quick and easy cleanups.",
    price: 100,
    image: "/cleaning_wipes.jpg",
    category: "Household",
    onsale: false,
  },
  {
    id: 34,
    name: "Paper Towels",
    description:
      "Strong and absorbent paper towels, great for spills, messes, and everyday cleaning.",
    price: 50,
    image: "/paper_towels.jpg",
    category: "Household",
    onsale: true,
  },
  {
    id: 35,
    name: "Trash Bags",
    description:
      "Durable and reliable trash bags, perfect for all your waste disposal needs.",
    price: 100,
    image: "/trash_bags.jpg",
    category: "Household",
    onsale: false,
  },
  {
    id: 36,
    name: "Light Bulbs",
    description:
      "Bright and energy-efficient light bulbs, great for illuminating any space.",
    price: 50,
    image: "/light_bulbs.jpg",
    category: "Household",
    onsale: true,
  },
  {
    id: 37,
    name: "Batteries",
    description:
      "Long-lasting and reliable batteries, perfect for powering all your devices.",
    price: 100,
    image: "/batteries.jpg",
    category: "Household",
    onsale: false,
  },
  {
    id: 38,
    name: "Extension Cord",
    description:
      "A versatile and durable extension cord, great for all your electrical needs.",
    price: 50,
    image: "/extension_cord.jpg",
    category: "Household",
    onsale: true,
  },
  {
    id: 39,
    name: "Phone Charger",
    description:
      "A high-quality and fast-charging phone charger, perfect for all your devices.",
    price: 100,
    image: "/phone_charger.jpg",
    category: "Electronics",
    onsale: false,
  },
  {
    id: 40,
    name: "Headphones",
    description:
      "Premium headphones with superior sound quality and comfort for all-day wear.",
    price: 150,
    image: "/headphones.jpg",
    category: "Electronics",
    onsale: true,
  },
  {
    id: 41,
    name: "Bluetooth Speaker",
    description:
      "A portable and powerful Bluetooth speaker, perfect for music on the go.",
    price: 200,
    image: "/bluetooth_speaker.jpg",
    category: "Electronics",
    onsale: false,
  },
  {
    id: 42,
    name: "Laptop",
    description:
      "A sleek and powerful laptop, great for work, entertainment, or creative projects.",
    price: 500,
    image: "/laptop.jpg",
    category: "Electronics",
    onsale: true,
  },
  {
    id: 43,
    name: "Smartphone",
    description:
      "The latest smartphone with cutting-edge features and technology.",
    price: 300,
    image: "/smartphone.jpg",
    category: "Electronics",
    onsale: false,
  },
  {
    id: 44,
    name: "Tablet",
    description:
      "A versatile and portable tablet, perfect for work, play, or staying connected.",
    price: 200,
    image: "/tablet.jpg",
    category: "Electronics",
    onsale: true,
  },
  {
    id: 45,
    name: "USB Flash Drive",
    description:
      "A compact and reliable USB flash drive, great for storing and transferring files.",
    price: 50,
    image: "/usb_flash_drive.jpg",
    category: "Electronics",
    onsale: false,
  },
  {
    id: 46,
    name: "External Hard Drive",
    description:
      "A high-capacity external hard drive, perfect for backing up and storing data.",
    price: 100,
    image: "/external_hard_drive.jpg",
    category: "Electronics",
    onsale: true,
  },
  {
    id: 47,
    name: "Keyboard",
    description:
      "A durable and responsive keyboard, ideal for typing, gaming, or programming.",
    price: 50,
    image: "/keyboard.jpg",
    category: "Electronics",
    onsale: false,
  },
  {
    id: 48,
    name: "Mouse",
    description:
      "An ergonomic and precise mouse, great for work, gaming, or everyday use.",
    price: 30,
    image: "/mouse.jpg",
    category: "Electronics",
    onsale: true,
  },
  {
    id: 49,
    name: "Monitor",
    description:
      "A high-resolution monitor with vibrant colors and sharp details for an immersive viewing experience.",
    price: 200,
    image: "/monitor.jpg",
    category: "Electronics",
    onsale: false,
  },
  {
    id: 50,
    name: "HDMI Cable",
    description:
      "A high-speed HDMI cable for crystal-clear audio and video transmission between devices.",
    price: 50,
    image: "/hdmi_cable.jpg",
    category: "Electronics",
    onsale: true,
  },
];
