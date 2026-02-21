import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar({ cartCount }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        .navbar {
          position: sticky;
          top: 0;
          width: 100%;
          padding: 15px 40px;
          background: linear-gradient(90deg, #ff4081, #ff758c);
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: white;
          z-index: 1000;
          box-shadow: 0 4px 15px rgba(0,0,0,0.15);
        }

        .logo {
          font-size: 22px;
          font-weight: bold;
          letter-spacing: 1px;
          animation: fadeIn 1s ease-in-out;
        }

        .nav-links {
          display: flex;
          gap: 30px;
          align-items: center;
          transition: all 0.3s ease;
        }

        .nav-links a {
          text-decoration: none;
          color: white;
          font-weight: 500;
          position: relative;
          transition: 0.3s ease;
        }

        .nav-links a::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -5px;
          width: 0%;
          height: 2px;
          background: white;
          transition: 0.3s;
        }

        .nav-links a:hover::after {
          width: 100%;
        }

        .cart-badge {
          background: white;
          color: #ff4081;
          padding: 4px 10px;
          border-radius: 20px;
          font-size: 14px;
          font-weight: bold;
          margin-left: 5px;
          animation: bounce 0.6s ease;
        }

        .menu-icon {
          display: none;
          font-size: 28px;
          cursor: pointer;
        }

        /* Mobile */
        @media (max-width: 768px) {
          .nav-links {
            position: absolute;
            top: 70px;
            right: 0;
            background: #ff4081;
            width: 200px;
            flex-direction: column;
            padding: 20px;
            gap: 20px;
            transform: translateX(${menuOpen ? "0" : "100%"});
          }

          .menu-icon {
            display: block;
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes bounce {
          0% { transform: scale(1); }
          50% { transform: scale(1.3); }
          100% { transform: scale(1); }
        }
      `}</style>

      <nav className="navbar">
        <div className="logo">👗Fashion</div>

        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

        <div className="nav-links">
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/shop" onClick={() => setMenuOpen(false)}>Shop</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/cart" onClick={() => setMenuOpen(false)}>
            Cart <span className="cart-badge">{cartCount}</span>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;