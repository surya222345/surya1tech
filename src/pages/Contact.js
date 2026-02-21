import React, { useState } from "react";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-container">
      <style>{`
        body {
          margin: 0;
          font-family: 'Poppins', sans-serif;
          background: linear-gradient(135deg, #fdfbfb, #ebedee);
        }

        .contact-container {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 40px 20px;
        }

        .contact-box {
          background: white;
          padding: 40px;
          border-radius: 20px;
          box-shadow: 0 15px 40px rgba(0,0,0,0.1);
          width: 100%;
          max-width: 500px;
          animation: fadeIn 0.8s ease-in-out;
        }

        .contact-box h2 {
          text-align: center;
          margin-bottom: 30px;
          color: #ff4081;
        }

        .input-group {
          margin-bottom: 20px;
        }

        .input-group input,
        .input-group textarea {
          width: 100%;
          padding: 12px 15px;
          border-radius: 10px;
          border: 2px solid #eee;
          outline: none;
          transition: 0.3s ease;
          font-size: 15px;
        }

        .input-group input:focus,
        .input-group textarea:focus {
          border-color: #ff4081;
          box-shadow: 0 0 10px rgba(255,64,129,0.2);
        }

        textarea {
          resize: none;
          height: 120px;
        }

        .submit-btn {
          width: 100%;
          padding: 14px;
          border: none;
          border-radius: 30px;
          background: linear-gradient(to right, #ff4081, #ff758c);
          color: white;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: 0.3s ease;
        }

        .submit-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 10px 25px rgba(255,64,129,0.4);
        }

        .success-msg {
          text-align: center;
          color: green;
          margin-top: 15px;
          font-weight: 500;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 600px) {
          .contact-box {
            padding: 25px;
          }
        }
      `}</style>

      <div className="contact-box">
        <h2>Contact Us 💌</h2>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input type="text" placeholder="Your Name" required />
          </div>

          <div className="input-group">
            <input type="email" placeholder="Your Email" required />
          </div>

          <div className="input-group">
            <textarea placeholder="Your Message" required />
          </div>

          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>

        {submitted && (
          <div className="success-msg">
            ✅ Thank you! We will contact you soon.
          </div>
        )}
      </div>
    </div>
  );
}

export default Contact;