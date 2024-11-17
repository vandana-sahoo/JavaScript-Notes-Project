//filtering an (array of objects) to display itemws based on a search query (e.g., filtering product by names).

const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 1500 },
    { id: 2, name: "Chair", category: "Furniture", price: 100 },
    { id: 3, name: "Headphones", category: "Electronics", price: 200 },
    { id: 4, name: "Notebook", category: "Stationery", price: 5 },
  ];
  
 let newp = products.filter(function(product){
    return product.category === "Electronics";
  })
  console.log(newp);