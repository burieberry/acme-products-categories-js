var categories = {
  "Foo Category": [
    {
      "name": "Foo 1",
      "id": 1
    },
    {
      "name": "Foo 2",
      "id": 2
    }
  ],
  "Bar Category": [
    {
      "name": "Bar 1",
      "id": 1
    },
    {
      "name": "Bar 2",
      "id": 2
    }
  ],
  "Buzz Category": [
    {
      "name": "Buzz 1",
      "id": 1
    },
    {
      "name": "Buzz 2",
      "id": 2
    }
  ]
};

module.exports = {
  getCategoryNames: function() {
    return Object.keys(categories);
  },
  getProductsByCategory: function(category) {
    return categories[category];
  }
}


// Data Layer - db.js (~60 loc)
// - store data in an object literal -- DONE
// - export
//   - getCategoryNames -- DONE
//   - getProductsByCategory -- DONE
//   - createProduct
//   - deleteProduct
//   - updateProduct
//   - deleteCategory
//   - createCategory
