var categories = {
  "IPA Category": [
    {
      "name": "Goose Island IPA",
      "id": 1
    },
    {
      "name": "Lagunitas IPA",
      "id": 2
    },
    {
      "name": "Sierra Nevada Torpedo Extra IPA",
      "id": 3
    }
  ],
  "Stout Category": [
    {
      "name": "Guinness",
      "id": 1
    },
    {
      "name": "Porter",
      "id": 2
    },
    {
      "name": "Left Hand Milk Stout Nitro",
      "id": 3
    }
  ],
  "Lager Category": [
    {
      "name": "Carlsberg",
      "id": 1
    },
    {
      "name": "Budweiser",
      "id": 2
    },
    {
      "name": "Corona Extra",
      "id": 3
    }
  ]
};

function getCategoryNames() {
  return Object.keys(categories);
}

function getProductsByCategory(category) {
  return categories[category];
}

function createCategory(product) {
  if (!product.category) throw 'Category name is required.';
  categories[product.category] = [];
}

function createProduct(product, category) {
  if (!product.name) throw 'Product name is required.';
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
