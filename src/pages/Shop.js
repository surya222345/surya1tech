import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Shop({ cart, setCart }) {
  const navigate = useNavigate();
  const [selectedProducts, setSelectedProducts] = useState([]);

  const products = [
    {
      id: 1,
      name: "Red Party Dress",
      price: 1999,
      image:
        "https://images.unsplash.com/photo-1520975922284-9e0f6d8a6d05?auto=format&fit=crop&w=800&q=100",
    },
    {
      id: 2,
      name: "Summer Floral Dress",
      price: 1499,
      image:
        "https://images.unsplash.com/photo-1495121605193-b116b5b09a6b?auto=format&fit=crop&w=800&q=100",
    },
    {
      id: 3,
      name: "Black Elegant Dress",
      price: 2499,
      image:
        "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=100",
    },
    {
      id: 4,
      name: "Casual Pink Dress",
      price: 1799,
      image:
        "https://images.unsplash.com/photo-1520975918318-5d9a0f2b3a8c?auto=format&fit=crop&w=800&q=100",
    },
  ];

  const toggleSelect = (product) => {
    const exists = selectedProducts.find((p) => p.id === product.id);

    if (exists) {
      // remove if already selected
      setSelectedProducts(
        selectedProducts.filter((p) => p.id !== product.id)
      );
    } else {
      // add if not selected
      setSelectedProducts([...selectedProducts, product]);
    }
  };

  const handleSubmit = () => {
    if (selectedProducts.length === 0) {
      alert("Please select at least one dress 👗");
      return;
    }

    setCart([...cart, ...selectedProducts]);
    navigate("/cart");
  };

  return (
    <div className="shop-container">
      <style>{`
        body {
          margin: 0;
          font-family: 'Poppins', sans-serif;
          background: linear-gradient(135deg, #fdfbfb, #ebedee);
        }

        .shop-container {
          padding: 60px 80px;
          min-height: 100vh;
        }

        .title {
          text-align: center;
          font-size: 40px;
          margin-bottom: 50px;
        }

        .product-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 40px;
        }

        .product-card {
          background: white;
          border-radius: 20px;
          padding: 20px;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0,0,0,0.08);
          cursor: pointer;
          transition: 0.4s ease;
          border: 3px solid transparent;
        }

        .product-card:hover {
          transform: translateY(-10px);
        }

        .product-card.selected {
          border: 3px solid #ff4081;
          box-shadow: 0 15px 35px rgba(255,64,129,0.3);
        }

        .product-card img {
          width: 100%;
          height: 260px;
          object-fit: cover;
          border-radius: 15px;
        }

        .price {
          color: #ff4081;
          font-weight: bold;
          margin: 10px 0;
        }

        .submit-btn {
          display: block;
          margin: 50px auto 0;
          padding: 14px 40px;
          border: none;
          border-radius: 30px;
          background: linear-gradient(to right, #ff4081, #ff758c);
          color: white;
          font-size: 18px;
          font-weight: 600;
          cursor: pointer;
          transition: 0.3s ease;
        }

        .submit-btn:hover {
          transform: scale(1.08);
          box-shadow: 0 10px 25px rgba(255,64,129,0.4);
        }

        @media (max-width: 768px) {
          .shop-container {
            padding: 30px 20px;
          }
        }
      `}</style>

      <h1 className="title">Select Your Dresses</h1>

      <div className="product-grid">
        {products.map((item) => (
          <div
            key={item.id}
            className={`product-card ${
              selectedProducts.find((p) => p.id === item.id)
                ? "selected"
                : ""
            }`}
            onClick={() => toggleSelect(item)}
          >
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p className="price">₹ {item.price}</p>
          </div>
        ))}
      </div>

      <button className="submit-btn" onClick={handleSubmit}>
        Add Selected Dresses To Cart 🛒
      </button>
    </div>
  );
}

export default Shop;