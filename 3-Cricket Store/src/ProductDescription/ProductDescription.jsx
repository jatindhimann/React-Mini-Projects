import { useState } from 'react';

const CricketBatProduct = () => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (operation) => {
    if (operation === '+') {
      setQuantity((prevQuantity) => prevQuantity + 1);
    } else if (operation === '-' && quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <div className="product-description-section">
      <h2 className="product-title">
        SG klr Xtreme English Willow Short Handle Cricket bat
      </h2>
      <p className="product-brand">Short Handle Cricket bat , Brand: SG</p>
      <div className="product-rating">
        <span>&#9733;&#9733;&#9733;&#9733;&#9733;</span>
        <span> | 2 Ratings</span>
      </div>
      <p className="product-price">
        <span className="discounted-price">₹14,950</span>
        <span className="original-price">₹23,000</span>
        <span className="in-stock">In Stock</span>
      </p>
      <p className="product-savings">You save: ₹8,050 (35%)</p>
      <p className="product-tax">
        <span className="tax-text">Inclusive of all taxes</span>
        <span className="tax-underline"></span>
      </p>

      <h3 className="section-heading">Description</h3>
      <p className="product-description">
        Superb Quality Grip made for maximum stability while playing shots
        Custom-made to meet international players requirement In-box Contents: 1
        World's finest & rare top grade English willow
      </p>

      <div className="quantity-controls">
        <button onClick={() => handleQuantityChange('-')}>-</button>
        <span>{quantity}</span>
        <button onClick={() => handleQuantityChange('+')}>+</button>
      </div>
      <button className="add-to-cart-button">ADD TO CART</button>

      <h3 className="section-heading">Offers and Discounts</h3>
      <div className="offers-container">
        <span>No Cost EMI on Credit Card</span>
        <span>Pay Later & Avail Cashback</span>
      </div>
    </div>
  )
};

export default CricketBatProduct;