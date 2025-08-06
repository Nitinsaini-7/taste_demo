export const getProducts = async () => {
  return [
    {
      id: 1,
      name: "Chocolate Truffle Cake",
      category: "cakes",
      price: 899,
      image:
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400",
      rating: 4.8,
      description:
        "Rich, decadent chocolate cake layered with smooth truffle cream and topped with chocolate ganache.",
      ingredients: [
        "Dark Chocolate",
        "Fresh Cream",
        "Butter",
        "Eggs",
        "Vanilla",
        "Sugar",
      ],
      sizes: ["Half Kg", "1 Kg", "2 Kg"],
      eggless: false,
      featured: true,
    },
    {
      id: 2,
      name: "Red Velvet Cupcakes",
      category: "cakes",
      price: 299,
      image:
        "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?w=400",
      rating: 4.6,
      description:
        "Classic red velvet cupcakes with cream cheese frosting, perfect for any celebration.",
      ingredients: [
        "Flour",
        "Cocoa Powder",
        "Cream Cheese",
        "Butter",
        "Food Coloring",
      ],
      sizes: ["6 Pack", "12 Pack"],
      eggless: true,
      featured: false,
    },
    {
      id: 3,
      name: "Almond Croissants",
      category: "pastries",
      price: 149,
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400",
      rating: 4.7,
      description:
        "Buttery, flaky croissants filled with sweet almond cream and topped with sliced almonds.",
      ingredients: ["Butter", "Flour", "Almonds", "Sugar", "Cream", "Yeast"],
      sizes: ["Single", "Pack of 4"],
      eggless: false,
      featured: true,
    },
    {
      id: 4,
      name: "Chocolate Chip Cookies",
      category: "cookies",
      price: 199,
      image:
        "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400",
      rating: 4.9,
      description:
        "Soft, chewy cookies loaded with premium chocolate chips. Made fresh daily.",
      ingredients: [
        "Flour",
        "Chocolate Chips",
        "Butter",
        "Brown Sugar",
        "Vanilla",
      ],
      sizes: ["6 Pack", "12 Pack", "24 Pack"],
      eggless: true,
      featured: true,
    },
    {
      id: 5,
      name: "Strawberry Cheesecake",
      category: "cakes",
      price: 799,
      image:
        "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400",
      rating: 4.5,
      description:
        "Creamy New York style cheesecake topped with fresh strawberry compote.",
      ingredients: [
        "Cream Cheese",
        "Fresh Strawberries",
        "Graham Crackers",
        "Sugar",
        "Eggs",
      ],
      sizes: ["Half Kg", "1 Kg"],
      eggless: false,
      featured: false,
    },
    {
      id: 6,
      name: "Danish Pastries",
      category: "pastries",
      price: 179,
      image:
        "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400",
      rating: 4.4,
      description:
        "Traditional Danish pastries with various fillings including apple, cheese, and chocolate.",
      ingredients: ["Puff Pastry", "Apples", "Cheese", "Chocolate", "Butter"],
      sizes: ["Single", "Pack of 6"],
      eggless: false,
      featured: false,
    },
  ];
};
