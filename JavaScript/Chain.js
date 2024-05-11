const products = {
  count: 5000,
  data: [
    { id: 1, name: "Samsung", price: 65000 },
    { id: 2, name: "Apple", price: 165000 }
  ]
}

for (let product of products.data) {
  console.log(product.name);
}

products.data.forEach((product) => {
  console.log(product.price);
})