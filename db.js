var categories = {
  "Foo Category": [
    {
      "name": "foo 1",
      "id": 1
    },
    {
      "name": "foo 2",
      "id": 2
    }
  ],
  "Bar Category": [
    {
      "name": "bar 1",
      "id": 1
    },
    {
      "name": "bar 2",
      "id": 2
    }
  ],
  "Buzz Category": [
    {
      "name": "buz 1",
      "id": 1
    },
    {
      "name": "buz 2",
      "id": 2
    }
  ]
};

module.exports = {
  getCategoryNames: function() {
    return Object.keys(categories);
  }
}


// Data Layer - db.js (~60 loc)
// - store data in an object literal
// - export
//   - getCategoryNames -- DONE
//   - getProductsByCategory
//   - createProduct
//   - deleteProduct
//   - updateProduct
//   - deleteCategory
//   - createCategory
