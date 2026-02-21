import React from "react";

function Products() {
  const products = [
    { id: 1, name: "Red Party Dress", price: 1999 },
    { id: 2, name: "Blue Casual Dress", price: 1499 },
    { id: 3, name: "Black Designer Dress", price: 2499 },
  ];

  return (
    <div className="container">
      <h1>Our Products</h1>
      <div className="grid">
        {products.map((item) => (
          <div className="card" key={item.id}>
            <h3>{item.name}</h3>
            <p>₹ {item.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;