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

function getCategoryNames() {
  return Object.keys(categories);
}

function getProductsByCategory(category) {
  return categories[category];
}

function createCategory(name) {
  if (!name.category) {
    throw 'Category name is required.';
  }
  categories[name.category] = [];
}

function createProduct(product, category) {
  if (!product.name) {
    throw 'Product name is required.';
  }
  product.id = Math.round(Math.random() * 1000);
  categories[category].push(product);
}

function deleteCategory(category) {
  delete categories[category];
}

function deleteProduct(id, category) {
  categories[category] = categories[category].filter(function(product) {
    return product.id !== id;
  });
}

module.exports = {
  getCategoryNames, getProductsByCategory, createCategory, createProduct, deleteCategory, deleteProduct
}


// Data Layer - db.js (~60 loc)
//   - updateProduct
