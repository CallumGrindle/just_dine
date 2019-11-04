use just_dine;
db.dropDatabase();

db.restaurants.insertMany([
  {
    name: "Callum's Carrots",
    location: "Glasgow",
    cuisine: "Vegan",
    priceRange: "££££"
  },

  {
    name: "Pammy's",
    location: "Inverness",
    cuisine: "Traditional Scottish",
    priceRange: "£££"
  },

  {
    name: "Steakhouse Mike's",
    location: "Elgin",
    cuisine: "Surf and Turf",
    priceRange: "££££"
  },

  {
    name: "The Atherton Arms",
    location: "Dunfermline",
    cuisine: "Family friendly",
    priceRange: "££"
  },
]);

db.fav_restaurants.insertMany([
  {
    name: "Callum's Carrots",
    location: "Glasgow",
    cuisine: "Vegan",
    priceRange: "££££"
  },

  {
    name: "Pammy's",
    location: "Inverness",
    cuisine: "Traditional Scottish",
    priceRange: "£££"
  }
]);
