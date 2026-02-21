import React from "react";
import { useNavigate } from "react-router-dom";


function Cart({ cart, setCart }) {
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const removeItem = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  return (
    <div className="cart-container">
      <style>{`
        body {
          margin: 0;
          font-family: 'Poppins', sans-serif;
          background: #f8f9fa;
        }

        .cart-container {
          padding: 60px 80px;
          min-height: 100vh;
          background: linear-gradient(135deg, #ffffff, #f1f2f6);
          animation: fadeIn 1s ease;
        }

        .cart-title {
          text-align: center;
          font-size: 38px;
          margin-bottom: 40px;
          position: relative;
        }

        .cart-title::after {
          content: "";
          width: 100px;
          height: 4px;
          background: linear-gradient(to right, #ff4081, #ff758c);
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          border-radius: 10px;
        }

        .cart-grid {
          display: flex;
          flex-direction: column;
          gap: 25px;
        }

        .cart-card {
          display: flex;
          align-items: center;
          background: white;
          border-radius: 20px;
          padding: 20px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.08);
          transition: 0.4s ease;
          animation: slideUp 0.8s ease;
        }

        .cart-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(0,0,0,0.15);
        }

        .cart-card img {
          width: 120px;
          height: 140px;
          object-fit: cover;
          border-radius: 15px;
          margin-right: 25px;
        }

        .cart-details {
          flex: 1;
        }

        .cart-details h3 {
          margin: 0;
          font-size: 20px;
        }

        .cart-price {
          color: #ff4081;
          font-weight: bold;
          margin-top: 8px;
          font-size: 18px;
        }

        .remove-btn {
          padding: 8px 20px;
          border: none;
          border-radius: 25px;
          background: #ff4d4d;
          color: white;
          cursor: pointer;
          transition: 0.3s ease;
        }

        .remove-btn:hover {
          background: #ff1a1a;
          transform: scale(1.05);
        }

        .total-section {
          margin-top: 40px;
          text-align: right;
        }

        .total-section h2 {
          font-size: 26px;
        }

        .checkout-btn {
          margin-top: 15px;
          padding: 12px 35px;
          border: none;
          border-radius: 30px;
          background: linear-gradient(to right, #ff4081, #ff758c);
          color: white;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: 0.4s ease;
        }

        .checkout-btn:hover {
          transform: scale(1.1);
          box-shadow: 0 10px 25px rgba(255, 64, 129, 0.4);
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 768px) {
          .cart-container {
            padding: 40px 20px;
          }

          .cart-card {
            flex-direction: column;
            text-align: center;
          }

          .cart-card img {
            margin-bottom: 15px;
            margin-right: 0;
          }

          .total-section {
            text-align: center;
          }
        }
      `}</style>

      <h1 className="cart-title">Your Shopping Cart 🛒</h1>

      {cart.length === 0 ? (
        <p style={{ textAlign: "center", fontSize: "18px" }}>
          Your cart is empty 😔
        </p>
      ) : (
        <>
          <div className="cart-grid">
            {cart.map((item, index) => (
              <div className="cart-card" key={index}>
                <img src={item.image} alt={item.name} />
                <div className="cart-details">
                  <h3>{item.name}</h3>
                  <p className="cart-price">₹ {item.price}</p>
                </div>
                <button
                  className="remove-btn"
                  onClick={() => removeItem(index)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="total-section">
            <h2>Total: ₹ {total}</h2>
            <button
              className="checkout-btn"
              onClick={() => navigate("/")}
            >
              Continue Shopping
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;