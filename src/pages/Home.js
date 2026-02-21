import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="hero">
      <style>{`
        body {
          margin: 0;
          font-family: 'Poppins', sans-serif;
        }

        .hero {
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          color: white;
          background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
            url("https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1500&q=80");
          background-size: cover;
          background-position: center;
          position: relative;
          overflow: hidden;
        }

        /* Floating circle animation */
        .hero::before {
          content: "";
          position: absolute;
          width: 400px;
          height: 400px;
          background: rgba(255, 64, 129, 0.3);
          border-radius: 50%;
          top: -100px;
          right: -100px;
          animation: float 6s infinite ease-in-out;
        }

        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(30px); }
          100% { transform: translateY(0px); }
        }

        .hero h1 {
          font-size: 55px;
          margin-bottom: 20px;
          animation: fadeDown 1.2s ease;
        }

        .hero p {
          font-size: 22px;
          margin-bottom: 30px;
          animation: fadeUp 1.2s ease;
        }

        @keyframes fadeDown {
          from { opacity: 0; transform: translateY(-40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .hero button {
          padding: 12px 35px;
          font-size: 18px;
          border: none;
          border-radius: 30px;
          cursor: pointer;
          font-weight: bold;
          background: linear-gradient(to right, #ff4081, #ff758c);
          color: white;
          transition: 0.3s ease;
          animation: fadeUp 1.5s ease;
        }

        .hero button:hover {
          transform: scale(1.08);
          background: black;
          box-shadow: 0 10px 25px rgba(0,0,0,0.4);
        }

        /* Responsive */
        @media (max-width: 768px) {
          .hero h1 {
            font-size: 35px;
          }

          .hero p {
            font-size: 18px;
          }
        }
      `}</style>

      <h1>New Collection 2026</h1>
      <p>Trendy & Stylish Dresses</p>
      <button onClick={() => navigate("/shop")}>
        Shop Now
      </button>
    </div>
  );
}

export default Home;