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

// var deleteCategory = function() {

// }

module.exports = {
  getCategoryNames: function() {
    return Object.keys(categories);
  },
  getProductsByCategory: function(category) {
    return categories[category];
  },
  createProduct: function(product, category) {
    product.id = Math.round(Math.random() * 1000);
    categories[category].push(product);
  },
  createCategory: function(query) {
    categories[query.category] = [];
  }
  // deleteCategory
}


// Data Layer - db.js (~60 loc)
// - store data in an object literal -- DONE
// - export
//   - getCategoryNames -- DONE
//   - getProductsByCategory -- DONE
//   - createProduct -- DONE
//   - deleteProduct
//   - updateProduct
//   - deleteCategory
//   - createCategory -- DONE
